import { CircleFill } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  const {
    id,
    title,
    author,
    description,
    category,
    available_quantity,
    image_url,
    rating,
  } = book;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#7ab8ee] bg-linear-to-b from-[#f8fbff] to-[#eaf4ff] shadow-md shadow-[#1f5d991f] transition-all duration-300 hover:-translate-y-1 hover:border-[#1f5d99] hover:shadow-xl hover:shadow-[#1f5d9933]">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-1 w-full bg-linear-to-r from-[#60a5fa] via-[#1f5d99] to-[#60a5fa] opacity-65" />

      <div className="relative h-52 overflow-hidden bg-[#dceeff] md:h-56 lg:h-60">
        <Image
          src={image_url}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0b2d4dc9] via-[#0f3d663b] to-transparent" />

        <Chip
          variant="flat"
          className="absolute left-3 top-3 border border-[#7ab8ee] bg-[#f2f8ff]/95 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f3d66] md:left-4 md:top-4"
        >
          <Chip.Label>{category}</Chip.Label>
        </Chip>

        <Chip className="absolute bottom-3 right-3 border border-[#7ab8ee] bg-white/90 text-[#0f3d66] md:bottom-4 md:right-4">
          <CircleFill width={6} />
          <Chip.Label>{available_quantity} in stock</Chip.Label>
        </Chip>
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5 lg:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm">
          <p className="min-w-0 truncate text-[#1a4f80]">
            by <span className="font-semibold text-[#0f3d66]">{author}</span>
          </p>
          <span className="shrink-0 rounded-full border border-[#7ab8ee] bg-white/80 px-2.5 py-1 font-semibold text-[#0f3d66]">
            {rating} / 5
          </span>
        </div>

        <h3 className="line-clamp-2 min-h-14 text-lg font-extrabold leading-tight text-[#0f3d66] md:text-xl">
          {title}
        </h3>

        <div className="mt-3 h-0.5 w-10 rounded-full bg-[#1f5d99] opacity-40" />

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#1a4f80] md:text-[15px]">
          {description}
        </p>

        <div className="mt-auto pt-5">
          <div className="mb-4 border-t border-[#7ab8ee]/70" />

          <Link
            href={`/all-books/${id}`}
            className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#1f5d99] px-4 text-sm font-bold text-[#eaf4ff] shadow-md shadow-[#1f5d9933] transition-all duration-200 hover:bg-[#0f3d66] hover:shadow-lg active:bg-[#0b2d4d] md:h-12 md:text-base"
          >
            View Book Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
