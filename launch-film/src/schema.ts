// src/schema.ts — zod prop shapes for the composition.
//
// The film is copy-driven: every headline, VO caption and token lives in props so
// the whole script can be retimed or reworded from the Remotion studio sidebar
// without touching scene code.

import { z } from "zod";

export const filmSchema = z.object({
  // Master toggle for the wired-but-optional audio layer. Ships false because the
  // stems (public/audio/*) are private assets; flip to true once they're dropped in.
  audioEnabled: z.boolean().default(false),
  // Render burned-in VO captions (useful for the silent social cut).
  showCaptions: z.boolean().default(true),
});

export type FilmProps = z.infer<typeof filmSchema>;

export const defaultFilmProps: FilmProps = {
  audioEnabled: false,
  showCaptions: true,
};
