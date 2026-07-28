// Generate the stylized SVG map of northern Central America (index.html,
// "Sedes" section) from real TopoJSON borders (world-atlas 50m, Natural
// Earth data). Usage:
//   curl -sL -o tools/countries-50m.json https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json
//   node tools/genmap.js
// Splices the regenerated <svg> directly into index.html.
const fs = require('fs');
const topo = JSON.parse(fs.readFileSync(__dirname + '/countries-50m.json', 'utf8'));

const layer = topo.objects.countries;
const { scale: [sx, sy], translate: [tx, ty] } = topo.transform;

// Decode delta-encoded arcs to lon/lat coordinate arrays.
const arcs = topo.arcs.map((arc) => {
  let x = 0, y = 0;
  return arc.map(([dx, dy]) => {
    x += dx; y += dy;
    return [x * sx + tx, y * sy + ty];
  });
});

function ringCoords(arcIdxs) {
  const pts = [];
  for (const idx of arcIdxs) {
    let a = idx >= 0 ? arcs[idx].slice() : arcs[~idx].slice().reverse();
    if (pts.length) a = a.slice(1);
    pts.push(...a);
  }
  return pts;
}

function polygons(geom) {
  // -> array of polygons, each = array of rings, each ring = [lon,lat][]
  if (geom.type === 'Polygon') return [geom.arcs.map(ringCoords)];
  if (geom.type === 'MultiPolygon') return geom.arcs.map((p) => p.map(ringCoords));
  throw new Error('unsupported ' + geom.type);
}

const byName = {};
for (const g of layer.geometries) byName[g.properties.name] = g;

// Web-Mercator projection fitted to the region of interest.
const D = Math.PI / 180;
const mercY = (lat) => Math.log(Math.tan(Math.PI / 4 + (lat * D) / 2));
const LON0 = -93.2, LON1 = -82.6, LAT0 = 11.4, LAT1 = 18.4; // region bounds
const W = 620;
const K = W / ((LON1 - LON0) * D);
const H = Math.round(K * (mercY(LAT1) - mercY(LAT0)));
const px = (lon) => (lon - LON0) * D * K;
const py = (lat) => (mercY(LAT1) - mercY(lat)) * K;

// Sutherland–Hodgman clip of a ring against an axis-aligned bbox.
function clipRing(pts, [minX, minY, maxX, maxY]) {
  const edges = [
    (p) => p[0] >= minX, (p) => p[0] <= maxX,
    (p) => p[1] >= minY, (p) => p[1] <= maxY,
  ];
  const inter = [
    (a, b) => [minX, a[1] + (b[1] - a[1]) * (minX - a[0]) / (b[0] - a[0])],
    (a, b) => [maxX, a[1] + (b[1] - a[1]) * (maxX - a[0]) / (b[0] - a[0])],
    (a, b) => [a[0] + (b[0] - a[0]) * (minY - a[1]) / (b[1] - a[1]), minY],
    (a, b) => [a[0] + (b[0] - a[0]) * (maxY - a[1]) / (b[1] - a[1]), maxY],
  ];
  let ring = pts;
  for (let e = 0; e < 4; e++) {
    const out = [];
    for (let i = 0; i < ring.length; i++) {
      const cur = ring[i], prev = ring[(i + ring.length - 1) % ring.length];
      const curIn = edges[e](cur), prevIn = edges[e](prev);
      if (curIn) {
        if (!prevIn) out.push(inter[e](prev, cur));
        out.push(cur);
      } else if (prevIn) out.push(inter[e](prev, cur));
    }
    ring = out;
    if (!ring.length) return [];
  }
  return ring;
}

function ringArea(pts) {
  let a = 0;
  for (let i = 0; i < pts.length - 1; i++)
    a += pts[i][0] * pts[i + 1][1] - pts[i + 1][0] * pts[i][1];
  return Math.abs(a / 2);
}

// Clip 1° beyond the viewport so the white border stroke along the cut
// edge stays outside the visible area.
const CLIP = [LON0 - 1, LAT0 - 1, LON1 + 1, LAT1 + 1];

function toPath(name, { minArea = 0.05 } = {}) {
  const geom = byName[name];
  if (!geom) throw new Error('not found: ' + name);
  let d = '';
  for (const poly of polygons(geom)) {
    for (let ring of poly) {
      if (ringArea(ring) < minArea) continue; // drop tiny islands
      ring = clipRing(ring, CLIP);
      if (ring.length < 3) continue;
      d += ring.map(([lon, lat], i) => {
        const cmd = i === 0 ? 'M' : 'L';
        return `${cmd}${px(lon).toFixed(1)},${py(lat).toFixed(1)}`;
      }).join('') + 'Z';
    }
  }
  return d;
}

const out = { viewBox: `0 0 ${W} ${H}` };
for (const n of ['Guatemala', 'El Salvador', 'Honduras', 'Belize', 'Mexico', 'Nicaragua'])
  out[n] = toPath(n);

const cities = {
  'Ciudad de Guatemala': [-90.513, 14.634],
  'San Salvador': [-89.191, 13.699],
  'San Pedro Sula': [-88.025, 15.504],
};
out.pins = Object.fromEntries(Object.entries(cities).map(([n, [lon, lat]]) =>
  [n, [px(lon).toFixed(1), py(lat).toFixed(1)]]));

// ---- Build the full SVG inner markup ----
const P = (lon, lat) => [px(lon).toFixed(1), py(lat).toFixed(1)];
const label = (name, lon, lat) => {
  const [x, y] = P(lon, lat);
  return `            <text class="map-label" x="${x}" y="${y}">${name}</text>`;
};
const pin = (name, lon, lat, labelDy = -16) => {
  const [x, y] = P(lon, lat);
  return `            <g class="map-pin">
              <circle class="pulse" cx="${x}" cy="${y}" r="14"/>
              <circle class="dot" cx="${x}" cy="${y}" r="6"/>
              <text class="pin-label" x="${x}" y="${(parseFloat(y) + labelDy).toFixed(1)}">${name}</text>
            </g>`;
};

const svg = `<svg viewBox="${out.viewBox}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa de Centroamérica con las sedes de MAPRIMAQ">
            <!-- Real borders (Natural Earth 50m), stylized. Regenerate with scratchpad/genmap.js -->
            <path class="map-neighbor" d="${out.Mexico}"/>
            <path class="map-neighbor" d="${out.Belize}"/>
            <path class="map-neighbor" d="${out.Nicaragua}"/>
            <path class="map-country" d="${out.Guatemala}"/>
            <path class="map-country" d="${out.Honduras}"/>
            <path class="map-country" d="${out['El Salvador']}"/>
${label('Guatemala', -91.55, 15.15)}
${label('Honduras', -86.5, 14.85)}
${label('El Salvador', -88.75, 12.9)}
${pin('Ciudad de Guatemala', -90.513, 14.634)}
${pin('San Salvador', -89.191, 13.699, 22)}
${pin('San Pedro Sula', -88.025, 15.504)}
          </svg>`;

// ---- Splice into index.html ----
const htmlPath = __dirname + '/../index.html';
const html = fs.readFileSync(htmlPath, 'utf8');
const re = /<svg viewBox[\s\S]*?<\/svg>/;
if (!re.test(html)) throw new Error('svg block not found');
fs.writeFileSync(htmlPath, html.replace(re, svg));
console.log('spliced SVG into index.html —', svg.length, 'chars, viewBox', out.viewBox);
