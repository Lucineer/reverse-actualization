// Cocapn Fleet — Reverse Actualization Example
// The 200-Domain Ecosystem

import { ActualizedVision, BackwardStep, ActionPlan } from '../reverse-actualizer';

export const cocapnVision: ActualizedVision = {
  timeline: '2028',
  description: `200 domains isn't a fleet — it's a territory. Each domain captures intent data for a vertical. Cross-domain, the patterns emerge.

Cocapn operates 200+ domains across developer tools, research, finance, and creative verticals. Each domain is a lightweight app — usually a single-purpose tool that solves one problem well. Individually, they're useful. Together, they're a real-time map of what the internet wants.

The key insight: intent signal from 200 domains is exponentially more valuable than 200x the signal from one domain. When the same person searches for "how to parse CSV in Rust" on one domain and "convert CSV to JSON API" on another, you know they're building a data pipeline. None of the individual domains would tell you that.

Revenue: $4.7M ARR. 0 sales team. The domains sell themselves through utility, and the cross-domain intelligence sells to enterprises.`,

  userPerspectives: [
    'Alex (Developer, 26): "I use 4 Cocapn tools daily. Didn\'t know they were the same company until last month. Don\'t care — each one does exactly one thing and gets out of my way."',
    'Diana (Head of Product, BigCo): "We subscribe to the Cocapn intelligence feed. It tells us what developers are searching for 3-6 months before they show up in our support tickets. We\'ve preemptively built 3 features this quarter."',
    'James (Indie Hacker, 33): "I built my SaaS because Cocapn\'s domain data showed me that 12,000 people searched for JSON-to-SQL conversion tools last month. I built it in a weekend. 400 users in week one."',
  ],

  emergentCapabilities: [
    'Cross-vertical intent mapping — see what a person is trying to accomplish across completely different domains',
    'Temporal trend prediction — identify emerging needs 3-6 months before they peak',
    'Automated competitive intelligence — track what your competitors\' users are also searching for',
    'Vertical arbitrage — discover that a solution in one vertical perfectly solves a problem in another',
  ],

  organicEmergences: [
    'Users started building "Cocapn stacks" — combinations of 3-4 tools that together replace expensive SaaS products',
    'The domain network became a discovery engine — people found new tools through the footer links',
    'Enterprise customers started requesting custom domains that plugged into the intelligence layer',
  ],
};

export const cocapnBackwardSteps: BackwardStep[] = [
  {
    phase: 'Phase 1: 2028 H1',
    whatMustExist: ['200+ live domains with meaningful traffic', 'Cross-domain intelligence API with sub-100ms latency', 'Enterprise intelligence feed with 50+ customers'],
    criticalDecisions: ['Open the intent data as a product or keep it proprietary?', 'Acquire domains or build them?'],
    risks: ['Domain acquisition costs escalating', 'Search engines devaluing programmatic domains'],
    nonObviousInsights: ['The domains are the customer acquisition channel. The real product is the intent graph. Domains are marketing disguised as products.'],
  },
  {
    phase: 'Phase 2: 2027 H2',
    whatMustExist: ['100+ domains with unified analytics', 'Cross-domain correlation engine', 'First 10 enterprise intelligence customers'],
    criticalDecisions: ['Standardize on one tech stack or let each domain be independent?', 'Self-serve or sales-led for enterprise?'],
    risks: ['Maintenance burden of 100+ domains', 'Data quality degrading at scale'],
    nonObviousInsights: ['Let each domain be technically independent. The unification happens at the data layer, not the code layer. This allows rapid acquisition of existing domains.'],
  },
  {
    phase: 'Phase 3: 2027 H1',
    whatMustExist: ['50 domains with basic analytics', 'Shared analytics pipeline', 'Revenue from individual domains covering fleet costs'],
    criticalDecisions: ['Bootstrap the fleet or raise?', 'Which verticals to prioritize?'],
    risks: ['50 domains might not generate enough signal for meaningful cross-domain insights', 'Maintenance cost scaling faster than revenue'],
    nonObviousInsights: ['The break-even point is around 50 domains. Below that, cross-domain signal is noise. Above it, patterns emerge exponentially. Push through the trough.'],
  },
  {
    phase: 'Phase 4: 2026 H2',
    whatMustExist: ['20 domains with real users', 'Basic shared analytics', 'First cross-domain insight that proves the model'],
    criticalDecisions: ['Which 20 domains to start with?', 'Build or buy existing domains?'],
    risks: ['Picking wrong verticals', 'Underestimating the operational complexity'],
    nonObviousInsights: ['Start with developer tools — they\'re the easiest to build, the users are the most vocal, and the intent signal is the clearest. Developer search queries are literally "I want to do X."'],
  },
];

export const cocapnActionPlan: ActionPlan = {
  buildNow: ['Domain acquisition pipeline (20 target domains)', 'Shared analytics infrastructure', 'First 5 single-purpose tools'],
  buildSoon: ['Cross-domain correlation engine', '50-domain fleet deployment', 'First enterprise intelligence pitch'],
  buildWhenReady: ['Intent graph API', '200+ domain fleet', 'Full enterprise intelligence platform'],
  irreversibleMoves: [
    'The cross-domain intent graph — no single-domain competitor can replicate the signal from watching 200 verticals simultaneously',
    'Domain network effects — each new domain increases the value of all existing domains',
    'The normalization layer — if Cocapn\'s intent taxonomy becomes standard, switching cost is astronomical',
  ],
};
