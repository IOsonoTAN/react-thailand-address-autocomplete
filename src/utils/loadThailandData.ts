import JSZip from "jszip";
import { ThailandData } from "../components/ThailandSearch";

let cachedData: ThailandData[] | undefined = undefined;

export async function loadThailandData() {
  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch("/src/database/thailand.zip");
    const zipData = await response.arrayBuffer();
    const zip = new JSZip();
    const unzipped = await zip.loadAsync(zipData);
    const jsonContent = await unzipped.file("thailand.json")?.async("string");
    if (jsonContent) {
      cachedData = JSON.parse(jsonContent);
      return cachedData;
    }
  } catch (error) {
    console.error("Error loading Thailand data:", error);
    throw error;
  }
}
