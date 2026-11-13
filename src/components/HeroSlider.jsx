"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  MapPin,
  Baby,
  Milk,
  HeartPulse,
  Package
} from "lucide-react";
import { COMPANY } from "@/data/products";

const SLIDES = [
  {
    id: 1,
    badge: "Pillar 01 • Bovine Fertility & Reproduction",
    badgeIcon: Baby,
    titlePart1: "Precision Animal Nutrition for a ",
    highlightText: "Guaranteed Calf a Year",
    titlePart2: " Cycle",
    description:
      "Eliminate open days and repeat breeding losses with Metho-Chelated mineral absorption (TFS Powder) and rapid 24-herb post-calving uterine cleaning (Utro-Heal Liquid).",
    keyPoints: [
      "Overcomes silent heat & anestrus in high yielders",
      "Expels retained fetal membranes (ROP) safely",
      "Metho-chelated Cu, Zn, Mn, Cr for 3x bio-passage",
    ],
    productPills: [
      { name: "TFS Fertility Powder", tag: "Metho-Chelated", link: "/products/tfs-fertility-solution-powder" },
      { name: "UTRO-HEAL Liquid", tag: "24 Ayurvedic Herbs", link: "/products/utro-heal-liquid" },
    ],
    primaryBtnText: "Explore Fertility Protocol",
    primaryBtnLink: "/three-pillars#pillar-1",
    secondaryBtnText: "Distributor Inquiry",
    image: "/product/tfs-fertility-solution-powder.jpeg",
    imageAlt: "TFS Fertility Solution Powder Bucket",
    productName: "TFS (The Fertility Solution)",
    productFormulation: "Metho-Chelated Powder • 1kg & 5kg",
    pillarTag: "Calf a Year Target",
  },
  {
    id: 2,
    badge: "Pillar 02 • High-Yield Lactation",
    badgeIcon: Milk,
    titlePart1: "Double Strength Calcium for ",
    highlightText: "Peak Milk Production",
    titlePart2: " & Udder Health",
    description:
      "Chelated ORVICAL GOLD in delicious mango flavor delivers 4200mg Calcium + 2100mg Phosphorus fortified with Shatavari & Jivanti, paired with UDDER-AYU (2000 mcg Vitamin-H) to eliminate mastitis.",
    keyPoints: [
      "+1.5L to +3.0L sustained daily milk yield per cow",
      "High butterfat & SNF boost with MCHC granules",
      "Teat sphincter keratinization blocks mastitis pathogens",
    ],
    productPills: [
      { name: "Chelated ORVICAL GOLD", tag: "Mango Flavor", link: "/products/chelated-orvical-gold" },
      { name: "UDDER-AYU", tag: "2000 mcg Vit-H", link: "/products/udder-ayu" },
      { name: "ORVICAL-P Granules", tag: "MCHC Calcium", link: "/products/orvical-p-granules" },
    ],
    primaryBtnText: "View Milk Yield Range",
    primaryBtnLink: "/products?pillar=Peak+Milk+Production",
    secondaryBtnText: "Dosage Calculator",
    image: "/product/chelated-orvical-gold.jpeg",
    imageAlt: "Chelated Orvical Gold Canister",
    productName: "Chelated ORVICAL GOLD",
    productFormulation: "Mango Flavored Liquid • 1L, 5L, 10L, 20L",
    pillarTag: "Peak Milk Yield",
  },
  {
    id: 3,
    badge: "Pillar 03 • Acute Calving & Transition",
    badgeIcon: HeartPulse,
    titlePart1: "Zero Milk Fever & ",
    highlightText: "Smooth Transition",
    titlePart2: " for Dairy Cattle",
    description:
      "Protect valuable dairy cows during the vulnerable -21 to +21 transition window with 10,000mg elemental calcium drench (Advance Orvical Gel) and lipotropic liver support (Orvi Guard).",
    keyPoints: [
      "100% protection against acute hypocalcemia / downer cows",
      "Silymarin & Tricholine Citrate shield transition liver",
      "40 Billion CFU live yeast restores active rumination",
    ],
    productPills: [
      { name: "Advance ORVICAL Gel", tag: "10,000mg Calcium", link: "/products/advance-orvical-gel" },
      { name: "ORVI GUARD", tag: "Liver Tonic", link: "/products/orvi-guard" },
      { name: "D-Yeast Powder", tag: "40B CFU Probiotic", link: "/products/d-yeast-powder" },
    ],
    primaryBtnText: "Explore Transition Protocol",
    primaryBtnLink: "/three-pillars#pillar-3",
    secondaryBtnText: "Direct Vet Helpline",
    image: "/product/advance-orvical-gel.jpeg",
    imageAlt: "Advance Orvical Gel Calving Drench Tube",
    productName: "Advance ORVICAL Gel",
    productFormulation: "Acute Calving Drench • 300g Squeeze Tube",
    pillarTag: "Transition Cow Health",
  },
];

export default function HeroSlider({ onOpenInquiry }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = SLIDES[current];
  const BadgeIcon = slide.badgeIcon;

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] via-[#ffffff] to-[#fffef7] text-slate-900 border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gentle, light radial background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Main Slide Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-12 sm:pt-14 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Pillar Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0052cc] shadow-sm">
              <BadgeIcon className="w-4 h-4 text-amber-500" />
              <span>{slide.badge}</span>
            </div>

            {/* Dynamic Title with Clean High-Contrast Text */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-heading font-black tracking-tight text-slate-900 leading-[1.15]">
              {slide.titlePart1}
              <span className="text-[#0052cc] underline decoration-amber-400 decoration-4 underline-offset-4">
                {slide.highlightText}
              </span>
              {slide.titlePart2}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              {slide.description}
            </p>

            {/* 3 Key Clinical Benefits Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left pt-1">
              {slide.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-semibold leading-tight">{point}</span>
                </div>
              ))}
            </div>

            {/* Product Quick-Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mr-1">
                Spotlight:
              </span>
              {slide.productPills.map((pill) => (
                <Link
                  key={pill.name}
                  href={pill.link}
                  className="group flex items-center gap-1.5 bg-white hover:bg-blue-50 text-slate-800 hover:text-[#0052cc] px-3 py-1.5 rounded-xl border border-slate-200 hover:border-blue-300 text-xs font-bold transition shadow-sm"
                >
                  <span>{pill.name}</span>
                  <span className="text-[10px] font-extrabold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                    {pill.tag}
                  </span>
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href={slide.primaryBtnLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0052cc] hover:bg-[#0043a8] text-white font-bold py-3.5 px-7 rounded-2xl text-xs uppercase tracking-wider transition shadow-lg shadow-blue-600/20 group/btn"
              >
                <span>{slide.primaryBtnText}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider transition shadow-sm"
              >
                <Building2 className="w-4 h-4" />
                <span>{slide.secondaryBtnText}</span>
              </button>
            </div>
          </div>

          {/* Right Product Spotlight Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border-2 border-blue-200 shadow-xl space-y-4">
              {/* Product Badge Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#0052cc] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{slide.pillarTag}</span>
                </span>
                <span className="text-xs font-bold text-slate-400">
                  Slide {current + 1} of {SLIDES.length}
                </span>
              </div>

              {/* Product Image Stage */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-slate-50 via-slate-100/50 to-white flex items-center justify-center p-4 border border-slate-100 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Info Card Footer */}
              <div className="space-y-1 pt-1">
                <h4 className="text-lg font-black text-slate-900 tracking-tight">
                  {slide.productName}
                </h4>
                <p className="text-xs text-slate-500 font-semibold">
                  {slide.productFormulation}
                </p>
              </div>

              {/* Hyderabad Hub Verified Ribbon */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Suchitra X Road, Hyderabad</span>
                </span>
                <span className="font-bold text-[#0052cc] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WHO-GMP</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slider Navigation Controls */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
          {/* Progress Indicators */}
          <div className="flex items-center gap-2">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === idx
                    ? "w-8 bg-[#0052cc]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center transition shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
              aria-label="Next slide"
              className="w-10 h-10 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center transition shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

