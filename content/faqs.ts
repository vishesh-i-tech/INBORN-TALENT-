export interface FAQItem {
  id: string;
  category: "General" | "The Scan & Report" | "For Parents & Students" | "Visiting Us";
  question: string;
  answer: string;
  isTopQuestion?: boolean; // Featured in top 5 on home page
  hide?: boolean; // Used for TODO_CLIENT fields that must not show until provided
}

export const faqs: FAQItem[] = [
  {
    id: "what-is-dmit",
    category: "General",
    question: "What is a DMIT test?",
    answer: "A DMIT (Dermatoglyphics Multiple Intelligence Test) analyses fingerprint patterns with specialised software to produce an indicative report on learning styles, multiple intelligences, and natural tendencies. It is used as a practical starting point for personal counselling.",
    isTopQuestion: true,
  },
  {
    id: "is-dmit-scientifically-proven",
    category: "General",
    question: "Is DMIT scientifically proven?",
    answer: "DMIT studies fingerprint patterns to suggest a person's learning style, strengths, and interests. It is an indicative guide, not a medical or clinical test, and it cannot predict success or diagnose any condition. Using fingerprints to measure intelligence or career fit is not an established scientific method, and some professional bodies have raised concerns about it. We use the report as one input for a conversation, together with marks, interests, and your own goals. Please do not take major decisions based on this report alone.",
    isTopQuestion: true,
  },
  {
    id: "is-it-medical-or-psychological",
    category: "General",
    question: "Is it a medical or psychological test?",
    answer: "No. It is neither a medical nor a psychological test, and it does not provide any diagnosis. For any clinical, developmental, or mental-health concerns, please consult a qualified medical doctor or licensed clinical psychologist.",
    isTopQuestion: false,
  },
  {
    id: "is-fingerprint-scan-safe",
    category: "The Scan & Report",
    question: "Is the fingerprint scan safe and painless?",
    answer: "Yes, it is completely safe and painless. A digital optical scanner is used to take clear images of each fingertip, exactly like an office biometric attendance machine or Aadhaar device.",
    isTopQuestion: true,
  },
  {
    id: "who-can-take-dmit",
    category: "For Parents & Students",
    question: "Who can take the test?",
    answer: "Children, teenagers, college students, and adults. It is especially popular with parents of students in Class 8 to 12 who are weighing subject streams or career directions.",
    isTopQuestion: true,
  },
  {
    id: "how-long-does-it-take",
    category: "The Scan & Report",
    question: "How long does the scan and counselling session take?",
    answer: "Session duration is tailored to each package.",
    hide: true, // TODO_CLIENT: hidden until client specifies exact session duration
  },
  {
    id: "what-will-i-receive",
    category: "The Scan & Report",
    question: "What will I receive after the scan?",
    answer: "You receive a detailed multi-page report detailing indicative brain lobes distribution, learning style breakdown (Visual, Auditory, Kinesthetic), personality tendencies, and multiple intelligences. Crucially, this is accompanied by a personal counselling session with Vivek Koche to walk you through what the report suggests.",
    isTopQuestion: false,
  },
  {
    id: "how-much-does-it-cost",
    category: "Visiting Us",
    question: "How much does it cost?",
    answer: "Fees depend on the package and whether you are seeking a student stream guidance session, child learning profile, or institutional workshop. Please enquire on WhatsApp for current fees.",
    isTopQuestion: true,
  },
  {
    id: "can-i-do-it-online",
    category: "Visiting Us",
    question: "Can I do the test online from home?",
    answer: "No. Because optical fingerprint scanning requires physical hardware, all scans are conducted in-person at our centre at Sarra, Ward No. 35, Chhindwara, Madhya Pradesh.",
    isTopQuestion: false,
  },
  {
    id: "is-data-safe",
    category: "General",
    question: "Is my child's biometric data kept safe?",
    answer: "Yes. Fingerprint scans are captured solely to generate the personal analysis report and are never sold, rented, or transferred to third-party marketing services. Please see our Privacy Policy for full details.",
    isTopQuestion: false,
  },
];

// Helper to get only visible FAQs
export function getVisibleFaqs(): FAQItem[] {
  return faqs.filter((faq) => !faq.hide);
}

// Helper to get top FAQs for Home page
export function getTopFaqs(): FAQItem[] {
  return faqs.filter((faq) => !faq.hide && faq.isTopQuestion);
}
