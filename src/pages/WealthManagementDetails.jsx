import React from "react";
import { Shield, Layers, Target, LineChart, CheckCircle2, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function WealthManagementDetails() {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-10 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Wealth Management & Protection
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl">
            Structured strategies designed to protect your wealth today, preserve it for tomorrow,
            and grow it responsibly for the future.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold shadow-md hover:bg-amber-500"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS WM ================= */}
     <section className="relative py-10 overflow-hidden">

  {/* Soft Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none" />



  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

    {/* Decorative Divider */}
    <div className="flex justify-center mb-6">
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
    </div>

    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
      What is Wealth Management & Protection?
    </h2>

    <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl mx-auto text-lg">
      Wealth Management & Protection is a holistic strategy that integrates asset growth,
      risk mitigation, tax efficiency, estate planning, and long-term financial protection —
      ensuring your wealth not only grows but remains secure for future generations.
    </p>

  

  </div>

</section>


      {/* ================= KEY PILLARS ================= */}
      <section className="py-10 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
            Key Pillars of Wealth Protection
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                icon: Shield,
                title: "Asset Protection",
                desc: "Safeguarding your wealth through structured financial planning, risk mitigation and diversified allocation."
              },
              {
                icon: Layers,
                title: "Portfolio Structuring",
                desc: "Balanced allocation across equity, debt, gold, real assets, and global markets."
              },
              {
                icon: Target,
                title: "Goal-aligned Planning",
                desc: "Plans designed around life goals — retirement, education, income planning, and family protection."
              },
              {
                icon: LineChart,
                title: "Risk-managed Growth",
                desc: "Investment strategies that grow wealth while controlling volatility and market risks."
              },
              {
                icon: CheckCircle2,
                title: "Tax-efficient Planning",
                desc: "Reduce long-term tax impact using compliant and optimized investment structures."
              },
              {
                icon: Users,
                title: "Legacy & Estate Planning",
                desc: "Plan generational wealth transfers smoothly and securely, supported by legal clarity."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition">
                <div className="bg-blue-100 text-blue-700 w-12 h-12 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mt-4">{item.title}</h4>
                <p className="text-slate-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-slate-900">How We Manage Your Wealth</h3>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Our research-backed approach ensures disciplined, transparent, and results-driven wealth management.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {[
            {
              title: "1. Financial Profiling",
              desc: "Understanding your income, assets, risk appetite, obligations, and investment horizon.",
              icon: Users
            },
            {
              title: "2. Portfolio Construction",
              desc: "We design a personalized asset allocation plan aligned with your growth and protection needs.",
              icon: Layers
            },
            {
              title: "3. Risk Management",
              desc: "Using diversification, hedging, and liquidity buffers to reduce market exposure.",
              icon: Shield
            },
            {
              title: "4. Tax Optimization",
              desc: "Strategies built to enhance long-term returns by minimizing tax liabilities.",
              icon: CheckCircle2
            },
            {
              title: "5. Monthly Monitoring",
              desc: "Tracking portfolio performance and adjusting for market cycles.",
              icon: BarChart3
            },
            {
              title: "6. Annual Review",
              desc: "Goal progress review, rebalancing, and financial roadmap refinement.",
              icon: LineChart
            }
          ].map((item, idx) => (
            <div key={idx} className="border p-6 rounded-xl shadow-sm bg-white hover:shadow-lg transition">
              <item.icon className="w-8 h-8 text-blue-700" />
              <h4 className="text-lg font-bold mt-4">{item.title}</h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= WHO IS THIS FOR ================= */}
      <section className="py-10 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-900">Who Is This Service For?</h3>

          <ul className="mt-6 space-y-3 text-slate-700 text-lg">
            <li>• Individuals seeking long-term financial security</li>
            <li>• Professionals wanting structured investment discipline</li>
            <li>• High-income earners requiring tax-efficient planning</li>
            <li>• Families planning generational wealth transfer</li>
            <li>• Business owners looking to diversify outside operations</li>
            <li>• NRIs needing cross-border advisory support</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-white border p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-slate-900">Ready to Protect & Grow Your Wealth?</h4>
            <p className="mt-2 text-slate-600">
              Connect with our advisors for a personalized wealth strategy.
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

    </div>
  );
}
