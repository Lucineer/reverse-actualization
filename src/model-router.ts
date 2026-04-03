// Model Router — Dynamic model selection per stage

export enum ModelTier {
  Vision = 'vision',
  Architecture = 'architecture',
  Validation = 'validation',
  Synthesis = 'synthesis',
}

interface ModelConfig {
  primary: string;
  fallback: string;
}

const MODEL_MAP: Record<ModelTier, ModelConfig> = {
  [ModelTier.Vision]: {
    primary: 'ring-flash-2.0',
    fallback: 'deepseek-reasoner',
  },
  [ModelTier.Architecture]: {
    primary: 'qwen3-coder-480b',
    fallback: 'glm-5-turbo',
  },
  [ModelTier.Validation]: {
    primary: 'deepseek-chat',
    fallback: 'deepseek-chat',
  },
  [ModelTier.Synthesis]: {
    primary: 'glm-5.1',
    fallback: 'glm-5-turbo',
  },
};

let complexityThreshold = 0.6;

export function routeModel(tier: ModelTier): string {
  const config = MODEL_MAP[tier];

  if (tier === ModelTier.Synthesis) {
    // Use lighter model for routine synthesis
    if (Math.random() > complexityThreshold) {
      return config.fallback;
    }
  }

  return config.primary;
}

export function setComplexityThreshold(threshold: number): void {
  complexityThreshold = Math.max(0, Math.min(1, threshold));
}

export function getModelForTier(tier: ModelTier): ModelConfig {
  return { ...MODEL_MAP[tier] };
}

export function listModels(): Record<string, ModelConfig> {
  return Object.fromEntries(
    Object.entries(MODEL_MAP).map(([tier, config]) => [tier, config])
  );
}
