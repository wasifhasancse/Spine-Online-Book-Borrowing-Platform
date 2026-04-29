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
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow transition duration-300  hover:border-emerald-200 hover:shadow-emerald-200">
      <div className="relative h-60 overflow-hidden bg-slate-100">
        <Image
          src={image_url}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/55 via-slate-900/10 to-transparent" />

        <Chip
          color="success"
          variant="primary"
          className="absolute left-4 top-4 uppercase tracking-wider"
        >
          <Chip.Label>{category}</Chip.Label>
        </Chip>
        <Chip className="absolute bottom-4 right-4">
          <CircleFill width={6} />
          <Chip.Label>{available_quantity} in stock</Chip.Label>
        </Chip>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex min-h-8 items-center justify-between gap-2 text-sm">
          <p className="min-w-0 truncate text-slate-600">
            by <span className="font-semibold text-slate-800">{author}</span>
          </p>
          <span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-1 font-semibold text-amber-600">
            {rating} / 5
          </span>
        </div>

        <h3 className="line-clamp-1 text-lg font-extrabold leading-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="grid min-h-16 grid-cols-[1fr_auto] items-center gap-3 border-t border-slate-200 pt-4 mt-4">
          <p className="text-sm font-semibold leading-tight text-slate-700">
            Ready to borrow
          </p>
          <Link
            href={`/all-books/${id}`}
            className="inline-flex h-12 items-center rounded-lg bg-emerald-500 px-4 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            View Book Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
