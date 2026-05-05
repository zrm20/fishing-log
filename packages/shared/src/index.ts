import { z } from "zod";

/** Example cross-boundary shape; replace with real domain contracts as features land. */
export const pingResponseSchema = z.object({
  ok: z.literal(true),
});

export type PingResponse = z.infer<typeof pingResponseSchema>;
