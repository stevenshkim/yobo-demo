#!/bin/bash
# SessionStart hook — auto-install gstack in Claude Code on the web.
#
# Claude Code on the web runs in a fresh, ephemeral container each session, so
# gstack (installed into ~/.claude/skills) does not persist. This hook reinstalls
# it at session start so the gstack slash commands (/qa, /review, /ship, /spec,
# /office-hours, ...) are available every time.
#
# Idempotent and non-interactive. Best-effort: it never aborts the session.
set -uo pipefail

# Web-only. Local installs persist on their own; skip there.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

GSTACK_DIR="$HOME/.claude/skills/gstack"

# Warm container: skills already registered → nothing to do (fast resume).
if [ -e "$HOME/.claude/skills/review/SKILL.md" ]; then
  exit 0
fi

# Clone gstack if not already present.
if [ ! -d "$GSTACK_DIR/.git" ]; then
  if ! git clone --single-branch --depth 1 \
      https://github.com/garrytan/gstack.git "$GSTACK_DIR"; then
    echo "gstack hook: clone failed (offline?), skipping install" >&2
    exit 0
  fi
fi

# The headless-browser binary is downloaded from cdn.playwright.dev, which this
# environment's egress policy blocks. gstack's setup hard-exits if Chromium
# can't launch — which happens before skills are registered. Neutralize that
# readiness check so setup skips the (blocked) download and the fatal gate, then
# proceeds to register the methodology skills. Browser-dependent features
# (/browse live mode, /qa) stay unavailable until cdn.playwright.dev is
# allowlisted, but every other slash command works. Patch once (idempotent).
if ! grep -q '_gstack_real_ensure_playwright_browser' "$GSTACK_DIR/setup" 2>/dev/null; then
  sed -i \
    's/^ensure_playwright_browser() {/ensure_playwright_browser() { return 0; }\n_gstack_real_ensure_playwright_browser() {/' \
    "$GSTACK_DIR/setup" || true
fi

# Register gstack skills with Claude Code (team mode). Skip font/coreutils
# installs that need apt/brew (also egress-blocked here). Best-effort.
if ! ( cd "$GSTACK_DIR" && GSTACK_SKIP_FONTS=1 GSTACK_SKIP_COREUTILS=1 \
        ./setup --team --quiet ); then
  echo "gstack hook: setup reported errors; continuing session" >&2
fi

exit 0
