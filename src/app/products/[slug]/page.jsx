"use client";

import React, { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Package,
  Layers,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Phone,
  Building2,
  Calendar,
  AlertCircle
} from "lucide-react";
import { PRODUCTS, COMPANY } from "@/data/products";
import InquiryModal from "@/components/InquiryModal";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) =>
      p.slug !== slug &&
      (p.category === product.category || p.threePillarCategory === product.threePillarCategory)
  ).slice(0, 3);

  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-blue-700">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-blue-700">Products</Link>
        <span>/</span>
        <span className="text-slate-800 font-bold">{product.name}</span>
      </div>

      {/* Main Product Hero / Overview Section */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
        {/* Left Column: Visual Packaging Showcase */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="relative h-80 sm:h-96 w-full rounded-2xl bg-gradient-to-b from-slate-50 via-slate-100 to-white flex items-center justify-center p-6 border border-slate-200 overflow-hidden">
            {product.image ? (
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-300">
                <Package className="w-24 h-24" />
                <span className="text-xs text-slate-400 mt-2 font-medium">Authentic Packaging</span>
              </div>
            )}

            {/* Pillar Badge */}
            <div className="absolute top-4 left-4">
              <span className="text-xs font-bold bg-blue-50 text-[#0052cc] border border-blue-200 px-3 py-1 rounded-full shadow-sm">
                🎯 {product.threePillarCategory}
              </span>
            </div>
          </div>

          {/* Packaging Sizes Pills */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Available Packaging Sizes:
            </span>
            <div className="flex flex-wrap gap-2">
              {product.packaging.map((pack) => (
                <span
                  key={pack}
                  className="text-xs font-bold bg-white text-blue-800 border border-blue-200 px-3 py-1.5 rounded-lg shadow-sm"
                >
                  {pack}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Title, Indication & Overview */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                {product.formulation}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-[#0b1e36] tracking-tight">
              {product.name}
            </h1>

            {product.hindiTitle && (
              <div className="mt-2 text-sm sm:text-base font-bold text-amber-900 bg-amber-50 p-2.5 rounded-xl border border-amber-200 inline-block">
                {product.hindiTitle}
              </div>
            )}

            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {product.tagline}
            </p>
          </div>

          {/* Target Species List */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Approved Target Species:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.targetSpecies.map((sp) => (
                <span
                  key={sp}
                  className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200"
                >
                  {sp}
                </span>
              ))}
            </div>
          </div>

          {/* Key Clinical Features */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Key Features &amp; Scientific Highlights:
            </div>
            <ul className="space-y-2">
              {product.features.map((feat, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 py-3.5 px-6 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              <span>Inquire for Dealership / Bulk Order</span>
            </button>
            <a
              href={`tel:${COMPANY.managerRawPhone}`}
              className="py-3.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 border border-slate-300"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Manager: {COMPANY.managerName} ({COMPANY.managerPhone})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Composition Table & Dosage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Exact Composition Table (PDF Specs) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Analytical Composition
              </div>
              <h3 className="text-xl font-black text-[#0b1e36]">
                Guaranteed Nutritional &amp; Active Profile
              </h3>
            </div>
            {product.compositionBase && (
              <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                {product.compositionBase}
              </span>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold">
                <tr>
                  <th className="p-3 rounded-l-lg">Active Ingredient / Salt / Botanical</th>
                  <th className="p-3 text-right rounded-r-lg">Quantity / Potency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {product.composition.map((c, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-800">{c.ingredient}</td>
                    <td className="p-3 text-right font-black text-blue-900">{c.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Indications & Dosage Matrix */}
        <div className="lg:col-span-5 space-y-6">
          {/* Indications Checklist */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Therapeutic Applications
            </div>
            <h3 className="text-lg font-black text-[#0b1e36]">
              Clinical Indications
            </h3>
            <div className="space-y-2 pt-2">
              {product.indications.map((ind, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dosage & Administration */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Veterinary Administration
            </div>
            <h3 className="text-lg font-black text-[#0b1e36]">
              Recommended Dosage
            </h3>
            <div className="space-y-2.5 pt-2">
              {product.dosages.map((d, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-800">{d.species}</div>
                  <div className="text-blue-700 font-semibold mt-0.5">{d.dosage}</div>
                </div>
              ))}
            </div>

            {product.usageRecommendation && (
              <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                <strong>Directions:</strong> {product.usageRecommendation}
              </div>
            )}

            {product.storage && (
              <div className="text-[11px] text-slate-500 pt-2 italic">
                <strong>Storage:</strong> {product.storage}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="pt-10 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Veterinary Synergies
              </span>
              <h3 className="text-2xl font-black text-[#0b1e36]">
                Related Formulations in {product.category}
              </h3>
            </div>
            <Link href="/products" className="text-xs font-bold text-blue-600 hover:underline">
              View All Products →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.slug}
                product={rel}
                onInquire={() => setIsModalOpen(true)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProduct={product}
      />
    </div>
  );
}

