"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Stethoscope,
  Building2,
  Users,
  Milk,
  HeartPulse,
  BadgeCheck,
  MapPin,
  Phone
} from "lucide-react";
import { PRODUCTS, COMPANY } from "@/data/products";
import { Product } from "@/types";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import SpeciesSelector from "@/components/SpeciesSelector";
import ThreePillarsSection from "@/components/ThreePillarsSection";
import DosageCalculatorWidget from "@/components/DosageCalculatorWidget";
import InquiryModal from "@/components/InquiryModal";

export default function HomePage() {
  const [selectedSpecies, setSelectedSpecies] = useState("all");
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenInquiry = (product?: Product) => {
    setSelectedProductForInquiry(product || null);
    setIsModalOpen(true);
  };

  const filteredProducts =
    selectedSpecies === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) =>
          p.targetSpecies.some((s) => s.toLowerCase().includes(selectedSpecies.toLowerCase()))
        );

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. CREATIVE INTERACTIVE HERO SLIDER WITH AUTO-PLAY & SPOTLIGHTS */}
      <HeroSlider onOpenInquiry={() => handleOpenInquiry()} />

      {/* 2. CORPORATE TRUST & ADDRESS ANNOUNCEMENT BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-100 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-blue-50">
          <div className="pt-2 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#0052cc]">10+</div>
            <div className="text-xs font-black text-slate-700 uppercase tracking-wider mt-1">
              Veterinary Formulations
            </div>
            <div className="text-[11px] text-[#0052cc] font-bold">From Official ORVIK Catalog</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-amber-500">3x</div>
            <div className="text-xs font-black text-slate-700 uppercase tracking-wider mt-1">
              Bio-Absorption Rate
            </div>
            <div className="text-[11px] text-amber-600 font-bold">Metho-Chelated Minerals (MHA)</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">12 M</div>
            <div className="text-xs font-black text-slate-700 uppercase tracking-wider mt-1">
              Calving Interval Target
            </div>
            <div className="text-[11px] text-emerald-600 font-bold">Calf a Year Commercial Protocol</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#041e4d]">100%</div>
            <div className="text-xs font-black text-slate-700 uppercase tracking-wider mt-1">
              Hyderabad Depot
            </div>
            <div className="text-[11px] text-blue-700 font-bold truncate max-w-[200px] mx-auto">
              Shop 111, Suchitra X Road
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY MISSION & CORPORATE IDENTITY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50 rounded-3xl p-6 sm:p-8 border-2 border-blue-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-28 shrink-0">
              <Image
                src="/images/Logo.png"
                alt="ORVIK Animal Health"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#0052cc]">
                {COMPANY.name} &bull; Telangana
              </span>
              <p className="text-sm sm:text-base font-bold text-[#041e4d] italic mt-0.5">
                &ldquo;{COMPANY.tagline}&rdquo;
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Shop No. 111, Ram Raj Nagar, Suchitra X Road, Hyderabad-500067</span>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="shrink-0 px-5 py-2.5 bg-[#0052cc] hover:bg-[#0043a8] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm"
          >
            About Company →
          </Link>
        </div>
      </section>

      {/* 4. THREE PILLARS OF PROFITABLE DAIRY FARMING */}
      <ThreePillarsSection />

      {/* 5. PRODUCT PORTFOLIO WITH SPECIES FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-blue-100 text-[#0052cc] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 border border-blue-200">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Veterinary Clinical Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#041e4d] tracking-tight">
              Veterinary Formulations &amp; Supplements
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Targeted solutions for bovine fertility, high milk yield, hepatic support, acute calving drench, and rumen indigestion.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#0052cc] hover:text-[#0043a8] bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl border border-blue-200 transition"
          >
            <span>View All 10 Formulations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Species Filter Tabs */}
        <SpeciesSelector selectedSpecies={selectedSpecies} onSelect={setSelectedSpecies} />

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.slice(0, 6).map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              onInquire={handleOpenInquiry}
            />
          ))}
        </div>

        {/* Bottom CTA to catalog */}
        <div className="text-center pt-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#0052cc] hover:bg-[#0043a8] text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-wider transition shadow-lg shadow-blue-900/20"
          >
            <span>Explore Complete Portfolio with Chemical Compositions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. VETERINARY DOSAGE & HERD CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <DosageCalculatorWidget />
      </section>

      {/* 7. SCIENTIFIC MANUFACTURING & QUALITY STANDARDS */}
      <section className="bg-gradient-to-b from-blue-50/60 to-white py-20 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-wider text-[#0052cc] bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
              Pharmaceutical Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#041e4d] tracking-tight mt-3">
              Why Dairy Farmers &amp; Veterinarians Choose Orvik
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every formulation undergoes rigorous analytical testing for stability, active potency, and targeted bioavailability in ruminants and livestock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pharma-card p-8 rounded-3xl bg-white border border-blue-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#041e4d]">
                Metho-Chelated Mineral Technology
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conventional inorganic mineral salts react with rumen antinutrients and pass unabsorbed. Our Methionine Hydroxy Analogue (MHA) chelated minerals resist rumen degradation for complete intestinal absorption.
              </p>
            </div>

            <div className="pharma-card p-8 rounded-3xl bg-white border border-blue-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0052cc] flex items-center justify-center font-bold">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#041e4d]">
                Rumen-Protected Bio-Actives
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Formulations like Orvikind-Plus B1 incorporate Rumen-Protected Choline to bypass microbial breakdown and deliver direct hepatic lipotropic action to reverse fatty liver and negative energy balance.
              </p>
            </div>

            <div className="pharma-card p-8 rounded-3xl bg-white border border-blue-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#041e4d]">
                Standardized Ayurvedic Galactagogues
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Products such as Utro-Heal Liquid and Chelated Orvical Gold feature standardized galactagogues (Shatavari, Jivanti, Ashwagandha) providing natural let-down hormones without side-effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DEALERSHIP / DISTRIBUTOR CALL TO ACTION - CLEAN LIGHT THEME */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50/50 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm border-2 border-blue-200">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052cc] bg-blue-100/80 border border-blue-200 px-3 py-1 rounded-full">
                Pan-India District Expansion
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Partner with ORVIK Life Sciences as a Regional Stockist or Distributor
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                We are actively appointing exclusive district distributors, C&amp;F agents, veterinary pharmacy partners, and dairy cooperative suppliers across all Indian states. High profit margins, promotional support, and on-time dispatch from our Hyderabad depot.
              </p>
              <div className="flex flex-wrap gap-4 text-xs pt-1">
                <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc]" />
                  <span>Exclusive District Territory</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc]" />
                  <span>Veterinary Visual Aids</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#0052cc]" />
                  <span>Hyderabad Depot Dispatch</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => handleOpenInquiry()}
                className="w-full bg-[#0052cc] hover:bg-[#0043a8] text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition shadow-sm hover:shadow text-center"
              >
                Apply for Dealership
              </button>
              <Link
                href="/contact"
                className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider text-center border border-slate-300 transition shadow-sm"
              >
                Visit Hyderabad Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProduct={selectedProductForInquiry}
      />
    </div>
  );
}
