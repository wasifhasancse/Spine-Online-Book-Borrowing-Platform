import BookCard from "@/components/Book/BookCard";
import AnnouncementMarquee from "@/components/Home/AnnouncementMarquee";
import { galleryData } from "@/localdb/localdb";
import Link from "next/link";

const journeyHighlights = [
  {
    id: "01",
    title: "Smart Book Picks",
    description:
      "Get thoughtful recommendations from top-rated titles based on your reading style.",
    ringClass: "text-[#e35d6a] bg-[#ffecef]",
  },
  {
    id: "02",
    title: "Quality Collection",
    description:
      "Build your reading habit from verified books across story, tech, and science shelves.",
    ringClass: "text-[#5f69df] bg-[#eef0ff]",
  },
  {
    id: "03",
    title: "Remote Borrowing",
    description:
      "Borrow books from anywhere and manage your list online with a smooth workflow.",
    ringClass: "text-[#8d4d9f] bg-[#f7ecfb]",
  },
  {
    id: "04",
    title: "Reader Support",
    description:
      "Track due dates, update your profile, and keep your reading goals on schedule.",
    ringClass: "text-[#3f8cb3] bg-[#e9f8ff]",
  },
];

const Home = async () => {
  const booksData = await galleryData();

  const marqueeItems = [
    ...booksData.slice(0, 6).map((book) => `New Arrivals: ${book.title}`),
    "Special Discount on Memberships: Save up to 20% this month",
    "Weekend Offer: Borrow 2 books and get 1 bonus reservation",
  ];

  const featuredBooks = booksData.slice(0, 4);
  const popularBooks = [...booksData]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 4);

  const lowStockBooks = [...booksData]
    .sort((a, b) => a.available_quantity - b.available_quantity)
    .slice(0, 3);

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl space-y-12 px-3 py-10 md:space-y-16 md:px-4 md:py-12 lg:space-y-20 lg:px-6 lg:py-14">
      <AnnouncementMarquee items={marqueeItems} />

      <section className="space-y-8 md:space-y-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#0f3d66] md:text-sm">
            Book
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-[#1f5d99] md:text-4xl lg:text-5xl">
            Featured Books
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[#1f5d99]">
            Find your next read from our full collection of stories, science,
            and technology titles.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/all-books"
              className="rounded-xl bg-[#1f5d99] px-5 py-2 text-sm font-semibold text-[#eaf4ff] transition hover:bg-[#0f3d66] active:bg-[#0b2d4d] md:px-6 md:py-3 md:text-base"
            >
              Browse Full Library
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="space-y-8 md:space-y-10">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#0f3d66] md:text-sm">
            Top Picks
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-[#1f5d99] md:text-3xl lg:text-4xl">
            Popular Books By Rating
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#1f5d99]">
            Handpicked from the highest reader ratings across the collection.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-[#9ac5ee] bg-[#f2f8ff]/95 p-4 shadow-xl shadow-[#1f5d9917] md:p-7 lg:p-10">
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-linear-to-r from-[#d9f2ea40] via-[#f4f8ff5c] to-[#f7efe640]" />

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-[#0f3d66] md:text-4xl lg:text-5xl">
            Start your journey with us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#1f5d99] md:text-base lg:text-lg">
            Discover a modern way to borrow and enjoy books. Learn, explore, and
            grow your reading habit with curated picks and smooth support.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {journeyHighlights.map((item) => (
            <article
              key={item.id}
              className="h-full rounded-2xl border border-[#d5e6f8] bg-[#f8fbff] p-4 shadow-md shadow-[#0f3d660f] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1f5d9922] md:p-5 lg:p-6"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div
                  className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-2xl font-bold md:h-14 md:w-14 md:text-3xl ${item.ringClass}`}
                >
                  {item.id}
                </div>
                <h3 className="text-lg font-bold leading-snug text-[#0f3d66] md:text-xl lg:text-xl xl:text-2xl">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#1f5d99] md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8">
        <div className="rounded-3xl border border-[#9ac5ee] bg-[#edf5ff]/95 p-5 shadow-xl shadow-[#1f5d991f] md:p-6 lg:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f3d66] md:text-sm">
            Shelf Alerts
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-[#1f5d99] md:text-3xl">
            Borrow Soon: Low Stock Titles
          </h2>

          <div className="mt-5 space-y-3 md:space-y-4">
            {lowStockBooks.map((book) => (
              <Link
                key={book.id}
                href={`/all-books/${book.id}`}
                className="block"
              >
                <div className="flex flex-col items-start gap-3 rounded-xl border border-[#9ac5ee] bg-[#f2f8ff] px-4 py-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#0f3d66] md:text-base">
                      {book.title}
                    </p>
                    <p className="text-xs text-[#1f5d99] md:text-sm">
                      {book.author}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full border border-[#1f5d99] px-3 py-1 text-xs font-semibold text-[#1f5d99] md:text-sm">
                    {book.available_quantity} left
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[#9ac5ee] bg-[#edf5ff]/95 p-5 shadow-xl shadow-[#1f5d991f] md:p-6 lg:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f3d66] md:text-sm">
            Membership
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-[#1f5d99] md:text-3xl">
            Get Membership & Save More
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#1f5d99] md:text-base">
            Pick a plan that fits your reading pace and unlock member-only
            borrowing perks.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            <div className="rounded-xl border border-[#9ac5ee] bg-[#f2f8ff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1f5d99]">
                Reader Basic
              </p>
              <p className="mt-2 text-2xl font-extrabold text-[#0f3d66]">$5</p>
              <p className="text-xs text-[#1f5d99] md:text-sm">per month</p>
              <ul className="mt-3 space-y-1 text-sm text-[#0f3d66]">
                <li>2 active borrows</li>
                <li>Standard reservations</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#1f5d99] bg-[#eaf4ff] p-4 shadow-sm shadow-[#1f5d9920]">
              <div className="inline-flex rounded-full bg-[#1f5d99] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#eaf4ff]">
                Most Chosen
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1f5d99]">
                Reader Plus
              </p>
              <p className="mt-2 text-2xl font-extrabold text-[#0f3d66]">$12</p>
              <p className="text-xs text-[#1f5d99] md:text-sm">per 3 months</p>
              <ul className="mt-3 space-y-1 text-sm text-[#0f3d66]">
                <li>5 active borrows</li>
                <li>Priority reservations</li>
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-[#9ac5ee] bg-[#f2f8ff] px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1f5d99]">
              Included Benefits
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-[#0f3d66] md:grid-cols-2">
              <p>Free late fee grace: 3 days</p>
              <p>Member-only book alerts</p>
              <p>Early access to new arrivals</p>
              <p>Quarterly reading badge rewards</p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 md:flex-row md:gap-4">
            <Link
              href="/profile"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#1f5d99] px-5 py-3 text-sm font-semibold text-[#eaf4ff] transition hover:bg-[#0f3d66] active:bg-[#0b2d4d] md:text-base"
            >
              Activate Membership
            </Link>

            <Link
              href="/all-books"
              className="inline-flex w-full items-center justify-center rounded-xl border border-[#1f5d99] bg-transparent px-5 py-3 text-sm font-semibold text-[#1f5d99] transition hover:bg-[#93c5fd33] hover:text-[#0f3d66] active:bg-[#1f5d99] active:text-[#eaf4ff] md:text-base"
            >
              Browse Member Picks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
