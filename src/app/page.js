import BookCard from "@/components/Book/BookCard";
import AnnouncementMarquee from "@/components/Home/AnnouncementMarquee";
import Banner from "@/components/Home/Banner";
import Membership from "@/components/Home/Membership";
import Stats from "@/components/Home/Stats";
import { galleryData } from "@/localdb/localdb";

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
    <div className="mx-auto min-h-screen space-y-12 px-3 py-10 md:space-y-16 md:px-4 md:py-12 lg:space-y-20 lg:px-6 lg:py-14">
      <Banner />
      <AnnouncementMarquee items={marqueeItems} />

      <section className="mx-auto max-w-10/12 space-y-8 md:space-y-10">
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
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-10/12 space-y-8 md:space-y-10">
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

      <Stats />
      <Membership lowStockBooks={lowStockBooks} />
    </div>
  );
};

export default Home;
