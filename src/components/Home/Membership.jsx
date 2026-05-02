import Link from "next/link";

const Membership = ({ lowStockBooks }) => {
  return (
    <section className="mx-auto max-w-10/12 grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8">
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
  );
};

export default Membership;
