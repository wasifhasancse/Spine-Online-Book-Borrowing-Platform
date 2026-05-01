import Image from "next/image";

const BookDetails = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(
    "https://spinebookborrowing.vercel.app/bookData.json",
  );
  const booksData = await response.json();
  const book = booksData.find((book) => book.id == id);

  return (
    //     Visuals: Large Book Cover on the left, text/details on the right.
    // Info: Title, Author, Description, and Available Quantity (e.g., "5 copies left").
    // The Action Button:
    // "Borrow This Book" Button:
    // Prominently displayed below the book details.
    <div className="flex min-h-screen flex-col gap-10 rounded-3xl border border-[#9ac5ee] bg-[#edf5ff] p-10 md:flex-row">
      <div className="w-full md:w-1/3">
        <Image src={book.image_url} alt={book.title} width={300} height={400} />
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="text-5xl font-bold text-[#0f3d66]">{book.title}</h1>
        <p className="mt-3 text-xl text-[#1f5d99]">by {book.author}</p>
        <p className="mt-5 text-lg text-[#1f5d99]">Category: {book.category}</p>
        <p className="text-lg text-[#1f5d99]">
          {book.available_quantity} in stock
        </p>
        <p className="text-lg text-[#1f5d99]">Rating: {book.rating} / 5</p>
        <p className="mt-4 text-lg leading-relaxed text-[#1f5d99]">
          {book.description}
        </p>
        <div className="mt-6">
          <button className="rounded-md bg-[#1f5d99] px-4 py-2 text-[#eaf4ff] transition hover:bg-[#0f3d66] active:bg-[#0b2d4d]">
            Borrow This Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
