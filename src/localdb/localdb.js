export const galleryData = async () => {
  const response = await fetch("http://localhost:3000//bookData.json");
  const booksData = await response.json();
  return booksData;
};

export const categoryData = async () => {
  const categoriesResponse = await fetch(
    "http://localhost:3000//bookCategory.json",
  );
  return await categoriesResponse.json();
};
