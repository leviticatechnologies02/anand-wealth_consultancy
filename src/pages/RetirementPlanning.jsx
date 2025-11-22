import React from "react";
import { Calendar, Shield, Wallet, PiggyBank, LineChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function RetirementPlanning() {
  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold">Retirement Planning</h1>
          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-3xl">
            Secure your financial independence with structured, long-term strategies designed for stable post-retirement income.
          </p>

          <Link to="/contact" className="mt-8 inline-block px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500">
            Start Retirement Plan
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 max-w-6xl mx-auto text-center px-6">
        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>

        <h2 className="mt-6 text-2xl md:text-3xl font-bold">Retirement Should Be Worry-Free</h2>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          We build personalized retirement plans that balance growth, risk, income, and longevity.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-12 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold mb-8">Key Elements of Retirement Planning</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: "Future Income Planning", desc: "Map expected expenses, inflation, and retirement corpus." },
              { icon: LineChart, title: "Growth Strategy", desc: "Long-term investments for wealth accumulation." },
              { icon: Shield, title: "Risk Protection", desc: "Insurance and buffers to protect retirement goals." },
              { icon: PiggyBank, title: "Pension Structures", desc: "SIPs, SWPs, annuities and income-generation plans." },
              { icon: Wallet, title: "Tax-efficient Withdrawals", desc: "Minimize tax impact on retirement income." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center"><f.icon className="w-6 h-6" /></div>
                <h4 className="font-bold text-lg mt-4">{f.title}</h4>
                <p className="text-slate-600 text-sm mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="border p-10 bg-gradient-to-r from-indigo-50 to-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-2xl font-bold">Plan Your Comfortable Retirement</h4>
            <p className="text-slate-600 mt-2">We’ll help ensure your retirement is financially stress-free.</p>
          </div>

          <Link to="/contact" className="px-6 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 flex items-center gap-2">
            Start Planning <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
