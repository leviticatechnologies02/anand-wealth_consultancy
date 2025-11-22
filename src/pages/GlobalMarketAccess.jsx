import React from "react";
import {
  Globe2,
  BarChart3,
  LineChart,
  PieChart,
  ShieldCheck,
  TrendingUp,
  Target,
  Briefcase,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function GlobalMarketAccess() {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Global Market Access
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl">
            Grow and diversify your wealth by accessing international markets,
            global ETFs, foreign equities, and world-class investment avenues.
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

      {/* ================= INTRO ================= */}
      <section className="py-14 max-w-6xl mx-auto text-center px-6 relative">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          The World is Your Investment Playground
        </h2>

        <p className="mt-4 text-slate-600 text-center leading-relaxed max-w-3xl mx-auto">
          Global diversification offers access to industries, innovation, and economic
          growth beyond domestic markets — reducing risk and unlocking unmatched potential.
        </p>
      </section>


      {/* ================= CORE BENEFITS ================= */}
      <section className="py-10 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
            Key Advantages of Global Market Investing
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                icon: Globe2,
                title: "Diversify Beyond India",
                desc: "Reduce concentration risk by investing across developed, emerging, and frontier markets."
              },
              {
                icon: BarChart3,
                title: "Access High-Growth Sectors",
                desc: "Invest in global tech, AI, EV, biotech, and innovation-led companies."
              },
              {
                icon: TrendingUp,
                title: "Strong Currency Advantage",
                desc: "USD-based investments historically offer long-term appreciation over INR."
              },
              {
                icon: Landmark,
                title: "Global ETFs & Index Funds",
                desc: "Low-cost exposure to the world’s top companies and global indices."
              },
              {
                icon: Target,
                title: "Reduced Portfolio Volatility",
                desc: "Different countries peak at different times — smoothing risk cycles."
              },
              {
                icon: ShieldCheck,
                title: "Regulated & Secure",
                desc: "Invest through highly transparent, globally-compliant systems."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition">
                <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mt-4">{item.title}</h4>
                <p className="text-slate-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= WHAT YOU CAN INVEST IN ================= */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-slate-900">Where You Can Invest Globally</h3>
        <p className="mt-3 text-slate-600 max-w-3xl">
          A wide range of world-class investment opportunities tailored for every risk profile.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {[
            {
              title: "US Stock Market (NASDAQ, NYSE)",
              desc: "Invest in Apple, Google, Tesla, Amazon, Nvidia, Microsoft and more.",
              icon: LineChart
            },
            {
              title: "Global ETFs / Index Funds",
              desc: "S&P 500, Nasdaq 100, MSCI World, Emerging Markets, Gold & more.",
              icon: PieChart
            },
            {
              title: "International Bonds",
              desc: "Stable, fixed-income opportunities across global governments and corporates.",
              icon: ShieldCheck
            },
            {
              title: "Thematic Investments",
              desc: "EV, robotics, AI, healthcare, green energy, space tech, cybersecurity.",
              icon: Target
            },
            {
              title: "Developed Market Exposure",
              desc: "USA, Europe, Japan, Australia & advanced economies.",
              icon: Briefcase
            },
            {
              title: "Emerging & Frontier Markets",
              desc: "Vietnam, Brazil, UAE, Mexico, Indonesia & more.",
              icon: Globe2
            }
          ].map((item, idx) => (
            <div key={idx} className="border p-6 rounded-xl shadow-sm bg-white hover:shadow-lg transition">
              <item.icon className="w-8 h-8 text-indigo-700" />
              <h4 className="text-lg font-bold mt-4">{item.title}</h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= WHO SHOULD INVEST ================= */}
      <section className="py-14 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-900">Who Should Consider Global Access?</h3>

          <ul className="mt-6 space-y-3 text-slate-700 text-lg">
            <li>• Investors seeking worldwide diversification</li>
            <li>• High-income earners looking for USD exposure</li>
            <li>• NRIs wanting India + Global portfolio balance</li>
            <li>• Long-term investors seeking high-growth industries</li>
            <li>• Anyone wanting to reduce domestic market dependency</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-white border p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-slate-900">
              Ready to Invest in Global Markets?
            </h4>
            <p className="mt-2 text-slate-600">
              Our experts help you build an international, diversified investment roadmap.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 flex items-center gap-2"
          >
            Start Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
