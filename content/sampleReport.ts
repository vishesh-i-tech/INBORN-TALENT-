export interface LobeItem {
  id: string;
  name: string;
  leftFunction: string;
  rightFunction: string;
  leftPercent: number;
  rightPercent: number;
  totalPercent: number;
  description: string;
}

export interface QuotientItem {
  code: "EQ" | "IQ" | "AQ" | "CQ";
  name: string;
  percent: number;
  description: string;
  color: string;
}

export interface PersonalityItem {
  name: "Peacock" | "Eagle" | "Owl" | "Dove";
  trait: string;
  percent: number;
  isPrimary: boolean;
  characteristics: string[];
  description: string;
}

export interface VAKItem {
  type: "Visual" | "Auditory" | "Kinesthetic";
  percent: number;
  description: string;
  learningTips: string[];
}

export interface IntelligenceItem {
  name: string;
  percent: number;
  summary: string;
  idealEnvironments: string;
}

export interface SampleReportData {
  badgeNotice: string;
  fictionalProfileName: string;
  fictionalAge: string;
  overallHemisphere: {
    leftBrainPercent: number;
    rightBrainPercent: number;
    description: string;
  };
  lobes: LobeItem[];
  quotients: QuotientItem[];
  personalities: PersonalityItem[];
  vakSplit: VAKItem[];
  intelligences: IntelligenceItem[];
}

export const sampleReportData: SampleReportData = {
  badgeNotice: "Sample report. Fictional data, not a real client.",
  fictionalProfileName: "Sample Profile (Illustrative)",
  fictionalAge: "Class 10 Student (Fictional)",
  overallHemisphere: {
    leftBrainPercent: 52,
    rightBrainPercent: 48,
    description:
      "A balanced bilateral processing tendency, combining analytical reasoning (Left) with creative contextual thinking (Right).",
  },
  // 5 Lobes: Left + Right = 100% total (Left=52%, Right=48%)
  lobes: [
    {
      id: "pre-frontal",
      name: "Pre-Frontal Lobe",
      leftFunction: "Mental Focus & Goal Setting",
      rightFunction: "Leadership & Interpersonal Intuition",
      leftPercent: 11,
      rightPercent: 10,
      totalPercent: 21,
      description: "Related to planning, social motivation, and personal direction.",
    },
    {
      id: "frontal",
      name: "Frontal Lobe",
      leftFunction: "Logical Deduction & Analysis",
      rightFunction: "Concept Imagination & Ideation",
      leftPercent: 12,
      rightPercent: 9,
      totalPercent: 21,
      description: "Involved in structured critical thinking and creative problem framing.",
    },
    {
      id: "parietal",
      name: "Parietal Lobe",
      leftFunction: "Fine Motor & Spatial Manipulation",
      rightFunction: "Gross Motor & Physical Rhythm",
      leftPercent: 10,
      rightPercent: 9,
      totalPercent: 19,
      description: "Processes spatial relationships and hands-on movement coordination.",
    },
    {
      id: "temporal",
      name: "Temporal Lobe",
      leftFunction: "Verbal Processing & Memory",
      rightFunction: "Tone, Pitch & Emotional Listening",
      leftPercent: 10,
      rightPercent: 11,
      totalPercent: 21,
      description: "Governs language comprehension and sound reception.",
    },
    {
      id: "occipital",
      name: "Occipital Lobe",
      leftFunction: "Visual Reading & Symbol Recognition",
      rightFunction: "Aesthetic Sense & 3D Visualisation",
      leftPercent: 9,
      rightPercent: 9,
      totalPercent: 18,
      description: "Deals with visual imagery, charts, and spatial observation.",
    },
  ],
  // 4 Quotients: 28 + 26 + 24 + 22 = 100%
  quotients: [
    {
      code: "EQ",
      name: "Emotional Quotient",
      percent: 28,
      description: "Empathy, relational understanding, and social responsiveness.",
      color: "#6B46F0",
    },
    {
      code: "IQ",
      name: "Intelligence Quotient",
      percent: 26,
      description: "Logical deduction, numerical reasoning, and rule-based tasks.",
      color: "#3B82F6",
    },
    {
      code: "AQ",
      name: "Adversity Quotient",
      percent: 24,
      description: "Persistence, adaptability during hurdles, and emotional recovery.",
      color: "#10B981",
    },
    {
      code: "CQ",
      name: "Creativity Quotient",
      percent: 22,
      description: "Out-of-the-box thinking, expressive synthesis, and original ideas.",
      color: "#F5B83D",
    },
  ],
  // 4 Personality Types: 38 + 26 + 22 + 14 = 100%
  personalities: [
    {
      name: "Peacock",
      trait: "Expressive & Enthusiastic",
      percent: 38,
      isPrimary: true,
      characteristics: [
        "Thrives in collaborative discussions and communicative settings.",
        "Motivated by encouragement and social acknowledgement.",
        "Enjoys creative presentations, drama, debates, and team projects.",
      ],
      description: "Primary observed style in this fictional illustration. Demonstrates natural charisma and enthusiastic sharing.",
    },
    {
      name: "Owl",
      trait: "Analytical & Detail-Oriented",
      percent: 26,
      isPrimary: false,
      characteristics: [
        "Prefers structured outlines, checklists, and clear criteria.",
        "Takes time to weigh pros and cons before jumping to conclusions.",
      ],
      description: "Secondary supportive style offering grounding and care for precision.",
    },
    {
      name: "Dove",
      trait: "Harmonious & Patient",
      percent: 22,
      isPrimary: false,
      characteristics: [
        "Values calm teamwork and quiet, steady progress.",
        "Sensitive to conflicts and supportive of peers.",
      ],
      description: "Fosters loyalty, patience, and empathetic group communication.",
    },
    {
      name: "Eagle",
      trait: "Decisive & Goal-Oriented",
      percent: 14,
      isPrimary: false,
      characteristics: [
        "Focuses on outcomes, competition, and fast execution.",
      ],
      description: "Provides an occasional drive toward independent goal realization.",
    },
  ],
  // VAK Learning Style: 42 + 34 + 24 = 100%
  vakSplit: [
    {
      type: "Visual",
      percent: 42,
      description: "Learns most naturally through visual aids, colour coding, mind maps, and reading.",
      learningTips: [
        "Use highlighters, flowcharts, and diagrams during study sessions.",
        "Keep the study desk visually organised and free from visual clutter.",
      ],
    },
    {
      type: "Auditory",
      percent: 34,
      description: "Absorbs information effectively through lectures, verbal explanations, and group discussions.",
      learningTips: [
        "Read notes aloud or record key formulas for replay.",
        "Teach or explain the topic verbally to a friend or parent.",
      ],
    },
    {
      type: "Kinesthetic",
      percent: 24,
      description: "Engages through practical application, movement, and physical note-taking.",
      learningTips: [
        "Incorporate regular stretch breaks every 30-40 minutes.",
        "Use flashcards and active hands-on problem sets.",
      ],
    },
  ],
  // 8 Multiple Intelligences: 16 + 15 + 14 + 13 + 12 + 11 + 10 + 9 = 100%
  intelligences: [
    {
      name: "Intrapersonal",
      percent: 16,
      summary: "Self-reflection, personal values, and internal motivation.",
      idealEnvironments: "Independent research, strategy, philosophy, writing.",
    },
    {
      name: "Interpersonal",
      percent: 15,
      summary: "Understanding others, teamwork, empathy, and active listening.",
      idealEnvironments: "Counselling, human resources, management, public relations.",
    },
    {
      name: "Logical-Mathematical",
      percent: 14,
      summary: "Numbers, patterns, cause-and-effect reasoning, and problem analysis.",
      idealEnvironments: "Data analysis, engineering, commerce, accounting, coding.",
    },
    {
      name: "Verbal-Linguistic",
      percent: 13,
      summary: "Command of words, storytelling, reading, and spoken expression.",
      idealEnvironments: "Journalism, law, content creation, literature, civil services.",
    },
    {
      name: "Visual-Spatial",
      percent: 12,
      summary: "Visual perception, mental rotation, design, and spatial geometry.",
      idealEnvironments: "Architecture, UI/UX design, photography, animation, cartography.",
    },
    {
      name: "Musical",
      percent: 11,
      summary: "Appreciation of rhythm, tone, audio cadence, and musical structure.",
      idealEnvironments: "Sound design, music composition, acoustic engineering.",
    },
    {
      name: "Bodily-Kinesthetic",
      percent: 10,
      summary: "Physical dexterity, coordination, athletic control, and craft.",
      idealEnvironments: "Sports, physiotherapy, theatre, surgery, mechanical assembly.",
    },
    {
      name: "Naturalist",
      percent: 9,
      summary: "Observation of natural phenomena, living organisms, and ecosystems.",
      idealEnvironments: "Environmental science, agriculture, botany, veterinary studies.",
    },
  ],
};
