export interface SiteConfig {
  brand: string;
  byline: string;
  tagline: string;
  counsellor: string;
  counsellorRole: string;
  counsellorPhoto: string;
  experienceYears: number;
  studentsGuided: string;
  locationSummary: string;
  address: {
    line: string;
    city: string;
    state: string;
    pin: string | null; // TODO_CLIENT: Pin code pending client confirmation
    full: string;
  };
  phones: string[];
  primaryPhone: string;
  secondaryPhone: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  hours: {
    days: string;
    open: string;
    close: string;
    display: string;
    sundayConfirmed: boolean; // TODO_CLIENT: confirm if open on Sunday
  };
  mode: string;
  feesNotice: string;
  mapsUrl: string | null; // TODO_CLIENT: add Google Business Profile URL once created
  mapsSearchQuery: string;
  credentials: string[]; // TODO_CLIENT: hide qualifications section until provided
  minAge: number | null; // TODO_CLIENT: minimum age eligibility pending confirmation
  sessionDuration: string | null; // TODO_CLIENT: session duration pending confirmation
  officePhotos: string[]; // TODO_CLIENT: office photos pending upload
  social: Record<string, string>;
}

export const site: SiteConfig = {
  brand: "Inborn Talent",
  byline: "by Vivek Koche",
  tagline: "Discover your child's natural strengths.",
  counsellor: "Vivek Koche",
  counsellorRole: "Certified DMIT Counsellor & Career Guide",
  counsellorPhoto: "/images/vivek-koche.webp",
  experienceYears: 6,
  studentsGuided: "200+",
  locationSummary: "Chhindwara, Madhya Pradesh",
  address: {
    line: "At Sarra, Ward No. 35",
    city: "Chhindwara",
    state: "Madhya Pradesh",
    pin: null, // TODO_CLIENT
    full: "At Sarra, Ward No. 35, Chhindwara, Madhya Pradesh",
  },
  phones: ["+917509257555", "+919111925553"],
  primaryPhone: "+917509257555",
  secondaryPhone: "+919111925553",
  whatsappNumber: "917509257555",
  whatsappDisplay: "+91 75092 57555",
  email: "kochevivek@gmail.com",
  hours: {
    days: "Daily",
    open: "10:00 AM",
    close: "8:00 PM",
    display: "Daily 10:00 AM – 8:00 PM",
    sundayConfirmed: false, // TODO_CLIENT
  },
  mode: "In-person only (Fingerprints must be scanned at our Chhindwara centre)",
  feesNotice: "Enquire on WhatsApp for current fees",
  mapsUrl: null, // TODO_CLIENT: hide map embed until Google Business Profile is created
  mapsSearchQuery: "At Sarra, Ward No. 35, Chhindwara, Madhya Pradesh",
  credentials: [], // TODO_CLIENT: empty array hides the credentials block automatically
  minAge: null, // TODO_CLIENT: hides age callout until client specifies minimum age
  sessionDuration: null, // TODO_CLIENT: hides duration callout until client specifies
  officePhotos: [], // TODO_CLIENT: empty array hides photo gallery
  social: {},
};
