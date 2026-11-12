"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, X, MapPin } from "lucide-react";
import { COMPANY } from "@/data/products";

export default function FloatingHelp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Contact Card */}
      {open && (
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-200 p-5 w-72 sm:w-80 text-xs space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0052cc] text-white flex items-center justify-center font-bold text-xs">
                OH
              </div>
              <div>
                <span className="font-black text-slate-900 block leading-tight">ORVIK Helpline</span>
                <span className="text-[10px] text-emerald-600 font-bold">● Online &bull; Hyderabad Desk</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-slate-600 text-[11px] leading-relaxed">
            Need urgent veterinary dosing advice or stockist wholesale rates?
          </p>

          <div className="space-y-2">
            <a
              href={`https://wa.me/917374934911?text=Hello%20Shrikant%20ji,%20I%20am%20interested%20in%20Orvik%20veterinary%20medicines`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Manager ({COMPANY.managerPhone})</span>
            </a>

            <a
              href={`tel:${COMPANY.managerRawPhone}`}
              className="w-full py-2.5 px-3 bg-[#0052cc] hover:bg-[#0043a8] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Manager: {COMPANY.managerName}</span>
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
            <span className="truncate">Suchitra X Road, Hyderabad-500067</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#0052cc] to-blue-700 hover:from-blue-700 hover:to-[#0043a8] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 border-2 border-amber-400"
        title="Contact Veterinary Desk"
        aria-label="Contact Veterinary Desk"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 text-amber-300" />}
      </button>
    </div>
  );
}

