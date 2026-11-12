"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  Calculator,
  Building2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { PRODUCTS, COMPANY } from "@/data/products";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const filteredSearchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.indications.some((ind) => ind.toLowerCase().includes(searchQuery.toLowerCase())) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSelect = (slug: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    router.push(`/products/${slug}`);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Three Pillars", href: "/three-pillars" },
    { label: "Dosage Calculator", href: "/calculator" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-100">
      {/* Top Utility Ribbon - Clean, Light & Legible */}
      <div className="bg-slate-50 text-slate-700 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1.5">
          {/* Address & Verified Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 font-semibold text-slate-800">
              <MapPin className="w-3.5 h-3.5 text-[#0052cc] shrink-0" />
              <span>
                <strong>Shop No. 111, Ram Raj Nagar</strong>, Suchitra X Road, Hyderabad-500067
              </span>
            </span>
            <span className="hidden lg:inline text-slate-300">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-600">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY.email}</span>
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold text-[10px]">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>{COMPANY.iso}</span>
            </span>
          </div>

          {/* Quick Helplines & Admin */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <a
              href={`tel:${COMPANY.managerRawPhone}`}
              className="flex items-center gap-1.5 text-slate-800 hover:text-[#0052cc] font-semibold transition"
              title="Call Manager Shrikant Sharma"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Manager: <strong className="text-[#0052cc]">{COMPANY.managerName} ({COMPANY.managerPhone})</strong></span>
            </a>
            <span className="text-slate-300">|</span>
            <Link
              href="/admin"
              className="text-[11px] text-slate-600 hover:text-[#0052cc] font-semibold transition"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-11 w-28 sm:h-12 sm:w-32 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src="/images/Logo.png"
              alt="ORVIK Animal Health"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
          <div className="hidden sm:block border-l border-slate-200 pl-3">
            <span className="text-xs font-black tracking-tight text-[#0052cc] block leading-tight">
              ORVIK LIFE SCIENCES
            </span>
            <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wider block">
              Animal Health Division
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Single-line, spacious, zero awkward wrapping) */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-semibold whitespace-nowrap transition-colors py-2 ${
                      isActive ? "text-[#0052cc]" : "text-slate-700 hover:text-[#0052cc]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${productsDropdownOpen ? "rotate-180 text-[#0052cc]" : ""}`} />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {productsDropdownOpen && (
                    <div className="absolute top-full -left-4 w-80 bg-white border border-slate-200 shadow-xl rounded-2xl py-3 px-2 z-50 animate-fadeIn">
                      <div className="px-3 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Formulations Portfolio
                        </span>
                        <Link
                          href="/products"
                          className="text-xs font-bold text-[#0052cc] hover:underline"
                        >
                          View All (10) →
                        </Link>
                      </div>
                      <div className="max-h-96 overflow-y-auto space-y-1">
                        {PRODUCTS.map((prod) => (
                          <Link
                            key={prod.slug}
                            href={`/products/${prod.slug}`}
                            className="block p-2 rounded-xl hover:bg-blue-50/80 transition"
                          >
                            <div className="text-xs font-bold text-slate-800 hover:text-[#0052cc] flex items-center justify-between">
                              <span>{prod.name}</span>
                              <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-semibold border border-amber-100">
                                {prod.packaging[0]}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-500 truncate mt-0.5">
                              {prod.category}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold whitespace-nowrap transition-colors py-2 ${
                  isActive ? "text-[#0052cc] font-bold" : "text-slate-700 hover:text-[#0052cc]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Quick Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-600 px-3.5 py-2 rounded-full text-xs font-medium transition"
            title="Search formulations"
          >
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden md:inline">Search...</span>
          </button>

          {/* Become Distributor CTA */}
          <Link
            href="/partner"
            className="hidden sm:flex items-center gap-1.5 bg-[#0052cc] hover:bg-[#0043a8] text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm hover:shadow"
          >
            <Building2 className="w-3.5 h-3.5 text-amber-300" />
            <span className="whitespace-nowrap">Distributor Portal</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#0052cc]" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 animate-fadeIn">
          <div className="p-3 bg-blue-50/60 rounded-xl text-xs text-slate-600 mb-2 border border-blue-100">
            <span className="font-bold text-[#0052cc] block text-xs">{COMPANY.name}</span>
            <span className="text-[11px] text-slate-500">Shop No. 111, Ram Raj Nagar, Suchitra X Road, Hyderabad-500067</span>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-xl text-sm font-semibold transition ${
                pathname === link.href ? "bg-blue-50 text-[#0052cc] font-bold" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/partner"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#0052cc] hover:bg-[#0043a8] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow"
            >
              Apply for Dealership / Stockist
            </Link>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-fadeIn">
            <div className="p-4 border-b border-slate-200 flex items-center gap-3">
              <Search className="w-5 h-5 text-[#0052cc]" />
              <input
                type="text"
                autoFocus
                placeholder="Search formulations, symptoms (e.g. Mastitis, Bloat, Milk Fever) or active ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4">
              {searchQuery.trim() === "" ? (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Chelated Calcium",
                      "Milk Fever",
                      "Mastitis",
                      "Anestrus",
                      "Liver Tonic",
                      "Bloat",
                      "Vitamin H",
                      "D-Yeast",
                      "Utro-Heal",
                    ].map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="text-xs bg-slate-100 hover:bg-[#0052cc] hover:text-white text-slate-700 px-3 py-1.5 rounded-full transition font-medium"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : filteredSearchResults.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 mb-2">
                    Found {filteredSearchResults.length} formulation(s)
                  </p>
                  {filteredSearchResults.map((prod) => (
                    <div
                      key={prod.slug}
                      onClick={() => handleSearchSelect(prod.slug)}
                      className="p-3 rounded-2xl hover:bg-blue-50/70 border border-slate-100 hover:border-blue-200 cursor-pointer transition flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <span>{prod.name}</span>
                          <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                            {prod.formulation}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{prod.tagline}</p>
                      </div>
                      <span className="text-xs font-bold text-[#0052cc] hover:underline">
                        View Details →
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500 text-xs">
                  No formulations found matching &ldquo;{searchQuery}&rdquo;. Try another term.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
