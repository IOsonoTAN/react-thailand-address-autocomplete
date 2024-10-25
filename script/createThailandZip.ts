import fs from "fs/promises";
import JSZip from "jszip";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createThailandZip(): Promise<void> {
  const zip = new JSZip();

  const jsonPath: string = path.join(
    __dirname,
    "..",
    "src",
    "database",
    "thailand.json"
  );
  const jsonContent: string = await fs.readFile(jsonPath, "utf8");

  zip.file("thailand.json", jsonContent);

  const zipContent: Buffer = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 9 },
  });

  const zipPath: string = path.join(
    __dirname,
    "..",
    "src",
    "database",
    "thailand.zip"
  );
  await fs.writeFile(zipPath, zipContent);

  console.log("thailand.zip created successfully");
}

createThailandZip().catch(console.error);
