// Renders the artboards in compare.html to assets/img/ia-before-{excel,pdf,wa}.webp and ia-after.webp.
// Usage: NODE_PATH=$(npm root -g) node tools/ia-images/build.js   (needs playwright + cwebp)
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const path = require('path');
const os = require('os');
const fs = require('fs');

const root = path.resolve(__dirname, '../..');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 900, height: 1000 }, deviceScaleFactor: 2 });
  await p.goto('file://' + path.join(__dirname, 'compare.html'));
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ia-images-'));
  for (const id of ['before-excel', 'before-pdf', 'before-wa', 'after']) {
    const png = path.join(tmp, `${id}.png`);
    await p.locator(`#${id}`).screenshot({ path: png });
    execFileSync('cwebp', ['-quiet', '-q', '88', png, '-o', path.join(root, 'assets/img', `ia-${id}.webp`)]);
  }
  await b.close();
  fs.rmSync(tmp, { recursive: true });
})();
