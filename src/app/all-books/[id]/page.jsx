import BorrowButton from "@/components/Book/BorrowButton";
import { galleryData } from "@/localdb/localdb";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaBookOpen } from "react-icons/fa";
import { TbCloudDataConnectionFilled} from "react-icons/tb";

const BookDetails = async ({ params }) => {
  const { id } = await params;
  const booksData = await galleryData();
  const book = booksData.find((book) => book.id == id);

  return (
    <>
      {!book ? (
         <section className="relative mx-auto flex min-h-[calc(100vh-170px)] w-full items-center justify-center overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -left-20 top-8 h-48 w-48 rounded-full bg-[#8ec7f833] blur-2xl sm:h-64 sm:w-64" />
                <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#1f5d9929] blur-2xl sm:h-72 sm:w-72" />
              </div>

              <div className="w-full max-w-3xl rounded-3xl border border-[#7ab8ee]/60 bg-white/85 p-6 text-center shadow-[0_20px_50px_-20px_rgba(31,93,153,0.45)] backdrop-blur-sm sm:p-8 md:p-10">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#7ab8ee]/70 bg-[#e6f4ff] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.26em] text-[#0f3d66] sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1f5d99]" />
                  Page Missing
                </p>

                <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center text-[#0f3d66] text-3xl sm:h-20 sm:w-20 sm:text-4xl">
                  <TbCloudDataConnectionFilled className="text-9xl"/>
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#1f5d99] sm:text-2xl md:text-3xl">
                 Book Not Found!
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#356b99] sm:text-base md:text-lg">
                  The Book you are looking for may have been moved, removed, or never
                  existed. Let us get you back to books you can actually borrow.
                </p>

                <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f3d66] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#154b7a] sm:text-base"
                  >
                    <FaArrowLeft className="text-sm" />
                    Back To Home
                  </Link>

                  <Link
                    href="/all-books"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#7ab8ee] bg-white px-6 py-3 text-sm font-bold text-[#0f3d66] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#eaf4ff] sm:text-base"
                  >
                    <FaBookOpen className="text-sm" />
                    Browse Books
                  </Link>
                </div>
              </div>
            </section>
      ) : (
        <section className="mx-auto max-w-10/12 relative min-h-screen my-5 px-3 py-8 md:px-4 md:py-10 lg:px-6 lg:py-14">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 overflow-hidden rounded-2xl border border-[#9ac5ee] bg-[#edf5ff]/95 p-3 shadow-lg shadow-[#1f5d9920] md:gap-6 md:rounded-3xl md:p-5 lg:grid-cols-2 lg:gap-10 lg:p-8">
            <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-[#9ac5ee] bg-[#dceeff] p-3 md:p-4 lg:max-w-sm">
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
                <BorrowButton/>
                <button className="inline-flex items-center justify-center rounded-xl border border-[#1f5d99] bg-transparent px-5 py-3 text-sm font-semibold text-[#1f5d99] transition hover:bg-[#93c5fd33] hover:text-[#0f3d66] active:bg-[#1f5d99] active:text-[#eaf4ff] md:px-6 md:text-base cursor-pointer">
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
