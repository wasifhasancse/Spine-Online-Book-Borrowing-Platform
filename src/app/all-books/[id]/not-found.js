import Link from "next/link";
import { FaArrowLeft, FaBookOpen } from "react-icons/fa";
import { TbPlugConnectedX } from "react-icons/tb";

const NotFound = () => {
  return (
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

        <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f3d66] text-3xl text-white shadow-lg shadow-[#1f5d9940] sm:h-20 sm:w-20 sm:text-4xl">
          <TbPlugConnectedX />
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0f3d66] sm:text-5xl md:text-6xl">
          404
        </h1>

        <h2 className="mt-2 text-xl font-bold text-[#1f5d99] sm:text-2xl md:text-3xl">
          Not Found!
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#356b99] sm:text-base md:text-lg">
          The page you are looking for may have been moved, removed, or never
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
  );
};

export default NotFound;
