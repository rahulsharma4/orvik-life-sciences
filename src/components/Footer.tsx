import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  HeartHandshake,
  Award,
  ArrowRight,
} from "lucide-react";
import { COMPANY, PRODUCTS } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-[#02102e] text-slate-300 pt-16 pb-12 border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Corporate Trust Ribbon with Logo Gold Accents */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-blue-950">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-900/60 border border-blue-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">WHO-GMP &amp; ISO Certified</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Manufactured in pharmaceutical facilities compliant with strict veterinary GMP protocols.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-900/40 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Metho-Chelated Minerals</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Superior bioavailability and complete rumen-bypass absorption for high milk yields.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-900/60 border border-blue-500/30 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Veterinary &amp; Farmer First</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Trusted by veterinary practitioners and commercial dairy farmers across India.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-900/40 border border-amber-500/30 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Hyderabad Central Hub</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Corporate registered office and central dispatch depot at Suchitra X Road, Hyderabad.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-blue-950">
          {/* Company Bio & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-32 bg-white/10 p-1 rounded-xl border border-white/20">
                <Image
                  src="/images/Logo.png"
                  alt="ORVIK Animal Health Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-base font-black text-white tracking-tight block">
                  ORVIK LIFE SCIENCES PVT. LTD.
                </span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                  Animal Health Division
                </span>
              </div>
            </div>

            {/* Exact Mission from PDF Page 12 */}
            <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-amber-400 pl-3 py-1">
              &ldquo;Orvik Solemnly dedicated itself to aiding animals and society by providing good manufactured products &amp; services.&rdquo;
            </p>

            {/* Exact Address & Manager from Image */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Shop No. 111, Ram Raj Nagar</strong>, Suchitra X Road, Hyderabad - 500067 (Telangana), India
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Manager:</strong> {COMPANY.managerName} —{" "}
                  <a href={`tel:${COMPANY.managerRawPhone}`} className="text-amber-300 hover:underline font-bold">
                    {COMPANY.managerPhone}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{COMPANY.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black text-amber-300 uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              Veterinary Range
            </h4>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.slice(0, 6).map((prod) => (
                <li key={prod.slug}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="hover:text-amber-300 transition flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-500" />
                    <span>{prod.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-amber-400 font-bold hover:underline">
                  View All 10 Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge & Tools */}
          <div>
            <h4 className="text-xs font-black text-amber-300 uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              Dairy Knowledge Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/three-pillars" className="hover:text-amber-300 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>Three Pillars of Dairy</span>
                </Link>
              </li>
              <li>
                <Link href="/three-pillars#pillar-1" className="hover:text-slate-200 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>Pillar 1: Calf a Year</span>
                </Link>
              </li>
              <li>
                <Link href="/three-pillars#pillar-2" className="hover:text-slate-200 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>Pillar 2: Peak Milk Yield</span>
                </Link>
              </li>
              <li>
                <Link href="/three-pillars#pillar-3" className="hover:text-slate-200 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>Pillar 3: Transition Cow Health</span>
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-amber-300 transition flex items-center gap-1.5 font-semibold text-amber-400">
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                  <span>Veterinary Dosage Calculator</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Commercial & Distribution */}
          <div>
            <h4 className="text-xs font-black text-amber-300 uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              Trade &amp; Dealership
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/partner" className="text-amber-400 font-bold hover:underline flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                  <span>Apply for Dealership</span>
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-slate-200 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>District Stockist Inquiries</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-200 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>Corporate Office Hyderabad</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-200 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-blue-500" />
                  <span>About Orvik Life Sciences</span>
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-slate-500 hover:text-slate-300 transition flex items-center gap-1.5 pt-2">
                  <ArrowRight className="w-3 h-3 text-slate-700" />
                  <span>Admin Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} <strong>ORVIK LIFE SCIENCES PVT. LTD.</strong> (Orvik Animal Health). All Rights Reserved.
          </p>
          <p className="text-center md:text-right">
            For Veterinary Use Only. Shop No. 111, Ram Raj Nagar, Suchitra X Road, Hyderabad-500067 (Telangana).
          </p>
        </div>
      </div>
    </footer>
  );
}
