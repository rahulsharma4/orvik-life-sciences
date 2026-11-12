"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Package,
  Sparkles,
  CheckCircle,
  Stethoscope,
  ArrowRight
} from "lucide-react";

export default function ProductCard({ product, onInquire }) {
  return (
    <div className="pharma-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-blue-100 hover:border-[#0052cc] bg-white transition-all duration-300">
      {/* Card Header & Badges */}
      <div>
        <div className="p-4 pb-2 flex items-center justify-between gap-2 border-b border-slate-100 bg-gradient-to-r from-blue-50/60 to-slate-50">
          <span className="text-[10px] font-black uppercase tracking-wider text-[#0052cc] bg-blue-100/80 px-2.5 py-0.5 rounded-full border border-blue-200">
            {product.formulation}
          </span>

          {product.isBestseller && (
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-200 px-2.5 py-0.5 rounded-full border border-amber-300 flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3 text-amber-700" />
              <span>Bestseller</span>
            </span>
          )}
        </div>

        {/* Product Visual Container */}
        <div className="relative h-56 w-full bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 flex items-center justify-center p-4 overflow-hidden">
          {product.image ? (
            <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-300">
              <Package className="w-16 h-16" />
              <span className="text-xs mt-2 text-slate-400 font-medium">Veterinary Formulation</span>
            </div>
          )}

          {/* Three Pillar Badge Overlay */}
          <div className="absolute bottom-2 left-2">
            <span className="text-[10px] font-bold bg-white/95 text-[#0052cc] px-2 py-0.5 rounded-md shadow-sm border border-blue-200">
              {product.threePillarCategory}
            </span>
          </div>
        </div>

        {/* Product Information */}
        <div className="p-5">
          <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-1">
            {product.category}
          </div>

          <Link href={`/products/${product.slug}`} className="block group-hover:text-[#0052cc] transition">
            <h3 className="text-lg font-black text-[#041e4d] tracking-tight leading-snug">
              {product.name}
            </h3>
          </Link>

          {product.hindiTitle && (
            <p className="text-[11px] font-hindi text-amber-900 font-semibold mt-1.5 line-clamp-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
              {product.hindiTitle}
            </p>
          )}

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Target Species Pills */}
          <div className="mt-3.5 flex flex-wrap gap-1">
            {product.targetSpecies.slice(0, 4).map((spec) => (
              <span
                key={spec}
                className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
              >
                {spec}
              </span>
            ))}
            {product.targetSpecies.length > 4 && (
              <span className="text-[9px] font-bold bg-blue-50 text-[#0052cc] px-1.5 py-0.5 rounded">
                +{product.targetSpecies.length - 4} more
              </span>
            )}
          </div>

          {/* Indications Highlight */}
          <div className="mt-3.5 pt-3 border-t border-slate-100">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
              <Stethoscope className="w-3 h-3 text-[#0052cc]" />
              <span>Primary Indications:</span>
            </div>
            <ul className="space-y-1">
              {product.indications.slice(0, 2).map((ind, idx) => (
                <li key={idx} className="text-xs text-slate-500 flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{ind}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer: Packaging & CTAs */}
      <div className="p-5 pt-0">
        <div className="flex items-center justify-between text-xs text-slate-500 pb-3 mb-3 border-b border-slate-100">
          <span className="font-bold text-slate-700 flex items-center gap-1 text-[11px]">
            <Package className="w-3.5 h-3.5 text-slate-400" />
            <span>Packs:</span>
          </span>
          <span className="font-bold text-[#0052cc] truncate max-w-[170px] text-xs">
            {product.packaging.join(", ")}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="w-full text-center py-2.5 px-3 bg-blue-50 hover:bg-blue-100 text-[#0052cc] text-xs font-bold rounded-xl transition border border-blue-200"
          >
            Clinical Details
          </Link>
          <button
            onClick={() => onInquire?.(product)}
            className="w-full py-2.5 px-3 bg-[#0052cc] hover:bg-[#0043a8] text-white text-xs font-bold rounded-xl transition shadow-sm hover:shadow"
          >
            Inquire Bulk
          </button>
        </div>
      </div>
    </div>
  );
}

