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
                    <span className="truncate">{prod.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-amber-400 hover:underline font-bold inline-block pt-1 text-[11px]"
                >
                  View All 10 Formulations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Three Pillars Navigation */}
          <div>
            <h4 className="text-xs font-black text-amber-300 uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              Three Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/three-pillars#pillar-1"
                  className="hover:text-amber-300 transition block"
                >
                  01. Calf a Year Protocol
                </Link>
              </li>
              <li>
                <Link
                  href="/three-pillars#pillar-2"
                  className="hover:text-amber-300 transition block"
                >
                  02. Peak Milk Production
                </Link>
              </li>
              <li>
                <Link
                  href="/three-pillars#pillar-3"
                  className="hover:text-amber-300 transition block"
                >
                  03. Smooth Transition Cow
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/calculator"
                  className="text-blue-300 hover:text-white font-semibold flex items-center gap-1"
                >
                  <span>Dosage Calculator</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="text-amber-400 hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Distributor Portal</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Trade & Corporate Contact */}
          <div>
            <h4 className="text-xs font-black text-amber-300 uppercase tracking-wider mb-4 border-b border-blue-900 pb-2">
              Trade &amp; Stockists
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              We are actively appointing authorized stockists, C&amp;F agents, and dairy cooperative suppliers across all Indian states.
            </p>
            <Link
              href="/partner"
              className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-extrabold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition shadow-md"
            >
              Apply for Dealership
            </Link>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong>ORVIK LIFE SCIENCES PVT. LTD.</strong> (Animal Health Division). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Shop 111, Suchitra X Road, Hyderabad-500067</span>
            <span>&bull;</span>
            <Link href="/about" className="hover:text-amber-300">
              About Orvik
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-amber-300">
              Contact
            </Link>
            <span>&bull;</span>
            <Link href="/admin" className="text-slate-400 hover:text-white">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

