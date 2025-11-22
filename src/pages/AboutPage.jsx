// File: src/pages/AboutPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* ========== HERO (FULL HEIGHT) ========== */}
      <header className="min-h-[62vh] md:min-h-screen bg-gradient-to-r from-sky-800 to-blue-900 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                About Anand Wealth Consultancy
              </h1>

              <p className="mt-6 text-lg md:text-xl text-sky-100 max-w-2xl leading-relaxed">
                At Anand Wealth Consultancy, we guide individuals and businesses to make 
                smart, strategic, and sustainable financial decisions. Our mission is to 
                help you protect, manage, and grow your wealth—today and for the future.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/wealth"
                  className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 px-6 py-3 rounded shadow-md font-semibold"
                >
                  Our Services
                </Link>

                <a
                  href="/mnt/data/Untitled document (5).pdf"
                  className="inline-block px-6 py-3 border border-white/30 rounded text-white bg-white/10 hover:bg-white/20"
                >
                  Download Brochure
                </a>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white">Our Commitment</h3>

                <p className="mt-3 text-sky-100/90">
                  Transparent guidance, expert insights, and tailored investment strategies that
                  ensure your wealth grows responsibly and sustainably.
                </p>

                {/* Stats Cards */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: "Client-first advisory", value: "Personalized Plans" },
                    { label: "Market-backed strategies", value: "Research-driven" },
                    { label: "Access to global markets", value: "International Grade" },
                    { label: "Continuous review", value: "Ongoing Monitoring" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-3">
                      <p className="text-sm text-sky-100/80">{item.label}</p>
                      <p className="mt-1 font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ========== MISSION & APPROACH ========== */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Our mission is to empower you with structured financial strategies that protect 
              your wealth while enabling long-term growth. We create tailored plans based on 
              your financial goals, risk appetite, and timeline.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Combining research, global insights, and transparent advisory, we help you make 
              informed wealth decisions with clarity and confidence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">How We Work</h3>

            <ul className="mt-5 space-y-3 text-slate-700 leading-relaxed">
              <li>• Financial profiling & personalized strategy building</li>
              <li>• Goal-based investment & asset allocation planning</li>
              <li>• Tax-efficient & risk-optimized wealth planning</li>
              <li>• Continuous performance tracking & refinements</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ========== CORE FOCUS ========== */}
      <section className="bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h2 className="text-3xl font-bold text-slate-900">Our Consultancy Focus</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            We help clients navigate both domestic and international markets with clear,
            research-backed investment direction.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wealth management & protection",
                desc: "Preserve and grow assets with long-term financial discipline.",
                accent: "from-sky-600 to-sky-700",
              },
              {
                title: "Smart investment strategies",
                desc: "Balanced, research-driven portfolios built for long-term growth.",
                accent: "from-amber-400 to-amber-500",
              },
              {
                title: "Access to global investment avenues",
                desc: "Explore domestic & international markets confidently.",
                accent: "from-slate-300 to-slate-400",
              },
              {
                title: "Personalized financial planning",
                desc: "Goal-aligned strategy tailored to your unique profile.",
                accent: "from-orange-300 to-orange-400",
              },
              {
                title: "Ongoing monitoring & refinement",
                desc: "Regular portfolio reviews to keep performance aligned.",
                accent: "from-blue-400 to-blue-600",
              },
              {
                title: "Transparent advisory & reporting",
                desc: "Clear communication, transparent reporting & guidance.",
                accent: "from-yellow-400 to-amber-500",
              },
            ].map((c, i) => (
              <div key={i} className="p-6 rounded-lg bg-white shadow-md border hover:shadow-lg transition">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full text-white font-bold bg-gradient-to-br ${c.accent}`}>
                  {c.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {c.title}
                </h3>

                <p className="mt-2 text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Anand Wealth</h2>

            <ul className="mt-6 space-y-4 text-slate-700 leading-relaxed">
              <li>• Personalized, client-first financial strategies</li>
              <li>• Deep market knowledge & research-backed recommendations</li>
              <li>• Transparent reporting & advisory services</li>
              <li>• Access to domestic & international investment opportunities</li>
              <li>• Long-term vision with disciplined growth structures</li>
            </ul>
          </div>

          <div>
            <div className="bg-white border rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-slate-900">Our Promise</h4>

              <p className="mt-4 text-slate-600 leading-relaxed">
                We help you grow wealth responsibly and consistently while maintaining 
                complete transparency and trust throughout your financial journey.
              </p>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========== FOUNDER MESSAGE ========== */}
      <section className="bg-gradient-to-r from-white to-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-6 py-10">

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/4">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-300 shadow-xl mx-auto">
                <img
                  src="/images/image.png"
                  alt="Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold text-slate-900">Message from the Founder</h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                At Anand Wealth Consultancy, our focus is your long-term prosperity and 
                financial confidence. We believe in building meaningful relationships based 
                on clarity, discipline, and responsible financial guidance.
              </p>

              <p className="mt-4 text-slate-700 font-medium">
                — Founder, Anand Wealth Consultancy
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-xl bg-gradient-to-r from-sky-50 to-white border p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold text-slate-900">
              Ready to make smart, sustainable financial choices?
            </h4>
            <p className="mt-2 text-slate-600">
              Book a free consultation and let us create a custom wealth plan for you.
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

      <div className="h-6" />

    </div>
  );
}
