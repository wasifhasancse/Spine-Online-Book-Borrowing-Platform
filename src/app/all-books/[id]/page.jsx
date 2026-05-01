import { galleryData } from "@/localdb/localdb";
import Image from "next/image";

const BookDetails = async ({ params }) => {
  const { id } = await params;
  const booksData = await galleryData();
  const book = booksData.find((book) => book.id == id);

  return (
    <>
      {!book ? (
        <div className="flex min-h-screen items-center justify-center px-4 py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
          <div className="w-full max-w-xl rounded-3xl border border-[#9ac5ee] bg-[#edf5ff] p-6 text-center shadow-md md:p-8 lg:p-10">
            <h1 className="text-2xl font-bold text-[#0f3d66] md:text-3xl lg:text-4xl">
              Book not found
            </h1>
            <p className="mt-3 text-[#1f5d99] md:text-lg">
              The requested book could not be loaded right now.
            </p>
          </div>
        </div>
      ) : (
        <section className="relative min-h-screen px-3 my-5 py-8 md:px-4 md:py-10 lg:px-6 lg:py-14">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 overflow-hidden rounded-2xl border border-[#9ac5ee] bg-[#edf5ff]/95 p-3 shadow-lg shadow-[#1f5d9920] md:gap-6 md:rounded-3xl md:p-5 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-10 lg:p-8">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-[#9ac5ee] bg-[#dceeff] p-3 md:p-4 lg:max-w-none">
              <div className="absolute right-3 top-3 rounded-full border border-[#93c5fd] bg-[#eaf4ff] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0f3d66]">
                {book.category}
              </div>
              <Image
                src={book.image_url}
                alt={book.title}
                width={360}
                height={500}
                className="h-auto w-full rounded-xl object-cover"
                sizes="(max-width: 1024px) 100vw, 360px"
                priority
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1f5d99] md:text-sm">
                  Book Overview
                </p>
                <h1 className="mt-2 text-2xl font-extrabold leading-tight text-[#0f3d66] md:text-4xl lg:text-5xl">
                  {book.title}
                </h1>
                <p className="mt-3 text-base font-medium text-[#1f5d99] md:text-xl">
                  by {book.author}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 md:mt-6 md:grid-cols-3 md:gap-4">
                  <div className="rounded-xl border border-[#9ac5ee] bg-[#eaf4ff] p-3 md:p-4">
                    <p className="text-xs uppercase tracking-wide text-[#1f5d99]">
                      Available Copies
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#0f3d66] md:text-xl">
                      {book.available_quantity}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#9ac5ee] bg-[#eaf4ff] p-3 md:p-4">
                    <p className="text-xs uppercase tracking-wide text-[#1f5d99]">
                      Rating
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#0f3d66] md:text-xl">
                      {book.rating}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#9ac5ee] bg-[#eaf4ff] p-3 md:p-4">
                    <p className="text-xs uppercase tracking-wide text-[#1f5d99]">
                      Category
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#0f3d66] md:text-xl">
                      {book.category}
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-[#9ac5ee] bg-[#f2f8ff] p-4 md:mt-6 md:p-5 lg:p-6">
                  <h2 className="text-lg font-bold text-[#0f3d66] md:text-xl">
                    Description
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#1f5d99] md:text-base lg:text-lg">
                    {book.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 md:mt-8 md:flex-col lg:flex-row lg:items-center">
                <button className="inline-flex items-center justify-center rounded-xl bg-[#1f5d99] px-5 py-3 text-sm font-semibold text-[#eaf4ff] transition hover:bg-[#0f3d66] active:bg-[#0b2d4d] md:px-6 md:text-base">
                  Borrow This Book
                </button>
                <button className="inline-flex items-center justify-center rounded-xl border border-[#1f5d99] bg-transparent px-5 py-3 text-sm font-semibold text-[#1f5d99] transition hover:bg-[#93c5fd33] hover:text-[#0f3d66] active:bg-[#1f5d99] active:text-[#eaf4ff] md:px-6 md:text-base">
                  Add To Wishlist
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BookDetails;
