import React from "react";
import { Users, ClipboardList, HeartHandshake, Globe2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PersonalizedFinancialPlanning() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Personalized Financial Planning
          </h1>
          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-3xl">
            Bespoke financial plans built around your life goals, risk profile, and timelines — structured for clarity and results.
          </p>

          <div className="mt-8">
            <Link to="/contact" className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold shadow-md hover:bg-amber-500">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 max-w-6xl mx-auto text-center px-6">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Tailored plans that match your life</h2>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl mx-auto">
          We craft plans that combine investment strategy, tax-efficiency, protection, and estate considerations — all personalised to you.
        </p>
      </section>

      {/* WHAT WE COVER */}
      <section className="py-10 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">What a Personalized Plan Includes</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Client Profiling", desc: "Deep-dive into goals, cashflows, responsibilities and timelines." },
              { icon: ClipboardList, title: "Holistic Asset Strategy", desc: "Allocation across equity, debt, alternatives and global exposure." },
              { icon: HeartHandshake, title: "Protection & Insurance", desc: "Life, health and liability plans aligned to protect family & wealth." },
              { icon: Globe2, title: "Tax & Estate Planning", desc: "Tax-aware structuring and legacy planning for generational wealth transfer." },
              { icon: ClipboardList, title: "Cashflow & Liquidity", desc: "Emergency funds and liquidity planning for life events." },
              { icon: Users, title: "Implementation Roadmap", desc: "Step-by-step execution plan with timelines and responsibilities." }
            ].map((it, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition">
                <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-lg flex items-center justify-center"><it.icon className="w-6 h-6" /></div>
                <h4 className="font-bold text-lg mt-4">{it.title}</h4>
                <p className="text-slate-600 text-sm mt-2">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-slate-900">Our Process</h3>
        <p className="mt-3 text-slate-600 max-w-3xl">Collaborative, transparent, and measurable — designed to keep you on track.</p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { title: "Discover", desc: "Understand your current position, obligations and aspirations." },
            { title: "Design", desc: "Create a tailored roadmap combining investments, protection and tax efficiency." },
            { title: "Deliver", desc: "Implement with monitored milestones and periodic reviews." }
          ].map((s, idx) => (
            <div key={idx} className="border p-6 rounded-xl shadow-sm bg-white hover:shadow-lg transition">
              <h4 className="text-lg font-bold">{s.title}</h4>
              <p className="text-slate-600 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-white border p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-slate-900">Start Your Personalized Plan</h4>
            <p className="mt-2 text-slate-600">Schedule a consultation to begin a bespoke financial roadmap.</p>
          </div>

          <Link to="/contact" className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 flex items-center gap-2">
            Book Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
