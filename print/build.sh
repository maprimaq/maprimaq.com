#!/usr/bin/env bash
# Build the print-ready trade-show visitor form (letter, 1 page) → out/print/ficha-visita.pdf
#
# The letterhead is rebuilt in the HTML itself (logo PNG cropped from
# "0 Maprimaq - materiales entregados/1 Logotipo/PNG/Logotipo Maprimaq-01.png" + live Decimal text), so nothing here
# rasterises the letterhead PDF. To re-measure its geometry, render a reference copy:
#   sips -s format png --resampleWidth 2550 "Hojas membretadas editables.pdf" --out /tmp/lh.png
#
# Needs a working headless Chromium. Headless Brave is currently broken on this
# machine (it hangs even on `--dump-dom data:text/html,<h1>hi</h1>`), so install
# Chromium if the check below fails:  brew install --cask chromium
#
# No-tools fallback: print/ficha-visita.html is print-ready on its own — open it
# in any browser and print to PDF (Letter, margins None). The letterhead is an
# <img>, so it prints without enabling "Background graphics".
#
# print/inline.py bakes the logo and fonts into one self-contained HTML.
#
# Usage: print/build.sh
set -euo pipefail

cd "$(dirname "$0")/.."
ROOT="$PWD"
mkdir -p out/print

# run a command, killing it after N seconds. A broken headless browser hangs
# forever rather than erroring out, so every browser call goes through this.
capped() { # capped <seconds> <cmd...>
  local secs="$1"; shift
  "$@" & local pid=$!
  ( sleep "$secs"; kill -9 "$pid" 2>/dev/null ) & local wd=$!
  local rc=0; wait "$pid" 2>/dev/null || rc=$?
  kill -9 "$wd" 2>/dev/null || true
  return "$rc"
}

# 2. find a headless browser that actually returns
CHROME=""
for c in /Applications/Chromium.app/Contents/MacOS/Chromium \
         "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
         "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser"; do
  [ -x "$c" ] || continue
  tmp="$(mktemp -d)"
  if capped 15 "$c" --headless --disable-gpu --no-sandbox --no-first-run \
       --user-data-dir="$tmp" --dump-dom "data:text/html,<b>ok</b>" \
       >"$tmp/dom" 2>/dev/null && grep -q ok "$tmp/dom"; then
    rm -rf "$tmp"; CHROME="$c"; break
  fi
  echo "  $(basename "$c"): headless not working, skipping" >&2
  rm -rf "$tmp"
done

if [ -z "$CHROME" ]; then
  echo "No working headless browser found. Install one:" >&2
  echo "  brew install --cask chromium" >&2
  echo "Meanwhile: open print/ficha-visita.html in a browser and print to PDF" >&2
  echo "(Letter, margins None)." >&2
  exit 1
fi
echo "using $(basename "$CHROME")"

render() { # render <url-suffix> <out.pdf>
  local tmp; tmp="$(mktemp -d)"
  capped 60 "$CHROME" --headless --disable-gpu --no-sandbox --no-first-run \
    --no-pdf-header-footer --user-data-dir="$tmp" --print-to-pdf="$2" \
    "file://$ROOT/print/ficha-visita.html$1" 2>/dev/null || true
  rm -rf "$tmp"
  [ -s "$2" ] || { echo "render failed: $2" >&2; exit 1; }
}

render "" "$ROOT/out/print/ficha-visita.pdf"
echo "out/print/ficha-visita.pdf"
