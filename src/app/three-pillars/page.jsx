"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Baby,
  Milk,
  HeartPulse,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Stethoscope,
  Building2,
  Calendar,
  Clock,
  ShieldCheck,
  Calculator,
  Phone
} from "lucide-react";
import { PRODUCTS, COMPANY } from "@/data/products";
import InquiryModal from "@/components/InquiryModal";
import ProductCard from "@/components/ProductCard";

export default function ThreePillarsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillar1Products = PRODUCTS.filter((p) => p.threePillarCategory === "Calf a Year");
  const pillar2Products = PRODUCTS.filter((p) => p.threePillarCategory === "Peak Milk Production");
  const pillar3Products = PRODUCTS.filter((p) => p.threePillarCategory === "Smooth Transition & Cow Health");

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-8">
      {/* 1. HERO HEADER */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50/50 rounded-3xl p-8 sm:p-14 text-slate-900 relative overflow-hidden shadow-sm border-2 border-blue-100">
        <div className="max-w-4xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0052cc] border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The Orvik Commercial Dairy Framework</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Three Pillars of Profitable Dairy Farming
          </h1>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            In modern commercial dairy economics, long-term farm profitability depends on three scientific milestones: 
            <strong> timely conception for 1 calf every year</strong>, 
            <strong> reaching peak milk yield with persistent lactation</strong>, and 
            <strong> surviving the critical transition phase without metabolic breakdown</strong>.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#pillar-1"
              className="px-4 py-2 bg-white hover:bg-amber-50 text-amber-900 rounded-xl text-xs font-bold border border-amber-300 transition shadow-sm"
            >
              Pillar 1: Calf a Year ↓
            </a>
            <a
              href="#pillar-2"
              className="px-4 py-2 bg-white hover:bg-blue-50 text-[#0052cc] rounded-xl text-xs font-bold border border-blue-300 transition shadow-sm"
            >
              Pillar 2: Peak Milk Yield ↓
            </a>
            <a
              href="#pillar-3"
              className="px-4 py-2 bg-white hover:bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold border border-emerald-300 transition shadow-sm"
            >
              Pillar 3: Transition Cow Health ↓
            </a>
          </div>
        </div>
      </div>

      {/* 2. PILLAR 01: CALF A YEAR (REPRODUCTIVE PRECISION) */}
      <section id="pillar-1" className="space-y-8 scroll-mt-24">
        {/* Banner with Protocol Breakdown */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-50/80 via-white to-amber-50/40 border-2 border-amber-300 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-200 pb-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Baby className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-200">
                  Pillar 01 &bull; Reproductive Precision
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#041e4d] mt-1">
                  Calf a Year (12-Month Calving Interval Target)
                </h2>
              </div>
            </div>

            <div className="text-right sm:border-l sm:border-amber-200 sm:pl-6">
              <div className="text-2xl font-black text-amber-700">₹4,500+</div>
              <div className="text-[11px] text-slate-600 font-semibold">Loss per missed heat cycle</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
            Every dry day beyond the optimal 60-day dry period represents an outright net economic loss in feed, labor, and delayed lactation. Orvik&apos;s dual reproductive strategy combines <strong>UTRO-HEAL Liquid</strong> for rapid post-calving uterine cleansing and placenta release with <strong>TFS Powder</strong> (Metho-Chelated Minerals + Shatavari) to induce timely ovulatory estrus and ensure first-service conception.
          </p>

          {/* Interactive Protocol Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">Day 0: Calving</span>
              <h4 className="text-xs font-black text-slate-900">Uterine Evacuation</h4>
              <p className="text-[11px] text-slate-600">
                100ml Utro-Heal Liquid twice daily for 3-5 days to expel lochia &amp; placenta.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">Day 15 - 45</span>
              <h4 className="text-xs font-black text-slate-900">Metho-Mineral Loading</h4>
              <p className="text-[11px] text-slate-600">
                50g TFS Powder daily to restore Copper, Zinc MHA, Chromium &amp; stimulate follicular waves.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">Day 60 - 75</span>
              <h4 className="text-xs font-black text-slate-900">Strong Standing Heat</h4>
              <p className="text-[11px] text-slate-600">
                Clear stringy cervical mucus, overt behavioral estrus, and optimal follicle size.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">Day 90: Conception</span>
              <h4 className="text-xs font-black text-emerald-900">Pregnancy Confirmed</h4>
              <p className="text-[11px] text-slate-600">
                High conception rate on 1st insemination, achieving the 365-day calving target.
              </p>
            </div>
          </div>
        </div>

        {/* Formulations for Pillar 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillar1Products.map((p) => (
            <ProductCard
              key={p.slug}
              product={p}
              onInquire={() => setIsModalOpen(true)}
            />
          ))}
        </div>
      </section>

      {/* 3. PILLAR 02: PEAK MILK PRODUCTION & PERSISTENCE */}
      <section id="pillar-2" className="space-y-8 scroll-mt-24">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-blue-50/40 border-2 border-blue-300 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-blue-200 pb-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                <Milk className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0052cc] bg-blue-100 px-2.5 py-0.5 rounded-md border border-blue-200">
                  Pillar 02 &bull; Lactation &amp; Udder Health
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#041e4d] mt-1">
                  Peak Milk Yield &amp; Udder Keratinization
                </h2>
              </div>
            </div>

            <div className="text-right sm:border-l sm:border-blue-200 sm:pl-6">
              <div className="text-2xl font-black text-[#0052cc]">+200L to 250L</div>
              <div className="text-[11px] text-slate-600 font-semibold">Total milk gained per 1L peak increase</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
            For every single litre gain in peak daily milk yield, total 305-day lactation yield rises by 200 to 250 Litres! Orvik delivers double-strength chelated calcium in mango flavor (<strong>Chelated ORVICAL GOLD</strong>), concentrated bone-forming MCHC granules (<strong>ORVICAL-P</strong>), and 2000 mcg therapeutic Vitamin-H (<strong>UDDER-AYU</strong>) to expand udder capacity and stop mastitis before it starts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#0052cc]">Double Strength Calcium</span>
              <h4 className="text-xs font-black text-slate-900">Chelated ORVICAL GOLD</h4>
              <p className="text-[11px] text-slate-600">
                4200mg Calcium + 2100mg Phosphorus fortified with Shatavari, Jivanti &amp; carbohydrates in delicious mango base.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#0052cc]">Udder Tissue Fortifier</span>
              <h4 className="text-xs font-black text-slate-900">UDDER-AYU Liquid</h4>
              <p className="text-[11px] text-slate-600">
                2000 mcg Vitamin-H (Biotin) + Zinc MHA to fortify teat sphincter muscle and reduce somatic cell count (SCC).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#0052cc]">Bone &amp; Blood Buffer</span>
              <h4 className="text-xs font-black text-slate-900">ORVICAL-P Granules</h4>
              <p className="text-[11px] text-slate-600">
                Microcrystalline Hydroxyapatite Complex (MCHC) granules for slow-release biological skeleton mineralization.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillar2Products.map((p) => (
            <ProductCard
              key={p.slug}
              product={p}
              onInquire={() => setIsModalOpen(true)}
            />
          ))}
        </div>
      </section>

      {/* 4. PILLAR 03: SMOOTH TRANSITION & COW HEALTH */}
      <section id="pillar-3" className="space-y-8 scroll-mt-24">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-50/80 via-white to-emerald-50/40 border-2 border-emerald-300 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-200 pb-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <HeartPulse className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  Pillar 03 &bull; Transition Cow Health
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#041e4d] mt-1">
                  Smooth Transition (-21 to +21 Days) &amp; Zero Milk Fever
                </h2>
              </div>
            </div>

            <div className="text-right sm:border-l sm:border-emerald-200 sm:pl-6">
              <div className="text-2xl font-black text-emerald-700">10,000 mg</div>
              <div className="text-[11px] text-slate-600 font-semibold">Elemental Calcium in Advance Gel</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
            Over 75% of all dairy veterinary emergencies happen during the transition period (3 weeks before to 3 weeks after calving). Hypocalcemia leads to downer cow syndrome, displaced abomasum, and severe liver ketosis. Orvik safeguards your highest value dairy cows with immediate 10,000mg oral calcium gels, lipotropic liver protectors, and live probiotic microflora.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">Acute Calving Drench</span>
              <h4 className="text-xs font-black text-slate-900">Advance ORVICAL Gel</h4>
              <p className="text-[11px] text-slate-600">
                300g squeeze tube delivering 10,000mg elemental calcium directly absorbed across oral mucosa into bloodstream.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">Hepatic Lipotropic Guard</span>
              <h4 className="text-xs font-black text-slate-900">ORVI GUARD Tonic</h4>
              <p className="text-[11px] text-slate-600">
                Silymarin + Tricholine Citrate + Inositol to clear fatty liver infiltrations and restore energetic vigor.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">Live Rumen Microflora</span>
              <h4 className="text-xs font-black text-slate-900">D-Yeast Powder</h4>
              <p className="text-[11px] text-slate-600">
                40 Billion CFU active live yeast (S. cerevisiae) to re-ignite volatile fatty acid (VFA) ruminal fermentation.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillar3Products.map((p) => (
            <ProductCard
              key={p.slug}
              product={p}
              onInquire={() => setIsModalOpen(true)}
            />
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50 rounded-3xl p-8 sm:p-12 border-2 border-blue-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#0052cc]">
            Need Custom Herd Protocol?
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#041e4d]">
            Speak with Manager Shrikant Sharma for Regional Supply
          </h3>
          <p className="text-xs text-slate-600">
            Wholesale depot supply from Hyderabad, farm trials, and cooperative tenders.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY.managerRawPhone}`}
            className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {COMPANY.managerPhone}</span>
          </a>

          <Link
            href="/calculator"
            className="px-5 py-3 bg-[#0052cc] hover:bg-[#0043a8] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-sm"
          >
            Open Dosage Calculator
          </Link>
        </div>
      </div>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
