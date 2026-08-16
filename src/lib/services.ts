export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  icon: string;
  image: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "strength-conditioning",
    name: "Strength & Conditioning",
    tagline: "Build raw power, muscle and athletic durability.",
    description:
      "Periodized strength programs built on the big lifts, power development and conditioning that transfer directly to your sport.",
    longDescription: [
      "Strength is the foundation every other athletic quality is built on. Our periodized programs progress you through foundational strength, power and peak performance phases so you are at your best when it matters — game day.",
      "Every session is coached, not just supervised. You get technique coaching on the squat, deadlift, bench and Olympic lifts, plus the plyometrics, core work and conditioning that turn gym strength into on-field power.",
    ],
    features: [
      "Periodized 12-week training blocks",
      "Olympic lifting and power development",
      "Squat, deadlift and bench technique coaching",
      "Plyometrics and explosive movement",
      "Conditioning tailored to your sport",
      "Quarterly strength testing and benchmarks",
    ],
    icon: "Dumbbell",
    image: "/images/service-strength.jpg",
    priceFrom: "$129/mo",
  },
  {
    slug: "speed-agility-training",
    name: "Speed & Agility Training",
    tagline: "Run faster, cut sharper, react quicker.",
    description:
      "Sprint mechanics, acceleration, top-end speed and change-of-direction training that shaves tenths off your times.",
    longDescription: [
      "Speed is the most trainable quality in sports — when it is trained the right way. We break sprinting down into start, acceleration, transition and top-end phases, and fix the mechanics that are holding you back.",
      "Using timing gates, video analysis and force-sensing technology, we measure every gain. Then we layer in agility, reactive drills and sport-specific cutting patterns so your new speed shows up in competition, not just on the track.",
    ],
    features: [
      "Sprint mechanics and video analysis",
      "Timing-gate testing every 4 weeks",
      "Acceleration and top-speed phases",
      "Change-of-direction and agility work",
      "Reactive and decision-speed drills",
      "Sport-specific speed transfer",
    ],
    icon: "Zap",
    image: "/images/service-speed.jpg",
    priceFrom: "$119/mo",
  },
  {
    slug: "sport-specific-coaching",
    name: "Sport-Specific Coaching",
    tagline: "Train the movements your sport actually demands.",
    description:
      "Position-specific training for football, basketball, soccer, baseball, track, lacrosse and more — designed with your coach's playbook in mind.",
    longDescription: [
      "Generic training gets generic results. We study your sport, your position and your role, then build a program around the exact demands you face — first-step explosion for a lineman, change of direction for a guard, arm-care for a pitcher.",
      "Our coaches have worked with college and professional athletes across a dozen sports. We communicate with your team coaches so your PeakEdge training complements, never conflicts with, your practice schedule.",
    ],
    features: [
      "Position-specific performance programs",
      "Film and movement analysis",
      "Coach-to-coach communication",
      "In-season maintenance training",
      "Pre-season peak programming",
      "Combine and pro-day preparation",
    ],
    icon: "Target",
    image: "/images/service-sport-specific.jpg",
    priceFrom: "$159/mo",
  },
  {
    slug: "youth-athletic-development",
    name: "Youth Athletic Development",
    tagline: "Long-term athletic development for ages 8–17.",
    description:
      "Fun, safe, science-based training that builds the athletic foundation young athletes need — without burning them out.",
    longDescription: [
      "Kids are not miniature adults. Our youth programs follow long-term athletic development models that prioritize movement quality, coordination, confidence and a love of training — while building speed, strength and power at age-appropriate levels.",
      "Every session is coach-supervised with small group ratios, and we keep parents in the loop with progress reports and open communication. Our goal is athletes who are faster, stronger and — most importantly — still playing their sport in ten years.",
    ],
    features: [
      "Age-appropriate movement and strength",
      "Speed, agility and coordination games",
      "Small group ratios (max 8:1)",
      "Confidence and mindset coaching",
      "Parent progress reports",
      "Seasonal camps and clinics",
    ],
    icon: "Users",
    image: "/images/service-youth.jpg",
    priceFrom: "$99/mo",
  },
  {
    slug: "injury-prevention-programs",
    name: "Injury Prevention Programs",
    tagline: "Movement screens and prehab that keep you on the field.",
    description:
      "Identify weaknesses before they become injuries. Movement screens, corrective exercise and prehab built around your history.",
    longDescription: [
      "Most injuries are predictable — and preventable. Our coaches run a full movement and strength screen to find the asymmetries, mobility restrictions and weak links that put you at risk.",
      "From there you get a corrective program: glute and hamstring prehab, ankle and knee stability work, shoulder care for overhead athletes, and core control drills. Athletes in our prevention programs miss dramatically fewer training days.",
    ],
    features: [
      "Full-body movement and strength screen",
      "Personalized corrective exercise plan",
      "Return-to-play support after injury",
      "Ankle, knee and shoulder stability work",
      "Recovery and load management guidance",
      "Re-screen every 8 weeks",
    ],
    icon: "ShieldCheck",
    image: "/images/service-injury.jpg",
    priceFrom: "$149/mo",
  },
  {
    slug: "nutrition-recovery-coaching",
    name: "Nutrition & Recovery Coaching",
    tagline: "Fuel, sleep and recovery protocols that accelerate progress.",
    description:
      "Practical nutrition plans, sleep optimization and recovery protocols — coaching that fits your schedule, not a fad diet.",
    longDescription: [
      "Training is only half the equation. Our nutrition and recovery coaches build simple, sustainable plans around your goals — performance, body composition or both — without banning your favorite foods.",
      "You get game-day fueling strategies, hydration protocols, sleep optimization and recovery routines (mobility, contrast therapy, massage partnerships) that help you train harder and bounce back faster.",
    ],
    features: [
      "1-on-1 nutrition coaching sessions",
      "Game-day and practice fueling plans",
      "Hydration and supplement guidance",
      "Sleep and recovery optimization",
      "Body composition tracking",
      "Recovery tools: mobility, foam rolling, contrast therapy",
    ],
    icon: "Apple",
    image: "/images/service-nutrition.jpg",
    priceFrom: "$89/mo",
  },
  {
    slug: "team-training-camps",
    name: "Team Training Camps",
    tagline: "Intensive camps for schools, clubs and squads.",
    description:
      "Multi-day training camps for teams of 10–60 athletes — speed, strength, conditioning and sport-specific work, delivered by our full coaching staff.",
    longDescription: [
      "Take your whole squad to the next level in a single week. Our team camps combine speed and agility sessions, strength circuits, conditioning tests and sport-specific workshops, all run by our full coaching staff on our 12,000 sq ft facility and outdoor turf.",
      "Every camp starts with baseline testing and ends with measurable improvement. Schools and clubs get a detailed report on every athlete, plus programming they can continue with long after the camp ends.",
    ],
    features: [
      "Camps for teams of 10–60 athletes",
      "Baseline testing and final assessment",
      "Speed, strength and conditioning blocks",
      "Sport-specific breakouts",
      "Athlete report cards for coaches",
      "On-site options for schools",
    ],
    icon: "Trophy",
    image: "/images/service-team.jpg",
    priceFrom: "$1,800",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  details: string[];
  image: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "westlake-track-speed",
    title: "Westlake High Track — 12 College Signings in One Season",
    location: "Westlake, TX",
    category: "Speed Program",
    summary:
      "A full-season speed development program for the Westlake track team that turned a strong squad into a record-breaking one.",
    details: [
      "Ran 46 athletes through twice-weekly speed and strength sessions all season.",
      "Every athlete's sprint mechanics were rebuilt using video analysis and timing gates.",
      "12 athletes signed with college programs; 9 school records fell during the season.",
    ],
    image: "/images/project-track-team.jpg",
    stats: [
      { label: "Athletes", value: "46" },
      { label: "College signings", value: "12" },
      { label: "Records broken", value: "9" },
    ],
  },
  {
    slug: "austin-youth-academy",
    title: "Austin Youth Soccer Academy — Foundational Speed & Agility",
    location: "Austin, TX",
    category: "Youth Development",
    summary:
      "A 20-week athletic development program for 85 youth soccer players aged 8–14, built around long-term athletic development principles.",
    details: [
      "Designed age-appropriate speed, agility and coordination sessions for three age bands.",
      "Reduced lower-body injury rates by 62% compared to the previous season.",
      "Coached parents on at-home movement games so progress continued between sessions.",
    ],
    image: "/images/project-youth-academy.jpg",
    stats: [
      { label: "Players", value: "85" },
      { label: "Age range", value: "8–14" },
      { label: "Injury reduction", value: "62%" },
    ],
  },
  {
    slug: "bear-creek-college-prep",
    title: "Bear Creek Football — 5 Scholarship Offers in One Offseason",
    location: "Round Rock, TX",
    category: "College Prep",
    summary:
      "An offseason combine-prep program for 18 high school football athletes chasing college opportunities — five earned scholarship offers.",
    details: [
      "Individualized combine prep: 40-yard dash, pro agility, vertical and bench protocols.",
      "Rebuilt sprint mechanics for 15 of 18 athletes; average 40-yard gain of 0.18 seconds.",
      "Filmed highlight-eligible testing footage and guided athletes through the recruiting process.",
    ],
    image: "/images/project-scholarship.jpg",
    stats: [
      { label: "Athletes", value: "18" },
      { label: "Scholarships", value: "5" },
      { label: "40-yd gain", value: "0.18s" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our 40-yard times dropped an average of two-tenths in one season. PeakEdge rebuilt every athlete's sprint mechanics and the results showed up on the scoreboard.",
    name: "Marcus D.",
    role: "Head Track Coach, Westlake HS",
    rating: 5,
  },
  {
    quote:
      "My daughter has never loved a workout program — she loves this one. She is faster, stronger and, most importantly, still having fun. The coaches are incredible with kids.",
    name: "Tanya R.",
    role: "Parent of a 12-year-old athlete",
    rating: 5,
  },
  {
    quote:
      "I went from a walk-on to a scholarship athlete. The combine prep was brutally honest and exactly what I needed. PeakEdge changed the trajectory of my career.",
    name: "Jordan P.",
    role: "College football signee",
    rating: 5,
  },
  {
    quote:
      "As a masters athlete I was nervous about walking into a performance gym. The coaches built a program around my body, my history and my goals. I have never felt stronger.",
    name: "Kyle M.",
    role: "Adult athlete, 42",
    rating: 5,
  },
  {
    quote:
      "They ran our entire preseason camp — 40 athletes, five days, measurable gains across the board. The report cards for each athlete were worth the price alone.",
    name: "Lisa H.",
    role: "Athletic Director, Round Rock United",
    rating: 5,
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What programs does PeakEdge offer?",
    answer:
      "Seven core programs: Strength & Conditioning, Speed & Agility Training, Sport-Specific Coaching, Youth Athletic Development, Injury Prevention Programs, Nutrition & Recovery Coaching, and Team Training Camps. Most athletes combine two or three.",
  },
  {
    question: "What ages do you train?",
    answer:
      "We train athletes from 8 years old through adult and masters athletes. Youth programs follow long-term athletic development principles, while teen and adult athletes get sport-specific, performance-focused programming.",
  },
  {
    question: "Do you assess athletes before starting?",
    answer:
      "Yes. Every new athlete completes a full assessment — movement screen, strength baselines and (for speed athletes) sprint testing with timing gates. Your program is built on your data, not a template.",
  },
  {
    question: "Do you offer team rates?",
    answer:
      "We do. Teams of 10–60 athletes get discounted group pricing on Team Training Camps and seasonal team programs. Schools and clubs can also book our facility for their own practices with our coaches on hand.",
  },
  {
    question: "What are the facilities like?",
    answer:
      "Our 12,000 sq ft facility at 2400 Performance Way in Austin features a full squat rack area, turf lane, sled track, timing gates and recovery zone — plus an outdoor training field for team camps and conditioning work.",
  },
  {
    question: "How does recovery fit into training?",
    answer:
      "Recovery is programmed, not optional. Nutrition & Recovery Coaching covers fueling, sleep and hydration, and every training plan includes mobility work, deload weeks and load management so you peak — not burn out.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Most athletes feel more coordinated and confident within 2–3 weeks and see measurable speed or strength gains by week 6–8. We re-test every 4 weeks so you can see the numbers move.",
  },
  {
    question: "Do I need to be in shape to start?",
    answer:
      "Not at all. We meet you where you are. Every program starts with an assessment, and our coaches scale intensity to your current level while pushing you safely toward your goals.",
  },
];
