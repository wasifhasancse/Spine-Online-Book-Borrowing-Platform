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
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#0f3d66] sm:text-sm">
            Library Collection
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-[#1f5d99] sm:text-4xl">
            All Books
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#1f5d99]">
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
            className="w-full rounded-md border border-[#9ac5ee] bg-[#edf5ff] py-2 px-4 text-[#0f3d66] placeholder:text-[#1f5d9999] focus:outline-none focus:ring-2 focus:ring-[#1f5d99]"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block w-64 mr-6">
            <h2 className="mb-4 text-lg font-bold text-[#0f3d66]">
              Categories
            </h2>
            <ul className="space-y-2">
              {categoriesData.map((category) => (
                <li key={category.id}>
                  <button className="w-full rounded-md border border-transparent bg-transparent px-4 py-2 text-left text-[#1f5d99] transition duration-300 hover:border-[#9ac5ee] hover:bg-[#93c5fd40] hover:text-[#0f3d66] active:bg-[#1f5d99] active:text-[#eaf4ff]">
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
