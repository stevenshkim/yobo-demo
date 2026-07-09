// useStagger.ts — per-index cumulative delays.
//
// The avalanche (Scene 3a) needs the gap between successive tokens to *shrink*
// each step so the fall visibly accelerates. With decay < 1:
//   gap[i]   = baseDelay * decay^i
//   delay[i] = sum(gap[0..i-1])   // cumulative — when token i enters
//
// decay = 1 gives an even stagger; decay > 1 decelerates.

export const useStagger = ({
  count,
  baseDelay = 6,
  decay = 0.94,
  offset = 0,
}: {
  count: number;
  baseDelay?: number;
  decay?: number;
  offset?: number;
}): number[] => {
  const delays: number[] = [];
  let cumulative = offset;
  for (let i = 0; i < count; i++) {
    delays.push(Math.round(cumulative));
    cumulative += baseDelay * Math.pow(decay, i);
  }
  return delays;
};
