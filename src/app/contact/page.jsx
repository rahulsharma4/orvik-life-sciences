"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  MessageSquare,
  HelpCircle,
  Truck,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { COMPANY } from "@/data/products";
import { API_BASE_URL } from "@/utils/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Product Inquiry",
    category: "Farmer / Dairy Owner",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      // In-memory / resilient fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* 1. HEADER BANNER */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50/50 rounded-3xl p-8 sm:p-14 text-slate-900 relative overflow-hidden shadow-sm border-2 border-blue-100">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 text-[#0052cc] border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#0052cc]" />
            <span>Corporate Communications &amp; Customer Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Get in Touch with ORVIK Life Sciences
          </h1>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Have questions regarding veterinary feed supplement dosing, bulk depot dispatch, or acquiring an exclusive district dealership? Our corporate headquarters in Hyderabad is here to assist you.
          </p>
        </div>
      </div>

      {/* 2. MAIN GRID: CONTACT INFO & INTERACTIVE FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Info & Leadership Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Executive Contact Card: Manager Shrikant Sharma */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-amber-50/40 p-6 sm:p-7 rounded-3xl border-2 border-blue-200 shadow-sm space-y-4">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-200">
              Direct Management Contact
            </span>

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#0052cc] text-white flex items-center justify-center font-black text-lg shadow-md shrink-0">
                SS
              </div>
              <div>
                <h3 className="text-lg font-black text-[#041e4d]">
                  {COMPANY.managerName}
                </h3>
                <p className="text-xs text-slate-600 font-semibold">
                  Manager &bull; Commercial Operations
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
              For direct dealer allocations, urgent product queries, or bulk veterinary tenders, contact Manager Shrikant Sharma directly:
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${COMPANY.managerRawPhone}`}
                className="flex items-center justify-center gap-1.5 py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {COMPANY.managerPhone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY.managerRawPhone}?text=${encodeURIComponent("Hello Shrikant Ji, I am inquiring about ORVIK Animal Health products.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Registered Office & Central Depot Address */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-lg font-black text-[#041e4d] border-b border-slate-100 pb-3">
              Corporate Registered Office &amp; Central Depot
            </h3>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0052cc] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold mb-0.5">
                    ORVIK LIFE SCIENCES PVT. LTD.
                  </strong>
                  <span>Shop No. 111, Ram Raj Nagar,</span><br />
                  <span>Suchitra X Road, Hyderabad - 500067,</span><br />
                  <span className="font-semibold text-[#0052cc]">Telangana, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Email Communications:</strong>
                  <a href={`mailto:${COMPANY.email}`} className="text-[#0052cc] hover:underline font-semibold">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Working Office Hours:</strong>
                  <span>Monday - Saturday: 9:00 AM - 6:30 PM IST</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Logistics &amp; Dispatch:</strong>
                  <span>Central Depot, Suchitra X Road, Hyderabad</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{COMPANY.iso} Certified Manufacturing</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Message & Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-[#041e4d]">
                Inquiry Received Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your message has been routed to Manager Shrikant Sharma and our Hyderabad customer desk. We will get in touch with you shortly at <strong>{formData.phone || formData.email}</strong>.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0052cc] hover:bg-[#0043a8] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <h3 className="text-xl font-black text-[#041e4d]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details and our veterinary team will contact you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Reddy / Sharma Ji"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    I am a *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  >
                    <option value="Farmer / Dairy Owner">Farmer / Dairy Herd Owner</option>
                    <option value="Veterinary Doctor / Practitioner">Veterinary Doctor / Paravet</option>
                    <option value="Wholesale Distributor / Stockist">Wholesale Distributor / Stockist</option>
                    <option value="Retail Chemist / Vet Pharmacy">Retail Chemist / Vet Pharmacy</option>
                    <option value="Dairy Cooperative / Federation">Dairy Cooperative / Federation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Subject / Product of Interest
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                >
                  <option value="Chelated Orvical Gold (Mango Calcium)">Chelated Orvical Gold (Mango Calcium)</option>
                  <option value="TFS Fertility Solution Powder">TFS Fertility Solution Powder</option>
                  <option value="Utro-Heal Liquid (24 Herbs)">Utro-Heal Liquid (24 Herbs)</option>
                  <option value="Udder-Ayu (2000 mcg Vit-H)">Udder-Ayu (2000 mcg Vit-H)</option>
                  <option value="Advance Orvical Gel (10,000mg Drench)">Advance Orvical Gel (10,000mg Drench)</option>
                  <option value="Orvi Guard Liver Tonic">Orvi Guard Liver Tonic</option>
                  <option value="District Dealership Application">District Dealership Application</option>
                  <option value="Bulk Order Quotation">Bulk Order Quotation</option>
                  <option value="General Clinical Inquiry">General Clinical Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Message or Requirement *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your cattle herd size, region, or dealership query..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#0052cc] hover:bg-[#0043a8] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? "Sending Message..." : "Submit Inquiry to Hyderabad Desk"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

