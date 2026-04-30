import BookCard from "@/components/Book/BookCard";

const Home = async () => {
  const response = await fetch(
    "https://spinebookborrowing.vercel.app/bookData.json",
  );
  const booksData = await response.json();
  return (
    <div className="min-h-screen py-14 space-y-14 md:space-y-32">
      <section>
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-900 sm:text-sm">
            Book
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-emerald-500 sm:text-4xl">
            Featured Books
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Find your next read from our full collection of stories, science,
            and technology titles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {booksData.slice(0, 4).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
     
    </div>
  );
};

export default Home;
