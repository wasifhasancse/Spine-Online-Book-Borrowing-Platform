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
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#9ac5ee] bg-[#edf5ff] shadow transition duration-300 hover:border-[#60a5fa] hover:shadow-lg hover:shadow-[#60a5fa59]">
      <div className="relative h-60 overflow-hidden bg-[#dceeff]">
        <Image
          src={image_url}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0f3d66cc] via-[#1f5d992a] to-transparent" />

        <Chip
          variant="flat"
          className="absolute left-4 top-4 border border-[#93c5fd] bg-[#eaf4ff] text-[#0f3d66] uppercase tracking-wider"
        >
          <Chip.Label>{category}</Chip.Label>
        </Chip>
        <Chip className="absolute bottom-4 right-4 border border-[#9ac5ee] bg-[#edf5ff] text-[#0f3d66]">
          <CircleFill width={6} />
          <Chip.Label>{available_quantity} in stock</Chip.Label>
        </Chip>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex min-h-8 items-center justify-between gap-2 text-sm">
          <p className="min-w-0 truncate text-[#1f5d99]">
            by <span className="font-semibold text-[#0f3d66]">{author}</span>
          </p>
          <span className="shrink-0 rounded-full bg-[#eaf4ff] px-2.5 py-1 font-semibold text-[#0f3d66]">
            {rating} / 5
          </span>
        </div>

        <h3 className="line-clamp-1 text-lg font-extrabold leading-tight text-[#0f3d66]">
          {title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#1f5d99]">
          {description}
        </p>

        <div className="mt-4 grid min-h-16 grid-cols-[1fr_auto] items-center gap-3 border-t border-[#9ac5ee] pt-4">
          <p className="text-sm font-semibold leading-tight text-[#1f5d99]">
            Ready to borrow
          </p>
          <Link
            href={`/all-books/${id}`}
            className="inline-flex h-12 items-center rounded-lg bg-[#1f5d99] px-4 text-sm font-semibold text-[#eaf4ff] transition hover:bg-[#0f3d66] active:bg-[#0b2d4d]"
          >
            View Book Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
