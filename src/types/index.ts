export interface ProductComposition {
  ingredient: string;
  amount: string;
}

export interface DosageItem {
  species: string;
  dosage: string;
}

export interface Product {
  name: string;
  slug: string;
  tagline: string;
  hindiTitle?: string;
  subtitle?: string;
  category:
    | "Calcium & Mineral Supplements"
    | "Fertility & Uterine Care"
    | "Liver & Metabolic Health"
    | "Nervine & Neurological Tonics"
    | "Rumen Digestion & Probiotics"
    | "Udder Health & Mastitis Care"
    | "Anti-Toxin & Poisoning Suspensions";
  targetSpecies: string[];
  formulation: "Liquid Tonic" | "Powder / Granules" | "High Potency Gel" | "Oral Suspension" | "Pellets";
  compositionBase?: string;
  composition: ProductComposition[];
  indications: string[];
  features: string[];
  dosages: DosageItem[];
  usageRecommendation?: string;
  storage?: string;
  packaging: string[];
  bannerColor: string;
  accentColor: string;
  image?: string;
  isFeatured?: boolean;
  isBestseller?: boolean;
  threePillarCategory: "Calf a Year" | "Peak Milk Production" | "Smooth Transition & Cow Health" | "General Health";
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  organization?: string;
  city?: string;
  state?: string;
  inquiryType: string;
  productOfInterest?: string;
  message: string;
}

