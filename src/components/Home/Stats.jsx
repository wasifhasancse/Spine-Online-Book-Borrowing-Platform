import React from 'react';

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
const Stats = () => {
  return (
    <section className="mx-auto max-w-10/12 relative overflow-hidden rounded-3xl border border-[#9ac5ee] bg-[#f2f8ff]/95 p-4 shadow-xl shadow-[#1f5d9917] md:p-7 lg:p-10">
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
  );
};

export default Stats;
