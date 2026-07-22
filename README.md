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

## Language

Default is Spanish; the header ES/EN toggle switches all copy via
`data-i18n` keys defined in `js/main.js`, and the choice persists in
localStorage. Browser language picks the initial default.
