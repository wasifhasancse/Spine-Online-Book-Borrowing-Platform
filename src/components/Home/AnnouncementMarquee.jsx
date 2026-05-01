"use client";

import Marquee from "react-fast-marquee";

const AnnouncementMarquee = ({ items }) => {
  const safeItems =
    items?.length > 0
      ? items
      : [
          "New Arrivals: Explore fresh books added this week",
          "Special Discount on Memberships: Save up to 20% this month",
        ];

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#9ac5ee] bg-[#edf5ff]/95 p-2 shadow-lg shadow-[#1f5d9914] md:rounded-3xl md:p-3">
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#d6ecff] via-[#eff6ff] to-[#dbeeff]" />

      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
        <span className="inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-[#1f5d99] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#eaf4ff] md:w-auto md:text-xs">
          Live Updates
        </span>

        <div className="min-w-0 flex-1 overflow-hidden rounded-xl border border-[#9ac5ee] bg-[#f8fbff]">
          <Marquee
            speed={36}
            gradient={false}
            pauseOnHover
            autoFill
            className="py-2 md:py-3"
          >
            {safeItems.map((item) => (
              <span
                key={item}
                className="mx-3 inline-flex items-center text-xs font-semibold text-[#0f3d66] md:mx-5 md:text-sm lg:text-base"
              >
                {item}
                <span className="ml-3 text-[#60a5fa] md:ml-5">|</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementMarquee;
