"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1600431521340-491eca880813",
  "https://images.unsplash.com/photo-1463320726281-696a485928c7",
  "https://images.unsplash.com/photo-1700145872464-4beb41df93a3",
  "https://images.unsplash.com/photo-1698342381285-ebc8cdaa1f98",
  "https://images.unsplash.com/photo-1644189078348-b46e092e09a1",
  "https://plus.unsplash.com/premium_photo-1750530064487-9f357338dd90",
];

export default function Banner() {
  return (
    <section className="mx-auto w-full px-0 md:px-1 lg:px-2">
      <div className="relative overflow-hidden rounded-3xl border border-[#7ab8ee] bg-[#0f3d66] shadow-2xl shadow-[#1f5d9933]">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
           navigation={true}
          modules={[Autoplay, Pagination]}
          className="h-75 md:h-100 lg:h-130"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="mx-auto w-full  px-5 md:px-8 lg:px-12">
            <div className="max-w-2xl rounded-2xl border border-white/20 bg-[#08243fb6] p-4 backdrop-blur-sm md:p-6 lg:p-7">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#cfe6ff] backdrop-blur-sm md:mb-4 md:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
                Discover New Stories
              </p>

              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Find Your Next Read
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#e5f1ff] md:mt-4 md:text-base lg:text-lg">
                Dive into curated titles, trending books, and timeless classics
                from your online reading shelf.
              </p>

              <div className="mt-5 flex flex-col items-start gap-3 md:mt-7 md:flex-row md:items-center md:gap-4">
                <Link
                  href="/all-books"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#0f3d66] shadow-lg shadow-[#0000002a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#eaf4ff] hover:shadow-xl md:px-7 md:text-base"
                >
                  Browse Now
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
