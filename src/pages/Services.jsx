// src/pages/ServicesPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Lucide Icons
import {
  Shield,
  LineChart,
  Globe,
  ClipboardList,
  Wallet,
  BarChart3,
  PieChart,
  Landmark,
} from "lucide-react";

const services = [
  {
    id: "wealth-management",
    title: "Wealth Management & Protection",
    subtitle: "Preserve capital, plan legacies",
    desc:
      "Comprehensive asset preservation strategies, estate planning, risk protection and structured wealth transfer for future generations.",
    accent: "from-blue-600 to-blue-700",
    icon: Shield,
  },
  {
    id: "is",
    title: "Smart Investment Strategies",
    subtitle: "Research-backed, goal-aligned",
    desc:
      "Customized portfolios built for long-term growth — equities, debt, hybrid funds, SIPs, and alternative investment opportunities.",
    accent: "from-amber-400 to-amber-500",
    icon: LineChart,
  },
  {
    id: "gm",
    title: "Global Market Access",
    subtitle: "International opportunities",
    desc:
      "Diversify across geographies with curated exposure to US, Europe & Asian markets — ETFs, REITs, and international equity funds.",
    accent: "from-slate-300 to-slate-400",
    icon: Globe,
  },
  {
    id: "pf",
    title: "Personalized Financial Planning",
    subtitle: "Plans that fit your life",
    desc:
      "Goal-based roadmaps — retirement, education, wealth creation, liquidity planning — tailored to timelines and tax considerations.",
    accent: "from-orange-300 to-orange-400",
    icon: ClipboardList,
  },
  {
    id: "ta",
    title: "Tax-efficient Strategies",
    subtitle: "Keep more of your returns",
    desc:
      "Tax-aware investment selection, harvesting strategies and planning to optimize long-term after-tax returns.",
    accent: "from-slate-200 to-slate-300",
    icon: Landmark,
  },
  {
    id: "pm",
    title: "Portfolio Monitoring & Rebalancing",
    subtitle: "Active oversight",
    desc:
      "Ongoing performance tracking, rebalancing, tactical adjustments and quarterly reporting.",
    accent: "from-blue-400 to-blue-600",
    icon: BarChart3,
  },
  {
    id: "rp",
    title: "Retirement Planning",
    subtitle: "Income for your later years",
    desc:
      "Retirement calculations, long-term projections, withdrawal strategies, and pension/annuity planning.",
    accent: "from-yellow-400 to-amber-500",
    icon: Wallet,
  },
  {
    id: "nri",
    title: "NRI & International Advisory",
    subtitle: "Cross-border expertise",
    desc:
      "We guide NRIs with global investment structuring, taxation clarity, repatriation, and compliant cross-border solutions.",
    accent: "from-emerald-400 to-green-500",
    icon: PieChart,
  },
];

// Motion variants
const container = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
  hover: { scale: 1.03, transition: { duration: 0.18 } },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Our Wealth Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-slate-100/90 text-lg">
            Ethical, research-driven strategies to grow, protect, and manage your wealth across global markets.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold shadow-lg hover:bg-amber-500 transition"
            >
              Book a Consultation
            </Link>

            <a
              href="/mnt/data/Untitled document (5).pdf"
              className="inline-block px-5 py-3 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition text-white"
              download
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          What We Offer
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
        >
          {services.map((s) => (
            <motion.div
              key={s.id}
              variants={card}
              whileHover="hover"
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-blue-600 text-white ${s.accent}`}
                >
                  <s.icon className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{s.subtitle}</p>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>

                  <Link
                    to={`/services/${s.id}`}
                    className="inline-block mt-4 text-sm font-medium text-blue-700 hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-white border p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold text-slate-900">
              Ready to start your wealth journey?
            </h4>
            <p className="mt-2 text-slate-600">
              Schedule a free consultation with our senior advisors.
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
