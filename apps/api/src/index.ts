import { pingResponseSchema } from "@fishing-log/shared";

/** Placeholder entry until an HTTP framework ADR lands; keeps the workspace wired to shared contracts. */
export function placeholderPing(): ReturnType<typeof pingResponseSchema.parse> {
  return pingResponseSchema.parse({ ok: true });
}
