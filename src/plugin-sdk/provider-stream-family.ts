/**
 * Public SDK subpath for provider stream event and family helpers.
 */
export {
  createCodexNativeWebSearchWrapper,
  createOpenAIAttributionHeadersWrapper,
  createOpenAIFastModeWrapper,
  createOpenAIReasoningCompatibilityWrapper,
  createOpenAIResponsesContextManagementWrapper,
  createOpenAIServiceTierWrapper,
  createOpenAITextVerbosityWrapper,
  buildProviderStreamFamilyHooks,
  getOpenRouterModelCapabilities,
  loadOpenRouterModelCapabilities,
  resolveOpenAIFastMode,
  resolveOpenAIServiceTier,
  resolveOpenAITextVerbosity,
} from "./provider-stream.js";
// Deprecated `*_STREAM_HOOKS` shortcuts stay a shipped contract of this subpath:
// plugins published at v2026.7.1 import them from here. #108440 kept only
// OPENAI_RESPONSES and broke moonshot/minimax/openrouter loads on beta core.
export {
  GOOGLE_THINKING_STREAM_HOOKS,
  KILOCODE_THINKING_STREAM_HOOKS,
  MINIMAX_FAST_MODE_STREAM_HOOKS,
  MOONSHOT_THINKING_STREAM_HOOKS,
  OPENAI_RESPONSES_STREAM_HOOKS,
  OPENROUTER_THINKING_STREAM_HOOKS,
  TOOL_STREAM_DEFAULT_ON_HOOKS,
} from "./provider-stream.js";
