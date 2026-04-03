// DMLog.ai — Reverse Actualization Example
// The 2028 DM Experience

import { ActualizedVision, BackwardStep, ActionPlan } from '../reverse-actualizer';

export const dmlogVision: ActualizedVision = {
  timeline: '2028',
  description: `DMLog isn't an app — it's a layer. Every DM you've ever sent is structured, searchable, and surfacing insights you didn't know were there.

In 2028, the average person has 47,000 DMs across platforms. DMLog normalized them all into a single personal knowledge graph. Not just text — sentiment arcs, response patterns, relationship health scores, deal flow tracking.

The breakthrough wasn't the technology. It was the insight that DMs are the most honest data source about a person's priorities. People lie in tweets, curate in posts, but DMs are where the real thinking happens. DMLog turned that into a superpower.

Revenue: $2.1M ARR, 12,000 paying users, 0 marketing spend. Growth is entirely word-of-mouth because the insights are shareable — "DMLog told me you always pitch on Tuesdays" is the new "I saw your tweet."`,

  userPerspectives: [
    'Sarah (VC, 34): "I used to spend 2 hours before each board meeting reviewing thread history. Now DMLog gives me the relationship arc in 30 seconds. Last week it flagged that a founder was about to ask for a bridge — the pattern matched 3 previous companies. I was ready."',
    'Marcus (Freelancer, 28): "DMLog told me my best clients all responded within 90 seconds of my first message. So I started leading with shorter intros. My close rate went from 22% to 41%. That one insight paid for 5 years of the subscription."',
    'Priya (Founder, 31): "The relationship health score saved my co-founder relationship. DMLog flagged that our DM frequency had dropped 60% over 2 months and the sentiment had shifted. We had a conversation we needed to have."',
  ],

  emergentCapabilities: [
    'Cross-platform conversation threading — DMs from Twitter, IG, WhatsApp, Slack merged into unified threads by topic and person',
    'Predictive relationship modeling — forecast which relationships will strengthen/weaken based on communication patterns',
    'Deal archaeology — reconstruct the full history of any business deal from scattered DMs across years',
    'Temporal personality mapping — how you communicate changes by time of day, day of week, season',
  ],

  organicEmergences: [
    'Users started sharing DMLog screenshots as social proof — "My DMLog said..." became a meme in founder circles',
    'A secondary market emerged for "DMLog audits" — consultants who analyze your message history for blind spots',
    'The API got used for automatic CRM sync — people\'s DMs became their real CRM without them trying',
  ],
};

export const dmlogBackwardSteps: BackwardStep[] = [
  {
    phase: 'Phase 1: 2028 H1',
    whatMustExist: ['Universal DM export working across 6+ platforms', 'Personal knowledge graph with 100M+ edges', 'Relationship health scoring with 85%+ accuracy'],
    criticalDecisions: ['Open the API or keep it closed?', 'Allow data export or create lock-in?'],
    risks: ['Platform APIs get restricted (Twitter already did once)', 'Privacy backlash from "reading people\'s DMs" framing'],
    nonObviousInsights: ['The value isn\'t in the data — it\'s in the insights. Raw exports are worthless. The graph is everything.'],
  },
  {
    phase: 'Phase 2: 2027 H2',
    whatMustExist: ['Sentiment analysis that understands sarcasm, context, relationship dynamics', 'Automated thread reconstruction across platforms', 'First 1,000 paying users from waitlist'],
    criticalDecisions: ['On-device processing vs cloud?', 'Pricing model (per-message vs per-insight vs flat)?'],
    risks: ['On-device ML might be too slow for 47K message histories', 'Apple/Google might ship this natively'],
    nonObviousInsights: ['Privacy-first positioning is the moat. Anyone who requires cloud upload will lose to on-device processing.'],
  },
  {
    phase: 'Phase 3: 2027 H1',
    whatMustExist: ['Core export pipeline for top 3 platforms (Twitter, IG, WhatsApp)', 'Basic search and tagging', 'Beta with 200 users providing feedback'],
    criticalDecisions: ['Which platforms first?', 'Self-serve or white-glove onboarding?'],
    risks: ['Export formats change constantly', 'Users might not trust the app with their messages'],
    nonObviousInsights: ['The first 200 users will define the product. Pick people who communicate for a living — founders, investors, journalists.'],
  },
  {
    phase: 'Phase 4: 2026 H2',
    whatMustExist: ['Working prototype with Twitter DM export', 'Basic sentiment + frequency analysis', 'Clear privacy model (E2E encryption, on-device)'],
    criticalDecisions: ['Build as Chrome extension or native app?', 'Open source the core?'],
    risks: ['Twitter API changes could kill the export', 'Feature creep before finding PMF'],
    nonObviousInsights: ['Start with the simplest possible version: export your Twitter DMs and show you your top 10 conversations by engagement. That\'s it. Ship it.'],
  },
];

export const dmlogActionPlan: ActionPlan = {
  buildNow: ['Twitter DM export pipeline', 'Basic frequency + sentiment analysis', 'Privacy-first architecture (E2E, on-device)'],
  buildSoon: ['Instagram and WhatsApp export', 'Relationship health scoring', 'Beta waitlist'],
  buildWhenReady: ['Cross-platform thread reconstruction', 'Predictive relationship modeling', 'API for third-party integrations'],
  irreversibleMoves: [
    'First-mover on personal message graph normalization — once someone\'s DM history is structured, they never switch',
    'Privacy-first architecture that requires on-device processing — creates a trust moat that cloud competitors cannot match',
    'The normalization format itself — if DMLog\'s schema becomes the standard, network effects compound',
  ],
};
