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

  const handleSearchSelect = (slug) => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-14 w-28 sm:w-32 transition group-hover:scale-105 duration-200">
              <Image
                src="/images/Logo.png"
                alt="ORVIK Animal Health Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="hidden xl:block">
              <span className="text-sm font-black text-slate-900 tracking-tight block">
                ORVIK LIFE SCIENCES
              </span>
              <span className="text-[10px] text-[#0052cc] font-bold uppercase tracking-wider block">
                Animal Health Division
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                        isActive || pathname.startsWith("/products")
                          ? "text-[#0052cc] bg-blue-50"
                          : "text-slate-700 hover:text-[#0052cc] hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0052cc] transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Rich Products Mega Dropdown */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 animate-fadeIn">
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 py-1 border-b border-slate-100">
                          Veterinary Formulations
                        </div>
                        <div className="max-h-80 overflow-y-auto py-1">
                          {PRODUCTS.slice(0, 6).map((prod) => (
                            <Link
                              key={prod.slug}
                              href={`/products/${prod.slug}`}
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-blue-50/80 transition group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#0052cc] transition">
                                <Sparkles className="w-4 h-4 text-[#0052cc] group-hover:text-white" />
                              </div>
                              <div className="overflow-hidden">
                                <span className="text-xs font-bold text-slate-900 group-hover:text-[#0052cc] block truncate">
                                  {prod.name}
                                </span>
                                <span className="text-[10px] text-slate-500 block truncate">
                                  {prod.formulation} &bull; {prod.category}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="pt-2 border-t border-slate-100 text-center">
                          <Link
                            href="/products"
                            className="text-xs font-bold text-[#0052cc] hover:underline inline-flex items-center gap-1"
                          >
                            <span>Browse All 10 Formulations</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
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
                  className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    isActive
                      ? "text-[#0052cc] bg-blue-50"
                      : "text-slate-700 hover:text-[#0052cc] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Distributor Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Medicine Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition border border-slate-200"
              title="Search medicines"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Search...</span>
              <kbd className="text-[10px] bg-white text-slate-600 px-1.5 py-0.5 rounded shadow-xs border border-slate-200">
                /
              </kbd>
            </button>

            {/* Dealership & Partner Portal CTA Button */}
            <Link
              href="/partner"
              className="flex items-center gap-2 bg-[#0052cc] hover:bg-[#0043a8] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm hover:shadow"
            >
              <Building2 className="w-4 h-4 text-amber-300" />
              <span>Distributor Portal</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-slate-600 hover:text-[#0052cc] rounded-xl hover:bg-slate-100"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#0052cc] rounded-xl hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-sm font-bold ${
                  pathname === link.href
                    ? "text-[#0052cc] bg-blue-50"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <Link
              href="/partner"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-[#0052cc] text-white text-center rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <Building2 className="w-4 h-4" />
              <span>Distributor &amp; Dealership</span>
            </Link>

            <a
              href={`tel:${COMPANY.managerRawPhone}`}
              className="w-full py-2.5 px-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Manager: {COMPANY.managerName} ({COMPANY.managerPhone})</span>
            </a>
          </div>
        </div>
      )}

      {/* Instant Medicine Search Modal Dialog */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 p-4 border-b border-slate-200">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search formulations (e.g. Orvical, TFS, Utro-Heal, Udder-Ayu)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm text-slate-800 placeholder-slate-400 outline-none bg-transparent"
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Results List */}
            <div className="max-h-96 overflow-y-auto p-2">
              {searchQuery.trim() === "" ? (
                <div className="p-6 text-center text-slate-400 text-xs">
                  Type a product name, active ingredient, or indication (e.g. &ldquo;Calcium&rdquo;, &ldquo;Repeat breeding&rdquo;, &ldquo;Mastitis&rdquo;)
                </div>
              ) : filteredSearchResults.length === 0 ? (
                <div className="p-6 text-center text-slate-500 text-xs">
                  No formulations found matching &ldquo;{searchQuery}&rdquo;.
                </div>
              ) : (
                filteredSearchResults.map((prod) => (
                  <button
                    key={prod.slug}
                    onClick={() => handleSearchSelect(prod.slug)}
                    className="w-full text-left p-3 rounded-2xl hover:bg-blue-50 transition flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-black text-slate-900 group-hover:text-[#0052cc]">
                        {prod.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {prod.formulation} &bull; {prod.category}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0052cc] group-hover:translate-x-1 transition" />
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

