import React from "react";
import { LineChart, RefreshCw, ShieldCheck, BarChart3, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PortfolioMonitoringRebalancing() {
  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold">Portfolio Monitoring & Rebalancing</h1>
          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-3xl">
            Your financial plan needs ongoing refinement. Our continuous monitoring ensures your portfolio stays aligned with markets—and your life.
          </p>

          <div className="mt-8">
            <Link to="/contact" className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500">
              Request Portfolio Review
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 max-w-6xl mx-auto text-center px-6">
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mt-6">
          Keep Your Investments on Track — Always
        </h2>

        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Markets shift. Goals evolve. Risks change. Our monitoring system ensures your portfolio adjusts intelligently—without losing long-term direction.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-10 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold mb-8">What We Provide</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LineChart, title: "Performance Tracking", desc: "Monitor returns, volatility, and asset-level performance." },
              { icon: RefreshCw, title: "Strategic Rebalancing", desc: "Restore ideal allocation whenever markets drift." },
              { icon: ShieldCheck, title: "Risk Assessment", desc: "Identify growing risks and take preventive action." },
              { icon: BarChart3, title: "Market Insights", desc: "Data-driven signals on global and domestic market trends." },
              { icon: Clock, title: "Periodic Reviews", desc: "Quarterly/annual portfolio analysis with advisor guidance." },
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
        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-white border p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-2xl font-bold">Need a Portfolio Health Check?</h4>
            <p className="mt-2 text-slate-600">We’ll evaluate your current plan and recommend needed changes.</p>
          </div>

          <Link to="/contact" className="px-6 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 flex items-center gap-2">
            Request Review <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
