export const galleryData = async () => {
  const response = await fetch(
    "https://spinebookborrowing.vercel.app/bookData.json",
  );
  const booksData = await response.json();
  return booksData;
};

export const categoryData = async () => {
  const categoriesResponse = await fetch(
    "https://spinebookborrowing.vercel.app/bookCategory.json",
  );
  return await categoriesResponse.json();
};
