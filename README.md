# maprimaq.com

New MAPRIMAQ website — a static, bilingual (ES/EN) one-pager built from the
brand handbook in `0 Maprimaq - materiales entregados/`.

## Structure

The site lives at the repo root (ready for GitHub Pages — no build step):

- `index.html` — all sections: hero, stats, divisions, MAPRITÉCNICA, brands, presence, contact
- `css/styles.css` — brand palette (#c0202c / #606161 / black), Decimal fonts, animations
- `js/main.js` — ES/EN dictionary + toggle, scroll reveals, counters, parallax, contact form
- `assets/` — logos, brand patterns, machine photos (`assets/img/machines/`), Decimal TTFs
- `odoo/` — contact-form backend notes (not served). Default: Odoo's built-in
  `/website/form/crm.lead` endpoint, no custom module. See `odoo/README.md`.

Machine hover previews: any `.division-list` item with
`data-img="assets/img/machines/<file>"` shows that photo on hover;
optional `data-brand="Marca"` displays the brand name.

## Local preview

```bash
python3 -m http.server 8471
```

## Deploy (GitHub Pages)

Push to GitHub, enable Pages on the branch root. Then:

1. Set `ODOO_URL` in `js/main.js` so the form creates CRM leads
   (until then it falls back to a pre-filled mailto).
2. Verify Decimal (Hoefler&Co) web-embedding license before going live; swap
   `@font-face` for a licensed webfont kit if needed.

## Print collateral (`print/`)

`print/ficha-visita.html` is the trade-show visitor form — one letter page,
Spanish labels with small English subtitles. No year in the header, so the same
print run works at the next Apparel Sourcing Show.

The letterhead is **rebuilt in the HTML**, not rasterised from
`Hojas membretadas editables.pdf`: `print/logo-maprimaq.png` is cropped to its
bounding box from `0 Maprimaq - materiales entregados/1 Logotipo/PNG/Logotipo Maprimaq-01.png` (5100×3300, alpha)
and the footer is live Decimal text. Geometry was measured off the original at
300 dpi and matches it within 0.004in — logo 2.113×1.143in centred at 0.54in
from the top, footer Decimal Book 10pt / 13.93pt leading at a 0.593in left
margin, `maprimaq.com` Decimal Bold 12pt at a 0.713in right margin. The grey
outline "M" watermark is dropped on purpose: it ran through the fill-in lines.

To PDF, either way works:

```bash
print/build.sh
```

…or open the HTML in any browser and print (Letter, margins **None**). The logo
is an `<img>`, so it prints without enabling "Background graphics".
`print/build.sh` needs a working headless Chromium — headless Brave hangs on
this machine (it never returns, even on `--dump-dom data:text/html,<h1>hi</h1>`),
so `brew install --cask chromium`.

`print/inline.py` bakes the letterhead and fonts into a single self-contained
HTML (`out/print/ficha-visita-standalone.html`) for emailing to a print shop.

## Language

Default is Spanish; the header ES/EN toggle switches all copy via
`data-i18n` keys defined in `js/main.js`, and the choice persists in
localStorage. Browser language picks the initial default.
