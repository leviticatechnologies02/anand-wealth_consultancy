import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  // =============== SOCIAL ICONS ===============
  const SocialIcons = {
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.82 2.82 0 0 1 12 14.8zM17.3 6a1.1 1.1 0 1 0 1.1 1.1A1.11 1.11 0 0 0 17.3 6z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3h14zM8.34 17v-7H5.67v7h2.67zm-1.33-8a1.55 1.55 0 1 0-1.67-1.55A1.52 1.52 0 0 0 7.01 9zM19 17v-4.2c0-2.6-1.4-3.8-3.2-3.8a2.75 2.75 0 0 0-2.6 1.4h-.1V10h-2.6v7h2.7v-3.8a1.47 1.47 0 0 1 1.4-1.6c1 0 1.5.7 1.5 1.8V17H19z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
    ),
  };

  // ================= WEALTH LEGAL CONTENT ==================
  const legalContent = {
    Privacy: {
      title: "Privacy Policy",
      content: `
        <p class="text-gray-700">
          We value your privacy and protect your financial data through industry-standard
          security and confidentiality protocols.
        </p>
        <ul class="list-disc list-inside mt-3 text-gray-600">
          <li>We do not share your financial details with third parties.</li>
          <li>Your consultation data is fully encrypted.</li>
          <li>We store only essential information required for service delivery.</li>
        </ul>
      `,
    },
    Terms: {
      title: "Terms & Conditions",
      content: `
        <p class="text-gray-700">
          By using our services, you agree to responsible financial decision-making and
          acknowledge that all investment decisions carry risks.
        </p>
        <ul class="list-disc list-inside mt-3 text-gray-600">
          <li>All advisory is based on available market information.</li>
          <li>We do not guarantee returns; markets involve inherent risks.</li>
          <li>Clients are responsible for reviewing and approving plans.</li>
        </ul>
      `,
    },
    Disclaimer: {
      title: "Financial Disclaimer",
      content: `
        <p class="text-gray-700">
          Our recommendations are based on research, experience, and professional analysis,
          but market performance cannot be predicted with certainty.
        </p>
        <ul class="list-disc list-inside mt-3 text-gray-600">
          <li>Past performance does not guarantee future results.</li>
          <li>Clients should review risk appetite before investing.</li>
          <li>We do not provide legal or tax advice unless specified.</li>
        </ul>
      `,
    },
    Compliance: {
      title: "Compliance & Ethics",
      content: `
        <p class="text-gray-700">
          Anand Wealth Consultancy follows ethical, transparent, and compliant financial
          practices across all advisory services.
        </p>
        <ul class="list-disc list-inside mt-3 text-gray-600">
          <li>All recommendations are research-backed.</li>
          <li>Client-first policy drives all our advisory decisions.</li>
          <li>We comply with recognized financial standards and guidelines.</li>
        </ul>
      `,
    },
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-[#0a1222] to-[#050a14] text-white">
        <div className="container mx-auto px-6 pt-12 pb-6">

          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* BRAND */}
            <div>
              <img
                src="/images/Anandhlogo.png"
                className="w-16 h-20 object-contain mb-3"
                alt="Anand Wealth Logo"
              />

              <h2 className="text-2xl font-bold text-yellow-400">
                ANAND <span className="text-white">WEALTH</span>
              </h2>

              <p className="text-slate-300 mt-3 text-sm leading-relaxed">
                Helping individuals and businesses make smart, strategic, and sustainable
                financial choices for long-term security and growth.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-3 mt-4">
                {["facebook", "instagram", "linkedin", "youtube"].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all"
                  >
                    {SocialIcons[icon]}
                  </a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
                <li><Link to="/wealth" className="hover:text-yellow-400">Wealth Services</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
                <li>
                  <a
                    href="/mnt/data/Untitled document (5).pdf"
                    className="hover:text-yellow-400"
                  >
                    Download Brochure
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contact</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Email: info@anandwealth.com <br />
                Phone: +91 90000 12345 <br />
                Hyderabad, Telangana
              </p>
            </div>
          </div>

          {/* LEGAL */}
          <div className="mt-10 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Anand Wealth Consultancy. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm mt-3 md:mt-0">
              {["Privacy", "Terms", "Disclaimer", "Compliance"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveModal(item)}
                  className="hover:text-yellow-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* LEGAL MODAL */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white text-slate-800 rounded-lg max-w-xl w-full p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{legalContent[activeModal].title}</h2>
              <button
                onClick={() => setActiveModal(null)}
                className="text-xl hover:text-red-500"
              >
                ×
              </button>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: legalContent[activeModal].content }}
              className="text-sm leading-relaxed"
            />

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
