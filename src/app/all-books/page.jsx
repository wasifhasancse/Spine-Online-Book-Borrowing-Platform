import BooksFilterView from "@/components/Book/BooksFilterView";
import { categoryData, galleryData } from "@/localdb/localdb";

const AllBooks = async () => {
  const booksData = await galleryData();
  const categoriesData = await categoryData();

  return (
    <BooksFilterView booksData={booksData} categoriesData={categoriesData} />
  );
};

export default AllBooks;
