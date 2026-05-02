import { promises as fs } from "node:fs";
import path from "node:path";

const readPublicJson = async (fileName) => {
  const filePath = path.join(process.cwd(), "public", fileName);
  const fileContent = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContent);
};

export const galleryData = async () => {
  return await readPublicJson("bookData.json");
};

export const categoryData = async () => {
  return await readPublicJson("bookCategory.json");
};
