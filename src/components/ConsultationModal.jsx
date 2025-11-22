import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsultationModal({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Background Click Close */}
        <div
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 md:p-8 z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 text-xl"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
            Request a Consultation
          </h2>
          <p className="text-slate-600 text-center mb-6">
            Share your details and our wealth advisor will contact you shortly.
          </p>

          {/* FORM */}
          <form className="space-y-5">
            <div>
              <label className="text-sm font-semibold">Full Name</label>
              <input
                type="text"
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg mt-1"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg mt-1"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Phone</label>
              <input
                type="text"
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg mt-1"
                placeholder="+91 90000 12345"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea
                rows="3"
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg mt-1"
                placeholder="Tell us your goals..."
              ></textarea>
            </div>

            <button className="w-full py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
              Submit Request
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
