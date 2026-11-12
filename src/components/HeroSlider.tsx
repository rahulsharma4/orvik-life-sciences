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

interface Slide {
  id: number;
  badge: string;
  badgeIcon: React.ElementType;
  titlePart1: string;
  highlightText: string;
  titlePart2: string;
  description: string;
  keyPoints: string[];
  productPills: { name: string; tag: string; link: string }[];
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  image: string;
  imageAlt: string;
  productName: string;
  productFormulation: string;
  pillarTag: string;
}

const SLIDES: Slide[] = [
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
    image: "/images/extracted/img_04_210kb.jpg",
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
    image: "/images/extracted/img_19_185kb.jpg",
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
    image: "/images/extracted/img_25_95kb.jpg",
    imageAlt: "Advance Orvical Gel Calving Drench Tube",
    productName: "Advance ORVICAL Gel",
    productFormulation: "Acute Calving Drench • 300g Squeeze Tube",
    pillarTag: "Transition Cow Health",
  },
];

interface HeroSliderProps {
  onOpenInquiry: () => void;
}

export default function HeroSlider({ onOpenInquiry }: HeroSliderProps) {
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
          {/* Left Column: Clear, High-Contrast Typography */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0052cc] shadow-sm">
              <BadgeIcon className="w-4 h-4 text-[#0052cc]" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.15]">
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

            {/* Bullet Highlights in Crisp Light Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left pt-1">
              {slide.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs text-slate-700 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Featured Product Quick Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="text-xs font-bold text-slate-500 mr-1">
                Clinical Formulations:
              </span>
              {slide.productPills.map((pill, idx) => (
                <Link
                  key={idx}
                  href={pill.link}
                  className="inline-flex items-center gap-1.5 text-xs bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-800 px-3 py-1 rounded-full font-semibold transition shadow-sm"
                >
                  <span>{pill.name}</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded-full border border-amber-200">
                    {pill.tag}
                  </span>
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href={slide.primaryBtnLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0052cc] hover:bg-[#0043a8] text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span>{slide.primaryBtnText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider border border-slate-300 transition shadow-sm"
              >
                <Building2 className="w-4 h-4 text-[#0052cc]" />
                <span>{slide.secondaryBtnText}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean White Product Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-xl">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider">
                  ★ {slide.pillarTag}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Slide {slide.id} / {SLIDES.length}
                </span>
              </div>

              {/* Product Visual Container (Pure Clean White background, no dark borders) */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4 overflow-hidden border border-slate-100">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority
                  className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info inside Card */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-900">{slide.productName}</h4>
                    <span className="text-xs text-slate-500 font-medium">{slide.productFormulation}</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                    GMP Certified
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Suchitra X Road, Hyderabad</span>
                  </div>
                  <Link
                    href={slide.primaryBtnLink}
                    className="text-[#0052cc] font-bold hover:underline text-xs"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows & Slide Dots */}
        <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between">
          {/* Slide Dots */}
          <div className="flex items-center gap-2">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all rounded-full ${
                  current === idx
                    ? "w-8 h-2.5 bg-[#0052cc]"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Left/Right Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
              aria-label="Previous Slide"
              className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
              aria-label="Next Slide"
              className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
