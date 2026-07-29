// Locks the provider-stream-family subpath contract: it must re-export the full
// stream-hook family, matching provider-stream. Narrowing it to a subset (#108440)
// broke external provider plugins published at v2026.7.1 (moonshot, minimax,
// openrouter) that import their hook constant from this subpath.
import { describe, expect, it } from "vitest";
import * as family from "./provider-stream-family.js";
import * as canonical from "./provider-stream.js";

const STREAM_HOOK_EXPORTS = [
  "GOOGLE_THINKING_STREAM_HOOKS",
  "KILOCODE_THINKING_STREAM_HOOKS",
  "MINIMAX_FAST_MODE_STREAM_HOOKS",
  "MOONSHOT_THINKING_STREAM_HOOKS",
  "OPENAI_RESPONSES_STREAM_HOOKS",
  "OPENROUTER_THINKING_STREAM_HOOKS",
  "TOOL_STREAM_DEFAULT_ON_HOOKS",
] as const;

describe("provider-stream-family subpath", () => {
  it("re-exports every stream-hook family constant with a working wrapStreamFn", () => {
    for (const name of STREAM_HOOK_EXPORTS) {
      const hooks = family[name];
      expect(hooks, name).toBeDefined();
      expect(hooks.wrapStreamFn, name).toBeTypeOf("function");
    }
  });

  it("stays in parity with the canonical provider-stream stream-hook exports", () => {
    for (const name of STREAM_HOOK_EXPORTS) {
      // Same underlying object: the family subpath must not drift from provider-stream.
      expect(family[name], name).toBe(canonical[name]);
    }
  });
});
