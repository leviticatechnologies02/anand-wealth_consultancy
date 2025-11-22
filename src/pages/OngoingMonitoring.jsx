import React from "react";
import { Clock, BarChart3, ShieldCheck, RefreshCw, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OngoingMonitoring() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Ongoing Monitoring & Refinement</h1>
          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-3xl">
            Continuous portfolio oversight — timely rebalancing and adaptive strategy updates to keep goals on track.
          </p>

          <div className="mt-8">
            <Link to="/contact" className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold shadow-md hover:bg-amber-500">
              Request a Review
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 max-w-6xl mx-auto text-center px-6">
        <div className="flex justify-center mb-6"><div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div></div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Keep your plan aligned with life & markets</h2>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Markets change, life changes. Our monitoring ensures your portfolio adapts without losing sight of long-term goals.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="py-10 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">Our Monitoring Framework</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Regular Reviews", desc: "Quarterly & annual performance reviews with actionable suggestions." },
              { icon: BarChart3, title: "Performance Attribution", desc: "Understand what's driving returns and where risks concentrate." },
              { icon: ShieldCheck, title: "Risk Oversight", desc: "Stress tests, scenario analysis and risk-limit checks." },
              { icon: RefreshCw, title: "Rebalancing", desc: "Maintain target allocations with disciplined rebalancing rules." },
              { icon: Users, title: "Advisor Access", desc: "Direct lines to advisors for questions, clarifications and advice." },
              { icon: BarChart3, title: "Tax-aware Adjustments", desc: "Implement changes mindful of tax implications & efficiency." }
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition">
                <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-lg flex items-center justify-center"><m.icon className="w-6 h-6" /></div>
                <h4 className="font-bold text-lg mt-4">{m.title}</h4>
                <p className="text-slate-600 text-sm mt-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-slate-900">How Refinement Happens</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { title: "Data-driven Signals", desc: "We combine market signals and goal progress to recommend changes." },
            { title: "Cost-aware Changes", desc: "Adjustments optimized for taxes, costs and execution risk." },
            { title: "Client-first Approvals", desc: "We only implement with your approval and full transparency." }
          ].map((p, idx) => (
            <div key={idx} className="border p-6 rounded-xl shadow-sm bg-white hover:shadow-lg transition">
              <h4 className="text-lg font-bold">{p.title}</h4>
              <p className="text-slate-600 text-sm mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-white border p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-slate-900">Want a portfolio health-check?</h4>
            <p className="mt-2 text-slate-600">Request a free portfolio review from our specialists.</p>
          </div>

          <Link to="/contact" className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 flex items-center gap-2">
            Request Review <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
