import fxparser from "fast-xml-parser";
import Ajv2019 from "ajv";

import catalogueSchema from "./catalogue.schema.json";
import gameSystemSchema from "./gameSystem.schema.json";
import sharedSchema from "./shared.schema.json";
import containerTags from "./containerTags.json";

const ajv = new Ajv2019({
  allErrors: true,
  allowUnionTypes: true,
  coerceTypes: true,
});
ajv.addSchema(sharedSchema, "shared.schema.json");
ajv.addSchema(gameSystemSchema, "gameSystem.schema.json");
ajv.addSchema(catalogueSchema, "catalogue.schema.json");

import { type BSDCatalogue } from "./catalogue";
import { type BSDGameSystem } from "./gameSystem";

export const validateCatalogue = (catalogue: any) => {
  const validate = ajv.getSchema("catalogue.schema.json");
  if (!validate?.(catalogue)) {
    return validate?.errors;
  }
  return null;
};

export const validateGameSystem = (gameSystem: any) => {
  const validate = ajv.getSchema("gameSystem.schema.json");
  if (!validate?.(gameSystem)) {
    return validate?.errors;
  }
  return null;
};

const escapedHtml = /&(?:amp|lt|gt|quot|#39|apos);/g;
const htmlUnescapes: { [key: string]: string } = {
  "&amp;": "&",
  "&apos;": "'",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};

const unescape = (string: string) =>
  escapedHtml.test(string)
    ? string.replace(
        escapedHtml,
        (match: string | number) => htmlUnescapes[match]
      )
    : string;

const parser = new fxparser.XMLParser({
  allowBooleanAttributes: true,
  attributeNamePrefix: "",
  ignoreAttributes: false,
  ignoreDeclaration: true,
  parseAttributeValue: true,
  parseTagValue: false,
  processEntities: false,
  trimValues: false,
  attributeValueProcessor: (_name, val) => unescape(val),
  tagValueProcessor: (_name, val) => unescape(val),
  isArray: (_name: string, jpath: string): boolean => {
    const pieces: string[] = jpath.split(".");

    const last = pieces.pop();
    const secondLast = pieces.pop();

    // Use match for the case of 'sharedSelectionEntries.selectionEntry'
    if (secondLast) {
      return containerTags[secondLast as keyof typeof containerTags] === last;
    }
    return false;
  },
});

type normalizer = {
  [attr: string]: unknown;
  import: unknown;
};

function normalize(x: normalizer) {
  delete x.import;

  for (let attr in x) {
    if (x[attr] === "") {
      delete x[attr];
    } else if (
      containerTags[attr as keyof typeof containerTags] &&
      (x[attr] as normalizer)[containerTags[attr as keyof typeof containerTags]]
    ) {
      x[attr] = (x[attr] as normalizer)[
        containerTags[attr as keyof typeof containerTags]
      ];
      (x[attr] as normalizer[]).forEach(normalize); // Added type assertion
    }
  }
}

export const parseXML = (xmlString: string, validate: boolean = true) => {
  let data = parser.parse(xmlString);

  if (data.catalogue) {
    const catalogue = {
      type: "catalogue",
      ...data.catalogue,
    };
    delete catalogue.xmlns;

    normalize(catalogue);
    if (validate) {
      const errors = validateCatalogue(catalogue);
      if (errors) {
        const errorObject = { catalogue: catalogue, ...errors };
        throw errorObject;
      }
    }
    return catalogue as BSDCatalogue;
  } else if (data.gameSystem) {
    const gameSystem = {
      type: "gameSystem",
      ...data.gameSystem,
    };
    delete gameSystem.xmlns;

    normalize(gameSystem);
    if (validate) {
      const errors = validateGameSystem(gameSystem);
      if (errors) {
        const errorObject = {
          gameSystem: gameSystem,
          ...errors,
        };
        throw errorObject;
      }
    }
    return gameSystem as BSDGameSystem;
  } else if (data.roster) {
    return data.roster as BSDCatalogue;
  } else {
    throw new Error(
      "xml did not contain a <catalogue> or <gameSystem> element at the top level."
    );
  }
};

export const parseJSON = (jsonString: string) => {
  const data = JSON.parse(jsonString);

  if (data.type === "catalogue") {
    validateCatalogue(data);
  } else if (data.type === "gameSystem") {
    validateGameSystem(data);
  } else {
    throw new Error(
      `data does not have a valid "type" at the top level. Type was "${data.type}", must be one of "catalogue" or "gameSystem".`
    );
  }

  return data;
};
