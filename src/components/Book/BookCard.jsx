import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const BookCard = ({ book }) => {
  const {
    id,
    title,
    author,
    description,
    category,
    available_quantity,
    price,
    image_url,
    rating,
    reviews,
  } = book;

  return (
    <article className="group mx-auto flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#cbd5e1] bg-linear-to-b from-[#f5f7fb] to-[#eef2f7] transition-all duration-300 hover:-translate-y-1 hover:border-[#9fb7cf] hover:shadow-md">
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-[#d8dee6] ring-1 ring-[#d5dde7] sm:h-52 md:h-56">
        <Image
          src={image_url}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full border border-[#d9e2ec] bg-[#f8fafc] px-3 py-1 text-xs font-semibold text-[#1f2937] shadow-sm sm:left-4 sm:top-4 sm:text-sm">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:pt-5">
        <div className="flex flex-wrap items-center gap-2 text-base font-semibold text-[#334e6f] lg:text-lg">
          <span className="inline-flex items-center gap-1 text-[#f97316]">
            <FaStar className="text-base lg:text-lg" />
            {rating}
          </span>
          <span className="text-sm font-medium text-[#64748b] lg:text-base">
            ({reviews} reviews)
          </span>
        </div>
        <div className="mt-3 h-0.5 w-10 rounded-full bg-[#1f5d99] opacity-40" />
        <h3 className="mt-3 line-clamp-2 text-xl lg:text-3xl font-bold  text-[#0f2e57]">
          {title}
        </h3>

        <p className="mt-1.5 line-clamp-1 text-md lg:text-lg font-semibold text-[#334e6fe6]">
          By {author}
        </p>

        <p className="mt-3 line-clamp-3 text-sm lg:text-md leading-relaxed text-[#334155]">
          {description}
        </p>

        <div className="mt-auto pt-5">
          <div className="mb-3 h-0.5 w-full rounded-full bg-[#1f5d99] opacity-15" />

          <div className="mb-5 flex items-center justify-between gap-1.5 lg:gap-3 text-[#64748b]">
            <span className="inline-flex items-center gap-2 text-base font-semibold lg:text-lg">
              <HiOutlineShoppingBag />
              {available_quantity} available
            </span>
            <span className="text-lg lg:text-xl font-bold text-[#1f5c99d4] transition-colors duration-300 group-hover:text-[#1f5d99]">
              ${price}
            </span>
          </div>

          <Link
            href={`/all-books/${id}`}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#1f5d99] py-3 px-4 text-md font-bold text-[#f5fdff] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1f5c99b6] hover:shadow-md active:translate-y-0 active:bg-[#93c5fd40] lg:text-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
