// File: src/pages/AboutPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage2() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ========================== HERO SECTION ========================== */}
      <header className="min-h-[70vh] md:min-h-[80vh] bg-gradient-to-r from-sky-800 to-blue-900 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                About Anand Wealth Consultancy
              </h1>

              <p className="mt-6 text-lg md:text-xl text-sky-100 leading-relaxed max-w-2xl">
                For over two decades, we’ve helped individuals and businesses
                build, protect, and manage their wealth through ethical,
                transparent, and research-driven financial strategies.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/wealth"
                  className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 px-6 py-3 rounded shadow font-semibold"
                >
                  Explore Services
                </Link>

                <a
                  href="/mnt/data/Untitled document (5).pdf"
                  className="inline-block px-6 py-3 border border-white/40 rounded text-white bg-white/10 hover:bg-white/20"
                >
                  Download Brochure
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                <h3 className="text-lg font-semibold text-white">Our Ethos</h3>

                <p className="mt-3 text-sky-100/90 leading-relaxed">
                  “Dharmo Rakshati Rakshitah”—When we uphold ethical financial
                  practices, they safeguard our future. This principle shapes
                  every strategy we build.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "Client-first Advisory",
                      val: "Personalized Plans",
                    },
                    { label: "Market-backed Insights", val: "Research Driven" },
                    { label: "Global Access", val: "International Markets" },
                    { label: "Continuous Review", val: "Active Monitoring" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm text-sky-100/80">{item.label}</p>
                      <p className="mt-1 font-semibold text-white">
                        {item.val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========================== MISSION & HOW WE WORK ========================== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT — Mission */}
          <div className="relative">
            {/* Accent Bar */}
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-4"></div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Our Mission
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed text-lg">
              To empower individuals and businesses with structured, ethical,
              and transparent financial strategies that provide long-term wealth
              security and sustainable growth.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed text-lg">
              We combine research, global insights, and disciplined planning to
              ensure your wealth grows responsibly and meaningfully — today and
              for the future.
            </p>

            {/* Decorative Glow */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 blur-3xl opacity-40 pointer-events-none" />
          </div>

          {/* RIGHT — How We Work */}
          <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-100 relative">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              How We Work
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                Financial profiling & personalized risk analysis
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                Goal-based investment & portfolio allocation
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                Tax-efficient wealth planning & protection
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                Continuous portfolio monitoring & refinements
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✔</span>
                Transparent updates & research-based guidance
              </li>
            </ul>

            {/* Glow Effect */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-200 blur-3xl opacity-30 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ========================== CONSULTANCY FOCUS ========================== */}
      <section className="bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Consultancy Focus
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Helping clients navigate both domestic and international markets
            with clarity, confidence, and ethical wealth practices.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wealth Management & Protection",
                desc: "Comprehensive plans that secure and grow your wealth.",
                color: "from-sky-600 to-sky-700",
              },
              {
                title: "Long-Term Investment Strategies",
                desc: "Balanced portfolios built for sustainable appreciation.",
                color: "from-amber-400 to-amber-500",
              },
              {
                title: "Global Market Access",
                desc: "International investment opportunities tailored to your goals.",
                color: "from-slate-300 to-slate-400",
              },
              {
                title: "Personalized Financial Planning",
                desc: "Strategies aligned with risk appetite, goals, and timelines.",
                color: "from-orange-300 to-orange-400",
              },
              {
                title: "Continuous Portfolio Monitoring",
                desc: "Regular reviews to keep your financial plan on track.",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Transparent Advisory",
                desc: "Clear communication and honest reporting on performance.",
                color: "from-yellow-400 to-amber-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow border hover:shadow-lg transition"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-white font-bold bg-gradient-to-br ${item.color}`}
                >
                  {item.title
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== WHY CHOOSE US ========================== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="mb-10">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mb-3"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Why Choose Anand Wealth
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Here’s what makes our wealth consultancy trusted by clients across
            India and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT — Bullet Points */}
          <div className="space-y-5 text-lg text-slate-700">
            {[
              "Client-first advisory backed by ethical principles",
              "Deep financial expertise and market insights",
              "Transparent reporting and complete clarity",
              "Access to domestic and international investment avenues",
              "Long-term planning focused on sustainable wealth creation",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-blue-600 text-2xl leading-none">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* RIGHT — Promise Card */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-200 blur-3xl opacity-30 pointer-events-none"></div>

            <div className="bg-white border rounded-xl p-8 shadow-xl backdrop-blur-md relative">
              <h4 className="text-xl font-bold text-slate-900">Our Promise</h4>

              <p className="mt-4 text-slate-600 leading-relaxed">
                We help you grow your wealth responsibly, consistently, and
                transparently — guiding you at every step with clarity, trust,
                and disciplined strategy.
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 
                       text-slate-900 rounded-lg font-semibold hover:from-amber-500 
                       hover:to-yellow-600 shadow-md"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== FOUNDER MESSAGE ========================== */}
      <section className="bg-gradient-to-r from-white to-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Founder Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-300 shadow-xl">
              <img
                src="/images/image.png"
                alt="Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Founder Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900">
                Message from the Founder
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                “Our mission has always been clear — to help individuals and
                businesses make informed, ethical, and strategic financial
                decisions. True wealth is not just about accumulation; it is
                about responsibility, clarity, disciplined planning, and
                long-term prosperity.”
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed">
                With more than two decades of experience in analyzing markets
                and guiding clients through economic cycles, our approach
                focuses on integrity, research, and sustainable financial
                growth. Every strategy we build is rooted in trust,
                transparency, and the timeless principle — ‘Dharmo Rakshati
                Rakshitah’: righteousness protects those who protect it.
              </p>

              <p className="mt-5 text-slate-800 font-medium text-lg">
                — Anand, Founder & Chairman, Anand Wealth Consultancy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== CTA SECTION ========================== */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-xl bg-gradient-to-r from-sky-50 to-white border p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold text-slate-900">
              Ready to make smart, sustainable financial decisions?
            </h4>
            <p className="mt-2 text-slate-600">
              Book a free consultation and let us create a strategic wealth plan
              tailored for you.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <div className="h-8" />
    </div>
  );
}
