// Reverse Actualization — Core Engine
// Think backward from fully actualized futures

export interface ActualizedVision {
  timeline: string;
  description: string;
  userPerspectives: string[];
  emergentCapabilities: string[];
  organicEmergences: string[];
}

export interface BackwardStep {
  phase: string;
  whatMustExist: string[];
  criticalDecisions: string[];
  risks: string[];
  nonObviousInsights: string[];
}

export interface ActionPlan {
  buildNow: string[];
  buildSoon: string[];
  buildWhenReady: string[];
  irreversibleMoves: string[];
}

export interface ReverseActualizationResult {
  vision: ActualizedVision;
  backwardSteps: BackwardStep[];
  actionPlan: ActionPlan;
  modelPerspectives: { model: string; insight: string }[];
  confidence: number;
}

export interface ReverseActualizationInput {
  domain: string;
  context: string;
  targetYear: number;
  currentYear?: number;
  phases?: number;
}

import { visionPrompt, backwardPrompt, insightPrompt, irreversibilityPrompt } from './prompt-templates';
import { routeModel, ModelTier } from './model-router';

// ─── Step 1: Generate Vision ─────────────────────────────────────────────

export async function generateVision(
  domain: string,
  context: string,
  targetYear: number = 2028
): Promise<ActualizedVision> {
  const prompt = visionPrompt(domain, context, targetYear);
  const model = routeModel(ModelTier.Vision);
  const response = await callModel(model, prompt);
  return parseVision(response, targetYear);
}

function parseVision(raw: string, timeline: string): ActualizedVision {
  const description = extractSection(raw, 'description') || raw;
  const userPerspectives = extractList(raw, 'user perspectives') || [];
  const emergentCapabilities = extractList(raw, 'emergent capabilities') || [];
  const organicEmergences = extractList(raw, 'organic emergences') || [];
  return { timeline, description, userPerspectives, emergentCapabilities, organicEmergences };
}

// ─── Step 2: Backward Chain ──────────────────────────────────────────────

export async function backwardChain(
  vision: ActualizedVision,
  currentYear: number = 2026,
  phases: number = 4
): Promise<BackwardStep[]> {
  const steps: BackwardStep[] = [];
  const targetYear = parseInt(vision.timeline);
  const interval = (targetYear - currentYear) / phases;

  for (let i = 0; i < phases; i++) {
    const yearEnd = targetYear - i * interval;
    const yearStart = yearEnd - interval;
    const phase = `Phase ${i + 1}: ${Math.round(yearStart)} H${yearEnd % 1 === 0.5 ? '2' : '1'} — ${Math.round(yearEnd)} H${yearEnd % 1 === 0.5 ? '1' : '2'}`;

    const nextPhaseVision = i === 0 ? vision.description : steps[i - 1].whatMustExist.join('; ');
    const prompt = backwardPrompt(vision.description, phase, nextPhaseVision);
    const model = routeModel(ModelTier.Architecture);
    const response = await callModel(model, prompt);

    steps.push({
      phase,
      whatMustExist: extractList(response, 'what must exist') || [],
      criticalDecisions: extractList(response, 'critical decisions') || [],
      risks: extractList(response, 'risks') || [],
      nonObviousInsights: extractList(response, 'non-obvious insights') || [],
    });
  }

  return steps;
}

// ─── Step 3: Extract Action Plan ─────────────────────────────────────────

export async function extractActionPlan(backwardSteps: BackwardStep[]): Promise<ActionPlan> {
  const allItems = backwardSteps.flatMap((step, i) =>
    step.whatMustExist.map(item => ({ item, urgency: i, phase: step.phase }))
  );

  const prompt = `Given these backward-chained prerequisites, classify each as:
- BUILD NOW: can start today with current resources
- BUILD SOON: next quarter, needs minor preparation
- BUILD WHEN READY: depends on earlier items

${allItems.map(a => `[${a.urgency}] ${a.item} (${a.phase})`).join('\n')}

Return JSON: { buildNow: string[], buildSoon: string[], buildWhenReady: string[] }`;

  const model = routeModel(ModelTier.Architecture);
  const response = await callModel(model, prompt);
  const parsed = extractJSON(response);
  const irreversible = await findIrreversibleMoves(backwardSteps);

  return {
    buildNow: parsed?.buildNow || [],
    buildSoon: parsed?.buildSoon || [],
    buildWhenReady: parsed?.buildWhenReady || [],
    irreversibleMoves: irreversible,
  };
}

// ─── Step 4: Find Irreversible Moves ─────────────────────────────────────

export async function findIrreversibleMoves(steps: BackwardStep[]): Promise<string[]> {
  const allMoves = steps.flatMap(s => s.whatMustExist);
  const prompt = irreversibilityPrompt(allMoves);
  const model = routeModel(ModelTier.Validation);
  const response = await callModel(model, prompt);
  return extractList(response, 'irreversible moves') || [];
}

// ─── Step 5: Multi-Model Synthesis ───────────────────────────────────────

export async function multiModelPerspective(
  question: string,
  domain: string
): Promise<{ model: string; insight: string }[]> {
  const perspectives: { model: string; insight: string }[] = [];
  const models = [
    routeModel(ModelTier.Vision),
    routeModel(ModelTier.Architecture),
    routeModel(ModelTier.Validation),
  ];

  for (const model of models) {
    const prompt = insightPrompt(domain, model);
    const response = await callModel(model, prompt);
    perspectives.push({ model, insight: response.slice(0, 500) });
  }

  return perspectives;
}

export async function synthesizeInsights(
  perspectives: { model: string; insight: string }[]
): Promise<{ synthesis: string; confidence: number }> {
  const combined = perspectives.map(p => `[${p.model}]: ${p.insight}`).join('\n\n');
  const prompt = `Synthesize these diverse perspectives into a unified insight. Identify patterns, contradictions, and the strongest signal.\n\n${combined}\n\nReturn: { synthesis: string, confidence: 0.0-1.0 }`;

  const model = routeModel(ModelTier.Synthesis);
  const response = await callModel(model, prompt);
  const parsed = extractJSON(response);
  return {
    synthesis: parsed?.synthesis || response,
    confidence: parsed?.confidence ?? 0.7,
  };
}

// ─── Main Orchestrator ───────────────────────────────────────────────────

export async function reverseActualize(
  input: ReverseActualizationInput
): Promise<ReverseActualizationResult> {
  const currentYear = input.currentYear ?? new Date().getFullYear();
  const phases = input.phases ?? 4;

  // Step 1: Vision
  const vision = await generateVision(input.domain, input.context, input.targetYear);

  // Step 2: Backward Chain
  const backwardSteps = await backwardChain(vision, currentYear, phases);

  // Step 3: Action Plan
  const actionPlan = await extractActionPlan(backwardSteps);

  // Step 5: Multi-Model Perspectives
  const question = `What is the most important non-obvious insight about ${input.domain}?`;
  const perspectives = await multiModelPerspective(question, input.domain);

  // Step 5b: Synthesize
  const { synthesis, confidence } = await synthesizeInsights(perspectives);

  return { vision, backwardSteps, actionPlan, modelPerspectives: perspectives, confidence };
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function extractSection(text: string, section: string): string | null {
  const regex = new RegExp(`(?:^|\\n)\\s*##?\\s*${section}[\\s\\S]*?(?=\\n\\s*##?\\s|\\n\\s*$|$)`, 'i');
  const match = text.match(regex);
  return match ? match[0].replace(/^.*?\n/, '').trim() : null;
}

function extractList(text: string, heading: string): string[] | null {
  const section = extractSection(text, heading);
  if (!section) return null;
  return section
    .split('\n')
    .map(line => line.replace(/^[-*•]\s*/, '').trim())
    .filter(line => line.length > 0);
}

function extractJSON(text: string): any {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try { return JSON.parse(match[0]); } catch { return null; }
}

async function callModel(model: string, prompt: string): Promise<string> {
  // In production, this routes to actual model APIs.
  // For the methodology repo, this is the integration point.
  const envKey = process.env[`${model.toUpperCase().replace(/-/g, '_')}_API_KEY`];
  if (!envKey) {
    console.warn(`[${model}] No API key found. Returning prompt for manual use.`);
    return `[${model}] Would respond to:\n${prompt.slice(0, 200)}...`;
  }
  // Implement per-model API calls here
  throw new Error(`API integration for ${model} not yet implemented`);
}
