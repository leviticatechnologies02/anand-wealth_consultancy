import React from "react";
import { PercentCircle, Wallet, PieChart, TrendingUp, FileChartColumn, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TaxEfficientStrategies() {
  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold">Tax-Efficient Investment Strategies</h1>
          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-3xl">
            Maximize returns by keeping taxes low. Strategic planning ensures more wealth stays in your hands.
          </p>

          <Link to="/contact" className="mt-8 inline-block px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500">
            Speak to a Tax Advisor
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 text-center max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold">Grow Wealth, Reduce Taxes</h2>
        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
          We use compliant, optimized strategies to lower tax liability across investments—without compromising returns.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-12 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold mb-8">Key Tax Strategies</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: PercentCircle, title: "Tax-saving Instruments", desc: "ELSS, NPS, and other high-efficiency products." },
              { icon: Wallet, title: "Capital Gains Planning", desc: "Minimize tax on equity, debt, and real assets." },
              { icon: PieChart, title: "Smart Asset Allocation", desc: "Allocate assets in structures with lower taxation." },
              { icon: TrendingUp, title: "Dividend Optimization", desc: "Maximize post-tax income with smart fund selection." },
              { icon: FileChartColumn, title: "Year-round Tax Monitoring", desc: "Avoid last-minute rush with proactive planning." },
            ].map((f, i) => (
              <div className="bg-white p-6 border rounded-xl shadow-sm hover:shadow-lg transition" key={i}>
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center">
                  <f.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mt-4">{f.title}</h4>
                <p className="text-slate-600 text-sm mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-indigo-50 to-white border p-10 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-2xl font-bold">Need a Tax-Optimized Portfolio?</h4>
            <p className="text-slate-600 mt-2">We’ll help you structure a wealth plan that saves money every year.</p>
          </div>

          <Link to="/contact" className="px-6 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 flex items-center gap-2">
            Optimize Taxes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
