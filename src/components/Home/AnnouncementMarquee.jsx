import Marquee from "react-fast-marquee";

const AnnouncementMarquee = ({ items }) => {
  const availableItems =
    items?.length > 0
      ? items
      : [
          "New Arrivals: Explore fresh books added this week",
          "Special Discount on Memberships: Save up to 20% this month",
        ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" />
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
        <div className="min-w-0 flex-1 overflow-hidden rounded-xl border border-[#9ac5ee] bg-[#f8fbff]">
          <Marquee
            speed={36}
            gradient={false}
            pauseOnHover
            autoFill
            className="py-2 md:py-3"
          >
            {availableItems.map((item) => (
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
