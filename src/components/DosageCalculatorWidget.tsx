"use client";

import React, { useState } from "react";
import { Calculator, CheckCircle, Package, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface ProtocolOption {
  id: string;
  name: string;
  formulation: string;
  perAnimalDaily: number;
  unit: "ml" | "gm" | "tube";
  packSizes: string[];
  yieldBoost: string;
  notes: string;
}

const PROTOCOLS: Record<string, ProtocolOption[]> = {
  cattle: [
    {
      id: "orvical-gold",
      name: "Chelated ORVICAL GOLD",
      formulation: "Double Strength Liquid Calcium",
      perAnimalDaily: 100,
      unit: "ml",
      packSizes: ["1 Litre", "5 Litres", "10 Litres", "20 Litres Can"],
      yieldBoost: "+1.5 to +2.5 Litres milk/day per cow",
      notes: "Administer 100ml daily morning during lactation.",
    },
    {
      id: "orvical-p",
      name: "ORVICAL-P Granules",
      formulation: "Concentrated MCHC Calcium Feed Supplement",
      perAnimalDaily: 60,
      unit: "gm",
      packSizes: ["2 Kg", "5 Kg Bucket", "25 Kg Drum"],
      yieldBoost: "Higher Fat & SNF percentage + bone strength",
      notes: "Mix 50-75gm daily into morning feed concentrate.",
    },
    {
      id: "tfs-powder",
      name: "TFS Fertility Solution Powder",
      formulation: "Metho-Chelated Minerals for Reproduction",
      perAnimalDaily: 50,
      unit: "gm",
      packSizes: ["1 Kg Pack", "5 Kg Bucket"],
      yieldBoost: "Timely heat induction & 12-month calving interval",
      notes: "Give 50-60gm daily continuously for 20-30 days.",
    },
    {
      id: "orvi-guard",
      name: "ORVI GUARD Liver Tonic",
      formulation: "Nutritional Liver Supplement",
      perAnimalDaily: 100,
      unit: "ml",
      packSizes: ["500 ml", "1 Litre", "5 Litres"],
      yieldBoost: "Corrects off-feed & boosts fat metabolism",
      notes: "50ml twice daily for 10-15 days.",
    },
    {
      id: "udder-ayu",
      name: "UDDER-AYU Multi-Vitamin",
      formulation: "Vitamin-H 2000 mcg Udder Tonic",
      perAnimalDaily: 10,
      unit: "ml",
      packSizes: ["500 ml", "1 Litre"],
      yieldBoost: "Maximum udder size + mastitis defense",
      notes: "10ml daily for 30 days before & after calving.",
    },
  ],
  smallRuminant: [
    {
      id: "orvical-gold-small",
      name: "Chelated ORVICAL GOLD",
      formulation: "Liquid Calcium for Sheep & Goat",
      perAnimalDaily: 30,
      unit: "ml",
      packSizes: ["1 Litre", "5 Litres"],
      yieldBoost: "Faster weight gain and rich milk yield",
      notes: "20-40ml daily per sheep or doe.",
    },
    {
      id: "orvi-guard-small",
      name: "ORVI GUARD",
      formulation: "Hepatoprotective Liver Tonic",
      perAnimalDaily: 20,
      unit: "ml",
      packSizes: ["500 ml", "1 Litre"],
      yieldBoost: "Overcomes anorexia, parasitic debility & weakness",
      notes: "10ml twice daily for 7-10 days.",
    },
  ],
  poultry: [
    {
      id: "orvical-gold-poultry",
      name: "Chelated ORVICAL GOLD (Poultry)",
      formulation: "Layer & Broiler Calcium",
      perAnimalDaily: 0.5,
      unit: "ml",
      packSizes: ["5 Litres", "20 Litres"],
      yieldBoost: "Prevents thin eggshells & improves egg laying cycle",
      notes: "Chicks 20ml / Broilers 20ml / Layers 50ml per 100 birds.",
    },
    {
      id: "udder-ayu-poultry",
      name: "UDDER-AYU (Poultry)",
      formulation: "Vitamin-H & Selenium",
      perAnimalDaily: 0.05,
      unit: "ml",
      packSizes: ["500 ml", "1 Litre"],
      yieldBoost: "Combats heat stress, improves feathering and hatchability",
      notes: "3-7ml per 100 birds in drinking water.",
    },
  ],
};

export default function DosageCalculatorWidget() {
  const [speciesCategory, setSpeciesCategory] = useState<string>("cattle");
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>("orvical-gold");
  const [herdSize, setHerdSize] = useState<number>(10);
  const [days, setDays] = useState<number>(30);

  const currentProtocols = PROTOCOLS[speciesCategory] || PROTOCOLS.cattle;
  const currentProtocol =
    currentProtocols.find((p) => p.id === selectedProtocolId) || currentProtocols[0];

  const totalRequirement = Math.round(currentProtocol.perAnimalDaily * herdSize * days);
  const requirementInLitresOrKg = (totalRequirement / 1000).toFixed(1);

  return (
    <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
      {/* Light Clean Header */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50/50 p-6 sm:p-8 border-b border-blue-100 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0052cc] mb-1">
            <Calculator className="w-4 h-4 text-[#0052cc]" />
            <span>Interactive Farm Calculator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Veterinary Dosage &amp; Herd Requirement Calculator
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Calculate exact daily doses, month-long herd requirement, and recommended packaging sizes.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Parameters */}
        <div className="lg:col-span-7 space-y-6">
          {/* Species Category */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Species Division
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "cattle", label: "Dairy Cattle / Buffalo" },
                { id: "smallRuminant", label: "Sheep & Goat" },
                { id: "poultry", label: "Poultry" },
              ].map((sp) => (
                <button
                  key={sp.id}
                  onClick={() => {
                    setSpeciesCategory(sp.id);
                    const newProtocols = PROTOCOLS[sp.id];
                    setSelectedProtocolId(newProtocols[0].id);
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition border ${
                    speciesCategory === sp.id
                      ? "bg-[#0052cc] text-white border-[#0052cc] shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {sp.label}
                </button>
              ))}
            </div>
          </div>

          {/* Medicine Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              2. Select Formulation
            </label>
            <select
              value={selectedProtocolId}
              onChange={(e) => setSelectedProtocolId(e.target.value)}
              className="w-full text-xs font-bold text-slate-800 bg-slate-50 border border-slate-300 rounded-xl p-3 outline-none focus:border-[#0052cc] focus:bg-white"
            >
              {currentProtocols.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.formulation})
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500 mt-1 italic">
              Standard: {currentProtocol.notes}
            </p>
          </div>

          {/* Herd Size & Duration Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-700">Herd / Flock Size</span>
                <span className="text-sm font-black text-[#0052cc] bg-blue-100 px-2 py-0.5 rounded">
                  {herdSize} {speciesCategory === "poultry" ? "birds" : "animals"}
                </span>
              </div>
              <input
                type="range"
                min={speciesCategory === "poultry" ? 50 : 1}
                max={speciesCategory === "poultry" ? 5000 : 100}
                step={speciesCategory === "poultry" ? 50 : 1}
                value={herdSize}
                onChange={(e) => setHerdSize(Number(e.target.value))}
                className="w-full accent-[#0052cc] cursor-pointer"
              />
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-700">Course Duration</span>
                <span className="text-sm font-black text-[#0052cc] bg-blue-100 px-2 py-0.5 rounded">
                  {days} Days
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={90}
                step={5}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-[#0052cc] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Calculation Summary Card - Clean Light Theme */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-50 via-white to-amber-50/30 rounded-2xl p-6 flex flex-col justify-between border-2 border-blue-200 shadow-sm">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#0052cc] mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Calculated Farm Protocol</span>
            </div>
            <h4 className="text-xl font-black text-slate-900 tracking-tight">
              {currentProtocol.name}
            </h4>
            <div className="text-xs text-slate-600 mt-0.5 font-medium">{currentProtocol.formulation}</div>

            <div className="my-5 p-4 rounded-xl bg-white border border-blue-100 shadow-sm space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Daily Per Head:</span>
                <span className="font-bold text-slate-900">
                  {currentProtocol.perAnimalDaily} {currentProtocol.unit}/day
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Daily Total Herd:</span>
                <span className="font-bold text-slate-900">
                  {((currentProtocol.perAnimalDaily * herdSize) / (currentProtocol.unit === "tube" ? 1 : 1000)).toFixed(2)}{" "}
                  {currentProtocol.unit === "tube" ? "tubes" : currentProtocol.unit === "ml" ? "Litres" : "Kg"}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-800">Total Course Requirement:</span>
                <span className="text-lg font-black text-[#0052cc]">
                  {requirementInLitresOrKg}{" "}
                  {currentProtocol.unit === "ml" ? "Litres" : currentProtocol.unit === "gm" ? "Kg" : "Tubes"}
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Expected Impact:</strong> {currentProtocol.yieldBoost}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Package className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                <span>
                  <strong>Available Packs:</strong> {currentProtocol.packSizes.join(", ")}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-slate-200">
            <Link
              href="/partner"
              className="w-full flex items-center justify-center gap-2 bg-[#0052cc] hover:bg-[#0043a8] text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition shadow-sm hover:shadow"
            >
              <span>Order Bulk / Inquire Dealership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
