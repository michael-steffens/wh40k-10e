import { mkdir, opendir, readFile, writeFile } from "node:fs/promises";
import { type Dirent } from "fs";
import { parseXML } from "./schema/index";

async function readFilesInFolder({ inputPath }: { inputPath: string }) {
  let dirData: Dirent[] = [];
  try {
    const files = await opendir(inputPath);
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
  outputDir,
}: {
  file: Dirent;
  outputDir: string;
}) {
  if (file.isFile()) {
    const fileContent = await readFile(file.path + "/" + file.name, "utf8");

    const fileWithoutExtension = file.name.split(".")[0];

    try {
      const jsonData = parseXML(fileContent, false);

      const test = jsonData.type;
      console.log(test);

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
  const sourceDir = "./data";
  const outputDir = "./out";

  const files = await readFilesInFolder({ inputPath: sourceDir });

  // if the output directory does not exist, create it
  try {
    const dir = await opendir(outputDir);
    await dir.close();
  } catch (err) {
    console.log("Creating output directory");
    await mkdir(outputDir);
  }

  if (!files) {
    console.log("No files found in the folder");
    return;
  }

  for (const file of files) {
    parseFiles({ file, outputDir: outputDir });
  }
}

main();
