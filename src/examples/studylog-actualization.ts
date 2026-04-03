// StudyLog.ai — Reverse Actualization Example
// The Student Day-in-Life

import { ActualizedVision, BackwardStep, ActionPlan } from '../reverse-actualizer';

export const studylogVision: ActualizedVision = {
  timeline: '2028',
  description: `StudyLog doesn't track study hours — it predicts cognitive performance. By 2028, StudyLog knows your cognitive rhythm better than you do.

The app works by passively tracking how you interact with study materials — not what you read, but how you read. Scroll speed, re-reading patterns, time between sessions, quiz performance decay curves. From these signals, it builds a cognitive model unique to each student.

The killer feature: it tells you what to forget. Most study apps tell you to review more. StudyLog tells you to stop reviewing things you already know and focus on the edges of your knowledge. Students using StudyLog study 40% less and score 15% higher on exams.

300K students. $890K ARR. Used in 40 universities. Growth is entirely organic — students share it because it makes them look smart.`,

  userPerspectives: [
    'Aisha (Pre-med, 21): "StudyLog told me to stop reviewing orgo mechanisms I already knew and spend that time on biochem pathways I was confusing. I dropped 3 hours from my weekly study time and went from B+ to A- on the midterm."',
    'Tyler (CS Major, 20): "I thought I was bad at algorithms because I kept reviewing the same 20 problems. StudyLog showed me I actually knew those — I was just scared of the ones I hadn\'t tried. It pointed me at exactly 7 problems I needed to learn. Passed the interview."',
    'Prof. Chen (Neuroscience): "I require StudyLog for my 300-student course. The aggregate data tells me which concepts the whole class is struggling with — I didn\'t need to wait for the midterm to find out half the class didn\'t understand action potentials."',
  ],

  emergentCapabilities: [
    'Personalized forgetting curve — not Ebbinghaus\'s average, but YOUR forgetting curve for each concept',
    'Cognitive state detection — knows when you\'re fatigued, focused, or falsely confident',
    'Cross-topic transfer prediction — predicts which concepts from other subjects will help or hurt your current learning',
    'Optimal study schedule generation — not spaced repetition intervals, but the actual best time to study based on your sleep, stress, and prior performance',
  ],

  organicEmergences: [
    'Students started posting "StudyLog audits" on TikTok — "Here\'s what the app thinks I should forget" — viral marketing the company never planned',
    'Professors started using the aggregate data to redesign courses in real-time',
    'A secondary product emerged: employer screening — "This candidate\'s StudyLog shows they learn fast and retain well" — controversial but real demand',
  ],
};

export const studylogBackwardSteps: BackwardStep[] = [
  {
    phase: 'Phase 1: 2028 H1',
    whatMustExist: ['Longitudinal cognitive models for 100K+ students', 'Cross-topic transfer engine', 'University partnership program with 50+ schools'],
    criticalDecisions: ['Monetize student data (ethical minefield) or keep it clean?', 'B2C or B2B (universities)?'],
    risks: ['Ethical concerns about student surveillance', 'Regulatory risk (FERPA, GDPR for minors)'],
    nonObviousInsights: ['The real moat is the forgetting curve data. It requires years of longitudinal tracking per student. A competitor starting today would need 3+ years to catch up.'],
  },
  {
    phase: 'Phase 2: 2027 H2',
    whatMustExist: ['Passive tracking across multiple study platforms', 'Cognitive state detection with 75%+ accuracy', '10K active users providing training data'],
    criticalDecisions: ['Browser extension, mobile app, or both?', 'Require active input or go fully passive?'],
    risks: ['Users might find passive tracking creepy', 'Accuracy degrading for non-standard study patterns'],
    nonObviousInsights: ['Go fully passive. Any active input requirement creates friction that kills retention. The magic is in not having to do anything.'],
  },
  {
    phase: 'Phase 3: 2027 H1',
    whatMustExist: ['Core tracking for PDF/online study materials', 'Basic forgetting curve modeling', '1K beta users (students willing to try experimental tools)'],
    criticalDecisions: ['Target medical students (high stakes) or broad undergrad?', 'Free or paid from day one?'],
    risks: ['Niche too small if only pre-med', 'Too broad if everyone'],
    nonObviousInsights: ['Start with pre-med students. They\'re desperate, they study the hardest, and they\'re the most willing to try anything that might give them an edge. They\'re also the most viral — pre-med communities are tight-knit.'],
  },
  {
    phase: 'Phase 4: 2026 H2',
    whatMustExist: ['Working prototype that tracks study sessions', 'Basic spaced repetition engine', 'Clear value prop (study less, score higher)'],
    criticalDecisions: ['Build as a standalone app or integrate with existing tools (Anki, Notion)?', 'What\'s the minimum viable tracking?'],
    risks: ['Competition from Anki, Quizlet, and every study app ever', 'Student attention is the most scarce resource on earth'],
    nonObviousInsights: ['Don\'t compete with Anki. StudyLog isn\'t a flashcard app — it\'s a cognitive performance optimizer. Positioning matters more than features. If students think it\'s "another Anki," it dies.'],
  },
];

export const studylogActionPlan: ActionPlan = {
  buildNow: ['Passive study tracking prototype (browser extension)', 'Basic forgetting curve model', 'Pre-med student beta waitlist'],
  buildSoon: ['Cognitive state detection', 'Multi-platform tracking (PDF, video, notes)', 'University pilot program'],
  buildWhenReady: ['Cross-topic transfer engine', 'Employer screening product (ethical, opt-in)', 'Full platform with 300K+ users'],
  irreversibleMoves: [
    'The forgetting curve personalization engine — requires longitudinal data from thousands of students over years. Cannot be bootstrapped.',
    'The "what to forget" feature — counterintuitive positioning that becomes a brand. Competitors will copy the feature but not the trust.',
    'University partnerships — once a university requires StudyLog, switching cost for students is enormous (their entire cognitive history is in the system)',
  ],
};
