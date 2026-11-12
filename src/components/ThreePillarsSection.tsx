import React from "react";
import Link from "next/link";
import {
  Baby,
  Milk,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  HeartPulse
} from "lucide-react";

export default function ThreePillarsSection() {
  const pillars = [
    {
      id: "pillar-1",
      number: "01",
      title: "Calf a Year",
      tagline: "Timely Heat, Timely Conception & Clean Uterus",
      description:
        "Every extra open day beyond 90 days post-calving costs dairy farmers ₹250-₹350/day. Orvik's fertility & uterine protocol ensures rapid uterine involution, expulsion of lochia, and prompt follicular development for guaranteed 12-month calving interval.",
      keyMedicines: [
        { name: "TFS Powder", desc: "Metho-chelated minerals for anestrus & repeat breeding" },
        { name: "UTRO-HEAL Liquid", desc: "24-herb ecbolic for placenta release & clean uterus" },
      ],
      benefitList: [
        "Eliminates silent heat & delayed puberty in heifers",
        "Prevents metritis, pyometra & retained fetal membranes",
        "Maximizes lifetime milk cycles per cow",
      ],
      color: "from-amber-600 to-amber-700",
      accent: "border-amber-500",
      bgLight: "bg-amber-50/70",
      icon: Baby,
    },
    {
      id: "pillar-2",
      number: "02",
      title: "Peak Milk Production",
      tagline: "High Lactation Persistence, High SNF & Mastitis Defense",
      description:
        "Reaching peak yield by 45-60 days in lactation and sustaining the yield curve is essential for farm profitability. Orvik provides double-strength chelated calcium, bio-available phosphorus, and therapeutic Vitamin-H for udder cistern development.",
      keyMedicines: [
        { name: "Chelated ORVICAL GOLD", desc: "Double strength liquid calcium in mango flavor" },
        { name: "ORVICAL-P Granules", desc: "MCHC bio-calcium & phosphorus feed supplement" },
        { name: "UDDER-AYU", desc: "2000 mcg Vitamin-H for udder size & mastitis prevention" },
      ],
      benefitList: [
        "Enhances daily milk yield by 1.5L to 3.0L per cow",
        "Increases milk fat and SNF percentage",
        "Strengthens teat sphincter to block mastitis entry",
      ],
      color: "from-blue-600 to-blue-700",
      accent: "border-blue-500",
      bgLight: "bg-blue-50/70",
      icon: Milk,
    },
    {
      id: "pillar-3",
      number: "03",
      title: "Smooth Transition & Cow Health",
      tagline: "Zero Milk Fever, Liver Shield & Rumen Stability",
      description:
        "The 21 days before and after calving represent 80% of dairy herd mortality and veterinary expense. Orvik's acute transition care delivers high-energy calcium drench, hepatoprotective lipotropics, and multi-strain probiotics.",
      keyMedicines: [
        { name: "Advance ORVICAL Gel", desc: "10,000mg acute calcium drench for milk fever prevention" },
        { name: "ORVI GUARD", desc: "Hepato-protective liver tonic with Tricholine & Inositol" },
        { name: "D-Yeast Powder", desc: "40 Billion CFU prebiotics & rumen enzyme optimizer" },
        { name: "Orvikind-Plus B1", desc: "Nervine tonic for downer cow & neurological debility" },
        { name: "O-Tox Suspension", desc: "Emergency activated charcoal for bloat & poisoning" },
      ],
      benefitList: [
        "100% prevention of downer cow syndrome & milk fever",
        "Protects liver against fatty liver & ketosis shock",
        "Restores active rumination, cud chewing and appetite",
      ],
      color: "from-emerald-600 to-emerald-700",
      accent: "border-emerald-500",
      bgLight: "bg-emerald-50/70",
      icon: HeartPulse,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Scientific Dairy Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1e36] tracking-tight">
            Three Pillars of Profitable Dairy Farming
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            The core clinical philosophy developed by <strong>Orvik Life Sciences</strong> to eliminate farmer losses, maximize lifetime animal lactation, and guarantee sustainable farm ROI.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`pharma-card rounded-3xl p-8 border-2 ${pillar.accent} relative flex flex-col justify-between overflow-hidden group`}
              >
                {/* Pillar Header & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-slate-400 transition">
                      {pillar.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-[#0b1e36] tracking-tight mb-1">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold text-amber-700 mb-4">
                    {pillar.tagline}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Clinical Milestones:
                    </div>
                    {pillar.benefitList.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Medicines */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                      <span>Recommended Formulations:</span>
                    </div>
                    {pillar.keyMedicines.map((med, idx) => (
                      <div key={idx} className="text-xs">
                        <span className="font-bold text-slate-800">{med.name}</span>
                        <span className="text-slate-500 block text-[11px]">{med.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <Link
                  href="/three-pillars"
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-slate-100 hover:bg-[#0b1e36] hover:text-white rounded-xl text-xs font-bold text-slate-800 transition group/btn"
                >
                  <span>Explore Pillar Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner - Clean Light Theme */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 via-white to-amber-50 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-blue-200">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-black text-[#0052cc]">
              Need a Customized Herd Health Protocol for Your Dairy Farm?
            </h4>
            <p className="text-xs text-slate-600">
              Our veterinary nutritionists and field officers design customized dosage plans based on your herd size, breed, and lactation stage.
            </p>
          </div>
          <Link
            href="/partner"
            className="shrink-0 bg-[#0052cc] hover:bg-[#0043a8] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm hover:shadow"
          >
            Request Herd Protocol
          </Link>
        </div>
      </div>
    </section>
  );
}

