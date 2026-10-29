export interface ServiceStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  forWhom: string;
  targetAudienceType: string;
  sessionDuration: string | null; // TODO_CLIENT: null hides duration
  feesNotice: string;
  whatYouGet: string[];
  howItWorks: ServiceStep[];
  faqs: ServiceFAQ[];
  whatsappMessage: string;
  keywords: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "dmit-fingerprint-analysis",
    title: "DMIT Fingerprint Analysis",
    tagline: "Indicative mapping of learning styles and cognitive tendencies through fingerprint pattern analysis.",
    shortDescription: "A gentle in-person fingerprint scan that serves as a conversation starter to explore learning preferences, multiple intelligences, and natural strengths.",
    forWhom: "Children, teenagers, and curious adults seeking a fresh, indicative perspective on their natural learning preferences.",
    targetAudienceType: "parent_of_child",
    sessionDuration: null, // TODO_CLIENT: provide once confirmed
    feesNotice: "Enquire on WhatsApp for current fees",
    whatYouGet: [
      "In-person gentle scanning of all 10 fingerprints at our Chhindwara centre.",
      "A comprehensive multi-page indicative report covering brain lobes distribution, learning style split (Visual, Auditory, Kinesthetic), and multiple intelligences.",
      "One-on-one personal counselling session with Vivek Koche to walk through the observations.",
      "Practical, non-pressured takeaways for everyday study habits and personal growth.",
    ],
    howItWorks: [
      {
        stepNumber: 1,
        title: "Enquire on WhatsApp",
        description: "Reach out directly on WhatsApp to ask questions and learn what the scan entails.",
      },
      {
        stepNumber: 2,
        title: "Confirm Your Centre Slot",
        description: "Choose a convenient time to visit our centre at Sarra, Ward No. 35, Chhindwara.",
      },
      {
        stepNumber: 3,
        title: "In-Person Scan",
        description: "A quick, painless digital scan of the ten fingertips taken by Vivek Koche.",
      },
      {
        stepNumber: 4,
        title: "Report Generation",
        description: "Your detailed printed/digital report is prepared for your personal review.",
      },
      {
        stepNumber: 5,
        title: "Personal Counselling Session",
        description: "Sit down together to review the insights, ask questions, and explore helpful next steps.",
      },
    ],
    faqs: [
      {
        question: "Is the fingerprint scan safe and painless?",
        answer: "Yes, absolutely. It uses an optical scanner similar to those used in office attendance or Aadhaar updates. It takes only a few minutes and is completely painless.",
      },
      {
        question: "Is DMIT considered a medical or psychological test?",
        answer: "No. DMIT is not a medical, clinical, or diagnostic evaluation. It is an indicative observation tool designed to act as a helpful starting point for constructive conversation.",
      },
      {
        question: "Can I do the fingerprint test online from home?",
        answer: "No. Fingerprints must be scanned in person using dedicated optical hardware at our centre in Chhindwara to ensure reliable pattern capture.",
      },
      {
        question: "What is the fee for this analysis?",
        answer: "Fees vary depending on the chosen counselling package. Please message us on WhatsApp for current fee details.",
      },
    ],
    whatsappMessage: "Hello Vivek, I am interested in DMIT Fingerprint Analysis. Please share details and available slots.",
    keywords: ["DMIT test in Chhindwara", "fingerprint analysis Chhindwara", "learning style test Chhindwara"],
  },
  {
    slug: "career-guidance",
    title: "Career & Stream Guidance",
    tagline: "Helping students in Class 8–10, 11–12, and after 12th make thoughtful educational choices.",
    shortDescription: "Personal career counselling combining indicative DMIT tendencies with academic records, genuine interests, and future goals to explore suitable career paths.",
    forWhom: "Students in Class 8–10 choosing their stream, Class 11–12 preparing for entrance exams, and graduates navigating higher studies.",
    targetAudienceType: "student_class_8_10",
    sessionDuration: null, // TODO_CLIENT
    feesNotice: "Enquire on WhatsApp for current fees",
    whatYouGet: [
      "Objective exploration of subject streams (Science, Commerce, Humanities) based on academic marks and natural inclinations.",
      "Detailed review of emerging and traditional career avenues suitable for the student's profile.",
      "Clear, calm conversation between student, parent, and counsellor to reduce decision-making anxiety.",
      "Actionable roadmap highlighting recommended entrance exams, colleges, and preparation milestones.",
    ],
    howItWorks: [
      {
        stepNumber: 1,
        title: "Initial Chat on WhatsApp",
        description: "Share the student's current class, board, and questions about stream or career selection.",
      },
      {
        stepNumber: 2,
        title: "Centre Visit & Scan",
        description: "Visit our Chhindwara centre for fingerprint scanning and sharing previous academic background.",
      },
      {
        stepNumber: 3,
        title: "Report Preparation",
        description: "Generate the multi-dimensional report covering cognitive strengths and multiple intelligences.",
      },
      {
        stepNumber: 4,
        title: "Joint Counselling Session",
        description: "An in-depth joint session with parents and the student to discuss streams, careers, and practical next steps.",
      },
    ],
    faqs: [
      {
        question: "How does this help after Class 10?",
        answer: "Choosing between PCM, PCB, Commerce, or Humanities can feel overwhelming. Our counselling looks at your child's past academic performance, personal interest, and indicative learning traits to help your family make a balanced, pressure-free choice.",
      },
      {
        question: "Does the report decide the career for the student?",
        answer: "No single report should decide a career. The analysis highlights natural inclinations, which we combine with the student's personal passions, hard work, and family aspirations during counselling.",
      },
      {
        question: "Can parents attend the counselling session?",
        answer: "Yes, we actively encourage both parents and students to participate so everyone is aligned on the student's educational path.",
      },
    ],
    whatsappMessage: "Hello Vivek, I am interested in Career & Stream Guidance for my child. Please share details and available slots.",
    keywords: ["career counselling in Chhindwara", "career guidance after 10th Chhindwara", "stream selection after 10th MP"],
  },
  {
    slug: "parent-child-guidance",
    title: "Learning Style & Parenting Guidance",
    tagline: "Discover how your child absorbs information best and create a calm home learning environment.",
    shortDescription: "Helps parents identify whether their child learns primarily through visual, auditory, or hands-on (kinesthetic) methods, reducing homework friction and study stress.",
    forWhom: "Parents of young children and adolescents seeking practical insights into their child's behavioural and learning styles.",
    targetAudienceType: "parent_of_child",
    sessionDuration: null, // TODO_CLIENT
    feesNotice: "Enquire on WhatsApp for current fees",
    whatYouGet: [
      "Identification of dominant learning styles: Visual, Auditory, or Kinesthetic.",
      "Tailored study habits and revision strategies aligned with your child's natural processing style.",
      "Parenting communication tips to reduce friction around study routines and screen time.",
      "Guidance on nurturing emotional balance and resilience (EQ and AQ).",
    ],
    howItWorks: [
      {
        stepNumber: 1,
        title: "Connect on WhatsApp",
        description: "Tell us about your child's age and the specific learning or homework challenges you are noticing.",
      },
      {
        stepNumber: 2,
        title: "Centre Visit in Chhindwara",
        description: "A gentle in-person scanning session tailored to keep children comfortable and relaxed.",
      },
      {
        stepNumber: 3,
        title: "Parent Consultation",
        description: "A dedicated discussion with Vivek Koche focusing on practical home study routines and positive reinforcement.",
      },
    ],
    faqs: [
      {
        question: "What does learning style mean?",
        answer: "Every child processes information differently. Visual learners grasp concepts through diagrams and charts; auditory learners do best through discussion and listening; kinesthetic learners learn by doing and physical engagement.",
      },
      {
        question: "Will this solve exam anxiety?",
        answer: "Understanding how your child learns helps reduce unnecessary pressure and build tailored study routines, creating a more relaxed learning environment.",
      },
    ],
    whatsappMessage: "Hello Vivek, I am interested in Learning Style & Parenting Guidance. Please share details and available slots.",
    keywords: ["learning style test for children Chhindwara", "parenting guidance Chhindwara", "child counselling Chhindwara"],
  },
  {
    slug: "adult-professional-profile",
    title: "Strengths & Career Direction for Adults",
    tagline: "Self-awareness for college students and working professionals seeking clarity.",
    shortDescription: "An indicative assessment of your workplace instincts, interpersonal tendencies, and multiple intelligences to assist in career transitions or leadership growth.",
    forWhom: "College students, recent graduates, and mid-career professionals in Chhindwara and nearby areas exploring new career directions or career changes.",
    targetAudienceType: "working_professional",
    sessionDuration: null, // TODO_CLIENT
    feesNotice: "Enquire on WhatsApp for current fees",
    whatYouGet: [
      "Deep dive into personality profile tendencies (Eagle, Peacock, Owl, Dove framework).",
      "Assessment of IQ, EQ, AQ (Adversity Quotient), and CQ (Creativity Quotient) indicators.",
      "Exploration of workplace roles matching your communication style and problem-solving preferences.",
      "One-on-one confidential consultation with Vivek Koche.",
    ],
    howItWorks: [
      {
        stepNumber: 1,
        title: "WhatsApp Enquiry",
        description: "Send us a message about your current professional stage and what decisions you are weighing.",
      },
      {
        stepNumber: 2,
        title: "Centre Visit",
        description: "Visit our centre in Sarra, Chhindwara for your in-person fingerprint scan.",
      },
      {
        stepNumber: 3,
        title: "1-on-1 Consultation",
        description: "A confidential discussion reviewing your profile report and mapping potential career avenues.",
      },
    ],
    faqs: [
      {
        question: "Can working professionals benefit from DMIT?",
        answer: "Yes. Many adults use the profile as an engaging mirror to reflect on their workplace strengths, communication preferences, and areas where they feel most naturally energized.",
      },
      {
        question: "Does this replace formal industry training or certifications?",
        answer: "Not at all. It is purely an indicative self-awareness exercise to help you reflect on which environments and roles naturally fit your style.",
      },
    ],
    whatsappMessage: "Hello Vivek, I am interested in the Strengths & Career Direction session for Adults. Please share details.",
    keywords: ["career guidance for adults Chhindwara", "career change counselling MP", "self awareness counselling Chhindwara"],
  },
  {
    slug: "school-college-workshops",
    title: "Workshops for Schools & Colleges",
    tagline: "Interactive sessions on learning diversity, stream selection, and student potential.",
    shortDescription: "Tailored workshops for educational institutions to help teachers, students, and parents understand multiple intelligences and reduce career anxiety.",
    forWhom: "School principals, trustees, college administrators, and educator groups in Chhindwara district and nearby regions.",
    targetAudienceType: "school_or_college",
    sessionDuration: null, // TODO_CLIENT
    feesNotice: "Enquire on WhatsApp for current fees",
    whatYouGet: [
      "Engaging interactive presentations explaining multiple intelligences and diverse learning styles.",
      "Practical strategies for educators to accommodate visual, auditory, and kinesthetic learners.",
      "Parent awareness sessions addressing stream choices and healthy expectations.",
      "Customised session outlines suited to your institution's schedule and audience size.",
    ],
    howItWorks: [
      {
        stepNumber: 1,
        title: "Institutional Enquiry",
        description: "Contact us via WhatsApp or phone to discuss your school's or college's requirements.",
      },
      {
        stepNumber: 2,
        title: "Discussion & Planning",
        description: "Meet with Vivek Koche to outline topics, target grades, and session timings.",
      },
      {
        stepNumber: 3,
        title: "Workshop Delivery",
        description: "In-person workshop conducted on-campus for your students, parents, or faculty.",
      },
    ],
    faqs: [
      {
        question: "How long is a typical workshop?",
        answer: "Workshops typically range from 90 minutes to a half-day session, depending on your institution's requirements. Exact duration is tailored in consultation with your leadership.",
      },
      {
        question: "Do you scan fingerprints during mass workshops?",
        answer: "Workshops focus on education and awareness of learning diversity and career guidance. Individual scans and counselling are organized separately for interested families.",
      },
    ],
    whatsappMessage: "Hello Vivek, I am inquiring about conducting a workshop for our school/college. Please share details.",
    keywords: ["career workshop for schools in Chhindwara", "school counselling workshop MP", "educational seminars Chhindwara"],
  },
];

