"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  Award,
  CheckCircle2,
  Users,
  MapPin,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  FlaskConical,
  Clock,
  Briefcase,
  Layers,
  Microscope,
  Calendar
} from "lucide-react";
import { COMPANY, PRODUCTS } from "@/data/products";

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* 1. HERO HEADER WITH CORPORATE PROFILE & OFFICIAL MOTTO */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50/50 rounded-3xl p-8 sm:p-14 text-slate-900 relative overflow-hidden shadow-sm border-2 border-blue-100">
        <div className="max-w-4xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 text-[#0052cc] border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#0052cc]" />
            <span>Corporate Profile &bull; Hyderabad, Telangana, India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Pioneering Precision Veterinary Therapeutics &amp; Animal Nutrition
          </h1>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border-l-4 border-amber-400 border border-slate-200/80 shadow-sm">
            <p className="text-xs sm:text-base text-slate-800 font-semibold italic">
              &ldquo;{COMPANY.tagline}&rdquo;
            </p>
            <span className="text-[11px] text-[#0052cc] font-bold block mt-1 uppercase tracking-wider">
              &mdash; Official Corporate Motto (ORVIK Life Sciences Pvt. Ltd.)
            </span>
          </div>
        </div>

        {/* Decorative background logo opacity */}
        <div className="absolute right-4 -bottom-6 w-72 h-44 opacity-15 pointer-events-none hidden md:block">
          <Image
            src="/images/Logo.png"
            alt="Watermark"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* 2. KEY STATS BANNER */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
          <div className="text-3xl sm:text-4xl font-black text-[#0052cc]">10+</div>
          <div className="text-xs font-bold text-slate-800 mt-1">Specialized Formulations</div>
          <div className="text-[11px] text-slate-500">Reproductive, Calcium &amp; Tonics</div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
          <div className="text-3xl sm:text-4xl font-black text-amber-500">100%</div>
          <div className="text-xs font-bold text-slate-800 mt-1">WHO-GMP Compliant</div>
          <div className="text-[11px] text-slate-500">ISO 9001:2015 Certified</div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
          <div className="text-3xl sm:text-4xl font-black text-emerald-600">3x</div>
          <div className="text-xs font-bold text-slate-800 mt-1">Metho-Chelated Bio-Passage</div>
          <div className="text-[11px] text-slate-500">MHA Mineral Technology</div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
          <div className="text-3xl sm:text-4xl font-black text-[#041e4d]">12 M</div>
          <div className="text-xs font-bold text-slate-800 mt-1">Calf a Year Target</div>
          <div className="text-[11px] text-slate-500">Commercial Dairy Protocol</div>
        </div>
      </div>

      {/* 3. CORPORATE IDENTITY & LEADERSHIP TEAM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Detailed Story */}
        <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <span className="text-xs font-black uppercase tracking-wider text-[#0052cc] bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            About The Enterprise
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-[#041e4d] tracking-tight">
            Dedicated Exclusively to Livestock Welfare, Dairy Economics &amp; Veterinary Science
          </h2>

          <p>
            <strong>ORVIK LIFE SCIENCES PVT. LTD.</strong> is an Indian veterinary pharmaceutical company headquartered in Hyderabad, Telangana. Operating under our dedicated <strong>Orvik Animal Health Division</strong>, we focus on formulating, developing, and manufacturing high-potency veterinary therapeutics that directly improve the livelihoods of dairy farmers, commercial cattle owners, and livestock keepers.
          </p>

          <p>
            Rather than producing generic commodity feed products, Orvik engineers target pharmaceutical and bio-nutritional solutions for the three greatest profit-destroying bottlenecks in modern dairy operations:
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-3.5 bg-blue-50/60 rounded-2xl border border-blue-100">
              <CheckCircle2 className="w-5 h-5 text-[#0052cc] shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold text-xs sm:text-sm">Bovine Repeat Breeding &amp; Anestrus:</strong>
                <span className="text-slate-600 text-xs">
                  Eliminating extended inter-calving gaps using Metho-Chelated mineral absorption (TFS Powder) and rapid Ayurvedic uterine lochia expulsion (Utro-Heal Liquid).
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-amber-50/60 rounded-2xl border border-amber-100">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold text-xs sm:text-sm">Subclinical Hypocalcemia &amp; Milk Fever:</strong>
                <span className="text-slate-600 text-xs">
                  Delivering 10,000mg elemental calcium shock-dose in Advance Orvical Gel and sustained daily double-strength Chelated Orvical Gold in delicious mango flavor.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold text-xs sm:text-sm">Udder Health, Keratinization &amp; Mastitis Resistance:</strong>
                <span className="text-slate-600 text-xs">
                  Providing 2000 mcg high-potency Vitamin-H with Zinc MHA in Udder-Ayu to keratinize the teat canal and prevent somatic cell count (SCC) spikes.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Official Manager & Registered Office Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Manager Profile Card */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-amber-50/40 p-6 sm:p-7 rounded-3xl border-2 border-blue-200 shadow-sm space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0052cc] text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">
                SS
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-200">
                  Operations &amp; Commercial Leadership
                </span>
                <h3 className="text-lg font-black text-[#041e4d] mt-1">
                  {COMPANY.managerName}
                </h3>
                <p className="text-xs text-slate-600 font-semibold">
                  Manager &bull; Commercial Operations &amp; Trade Liaisons
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
              Directly oversees pan-India stockist allocations, regional veterinary distributor contracts, and on-schedule dispatches from our Hyderabad central hub.
            </p>

            <div className="space-y-2.5 text-xs text-slate-700 pt-1">
              <a
                href={`tel:${COMPANY.managerRawPhone}`}
                className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-[#0052cc] transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Direct Phone Line:</div>
                  <div className="font-black text-[#0052cc] group-hover:underline text-xs sm:text-sm">
                    {COMPANY.managerPhone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 hover:border-[#0052cc] transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0052cc] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Corporate Inquiries:</div>
                  <div className="font-semibold text-slate-800 text-xs truncate max-w-[210px]">
                    {COMPANY.email}
                  </div>
                </div>
              </a>
            </div>

            {/* Registered Address */}
            <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Shop No. 111, Ram Raj Nagar</strong>, Suchitra X Road, Hyderabad-500067 (Telangana)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Partnership CTA */}
          <div className="p-6 rounded-3xl bg-blue-50/80 border border-blue-200 text-center space-y-3">
            <h4 className="text-sm font-black text-[#041e4d]">
              Looking to Become a Regional Distributor?
            </h4>
            <p className="text-xs text-slate-600">
              Exclusive district territory rights, promotional visual aids, and central Hyderabad depot dispatch.
            </p>
            <Link
              href="/partner"
              className="inline-flex items-center justify-center gap-1.5 w-full py-3 bg-[#0052cc] hover:bg-[#0043a8] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm"
            >
              <span>Apply for Dealership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4. SCIENTIFIC & MANUFACTURING EXCELLENCE */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#0052cc] bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Pharmacological Purity
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#041e4d] tracking-tight">
            How Orvik Formulations Exceed Conventional Livestock Feed
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Every batch manufactured undergoes analytical assays to guarantee active concentration, bioavailability, and zero heavy-metal contaminants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0052cc] flex items-center justify-center font-bold">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-[#041e4d]">
              Metho-Chelated Minerals (MHA)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standard inorganic trace mineral salts (sulfates, carbonates) interact with phytic acid and antinutrients in the rumen. Orvik binds Copper, Zinc, Manganese, and Chromium to Methionine Hydroxy Analogue (MHA), ensuring 3x intestinal bio-passage.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-[#041e4d]">
              Standardized Phytogenic Actives
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our herbal formulations (such as Utro-Heal Liquid and Chelated Orvical Gold) employ standardized galactagogues—Shatavari, Jivanti, Ashwagandha, and Methi—ensuring hormone-free natural let-down and uterine muscular involution.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-[#041e4d]">
              WHO-GMP &amp; ISO Quality Systems
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Manufactured under Good Manufacturing Practices with cleanroom HVAC systems, automated filling lines, and strict stability testing under tropical zone IV climatic conditions.
            </p>
          </div>
        </div>
      </div>

      {/* 5. STRATEGIC COMPANY MILESTONES */}
      <div className="bg-gradient-to-r from-blue-50/70 via-white to-amber-50/40 p-8 sm:p-12 rounded-3xl border border-blue-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            Our Journey &bull; Orvik Life Sciences
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#041e4d]">
            Built on Veterinary Science &amp; Farmer Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-black text-[#0052cc] uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Phase 1</span>
            </div>
            <h4 className="text-sm font-black text-[#041e4d]">Foundation &amp; R&amp;D</h4>
            <p className="text-xs text-slate-600">
              Formulation research focused on high-yielding Murrah buffaloes and crossbred HF/Jersey cows suffering from repeat breeding.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-black text-[#0052cc] uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Phase 2</span>
            </div>
            <h4 className="text-sm font-black text-[#041e4d]">Three Pillars Framework</h4>
            <p className="text-xs text-slate-600">
              Development of the commercial framework: Calf a Year, Peak Milk Yield, and Smooth Transition, anchoring the 10 core formulations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-black text-[#0052cc] uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Phase 3</span>
            </div>
            <h4 className="text-sm font-black text-[#041e4d]">Hyderabad Central Hub</h4>
            <p className="text-xs text-slate-600">
              Establishment of central logistics depot at Suchitra X Road, Hyderabad, for rapid dispatch across Telangana and Andhra Pradesh.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="text-xs font-black text-[#0052cc] uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Phase 4</span>
            </div>
            <h4 className="text-sm font-black text-[#041e4d]">Pan-India Expansion</h4>
            <p className="text-xs text-slate-600">
              Appointing exclusive district distributors, stockists, and cooperative dairy suppliers across all major Indian milk belts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
