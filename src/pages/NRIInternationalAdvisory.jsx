import React from "react";
import { Globe2, Landmark, Wallet, ShieldCheck, Plane, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NRIInternationalAdvisory() {
  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
<section className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex flex-col items-start gap-6"> 
      <h1 className="text-3xl md:text-5xl font-extrabold">
        NRI & International Advisory
      </h1>

      <p className="text-lg md:text-xl text-indigo-100 max-w-3xl leading-relaxed">
        Specialized advisory for NRIs and global investors—covering taxation, 
        compliance, repatriation, and India/global investing.
      </p>

      <Link
        to="/contact"
        className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-500 inline-block"
      >
        Speak with an NRI Specialist
      </Link>
    </div>

  </div>
</section>


      {/* INTRO */}
      <section className="py-14 max-w-6xl mx-auto text-center px-6">
        <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>

        <h2 className="mt-6 text-2xl md:text-3xl font-bold">Global Investors Need Local Insight</h2>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          From NRE/NRO investments to international diversification—we help NRIs manage wealth seamlessly across borders.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-12 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold mb-8">Our NRI Advisory Expertise</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe2, title: "Cross-border Planning", desc: "Invest, save, and repatriate across global jurisdictions." },
              { icon: Landmark, title: "NRE / NRO Advisory", desc: "Structuring Indian investments for NRIs & OCI holders." },
              { icon: Wallet, title: "Global Diversification", desc: "Access to global funds, ETFs, and international equities." },
              { icon: ShieldCheck, title: "Tax & Compliance", desc: "Capital gains, DTAA, FATCA, FEMA & repatriation guidance." },
              { icon: Plane, title: "Relocation Planning", desc: "Financial setup for returning NRIs or new expatriates." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center"><f.icon className="w-6 h-6" /></div>
                <h4 className="text-lg font-bold mt-4">{f.title}</h4>
                <p className="text-slate-600 text-sm mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="p-10 border rounded-2xl bg-gradient-to-r from-indigo-50 to-white flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-2xl font-bold">Manage Wealth Across Borders</h4>
            <p className="text-slate-600 mt-2">Get expert strategies for both India and global portfolios.</p>
          </div>

          <Link to="/contact" className="px-6 py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 flex items-center gap-2">
            Start Advisory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
