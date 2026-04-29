import BookCard from "@/components/Book/BookCard";

const AllBooks = async() => {
  const response = await fetch(
    "https://spinebookborrowing.vercel.app/bookData.json",
  );
  const booksData = await response.json();
  return (
    <div className="min-h-screen py-14">
      <section>
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-900 sm:text-sm">
            Library Collection
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-emerald-500 sm:text-4xl">
            All Books
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore our extensive collection of books across various genres and categories. Whether you are looking for fiction, non-fiction, science, or technology, we have something for every reader. Browse through our library and find your next great read today!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {booksData.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};


export default AllBooks;
