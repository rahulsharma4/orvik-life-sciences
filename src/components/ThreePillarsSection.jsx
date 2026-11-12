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
        "Significantly boosts fat and SNF percentages",
        "Builds strong teat barrier to stop mastitis pathogens",
      ],
      color: "from-blue-600 to-blue-700",
      accent: "border-blue-500",
      bgLight: "bg-blue-50/70",
      icon: Milk,
    },
    {
      id: "pillar-3",
      number: "03",
      title: "Smooth Transition",
      tagline: "Hypocalcemia Prevention, Liver Protection & Rumen Care",
      description:
        "The critical transition period (-21 to +21 days of calving) triggers 80% of veterinary emergencies. Orvik shields transition cows from acute milk fever downer syndrome, ketosis, and liver breakdown with high-dose ionic calcium gels and lipotropic tonics.",
      keyMedicines: [
        { name: "Advance ORVICAL Gel", desc: "10,000mg elemental calcium drench for acute calving" },
        { name: "ORVI GUARD", desc: "Tricholine citrate & herbal liver restorative tonic" },
        { name: "D-Yeast Powder", desc: "40 Billion CFU live yeast for rumen microflora" },
      ],
      benefitList: [
        "Zero downer cow syndrome & zero acute milk fever",
        "Eliminates ketosis, displaced abomasum & fatty liver",
        "Ensures immediate post-calving rumination and appetite",
      ],
      color: "from-emerald-600 to-emerald-700",
      accent: "border-emerald-500",
      bgLight: "bg-emerald-50/70",
      icon: HeartPulse,
    },
  ];

  return (
    <section className="space-y-10 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-blue-100 text-[#0052cc] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-blue-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>The Orvik Commercial Dairy Framework</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#041e4d] tracking-tight">
          Three Pillars of Profitable Dairy Farming
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Sustainable dairy profitability is engineered around three biological cornerstones. Every Orvik product is formulated to serve one or more of these pillars.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className={`pharma-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 ${pillar.accent} ${pillar.bgLight} relative overflow-hidden`}
            >
              <div className="space-y-5">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center border border-slate-100">
                    <Icon className="w-6 h-6 text-[#0052cc]" />
                  </div>
                  <span className="text-3xl font-black text-slate-300">
                    {pillar.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#041e4d] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-700 mt-0.5">
                    {pillar.tagline}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Formulations Box */}
                <div className="bg-white/90 rounded-2xl p-4 border border-slate-200/80 space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#0052cc]">
                    Prescribed Formulations:
                  </div>
                  <div className="space-y-1.5">
                    {pillar.keyMedicines.map((med, idx) => (
                      <div key={idx} className="text-xs">
                        <strong className="text-slate-900 block font-bold">{med.name}</strong>
                        <span className="text-[11px] text-slate-500 leading-tight block">{med.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefit Bullets */}
                <ul className="space-y-2 pt-1">
                  {pillar.benefitList.map((ben, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <div className="pt-6 mt-6 border-t border-slate-200">
                <Link
                  href={`/three-pillars#${pillar.id}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-[#0052cc] text-[#0052cc] hover:text-white border border-blue-200 text-xs font-bold uppercase tracking-wider transition duration-200 shadow-sm"
                >
                  <span>Explore {pillar.title} Protocol</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Framework Summary Banner - Clean Light Theme */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-amber-50/50 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-blue-200 shadow-sm">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-base sm:text-lg font-black text-[#041e4d]">
            Integrated Commercial Herd Management Protocol
          </h4>
          <p className="text-xs text-slate-600 max-w-2xl">
            Combining all three pillars reduces veterinary costs by up to 45% and improves lifetime lactation volume per cow.
          </p>
        </div>
        <Link
          href="/three-pillars"
          className="shrink-0 px-6 py-3 bg-[#0052cc] hover:bg-[#0043a8] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm hover:shadow"
        >
          Read Complete Veterinary Paper →
        </Link>
      </div>
    </section>
  );
}

