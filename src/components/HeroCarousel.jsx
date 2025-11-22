// src/components/HeroCarousel.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// image paths
const slides = [
  "/images/hero/image_1.png",
  "/images/hero/image_2.png",
  "/images/hero/image_3.png",
];

export default function HeroCarousel() {
  return (
    <section className="bg-gradient-to-r from-sky-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT: Text */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your Wealth, Secured.  
            <br />
            Your Future, Strengthened.
          </h1>

          <p className="mt-5 text-lg text-slate-200 max-w-xl leading-relaxed">
            At Anand Wealth Consultancy, we help individuals and businesses make smart, 
            strategic, and sustainable financial choices — guiding you in managing, 
            protecting, and growing your wealth in the most effective way possible.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/wealth"
              className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 px-6 py-3 rounded shadow-md font-semibold"
            >
              Start Your Wealth Journey
            </Link>

            <a
              href="/mnt/data/Untitled document (5).pdf"
              className="inline-block px-6 py-3 border border-white/40 text-white bg-white/10 rounded hover:bg-white/20"
            >
              Download Brochure
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Slider + Stats */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white/10  border-white/20 rounded-xl p-4 ">

            <h3 className="text-xl font-semibold mb-4">Your Wealth at a Glance</h3>

            <div className="rounded-lg overflow-hidden">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-[320px] md:h-[420px]"
              >
                {slides.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={src}
                      alt={`Wealth consultant ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-200">Estimated Growth (Example)</p>
                <p className="mt-2 text-3xl font-bold text-white">₹ 12.4 Cr</p>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-200">Annual Growth Rate</p>
                <p className="mt-2 text-xl font-semibold text-amber-300">+18.2%</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-200 leading-relaxed">
              With a client-first approach and expert market insights, we ensure your 
              wealth works for you — not just today, but for the long term.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
