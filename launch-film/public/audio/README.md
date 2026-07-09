# Audio stems (private assets)

Not committed. Drop the four stems here, then flip the film's `audioEnabled` prop
to `true` (studio sidebar, or `--props='{"audioEnabled":true}'` on render).

| File | Role (spec §9) |
|------|----------------|
| `tick.wav` | clock tick — 1/sec from 0:00, accelerates into a rattle through 3a, near-silent by 0:22 |
| `bass-hit.wav` | single hit at the cut-to-black (0:22) |
| `pulse.wav` | rising heartbeat from 0:31; steadies at the fleet bloom; full energy in the montage; wide swell at the vision; resolves to silence at the CTA |
| `vo.mp3` | voiceover bed (ducks music −6dB under speech) |

Wiring lives in `src/Film.tsx` (`AUDIO` map + `<Track>`). Until the files exist,
audio stays off so a clean checkout renders without missing-asset errors.
