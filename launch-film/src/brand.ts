// src/brand.ts — single source of truth for the launch film's visual language.
//
// Hard rules (from the build spec §2):
//   - three colors only
//   - no gradients (flat opacity steps or solid fills only)
//   - green is for energy and outcomes, never large fills
//   - true black background — no off-blacks

export const brand = {
  black: "#000000", // true black only — no off-blacks
  white: "#FFFFFF",
  green: "#6FED45", // YoboLabs green — accent + energy only
  dim: "rgba(255,255,255,0.08)", // uncovered grid cells / ghost text
  mid: "rgba(255,255,255,0.45)", // secondary labels
  // Satoshi is the brand face. It is not a Google Font and ships as a private
  // asset (public/fonts/Satoshi-Variable.woff2). fonts.ts loads it when present
  // and otherwise falls back to this system stack so the film still renders.
  font: 'Satoshi, "Helvetica Neue", Helvetica, Arial, sans-serif',
} as const;

// Composition constants — mirrored from the spec §1.
export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const DURATION = 2880; // 96s
