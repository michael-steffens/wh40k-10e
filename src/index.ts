import { XMLParser } from "fast-xml-parser";
import { opendir, readFile, writeFile } from "fs/promises";
import { type Dirent } from "fs";

const sourcePath = "./data";

async function readFilesInFolder({ path }: { path: string }) {
  let dirData: Dirent[] = [];

  try {
    const files = await opendir(path);
    for await (const file of files) {
      dirData.push(file);
    }
    return dirData;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function parseFiles({
  file,
  parser,
  outputDir,
}: {
  file: Dirent;
  parser: XMLParser;
  outputDir: string;
}) {
  if (file.isFile()) {
    const fileContent = await readFile(file.path, "utf8");
    const fileWithoutExtension = file.name.split(".")[0];
    try {
      const jsonData = parser.parse(fileContent);
      await writeFile(
        `${outputDir}/${fileWithoutExtension}.json`,
        JSON.stringify(jsonData),
        "utf8"
      );
    } catch (err) {
      console.log(err);
      console.log("Error parsing File: ", file.name);
    }
  }
}

async function main() {
  const files = await readFilesInFolder({ path: sourcePath });
  const parser = new XMLParser({
    removeNSPrefix: true,
    ignoreAttributes: false,
    attributeNamePrefix: "",
  });

  if (!files) {
    console.log("No files found in the folder");
    return;
  }

  for (const file of files) {
    parseFiles({ file, parser, outputDir: "./out" });
  }
}

main();
