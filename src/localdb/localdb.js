export const galleryData = async () => {
  const response = await fetch(
    "https://spine-online-book-borrowing-pl-git-b513cd-wasif-hasans-projects.vercel.app/bookData.json",
  );
  const booksData = await response.json();
  return booksData;
};

export const categoryData = async () => {
  const categoriesResponse = await fetch(
    "https://spine-online-book-borrowing-pl-git-b513cd-wasif-hasans-projects.vercel.app/bookCategory.json",
  );
  return await categoriesResponse.json();
};
