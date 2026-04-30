import BookCard from "@/components/Book/BookCard";

const AllBooks = async () => {
  const response = await fetch(
    "https://spinebookborrowing.vercel.app/bookData.json",
  );
  const booksData = await response.json();

  const categoriesResponse = await fetch(
    "https://spinebookborrowing.vercel.app/bookCategory.json",
  );
  const categoriesData = await categoriesResponse.json();
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
            Explore our extensive collection of books across various genres and
            categories. Whether you are looking for fiction, non-fiction,
            science, or technology, we have something for every reader. Browse
            through our library and find your next great read today!
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search books by title..."
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block w-64 mr-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4">
              Categories
            </h2>
            <ul className="space-y-2">
              {categoriesData.map((category) => (
                <li key={category.id}>
                  <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {booksData.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllBooks;
