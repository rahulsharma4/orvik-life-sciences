"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Package,
  Layers,
  ArrowRight,
  Sparkles,
  Stethoscope,
  X
} from "lucide-react";
import { PRODUCTS, CATEGORIES_LIST, SPECIES_LIST } from "@/data/products";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import InquiryModal from "@/components/InquiryModal";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSpecies, setSelectedSpecies] = useState("all");
  const [selectedPillar, setSelectedPillar] = useState("all");
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "All Categories" && product.category !== selectedCategory) {
        return false;
      }

      // Species filter
      if (selectedSpecies !== "all") {
        const matchesSpecies = product.targetSpecies.some((s) =>
          s.toLowerCase().includes(selectedSpecies.toLowerCase())
        );
        if (!matchesSpecies) return false;
      }

      // Pillar filter
      if (selectedPillar !== "all" && product.threePillarCategory !== selectedPillar) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesTagline = product.tagline.toLowerCase().includes(q);
        const matchesHindi = product.hindiTitle ? product.hindiTitle.includes(q) : false;
        const matchesIndications = product.indications.some((ind) =>
          ind.toLowerCase().includes(q)
        );
        const matchesComposition = product.composition.some((c) =>
          c.ingredient.toLowerCase().includes(q)
        );
        if (
          !matchesName &&
          !matchesTagline &&
          !matchesHindi &&
          !matchesIndications &&
          !matchesComposition
        ) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedSpecies, selectedPillar]);

  const handleOpenInquiry = (product: Product) => {
    setSelectedProductForInquiry(product);
    setIsModalOpen(true);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedSpecies("all");
    setSelectedPillar("all");
  };

  return (
    <div className="py-12 sm:py-16 space-y-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Page Header - Clean Light Theme */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50/40 rounded-3xl p-8 sm:p-12 text-slate-900 relative overflow-hidden shadow-sm border border-blue-200">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-[#0052cc] border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-[#0052cc]" />
            <span>Veterinary Therapeutics &amp; Nutritional Formulations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Veterinary Formulations Portfolio
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Explore 10 science-backed formulations for reproductive fertility, acute calving calcium drench, liver revitalization, mastitis prevention, and rumen optimization.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        {/* Search Row */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by formulation name, symptom (e.g., Mastitis, Milk Fever, Bloat), or active ingredient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-800 outline-none focus:border-blue-600 focus:bg-white transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {(selectedCategory !== "All Categories" ||
            selectedSpecies !== "all" ||
            selectedPillar !== "all" ||
            searchQuery) && (
            <button
              onClick={clearFilters}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 shrink-0"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
          {/* Category Dropdown */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Therapeutic Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-xs font-semibold bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-slate-800 outline-none focus:border-blue-600"
            >
              {CATEGORIES_LIST.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Species Dropdown */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Target Species
            </label>
            <select
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
              className="w-full text-xs font-semibold bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-slate-800 outline-none focus:border-blue-600"
            >
              {SPECIES_LIST.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Three Pillar Dropdown */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Dairy Pillar Focus
            </label>
            <select
              value={selectedPillar}
              onChange={(e) => setSelectedPillar(e.target.value)}
              className="w-full text-xs font-semibold bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-slate-800 outline-none focus:border-blue-600"
            >
              <option value="all">All Dairy Pillars</option>
              <option value="Calf a Year">Pillar 1: Calf a Year</option>
              <option value="Peak Milk Production">Pillar 2: Peak Milk Production</option>
              <option value="Smooth Transition & Cow Health">Pillar 3: Transition &amp; Cow Health</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} formulations
        </span>
        <span className="text-slate-400">
          Certified under WHO-GMP &amp; ISO 9001:2015
        </span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              onInquire={handleOpenInquiry}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
          <Package className="w-16 h-16 text-slate-300 mx-auto" />
          <h3 className="text-xl font-bold text-slate-800">No Formulations Match Your Criteria</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            We couldn&apos;t find any formulations matching your active filters. Try resetting the filters or searching for terms like &ldquo;Calcium&rdquo;, &ldquo;Liver&rdquo;, or &ldquo;Fertility&rdquo;.
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-2.5 bg-blue-700 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProduct={selectedProductForInquiry}
      />
    </div>
  );
}

