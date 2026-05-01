export const galleryData = async () => {
  const response = await fetch(
    "https://spine-online-book-borrowing-platform-72oaumzz8.vercel.app/bookData.json",
  );
  const booksData = await response.json();
  return booksData;
};

export const categoryData = async () => {
  const categoriesResponse = await fetch(
    "https://spine-online-book-borrowing-platform-72oaumzz8.vercel.app/bookCategory.json",
  );
  return await categoriesResponse.json();
};
