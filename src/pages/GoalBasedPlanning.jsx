import React from "react";
import { Target, PieChart, Calendar, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function GoalBasedPlanning() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Goal-Based Personalized Planning</h1>
          <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-3xl">
            Plans built for specific life goals — education, home, retirement, legacy — with measurable targets and timelines.
          </p>

          <div className="mt-8">
            <Link to="/contact" className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold shadow-md hover:bg-amber-500">
              Start a Goal Plan
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 max-w-6xl mx-auto text-center px-6">
        <div className="flex justify-center mb-6"><div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div></div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Design plans around what matters most</h2>
        <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl mx-auto">
          We translate goals into timelines and investment roadmaps — so you can measure progress and adapt as life evolves.
        </p>
      </section>

      {/* GOAL TYPES */}
      <section className="py-10 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">Popular Goal Types</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Retirement", desc: "A disciplined plan to ensure financial comfort and independence." },
              { icon: PieChart, title: "Child Education", desc: "Goal-synced portfolio to meet tuition & higher education costs." },
              { icon: Calendar, title: "Home Purchase", desc: "Structured savings & debt planning for property acquisition." },
              { icon: ShieldCheck, title: "Protection & Emergency", desc: "Insurance-first approach to secure goals from shocks." },
              { icon: Users, title: "Wealth Transfer", desc: "Estate & legacy planning for tax-efficient transfer." },
              { icon: PieChart, title: "Short-term Goals", desc: "Liquidity-aware strategies for near-term objectives." }
            ].map((g, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition">
                <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-lg flex items-center justify-center"><g.icon className="w-6 h-6" /></div>
                <h4 className="font-bold text-lg mt-4">{g.title}</h4>
                <p className="text-slate-600 text-sm mt-2">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-slate-900">How We Translate Goals Into Plans</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { title: "Define Target", desc: "Clear financial target with time-horizon and required corpus." },
            { title: "Build Portfolio", desc: "Asset mix aligned to target and risk profile." },
            { title: "Track & Adjust", desc: "Regular milestones and course-correction where needed." }
          ].map((m, idx) => (
            <div key={idx} className="border p-6 rounded-xl shadow-sm bg-white hover:shadow-lg transition">
              <h4 className="text-lg font-bold">{m.title}</h4>
              <p className="text-slate-600 text-sm mt-2">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-white border p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-slate-900">Ready to set clear financial goals?</h4>
            <p className="mt-2 text-slate-600">We’ll create a measurable plan to reach them.</p>
          </div>

          <Link to="/contact" className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 flex items-center gap-2">
            Start Your Goal Plan <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
