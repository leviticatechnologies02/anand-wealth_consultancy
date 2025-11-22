// File: src/pages/AboutPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* ========== HERO (FULL HEIGHT) ========== */}
      <header className="min-h-[72vh] md:min-h-screen bg-gradient-to-r from-sky-800 to-blue-900 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                About Anand Wealth Consultancy
              </h1>

              <p className="mt-6 text-lg md:text-xl text-sky-100 max-w-2xl leading-relaxed">
                At Anand Wealth Consultancy, we are committed to helping individuals and businesses make smart,
                strategic, and sustainable financial choices. Our mission is to guide you in managing, protecting,
                and growing your wealth in the most effective way possible.
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

            {/* Right card */}
            <div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
                <h3 className="text-lg font-semibold text-white">Our Commitment</h3>
                <p className="mt-3 text-sky-100/90">
                  We provide clear direction, expert insights, and tailored strategies to ensure your wealth works
                  for you — not just today, but for the long term.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm text-sky-100/80">Client-first advisory</p>
                    <p className="mt-1 font-semibold text-white">Personalized Plans</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm text-sky-100/80">Market-backed strategies</p>
                    <p className="mt-1 font-semibold text-white">Research-driven</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm text-sky-100/80">Global opportunities</p>
                    <p className="mt-1 font-semibold text-white">International Access</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm text-sky-100/80">Continuous review</p>
                    <p className="mt-1 font-semibold text-white">Ongoing Monitoring</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ========== MISSION & APPROACH ========== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our core mission is to guide you in managing, protecting, and growing your wealth in the most effective
              way possible. We design strategies that make your wealth work for you — today and in the years ahead.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We combine professional research, market intelligence, and a client-first advisory approach to create
              sustainable financial outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800">How We Work</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Detailed financial reviews & personalized roadmaps</li>
              <li>• Goal-based investment strategies and asset allocation</li>
              <li>• Tax-aware planning and risk management</li>
              <li>• Regular performance reviews & strategy refinement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== CORE FOCUS (GRID CARDS) ========== */}
      <section className="bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-800">Our Consultancy Focus</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            We help clients navigate both domestic and international markets with clarity and confidence.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Wealth management & protection planning",
                desc:
                  "Comprehensive plans to preserve assets and ensure long-term financial stability.",
                accent: "from-sky-600 to-sky-700",
              },
              {
                title: "Smart investment strategies for long-term growth",
                desc:
                  "Structured portfolios that balance growth objectives with risk management.",
                accent: "from-amber-400 to-amber-500",
              },
              {
                title: "Guidance across global financial & investment avenues",
                desc:
                  "Access to opportunities across domestic and international markets, adapted to your goals.",
                accent: "from-slate-300 to-slate-400",
              },
              {
                title: "Personalized plans based on your goals and risk appetite",
                desc:
                  "Tailored investment roadmaps aligned with timelines, liquidity needs, and risk preferences.",
                accent: "from-orange-300 to-orange-400",
              },
              {
                title: "Ongoing monitoring & strategy refinement",
                desc:
                  "Continuous portfolio reviews and adjustments to keep your plan on track.",
                accent: "from-blue-400 to-blue-600",
              },
              {
                title: "Client-first advisory & transparent reporting",
                desc:
                  "Clear communication, transparent fees, and regular performance updates.",
                accent: "from-yellow-400 to-amber-500",
              },
            ].map((c, i) => (
              <div key={i} className="p-6 rounded-lg bg-white shadow-sm border">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full text-white font-bold bg-gradient-to-br ${c.accent}`}
                >
                  {c.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-800">{c.title}</h3>
                <p className="mt-2 text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Why Choose Anand Wealth</h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• Client-first approach with tailored strategies.</li>
              <li>• Deep market knowledge and evidence-backed recommendations.</li>
              <li>• Transparent reporting and clear communication.</li>
              <li>• Access to domestic and international investment opportunities.</li>
              <li>• Long-term planning focused on sustainable growth.</li>
            </ul>
          </div>

          <div>
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-slate-800">Our Promise</h4>
              <p className="mt-3 text-slate-600">
                We guide you toward a path where your wealth grows steadily — and responsibly.
                From onboarding to continuous advice, our service is designed to be pragmatic,
                professional, and aligned with your life goals.
              </p>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-block px-5 py-3 bg-amber-400 text-slate-900 rounded font-semibold"
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
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/4">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-400 shadow-lg mx-auto">
                <img src="/images/image.png" alt="Founder" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold text-slate-800">Message from the Founder</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                At Anand Wealth Consultancy, our work is guided by a single principle: your financial security
                and long-term prosperity. We believe in building relationships rooted in trust, clarity and
                consistent performance. We welcome the opportunity to understand your goals and craft a plan
                that helps you achieve them.
              </p>

              <p className="mt-4 text-slate-700 font-medium">— Founder, Anand Wealth Consultancy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-xl bg-gradient-to-r from-sky-50 to-white border p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold text-slate-800">Ready to make smart, sustainable financial choices?</h4>
            <p className="mt-2 text-slate-600">Book a free consultation and let us create a plan tailored to your life goals.</p>
          </div>

          <div>
            <Link to="/contact" className="px-6 py-3 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FOOTER SPACER (Footer component will follow) ========== */}
      <div className="h-6" />

    </div>
  );
}
