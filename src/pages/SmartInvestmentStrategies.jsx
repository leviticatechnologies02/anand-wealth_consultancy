import React from "react";
import { 
  LineChart, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Globe2, 
  ShieldCheck, 
  Target, 
  Wallet, 
  Users 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SmartInvestmentStrategies() {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Smart Investment Strategies
          </h1>
          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-3xl">
            Build a disciplined, research-backed investment plan that balances growth potential,
            market stability, and long-term financial goals.
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

  {/* Left Icons */}
  <div className="hidden md:flex flex-col gap-4 absolute left-0 top-6 opacity-20">
    <TrendingUp className="w-10 h-10 text-sky-600" />
    <PieChart className="w-10 h-10 text-amber-500" />
    <Wallet className="w-10 h-10 text-purple-500" />
  </div>

  {/* Right Icons */}
  <div className="hidden md:flex flex-col gap-4 absolute right-0 top-6 opacity-20">
    <ShieldCheck className="w-10 h-10 text-green-600" />
    <BarChart3 className="w-10 h-10 text-blue-500" />
    <Target className="w-10 h-10 text-rose-500" />
  </div>

  <h2 className="text-2xl md:text-3xl text-center font-bold text-slate-900">
    Smarter Investments Begin with Strategy
  </h2>

  <p className="mt-4 text-slate-600 text-center leading-relaxed max-w-3xl mx-auto">
    Smart Investing is not about chasing returns. It’s about building a structured,
    diversified, and goal-linked plan that grows steadily, adapts to market cycles,
    and protects you from unnecessary risk.
  </p>

</section>



      {/* ================= CORE STRATEGIES ================= */}
      <section className="py-10 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
            Core Pillars of Smart Investing
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                icon: TrendingUp,
                title: "Growth-focused Equity Strategies",
                desc: "Systematic exposure to high-performing equity sectors with risk-adjusted allocation."
              },
              {
                icon: BarChart3,
                title: "Balanced & Hybrid Models",
                desc: "Blending equity, debt, and gold to deliver stability with consistent long-term returns."
              },
              {
                icon: PieChart,
                title: "Goal-based Investment Planning",
                desc: "Separate portfolios for child education, retirement, wealth creation, and income planning."
              },
              {
                icon: ShieldCheck,
                title: "Risk-managed Allocation",
                desc: "Ensuring safety through diversification, volatility control, and rebalancing."
              },
              {
                icon: Globe2,
                title: "Global Investment Access",
                desc: "Exposure to international stocks, ETFs, and global opportunities."
              },
              {
                icon: Wallet,
                title: "Tax-efficient Investing",
                desc: "Reduce long-term taxes using compliant and optimized financial instruments."
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

      {/* ================= PROCESS ================= */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-slate-900">How Our Strategy Works</h3>
        <p className="mt-3 text-slate-600 max-w-3xl">
          A disciplined, research-backed framework designed to maximize returns while reducing risk.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {[
            {
              title: "1. Personalized Financial Profiling",
              desc: "We understand your goals, income, obligations, and comfort with risk.",
              icon: Users
            },
            {
              title: "2. Asset Allocation Strategy",
              desc: "Creating the right mix of equity, debt, gold, real assets, and global markets.",
              icon: PieChart
            },
            {
              title: "3. Product Selection",
              desc: "Choosing the right mutual funds, stocks, bonds, ETFs, SIPs and passive products.",
              icon: BarChart3
            },
            {
              title: "4. SIP + Lump Sum Optimization",
              desc: "Balancing systematic investing with lump-sum opportunities based on market cycles.",
              icon: Wallet
            },
            {
              title: "5. Portfolio Monitoring",
              desc: "Tracking performance, volatility, and alignment with long-term goals.",
              icon: LineChart
            },
            {
              title: "6. Rebalancing & Review",
              desc: "Annual or quarterly rebalancing based on market conditions and life changes.",
              icon: ShieldCheck
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

      {/* ================= WHO IS THIS FOR ================= */}
      <section className="py-14 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-900">Who Benefits From Smart Investing?</h3>

          <ul className="mt-6 space-y-3 text-slate-700 text-lg">
            <li>• Individuals starting long-term wealth creation</li>
            <li>• Young professionals building early financial discipline</li>
            <li>• Families planning future financial milestones</li>
            <li>• High-income earners looking for diversification</li>
            <li>• NRIs aiming for India + Global exposure</li>
            <li>• Anyone wanting stable, compounding-based growth</li>
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-white border p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-slate-900">
              Ready to Build a Smarter Investment Plan?
            </h4>
            <p className="mt-2 text-slate-600">
              Our experts will design a structured, diversified investment roadmap for you.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
