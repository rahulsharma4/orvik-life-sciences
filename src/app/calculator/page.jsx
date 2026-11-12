"use client";

import React from "react";
import DosageCalculatorWidget from "@/components/DosageCalculatorWidget";
import { Calculator, ShieldCheck, HelpCircle, Phone } from "lucide-react";
import { COMPANY } from "@/data/products";

export default function CalculatorPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Clinical &amp; Farm Utility</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#0b1e36] tracking-tight">
          Veterinary Dosage &amp; ROI Calculator
        </h1>
        <p className="text-xs sm:text-base text-slate-600">
          Calculate precise daily doses for individual animals or entire commercial herds, along with month-long supply estimates and expected milk yield improvements.
        </p>
      </div>

      {/* Calculator Widget */}
      <DosageCalculatorWidget />

      {/* Guidelines & Disclaimer Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Veterinary Clinical Guidelines</span>
          </h4>
          <p className="leading-relaxed">
            The calculations provided above are based on standard clinical dosages specified in the official Orvik Life Sciences formulation protocols. Dosages may be customized by your attending veterinary practitioner according to body condition score (BCS), stage of lactation, and specific deficiency symptoms.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-800 flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Need Custom Veterinary Consultation?</span>
          </h4>
          <p className="leading-relaxed">
            Our Hyderabad technical desk is available to assist veterinarians and dairy farm managers with feed mixing ratios, TMR balancing, and acute calving protocols. Call Manager Shrikant Sharma at <strong className="text-[#0052cc]">{COMPANY.managerPhone}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

