import React from "react";
import { SPECIES_LIST } from "@/data/products";

interface SpeciesSelectorProps {
  selectedSpecies: string;
  onSelect: (speciesId: string) => void;
}

export default function SpeciesSelector({ selectedSpecies, onSelect }: SpeciesSelectorProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max">
        {SPECIES_LIST.map((sp) => {
          const isSelected = selectedSpecies === sp.id;
          return (
            <button
              key={sp.id}
              onClick={() => onSelect(sp.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition border shadow-sm ${
                isSelected
                  ? "bg-[#0052cc] text-white border-[#0052cc] shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
              }`}
            >
              <span>{sp.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

