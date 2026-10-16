#!/usr/bin/env python3
"""Inline the letterhead PNG + Decimal fonts into a single self-contained HTML.

Useful for previewing and for emailing the form to a print shop as one file.

    print/inline.py [out.html]      # default: out/print/ficha-visita-standalone.html
"""
import base64, pathlib, re, sys

root = pathlib.Path(__file__).resolve().parent.parent
src = root / "print" / "ficha-visita.html"
dst = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else root / "out" / "print" / "ficha-visita-standalone.html"
dst.parent.mkdir(parents=True, exist_ok=True)
html = src.read_text()


def data_uri(rel: str) -> str:
    path = (root / "print" / rel).resolve()
    mime = {".png": "image/png", ".ttf": "font/ttf"}[path.suffix]
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


html = re.sub(r"url\('([^']+)'\)", lambda m: f"url('{data_uri(m.group(1))}')", html)
dst.parent.mkdir(parents=True, exist_ok=True)
dst.write_text(html)
print(dst)
