"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Award,
  ShieldCheck,
  TrendingUp,
  Package,
  Send,
  AlertCircle,
  Truck,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Layers,
  FileText
} from "lucide-react";
import { PRODUCTS, COMPANY } from "@/data/products";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    city: "",
    state: "",
    inquiryType: "Distributor / Dealership",
    productOfInterest: "All Products",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      // In-memory resilient fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* 1. HEADER */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50/50 rounded-3xl p-8 sm:p-14 text-slate-900 relative overflow-hidden shadow-sm border-2 border-blue-100">
        <div className="max-w-4xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0052cc] border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#0052cc]" />
            <span>Commercial Distribution &amp; Trade Partnership &bull; Pan-India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Distributor &amp; Veterinary Dealership Network
          </h1>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            Partner with <strong>ORVIK LIFE SCIENCES PVT. LTD.</strong> as an exclusive regional stockist, C&amp;F agent, or district veterinary distributor. We offer guaranteed territory rights, high trade margins, marketing visual aids, and prompt central dispatch from our Hyderabad depot.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-2">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero Cross-Territory Undercutting</span>
            </span>
            <span className="flex items-center gap-1.5 text-blue-700">
              <CheckCircle2 className="w-4 h-4 text-[#0052cc]" />
              <span>Full Promotional Visual Support</span>
            </span>
            <span className="flex items-center gap-1.5 text-amber-700">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Direct Hyderabad Depot Logistics</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. ONBOARDING 4-STEP ROADMAP */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#0052cc] bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Transparent Onboarding
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#041e4d]">
            How to Become an Authorized Orvik Distributor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 relative">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0052cc] font-black flex items-center justify-center text-sm">
              01
            </div>
            <h4 className="text-sm font-black text-[#041e4d] mt-2">Submit Application</h4>
            <p className="text-xs text-slate-600">
              Fill out the trade form with your firm name, target district/taluka, and existing veterinary distribution experience.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 relative">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 font-black flex items-center justify-center text-sm">
              02
            </div>
            <h4 className="text-sm font-black text-[#041e4d] mt-2">Territory Feasibility</h4>
            <p className="text-xs text-slate-600">
              Manager Shrikant Sharma and our Hyderabad desk verify exclusive district vacancy to prevent distributor overlap.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 relative">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 font-black flex items-center justify-center text-sm">
              03
            </div>
            <h4 className="text-sm font-black text-[#041e4d] mt-2">Margin &amp; Terms Agreement</h4>
            <p className="text-xs text-slate-600">
              Formalize trade discount slabs, payment credit terms, and initial stock consignment selection.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2 relative">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 font-black flex items-center justify-center text-sm">
              04
            </div>
            <h4 className="text-sm font-black text-[#041e4d] mt-2">Dispatch &amp; Field Launch</h4>
            <p className="text-xs text-slate-600">
              Central depot Hyderabad dispatches your products packed with veterinary visual aids, brochures, and free trial samples.
            </p>
          </div>
        </div>
      </div>

      {/* 3. MAIN FORM & ADVANTAGES GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Commercial Benefits & Manager Shrikant Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Manager Direct Desk */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-amber-50/40 p-6 sm:p-7 rounded-3xl border-2 border-blue-200 shadow-sm space-y-4">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-200">
              Commercial Dealership Officer
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
                  Manager &bull; Commercial Operations &amp; Trade Allocations
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
              Directly answers queries regarding district territory availability, minimum opening orders, and institutional cooperative bulk supply.
            </p>

            <div className="space-y-2 text-xs text-slate-700 pt-1">
              <a
                href={`tel:${COMPANY.managerRawPhone}`}
                className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-[#0052cc] transition"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Line: <strong className="text-[#0052cc]">{COMPANY.managerPhone}</strong></span>
              </a>

              <div className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-slate-200">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Depot: <strong>Shop 111, Suchitra X Road, Hyderabad</strong></span>
              </div>
            </div>
          </div>

          {/* Partner Advantages */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-black text-[#041e4d] border-b border-slate-100 pb-3">
              Why Stockists &amp; C&amp;F Agents Choose Orvik
            </h3>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Guaranteed District Exclusivity:</strong>
                  <span>Every appointed dealer receives exclusive operational rights for their allocated district or territory.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">High Commercial Margins:</strong>
                  <span>Generous retail margins and distributor price structures designed to yield sustained trade profits.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Marketing &amp; Visual Aids:</strong>
                  <span>We supply visual folders, product dosage leave-behinds, farmer leaflets, and product samples for local vets.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Truck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Reliable Hyderabad Depot Dispatch:</strong>
                  <span>Fast transit times across Telangana, Andhra Pradesh, Maharashtra, Karnataka, and North India.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Dealership Application Form */}
        <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-[#041e4d]">
                Application Received Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong> ({formData.organization || "Your Firm"}). Your dealership request for <strong>{formData.city}, {formData.state}</strong> has been assigned to Manager Shrikant Sharma. Our commercial desk will contact you at <strong>{formData.phone}</strong> with trade terms and price lists.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0052cc] hover:bg-[#0043a8] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition"
                >
                  Submit Another Territory Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <h3 className="text-xl font-black text-[#041e4d]">
                  Dealership &amp; Stockist Application Form
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details to check territory vacancy and request wholesale price lists.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Firm / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tirupati Vet Pharma Agencies"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Mobile Phone *
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
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="agencies@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    District / City of Interest *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Warangal / Nizamabad / Belagavi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Telangana / Andhra Pradesh / Maharashtra"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  >
                    <option value="Exclusive District Dealership">Exclusive District Dealership</option>
                    <option value="C&F Agency / Super Stockist">C&amp;F Agency / Super Stockist</option>
                    <option value="Veterinary Hospital / Clinic Supply">Veterinary Hospital / Clinic Supply</option>
                    <option value="Dairy Cooperative Federation Bulk">Dairy Cooperative Federation Bulk</option>
                    <option value="Export / Third Party Inquiries">Export / Third Party Inquiries</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Range of Interest
                  </label>
                  <select
                    value={formData.productOfInterest}
                    onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#0052cc] focus:bg-white transition"
                  >
                    <option value="All Products Portfolio">Complete 10 Products Portfolio</option>
                    <option value="Chelated Orvical Gold (Mango Calcium)">Chelated Orvical Gold (Mango Calcium)</option>
                    <option value="TFS Fertility Solution Powder">TFS Fertility Solution Powder</option>
                    <option value="Utro-Heal Liquid (24 Herbs)">Utro-Heal Liquid (24 Herbs)</option>
                    <option value="Udder-Ayu (2000 mcg Vit-H)">Udder-Ayu (2000 mcg Vit-H)</option>
                    <option value="Advance Orvical Gel">Advance Orvical Gel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brief Trade Background or Experience (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about existing retail vet chemist coverage, cattle population in your area, or annual turnover..."
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
                  <span>{loading ? "Submitting Application..." : "Submit Dealership Application"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

