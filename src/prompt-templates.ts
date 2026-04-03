// Prompt Templates for Reverse Actualization

export function visionPrompt(domain: string, context: string, targetYear: number): string {
  return `You are a strategic futurist. It is ${targetYear}. The following problem has been fully solved:

## Domain: ${domain}
## Context: ${context}

Describe the fully actualized state in vivid detail. This is not a product spec — it's the lived reality.

Include these sections:
## Description
What does the world look like? What changed? What's normal now that was impossible before?

## User Perspectives
Describe 3-4 different people experiencing this actualized state. Use their words, their feelings.

## Emergent Capabilities
What new capabilities exist that literally could not have been built before this actualized?

## Organic Emergences
What happened that nobody planned or predicted, but emerged naturally from the actualization?

Be specific. Use real numbers, real scenarios, real names if helpful. The goal is to make this future tangible enough that you can work backward from it.`;
}

export function backwardPrompt(visionDescription: string, phase: string, nextPhaseState: string): string {
  return `You are working backward from a fully actualized future.

## The Future (already described):
${visionDescription}

## Current Phase: ${phase}

## What must exist at the START of this phase (i.e., what does the NEXT phase need to have already accomplished?):
${nextPhaseState}

Identify:

## What Must Exist
The concrete things that must be true at the start of this phase.

## Critical Decisions
The forks in the road where choosing wrong would prevent reaching the future.

## Risks
What could go wrong? What assumptions might be false?

## Non-Obvious Insights
What would a smart person miss? What's counterintuitive about getting from here to there?`;
}

export function insightPrompt(domain: string, perspective: string): string {
  return `You are ${perspective}, analyzing: ${domain}

Provide your most important non-obvious insight. Not the obvious thing everyone knows. Not the contrarian take for contrarianism's sake. The thing that, once you see it, changes how you think about the entire domain.

Be specific and actionable. If possible, quantify.`;
}

export function irreversibilityPrompt(moves: string[]): string {
  return `You are a competitive strategist evaluating which moves create IRREVERSIBLE advantages.

A move is irreversible if:
- Once done, competitors cannot replicate it even with infinite money
- It creates a compounding advantage (each day makes it stronger)
- It depends on timing (doing it later is not equivalent)
- It builds a moat from data, network effects, or regulatory positioning

## Candidate Moves:
${moves.map((m, i) => `${i + 1}. ${m}`).join('\n')}

For each move, explain why it is or isn't irreversible. Then list only the truly irreversible ones.

## Irreversible Moves
[List only moves that pass all four criteria]`;
}
