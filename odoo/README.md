# Odoo contact-form backend

The website's contact form creates a **CRM lead** in your Odoo. There are two ways
to receive it — the default needs **no custom module**.

## Option A (default, no custom module): stock website-form endpoint

Odoo's standard `website_crm` module (installed automatically when you have the
**Website** and **CRM** apps) exposes a public endpoint `/website/form/crm.lead`
that accepts form posts and creates leads. The site posts directly to it.

Setup:

1. In Odoo, make sure the **Website** and **CRM** apps are installed.
2. In the website's `site/js/main.js`, set:

   ```js
   const ODOO_URL = 'https://YOUR-ODOO-HOST';
   ```

That's it. Test with:

```bash
curl -X POST https://YOUR-ODOO-HOST/website/form/crm.lead \
  -d 'name=Web: Prueba' -d 'contact_name=Prueba' \
  -d 'email_from=test@example.com' -d 'description=Mensaje de prueba'
```

Caveats of Option A:

- The browser posts cross-origin with an opaque response (`no-cors`), so the site
  cannot read Odoo's answer — it shows "thanks" whenever the request goes out on
  the network. Server-side rejections (e.g., if you later enable reCAPTCHA on
  Odoo website forms) would be silent. Verify leads arrive after going live.
- Spam protection is whatever Odoo applies to website forms (by default, little).

## Option B (optional): custom module `maprimaq_website_leads`

The module in this folder provides a dedicated JSON endpoint with CORS locked to
your domain, real success/error responses, and field length limits. Use it if you
want reliable form feedback or tighter control: copy `maprimaq_website_leads/`
into your addons path, install it, and change the submit handler in
`site/js/main.js` to POST JSON to `/maprimaq/contact` (the controller in
`maprimaq_website_leads/controllers/main.py` documents the expected fields).

Until `ODOO_URL` is set, the form falls back to opening a pre-filled email to
info@maprimaq.com, so the site works even before Odoo is wired up.
