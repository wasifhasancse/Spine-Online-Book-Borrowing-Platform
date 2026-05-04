import BorrowButton from "@/components/Book/BorrowButton";
import { galleryData } from "@/localdb/localdb";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaBookOpen, FaStar } from "react-icons/fa";
import { TbCloudDataConnectionFilled } from "react-icons/tb";

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

            <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center text-3xl text-[#0f3d66] sm:h-20 sm:w-20 sm:text-4xl">
              <TbCloudDataConnectionFilled className="text-9xl" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-[#1f5d99] sm:text-2xl md:text-3xl">
              Book Not Found!
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#356b99] sm:text-base md:text-lg">
              The book you are looking for may have been moved, removed, or
              never existed. Let us get you back to books you can actually
              borrow.
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
        <section className="relative mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:py-12">
          <div className="mb-6 flex items-center">
            <Link
              href="/all-books"
              className="inline-flex items-center gap-2 rounded-xl border border-[#9ac5ee] bg-[#edf5ff] px-4 py-2 text-sm font-semibold text-[#0f3d66] transition hover:border-[#1f5d99] hover:bg-[#e3f2ff]"
            >
              <FaArrowLeft className="text-xs" />
              Back To All Books
            </Link>
          </div>

          <div className="mx-auto grid overflow-hidden rounded-2xl border border-[#9ac5ee] bg-[#edf5ff] shadow-lg shadow-[#1f5d9920] md:rounded-3xl lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex min-h-96 flex-col justify-between bg-[#dceeff] p-4 md:p-8 md:min-h-128">
              <Image
                src={book?.image_url}
                alt={book?.title}
                width={520}
                height={720}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>

            <div className="flex flex-col bg-[#f7fbff] p-4 sm:p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7f9db9]">
                Book Details
              </p>
              <div className="mt-3 h-0.5 w-10 rounded-full bg-[#1f5d99] opacity-40" />
              <h1 className="mt-2 text-2xl font-extrabold leading-tight text-[#0f3d66] sm:text-4xl">
                {book?.title}
              </h1>

              <p className="mt-2 text-sm font-semibold text-[#1f5d99] sm:text-base">
                By {book?.author}
              </p>

              <p className="mt-2 text-sm font-medium text-[#6b88a3]">
                Item code: BK-{book?.id}
              </p>

              <div className="mt-6 border-t border-[#d5e8fb] pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7f9db9]">
                  Description
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#6b88a3] sm:text-base">
                  {book?.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[#d5e8fb] pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7f9db9]">
                  Price
                </p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="text-4xl font-extrabold text-[#0f3d66] sm:text-5xl">
                    {book?.price?.toFixed(2)}
                  </p>
                  <p className="rounded-full border border-[#9ac5ee] bg-[#edf5ff] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1f5d99]">
                    {book?.available_quantity} in stock
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-[#d5e8fb] pt-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#1f5d99]">
                      Category
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#0f3d66] sm:text-base">
                      {book?.category}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#9ac5ee] bg-[#edf5ff] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#1f5d99]">
                      Reviews
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-[#0f3d66] sm:text-base">
                      <FaStar className="text-[#f59e0b]" />
                      {book?.rating} ({book?.reviews?.toLocaleString()} reviews)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <BorrowButton />
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
