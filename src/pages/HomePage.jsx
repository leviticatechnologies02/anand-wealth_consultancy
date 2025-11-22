import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function HomeA() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* ========================== HERO ========================== */}
      <section className="bg-gradient-to-r from-sky-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">

          {/* Left */}
          <div className="w-full lg:w-1/2">
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
          </div>

          {/* Right */}
   {/* Right Side */}
<div className="w-full lg:w-1/2 space-y-6">

  {/* IMAGE SECTION */}
  <div className="relative overflow-hidden rounded-xl shadow-2xl border border-white/20">
    <img
      src="/images/hero/image_1.png"   // 🔥 Replace with your real image path
      alt="Wealth Consultant"
      className="w-full h-[320px] md:h-[420px] object-cover"
    />

    {/* Optional Soft Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
  </div>

  {/* STATS SECTION */}
  <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl backdrop-blur-sm">
    <h3 className="text-xl font-semibold">Your Wealth at a Glance</h3>

    <div className="mt-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-200">Estimated Growth (Example)</p>
        <p className="mt-2 text-3xl font-bold text-white">₹ 12.4 Cr</p>
      </div>

      <div className="text-right">
        <p className="text-sm text-slate-200">Annual Growth Rate</p>
        <p className="mt-2 text-xl font-semibold text-amber-300">+18.2%</p>
      </div>
    </div>

    <p className="mt-6 text-sm text-slate-200 leading-relaxed">
      With a client-first approach and expert market insights, we ensure your 
      wealth works for you — not just today, but for the long term.
    </p>
  </div>

</div>


        </div>
      </section>


      {/* ========================== ABOUT SECTION ========================== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-800">About Anand Wealth Consultancy</h2>

        <p className="mt-4 text-slate-600 leading-relaxed max-w-4xl">
          Our core mission is to guide you in managing, protecting, and growing your wealth 
          in the most effective way possible. We provide clear direction, expert insights, 
          and tailored strategies to ensure that your wealth works for you — not just today, 
          but far into the future.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed max-w-4xl">
          With a deep understanding of domestic and international financial markets, we help 
          you navigate global opportunities with confidence. Your financial journey becomes 
          more informed, more secure, and more growth-driven.
        </p>
      </section>


      {/* ========================== OUR FOCUS / SERVICES ========================== */}
      <section className="bg-slate-50 border-t py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-semibold text-slate-800">
            What We Focus On
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Wealth Management & Protection",
                desc: "Comprehensive plans that preserve your assets and support long-term stability.",
                color: "from-sky-600 to-sky-700",
              },
              {
                title: "Smart Investment Strategies",
                desc: "Structured portfolios designed for long-term, responsible growth.",
                color: "from-yellow-400 to-amber-500",
              },
              {
                title: "Global Market Guidance",
                desc: "Access opportunities across domestic and international investment avenues.",
                color: "from-slate-300 to-slate-400",
              },
              {
                title: "Goal-Based Personalized Planning",
                desc: "Investment strategies tailored to your financial goals and risk appetite.",
                color: "from-orange-300 to-orange-400",
              },
              {
                title: "Ongoing Monitoring & Refinement",
                desc: "Regular performance reviews to keep your financial path aligned.",
                color: "from-blue-400 to-blue-600",
              },
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-lg border bg-white shadow-sm">
                <div
                  className={`inline-block rounded-full w-14 h-14 flex items-center justify-center text-white font-bold bg-gradient-to-br ${s.color}`}
                >
                  {s.title.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>

                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* ======================== WEALTH CONSULTANCY OVERVIEW ======================== */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Title */}
    <div className="text-center mb-14">
      <h2 className="text-4xl font-extrabold text-blue-800">
        Build Your Wealth with Confidence
      </h2>
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        The financial world is complex — but your wealth journey doesn’t have to be.
      </p>
    </div>

    {/* === GRID: CHALLENGE + SOLUTION === */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* Challenge */}
      <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">The Challenge</h3>
        <p className="text-gray-700 leading-relaxed">
          Today’s financial world is volatile, data-heavy, and unpredictable. 
          Individuals and businesses struggle with overwhelming information, unclear strategy, 
          and difficulty identifying the right investment opportunities.
        </p>
        <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
          <li>Too much scattered financial data</li>
          <li>Unclear short-term vs long-term planning</li>
          <li>Lack of personalized expert guidance</li>
          <li>Difficulty analyzing global market trends</li>
          <li>Protecting wealth while still growing it</li>
        </ul>
      </div>

      {/* Solution */}
      <div className="p-8 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 shadow">
        <h3 className="text-2xl font-bold text-yellow-700 mb-4">Our Solution</h3>
        <p className="text-gray-700 leading-relaxed">
          At <strong>Anand Wealth Consultancy</strong>, we simplify financial decisions with personalized 
          advisory, research-backed planning, and clear long-term strategy — always centered around 
          your goals and your risk appetite.
        </p>
        <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
          <li>Build and manage a strong diversified portfolio</li>
          <li>Identify global and domestic investment avenues</li>
          <li>Protect wealth through smart risk management</li>
          <li>Align financial decisions with life/business goals</li>
          <li>Continuous monitoring and strategy refinement</li>
        </ul>
      </div>
    </div>

    {/* === BENEFITS SECTION === */}
    <div className="mt-20">
      <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Benefits You Get With Us
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
          <h4 className="text-xl font-semibold text-blue-800">📈 Improved Wealth Outcomes</h4>
          <p className="text-gray-600 mt-2">
            Strategies built for steady growth with minimized risk.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
          <h4 className="text-xl font-semibold text-blue-800">🛡️ Stronger Protection</h4>
          <p className="text-gray-600 mt-2">
            Defensive planning to shield your financial future.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
          <h4 className="text-xl font-semibold text-blue-800">🌍 Domestic & Global Access</h4>
          <p className="text-gray-600 mt-2">
            Explore opportunities across India and international markets.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
          <h4 className="text-xl font-semibold text-blue-800">🤝 Long-Term Support</h4>
          <p className="text-gray-600 mt-2">
            Strategy updates, reviews, and continuous guidance.
          </p>
        </div>
      </div>
    </div>


  </div>
</section>


{/* ========================== WHY CHOOSE ANAND WEALTH ========================== */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-2xl font-bold text-slate-800 text-center">
    Why Choose Anand Wealth Consultancy?
  </h2>

  <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
    Trusted advisory, strategic insights, and long-term financial clarity.
  </p>

  <motion.div
    className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      visible: { transition: { staggerChildren: 0.2 } },
    }}
  >

    {/* CARD TEMPLATE */}
    {[
      {
        initials: "EM",
        title: "Expert Wealth Management",
        desc: "Tailored strategies that evolve with your needs, ensuring your financial assets are managed and protected at every stage.",
        gradient: "from-sky-600 to-sky-700",
      },
      {
        initials: "SI",
        title: "Smart Investment Solutions",
        desc: "Access diversified, research-backed investment opportunities across both domestic and international markets.",
        gradient: "from-amber-400 to-amber-500",
      },
      {
        initials: "PS",
        title: "Personalized Service, Lasting Relationships",
        desc: "Receive clear, actionable advice rooted in your unique goals, risk appetite, and life ambitions—no two clients are ever the same.",
        gradient: "from-orange-300 to-orange-400",
      },
      {
        initials: "CM",
        title: "Continuous Monitoring & Guidance",
        desc: "Our team offers proactive insights, regular reviews, and strategy refinements to maximize growth and shield your wealth from risk.",
        gradient: "from-blue-400 to-blue-600",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center font-bold mb-4`}
        >
          {item.initials}
        </div>

        <h3 className="font-semibold text-lg text-slate-800">{item.title}</h3>
        <p className="mt-2 text-slate-600 text-sm leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </motion.div>
</section>


      {/* ========================== CTA ========================== */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-xl bg-gradient-to-r from-sky-50 to-white border p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h4 className="text-xl font-semibold text-slate-800">Ready to Grow Your Wealth?</h4>
            <p className="mt-2 text-slate-600">
              Book a free consultation and start your journey toward steady and responsible financial growth.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-700 text-white rounded font-semibold hover:bg-blue-800"
          >
            Book a Consultation
          </Link>

        </div>
      </section>

    </div>
  );
}
