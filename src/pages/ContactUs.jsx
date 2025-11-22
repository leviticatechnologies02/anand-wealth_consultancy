// File: src/pages/ContactAdvancedWithMapBottomWealth.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Anand Wealth Consultancy — Advanced Contact Page (Option B - Balanced Investment Options)
 * - Converted from real-estate contact page to Wealth Consultancy contact page
 * - Uses local brochure file uploaded at: /mnt/data/Untitled document (5).pdf
 *
 * Drop into: src/pages/ContactAdvancedWithMapBottomWealth.jsx
 */

const initialForm = {
  name: "",
  email: "",
  phone: "",
  investmentType: "",
  riskAppetite: "",
  annualIncome: "",
  investmentHorizon: "",
  preferredContact: "",
  subject: "",
  message: "",
  website: "" // honeypot
};

export default function ContactAdvancedWithMapBottomWealth() {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem("anand_wealth_contact_draft");
      return saved ? JSON.parse(saved) : initialForm;
    } catch {
      return initialForm;
    }
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // refs & in-view hooks
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, threshold: 0.15 });

  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, margin: "0px 0px -120px 0px" });

  useEffect(() => {
    const t = setTimeout(() => {
      localStorage.setItem("anand_wealth_contact_draft", JSON.stringify(formData));
    }, 600);
    return () => clearTimeout(t);
  }, [formData]);

  useEffect(() => {
    if (submitStatus === "success") {
      const t = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(t);
    }
  }, [submitStatus]);

  // Contact methods (wealth-branded)
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: "Email Us",
      description: "Detailed financial responses",
      details: ["info@anandwealth.com"],
      action: "Send Email",
      link: "mailto:info@anandwealth.com",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: "Call Us",
      description: "Speak with a wealth specialist",
      details: ["+91 90000 12345"],
      action: "Call Now",
      link: "tel:+919000012345",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
        </svg>
      ),
      title: "WhatsApp",
      description: "Quick chat assistance",
      details: ["+91 90000 12345"],
      action: "Start Chat",
      link: "https://wa.me/919000012345",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600"
    }
  ];

  // Investment options (Option 3 - Mix)
  const investmentOptions = [
    "Mutual Funds / SIP",
    "Equity / Stocks",
    "Bonds / Fixed Income",
    "Tax-saving Investments",
    "Retirement Planning",
    "Insurance & Protection Plans",
    "NRI Wealth Planning",
    "PMS / AIF / Alternative Investments",
    "REITs & Real Asset Exposure",
    "International Market Exposure",
    "Portfolio Review / Rebalancing"
  ];

  const incomeRanges = [
    "Below ₹5 Lakhs / year",
    "₹5 - 10 Lakhs / year",
    "₹10 - 25 Lakhs / year",
    "₹25 - 50 Lakhs / year",
    "₹50 Lakhs - ₹1 Crore / year",
    "Above ₹1 Crore / year",
    "Prefer not to disclose"
  ];

  const horizons = [
    "Under 1 year",
    "1 - 3 years",
    "3 - 5 years",
    "5 - 10 years",
    "10+ years",
    "Just exploring"
  ];

  const contactPrefs = [
    "Phone Call",
    "WhatsApp",
    "Video Meeting",
    "Office Visit",
    "Email Only"
  ];

  const riskProfiles = ["Low", "Moderate", "Balanced", "Aggressive"];

  // validation
  const validate = (data) => {
    const e = {};
    if (!data.name?.trim()) e.name = "Name is required";
    if (!data.email?.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email";
    if (!data.phone?.trim()) e.phone = "Phone is required";
    else if (!/^\+?[0-9 ]{7,15}$/.test(data.phone)) e.phone = "Enter a valid phone number";
    if (!data.investmentType) e.investmentType = "Please select investment type";
    if (!data.riskAppetite) e.riskAppetite = "Please select risk appetite";
    if (!data.annualIncome) e.annualIncome = "Please select income range";
    if (!data.investmentHorizon) e.investmentHorizon = "Please select time horizon";
    if (!data.preferredContact) e.preferredContact = "Please select preferred contact method";
    if (!data.subject?.trim()) e.subject = "Subject is required";
    if (!data.message?.trim() || data.message.trim().length < 10) e.message = "Please provide a helpful message (min 10 chars)";
    if (data.website && data.website.trim().length > 0) e.website = "Spam detected";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const eObj = validate(formData);
  if (Object.keys(eObj).length > 0) {
    setErrors(eObj);
    const firstKey = Object.keys(eObj)[0];
    document.querySelector(`[name="${firstKey}"]`)?.focus();
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch("https://yourdomain.com/mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
      setSubmitStatus("success");
      setFormData(initialForm);
      localStorage.removeItem("anand_wealth_contact_draft");
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2500);
    } else {
      setSubmitStatus("error");
    }
  } catch (err) {
    setSubmitStatus("error");
  }

  setIsSubmitting(false);
};


  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION — Wealth-focused */}
      <section className="relative py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/12 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-22 animate-pulse-medium"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-300/30 rounded-full mix-blend-overlay filter blur-3xl opacity-26 animate-pulse-slow"></div>

          {/* subtle stars */}
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-amber-300 rounded-full animate-twinkle"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-200 rounded-full animate-twinkle-delay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl mb-6">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                  Let's <span className="text-amber-300">Connect</span>
                </h1>
                <p className="text-base md:text-lg text-blue-100 mb-3 leading-relaxed">
                  Ready to plan your financial future? Book a consultation and our advisors will help design a plan tailored to your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-3">
                  <a href="tel:+919000012345" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg text-sm inline-flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    Call Now
                  </a>
                  <a href="https://wa.me/919000012345" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg text-sm inline-flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section ref={sectionRef} className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" animate={sectionInView ? "visible" : "hidden"} variants={{ visible: { transition: { staggerChildren: 0.06 } } }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

              {/* CONTACT INFO CARD */}
              <motion.div variants={fadeUp} className="lg:col-span-1 flex">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 w-full flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Get In Touch</h2>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                      Looking for financial guidance? Tell us about your goals and we'll connect you with an advisor for a tailored plan.
                    </p>

                    <div className="space-y-4 mb-6">
                      {contactMethods.map((method, index) => (
                        <div key={index} className={`p-4 rounded-lg border ${method.borderColor} ${method.bgColor} transition-all duration-300 hover:shadow-sm`}>
                          <div className="flex items-start space-x-3">
                            <span className={method.iconColor}>{method.icon}</span>
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-800 text-sm">{method.title}</h3>
                              <p className="text-slate-600 text-xs mb-2">{method.description}</p>
                              {method.details.map((detail, idx) => (
                                <p key={idx} className="text-slate-700 font-medium text-sm">{detail}</p>
                              ))}
                            </div>
                          </div>
                          <a
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-3 inline-block w-full text-center py-2 px-4 bg-gradient-to-r ${method.color} text-white rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2`}
                          >
                            {method.icon}
                            {method.action}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">Office Hours</h4>
                    <p className="text-slate-600 text-xs"><strong>Monday - Saturday</strong>: 9:00 AM - 7:00 PM</p>
                    <p className="text-slate-600 text-xs"><strong>Sunday</strong>: 10:00 AM - 2:00 PM</p>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-slate-800 mb-3 text-sm">Follow Us</h4>
                      <div className="flex space-x-3">
                        <a href="https://linkedin.com/company/anandwealth" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105" aria-label="LinkedIn">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z"/></svg>
                        </a>
                        <a href="https://twitter.com/anandwealth" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105" aria-label="Twitter">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </a>
                        <a href="https://wa.me/919000012345" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105" aria-label="WhatsApp">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                        </a>
                        <a href="mailto:info@anandwealth.com" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-2 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105" aria-label="Email">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FORM CARD */}
              <motion.div variants={fadeUp} className="lg:col-span-2 flex">
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200 w-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Request a Consultation</h2>
                        <p className="text-slate-600 text-sm md:text-base max-w-2xl">
                          Share your investment goals and preferences — our advisors will reach out with a tailored plan.
                        </p>
                      </div>
                    </div>

                    {submitStatus === "success" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-emerald-800 text-sm md:text-base">Request Submitted!</h4>
                            <p className="text-emerald-600 text-xs md:text-sm">Our advisor will contact you shortly to schedule a consultation.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-6 text-rose-700 text-sm">
                        Something went wrong. Please try again later or contact us directly.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField id="name" label="Full Name *" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" error={errors.name} required />
                        <FormField id="email" label="Email Address *" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" error={errors.email} required />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField id="phone" label="Phone Number *" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 90000 12345" error={errors.phone} required />

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Investment Type *</label>
                          <select name="investmentType" value={formData.investmentType} onChange={handleChange} className={`w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border ${errors.investmentType ? "border-rose-400" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 text-sm md:text-base`} aria-invalid={!!errors.investmentType}>
                            <option value="">Select investment type</option>
                            {investmentOptions.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}
                          </select>
                          {errors.investmentType && <p className="text-rose-600 text-sm mt-2">{errors.investmentType}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Risk Appetite *</label>
                          <select name="riskAppetite" value={formData.riskAppetite} onChange={handleChange} className={`w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border ${errors.riskAppetite ? "border-rose-400" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 text-sm md:text-base`} aria-invalid={!!errors.riskAppetite}>
                            <option value="">Select risk appetite</option>
                            {riskProfiles.map((r, idx) => <option key={idx} value={r}>{r}</option>)}
                          </select>
                          {errors.riskAppetite && <p className="text-rose-600 text-sm mt-2">{errors.riskAppetite}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Income *</label>
                          <select name="annualIncome" value={formData.annualIncome} onChange={handleChange} className={`w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border ${errors.annualIncome ? "border-rose-400" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 text-sm md:text-base`} aria-invalid={!!errors.annualIncome}>
                            <option value="">Select income range</option>
                            {incomeRanges.map((inc, idx) => <option key={idx} value={inc}>{inc}</option>)}
                          </select>
                          {errors.annualIncome && <p className="text-rose-600 text-sm mt-2">{errors.annualIncome}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Investment Horizon *</label>
                          <select name="investmentHorizon" value={formData.investmentHorizon} onChange={handleChange} className={`w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border ${errors.investmentHorizon ? "border-rose-400" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 text-sm md:text-base`} aria-invalid={!!errors.investmentHorizon}>
                            <option value="">Select time horizon</option>
                            {horizons.map((h, idx) => <option key={idx} value={h}>{h}</option>)}
                          </select>
                          {errors.investmentHorizon && <p className="text-rose-600 text-sm mt-2">{errors.investmentHorizon}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Contact *</label>
                        <select name="preferredContact" value={formData.preferredContact} onChange={handleChange} className={`w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border ${errors.preferredContact ? "border-rose-400" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 text-sm md:text-base`} aria-invalid={!!errors.preferredContact}>
                          <option value="">Select preferred contact</option>
                          {contactPrefs.map((p, idx) => <option key={idx} value={p}>{p}</option>)}
                        </select>
                        {errors.preferredContact && <p className="text-rose-600 text-sm mt-2">{errors.preferredContact}</p>}
                      </div>

                      <div>
                        <FormField id="subject" label="Subject *" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter subject of your inquiry" error={errors.subject} required />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                        <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Describe your goals, investment experience, and any constraints (risk, liquidity, time-horizon)..." className={`w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border ${errors.message ? "border-rose-400" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 resize-none text-sm md:text-base`} aria-invalid={!!errors.message} />
                        <div className="flex justify-between items-center mt-2">
                          {errors.message ? <p className="text-rose-600 text-sm">{errors.message}</p> : <p className="text-slate-500 text-xs md:text-sm">Please provide details to help us prepare for the consultation</p>}
                          <p className="text-slate-400 text-xs md:text-sm">{formData.message.length}/2000</p>
                        </div>
                      </div>

                      <div style={{ display: "none" }} aria-hidden>
                        <label>Leave this blank</label>
                        <input name="website" value={formData.website} onChange={handleChange} />
                        {errors.website && <p>{errors.website}</p>}
                      </div>

                      <button type="submit" disabled={isSubmitting} className={`w-full py-3 md:py-4 rounded-lg font-bold text-white transition-all duration-300 text-sm md:text-base ${isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl"}`} aria-busy={isSubmitting}>
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 md:mr-3"></div>
                            Sending Your Request...
                          </div>
                        ) : (
                          "Request Consultation →"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section ref={mapRef} className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <div className="text-center mb-6">
              <motion.h3 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-slate-800">Visit Our Office</motion.h3>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-slate-600 text-sm max-w-2xl mx-auto">Meet our advisors for an in-person consultation at our Hyderabad office.</motion.p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="h-[320px] bg-gray-100 relative">
                {mapInView ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.881074908576!2d77.5942602748523!3d12.934462487397126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c49c040309%3A0x6553433f72187b01!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Anand Wealth Office Location"
                    className="absolute inset-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                    <div className="text-center">
                      <svg className="w-8 h-8 animate-spin text-sky-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Loading map…
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showModal && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div onClick={() => setShowModal(false)} className="absolute inset-0 bg-black/40" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="relative bg-white rounded-xl shadow-xl p-6 max-w-md w-full z-10">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Thanks — we'll contact you soon.</h3>
              <p className="text-slate-600 text-sm mb-4">One of our wealth specialists will reach out to schedule a consultation.</p>
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold text-sm">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* small CSS for hero animations */}
      <style jsx>{`
        @keyframes pulse-slow { 0%,100%{opacity:.3}50%{opacity:.6} }
        @keyframes pulse-medium { 0%,100%{opacity:.25}50%{opacity:.5} }
        @keyframes twinkle { 0%,100%{opacity:.2;transform:scale(1)}50%{opacity:1;transform:scale(1.2)} }
        @keyframes twinkle-delay { 0%,100%{opacity:.1;transform:scale(1)}50%{opacity:.8;transform:scale(1.1)} }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 3s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-twinkle-delay { animation: twinkle-delay 4s ease-in-out infinite; animation-delay: 1s; }
      `}</style>
    </div>
  );
}

/* ---------------- FORM FIELD COMPONENT ---------------- */
function FormField({ id, label, name, type = "text", value, onChange, placeholder, error, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-3 md:px-4 py-2 md:py-3 bg-slate-50 border ${error ? "border-rose-400" : "border-slate-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 text-sm md:text-base`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && <p id={`${id}-error`} className="text-rose-600 text-sm mt-2">{error}</p>}
    </div>
);
}
