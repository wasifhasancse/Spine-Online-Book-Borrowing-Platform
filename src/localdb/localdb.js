import { promises as fs } from "node:fs";
import path from "node:path";

const readPublicJson = async (fileName) => {
  const filePath = path.join(process.cwd(), "public", fileName);
  const fileContent = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContent);
};
export const galleryData = async () => {
  // const response = await fetch(
  //   "https://spine-online-book-borrowing-platform-72oaumzz8.vercel.app/bookData.json",
  // );
  // const booksData = await response.json();
  // return booksData;
  return await readPublicJson("bookData.json");
};

export const categoryData = async () => {
  // const categoriesResponse = await fetch(
  //   "https://spine-online-book-borrowing-platform-72oaumzz8.vercel.app/bookCategory.json",
  // );
  // return await categoriesResponse.json();
  return await readPublicJson("bookCategory.json");
};
