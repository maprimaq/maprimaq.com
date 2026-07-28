/* ============================================================
   MAPRIMAQ site scripts
   ============================================================ */

/* ---- Configuration ---- */
// Base URL of your Odoo server, e.g. "https://odoo.maprimaq.com".
// The form posts to Odoo's built-in website-form endpoint
// (/website/form/crm.lead — needs the standard Website + CRM apps, no
// custom module). See odoo/README.md.
const ODOO_URL = 'https://odoo.maprimaq.com';

// Years in business, computed live from the founding year.
const FOUNDED = 1961;
const YEARS = new Date().getFullYear() - FOUNDED;

// Hero carousel: milliseconds each slide stays on screen.
// The images themselves are plain <img class="hero-slide"> tags in
// index.html (see the HERO CAROUSEL IMAGES comment there) — swap the
// src attributes to change them.
const HERO_SLIDE_MS = 5000;

/* ---- i18n ---- */
const I18N = {
  es: {
    'nav.about': 'Nosotros',
    'nav.divisions': 'Servicios',
    'nav.service': 'Servicio técnico',
    'nav.brands': 'Marcas',
    'nav.presence': 'Sedes',
    'nav.contact': 'Contáctanos',
    'hero.kicker': 'Innovación industrial desde 1961',
    'hero.years': 'años',
    'hero.title': 'al servicio de la industria',
    'hero.lead': 'Conectamos a la industria con tecnología de clase mundial, representando marcas líderes en los sectores textil, plástico, energía, tratamiento de aguas e industria en general.',
    'hero.cta1': 'Conoce nuestros servicios',
    'hero.cta2': 'Contáctanos',
    'stats.years': 'años de experiencia',
    'stats.countries': 'oficinas en Centroamérica',
    'stats.brands': 'marcas representadas',
    'stats.divisions': 'divisiones especializadas',
    'about.eyebrow': 'Nosotros',
    'about.title': 'Tres generaciones al servicio de la industria',
    'about.p1': 'Somos una empresa familiar en la tercera generación, fundada en agosto de 1961. Desde entonces conectamos a la industria centroamericana con tecnología de clase mundial.',
    'about.p2': 'Cooperamos comercialmente con empresas fabricantes de equipos para las industrias textil, del plástico, hidroeléctricas y plantas de tratamiento de aguas industriales. Los equipos que comercializamos provienen de Europa, Asia, América del Norte y América del Sur.',
    'about.p3': 'MAPRIMAQ es la única empresa a nivel centroamericano que puede ofrecer localmente montajes, puestas en marcha y servicio posventa de equipos de hilatura de la marca Rieter. Nuestros ingenieros de servicio además han trabajado en Turquía, Portugal, Perú y Centroamérica brindando servicio posventa para equipos de hilatura Rieter.',
    'about.p4': 'Hemos participado exitosamente en ferias industriales como INTERFER en los años 90 y, más recientemente, en el Apparel & Sourcing Show de la Ciudad de Guatemala.',
    'about.tlTitle': 'Hitos históricos',
    'about.t1961': 'Fundación de la empresa en Guatemala.',
    'about.t1984': 'Venta en Guatemala y Latinoamérica de la primera máquina para hilatura marca Schubert & Salzer – Ingolstadt, modelo RU 14.',
    'about.t1985': 'Venta en Guatemala de la primera sopladora de envases plásticos marca Bekum, modelo BM 08.',
    'about.t1995': 'Venta de la primera planta biológica en Guatemala para la depuración de aguas residuales textiles, marca Idrosistem.',
    'about.t2021': 'Venta en Honduras de la planta de hilatura más grande de Centroamérica, marca Rieter.',
    'div.eyebrow': 'Nuestros servicios',
    'div.title': 'Soluciones para cada industria',
    'div.lead': 'Cada división de MAPRIMAQ está especializada en brindar tecnología de alto desempeño para distintos sectores industriales.',
    'div.more': 'Ver servicios',
    'div.less': 'Ver menos',
    'div.textiles.title': 'Textiles',
    'div.textiles.desc': 'Tecnología para toda la cadena de producción textil, desde hilatura hasta procesos especializados, respaldada por marcas líderes a nivel mundial.',
    'div.textiles.i1': 'Hilatura de fibra corta y larga',
    'div.textiles.i2': 'Tejido de punto circular',
    'div.textiles.i3': 'Telares',
    'div.textiles.i4': 'Tintura, estampado y acabados',
    'div.textiles.i5': 'Líneas continuas de teñido y acabado para tejido plano',
    'div.textiles.i6': 'Máquinas para enconar y procesar hilo',
    'div.textiles.i7': 'Acondicionamiento al vacío y tratamiento de hilos en procesos continuos',
    'div.textiles.i8': 'Sistemas de hilos de fantasía con efectos especiales',
    'div.textiles.i9': 'Parafinado de hilo',
    'div.textiles.i10': 'Botes de hilatura',
    'div.textiles.i11': 'Detección de metales, chispas y fibras extrañas',
    'div.textiles.i12': 'Laboratorios e instrumentos para hilanderías',
    'div.textiles.i13': 'Líneas de costura automática',
    'div.textiles.i14': 'Líneas de reciclaje',
    'div.textiles.i15': 'Climatización',
    'div.textiles.i16': 'Sistemas industriales de aspiración',
    'div.textiles.i17': 'Libros de tendencias de moda',
    'div.plastics.title': 'Plásticos',
    'div.plastics.desc': 'Maquinaria para transformación, reciclaje y producción de envases plásticos con soluciones enfocadas en productividad y sostenibilidad.',
    'div.plastics.i1': 'Extrusión',
    'div.plastics.i2': 'Soplado',
    'div.plastics.i3': 'Inyección',
    'div.plastics.i4': 'Termoformado',
    'div.plastics.i5': 'Maquinaria para tubos plásticos flexibles',
    'div.plastics.i6': 'Equipos auxiliares y automatización completa',
    'div.plastics.i7': 'Sistemas de enfriamiento',
    'div.plastics.i8': 'Reciclaje post-industrial y post-consumo',
    'div.plastics.i9': 'Plantas llave en mano para producción de diésel',
    'div.plastics.i10': 'Resinas y compuestos para películas de empaque',
    'div.plastics.i11': 'Sistemas industriales de aspiración',
    'div.energy.title': 'Ambiente y Energía',
    'div.energy.desc': 'Equipos y soluciones para proyectos energéticos e hidroeléctricos con tecnología de alto rendimiento.',
    'div.energy.i1': 'Tratamiento de aguas residuales industriales',
    'div.energy.i2': 'Líneas completas de reciclaje de plástico',
    'div.energy.i3': 'Líneas de reciclaje textil',
    'div.energy.i4': 'Energía hidroeléctrica',
    'div.industrial.title': 'Equipo Industrial',
    'div.industrial.desc': 'Equipos y soluciones para diversos procesos industriales, representando fabricantes reconocidos por su innovación, eficiencia y confiabilidad.',
    'div.industrial.i1': 'Sistemas de aspiración industrial y de alto vacío',
    'div.industrial.i2': 'Climatización industrial',
    'div.industrial.i3': 'Sistemas de enfriamiento',
    'div.industrial.i4': 'Automatización de bodegas y estacionamientos',
    'serv.eyebrow': 'Servicio técnico especializado',
    'serv.lead': 'Nuestro equipo acompaña cada proyecto con instalación, puesta en marcha, mantenimiento y soporte técnico, garantizando el máximo desempeño de los equipos durante toda su vida útil.',
    'serv.i1': 'Instalación y puesta en marcha',
    'serv.i2': 'Mantenimiento preventivo y correctivo',
    'serv.i3': 'Repuestos originales',
    'serv.i4': 'Soporte técnico local',
    'serv.cta': 'Solicitar servicio',
    'brands.eyebrow': 'Nuestras marcas',
    'brands.title': 'Representamos a líderes mundiales',
    'brands.lead': 'Trabajamos junto a fabricantes internacionales provenientes de Europa, Asia, Norteamérica y Sudamérica para ofrecer tecnología confiable, innovadora y de alto desempeño.',
    'brands.more': '…y muchas más: esta es solo una muestra de los más de 100 fabricantes que representamos.',
    'pres.eyebrow': 'Nuestras sedes',
    'pres.title': 'Cerca de su operación',
    'pres.hq': 'Oficina principal',
    'pres.office': 'Oficina',
    'pres.office2': 'Oficina',
    'pres.gt': 'Ciudad de Guatemala, Guatemala',
    'pres.sv': 'San Salvador, El Salvador',
    'pres.hn': 'San Pedro Sula, Honduras',
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Contáctanos',
    'contact.lead': 'Nuestro equipo está listo para asesorarle en la búsqueda de la solución adecuada para su industria.',
    'form.name': 'Nombre completo',
    'form.company': 'Empresa',
    'form.email': 'Correo electrónico',
    'form.phone': 'Teléfono',
    'form.message': 'Mensaje',
    'form.send': 'Enviar',
    'form.sending': 'Enviando…',
    'form.ok': '¡Gracias! Hemos recibido su mensaje y le contactaremos pronto.',
    'form.error': 'No se pudo enviar el mensaje. Escríbanos a info@maprimaq.com.',
    'form.invalid': 'Por favor complete los campos requeridos.',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'nav.about': 'About us',
    'nav.divisions': 'Services',
    'nav.service': 'Technical service',
    'nav.brands': 'Brands',
    'nav.presence': 'Locations',
    'nav.contact': 'Contact us',
    'hero.kicker': 'Industrial innovation since 1961',
    'hero.years': 'years',
    'hero.title': 'serving the industry',
    'hero.lead': 'We connect industry with world-class technology, representing leading brands in textiles, plastics, energy, water treatment and general industry.',
    'hero.cta1': 'Explore our services',
    'hero.cta2': 'Contact us',
    'stats.years': 'years of experience',
    'stats.countries': 'offices in Central America',
    'stats.brands': 'brands represented',
    'stats.divisions': 'specialized divisions',
    'about.eyebrow': 'About us',
    'about.title': 'Three generations serving industry',
    'about.p1': 'We are a family company in its third generation, founded in August 1961. Ever since, we have connected Central American industry with world-class technology.',
    'about.p2': 'We cooperate commercially with manufacturers of equipment for the textile, plastics and hydroelectric industries and industrial water-treatment plants. The equipment we distribute comes from Europe, Asia, North America and South America.',
    'about.p3': 'MAPRIMAQ is the only company in Central America able to locally offer installation, commissioning and after-sales service for Rieter spinning equipment. Our service engineers have also worked in Turkey, Portugal, Peru and Central America providing after-sales service for Rieter spinning machinery.',
    'about.p4': 'We have successfully taken part in industrial trade fairs such as INTERFER in the 1990s and, more recently, the Apparel & Sourcing Show in Guatemala City.',
    'about.tlTitle': 'Milestones',
    'about.t1961': 'The company is founded in Guatemala.',
    'about.t1984': 'First Schubert & Salzer – Ingolstadt RU 14 spinning machine sold in Guatemala and Latin America.',
    'about.t1985': 'First Bekum BM 08 blow-molding machine for plastic containers sold in Guatemala.',
    'about.t1995': 'First biological plant for treating textile wastewater in Guatemala, by Idrosistem.',
    'about.t2021': 'The largest spinning plant in Central America, by Rieter, sold in Honduras.',
    'div.eyebrow': 'Our services',
    'div.title': 'Solutions for every industry',
    'div.lead': 'Each MAPRIMAQ division specializes in delivering high-performance technology for different industrial sectors.',
    'div.more': 'View services',
    'div.less': 'Show less',
    'div.textiles.title': 'Textiles',
    'div.textiles.desc': 'Technology for the entire textile production chain, from spinning to specialized processes, backed by world-leading brands.',
    'div.textiles.i1': 'Short and long staple spinning',
    'div.textiles.i2': 'Circular knitting',
    'div.textiles.i3': 'Weaving looms',
    'div.textiles.i4': 'Dyeing, printing and finishing',
    'div.textiles.i5': 'Continuous dyeing and finishing lines for weaving',
    'div.textiles.i6': 'Winding and yarn processing machines',
    'div.textiles.i7': 'Vacuum conditioning and yarn treatments in continuous processes',
    'div.textiles.i8': 'Fancy yarn systems with special effects',
    'div.textiles.i9': 'Yarn waxing (paraffin)',
    'div.textiles.i10': 'Spinning cans',
    'div.textiles.i11': 'Detection of metals, sparks and foreign fibers',
    'div.textiles.i12': 'Laboratories and instruments for spinning mills',
    'div.textiles.i13': 'Automatic sewing lines',
    'div.textiles.i14': 'Recycling lines',
    'div.textiles.i15': 'Air conditioning',
    'div.textiles.i16': 'Industrial vacuum systems',
    'div.textiles.i17': 'Books on the latest fashion trends',
    'div.plastics.title': 'Plastics',
    'div.plastics.desc': 'Machinery for plastic processing, recycling and packaging production, with solutions focused on productivity and sustainability.',
    'div.plastics.i1': 'Extrusion',
    'div.plastics.i2': 'Blow molding',
    'div.plastics.i3': 'Injection molding',
    'div.plastics.i4': 'Thermoforming',
    'div.plastics.i5': 'Machinery for flexible plastic tubes',
    'div.plastics.i6': 'Auxiliary equipment and complete automation',
    'div.plastics.i7': 'Cooling systems',
    'div.plastics.i8': 'Post-industrial and post-consumer recycling',
    'div.plastics.i9': 'Turn-key diesel production plants',
    'div.plastics.i10': 'Resins and compounds for packaging films',
    'div.plastics.i11': 'Industrial vacuum systems',
    'div.energy.title': 'Environment & Energy',
    'div.energy.desc': 'Equipment and solutions for energy and hydroelectric projects with high-performance technology.',
    'div.energy.i1': 'Industrial wastewater treatment',
    'div.energy.i2': 'Complete plastic recycling lines',
    'div.energy.i3': 'Textile recycling lines',
    'div.energy.i4': 'Hydroelectric power',
    'div.industrial.title': 'Industrial Equipment',
    'div.industrial.desc': 'Equipment and solutions for a wide range of industrial processes, representing manufacturers renowned for innovation, efficiency and reliability.',
    'div.industrial.i1': 'Industrial suction and high-vacuum systems',
    'div.industrial.i2': 'Industrial air conditioning',
    'div.industrial.i3': 'Cooling systems',
    'div.industrial.i4': 'Warehouse and parking automation',
    'serv.eyebrow': 'Specialized technical service',
    'serv.lead': 'Our team supports every project with installation, commissioning, maintenance and technical support, ensuring maximum equipment performance throughout its service life.',
    'serv.i1': 'Installation and commissioning',
    'serv.i2': 'Preventive and corrective maintenance',
    'serv.i3': 'Original spare parts',
    'serv.i4': 'Local technical support',
    'serv.cta': 'Request service',
    'brands.eyebrow': 'Our brands',
    'brands.title': 'We represent world leaders',
    'brands.lead': 'We work with international manufacturers from Europe, Asia, North America and South America to deliver reliable, innovative, high-performance technology.',
    'brands.more': '…and many more: this is just a sample of the 100+ manufacturers we represent.',
    'pres.eyebrow': 'Our locations',
    'pres.title': 'Close to your operation',
    'pres.hq': 'Main office',
    'pres.office': 'Office',
    'pres.office2': 'Office',
    'pres.gt': 'Guatemala City, Guatemala',
    'pres.sv': 'San Salvador, El Salvador',
    'pres.hn': 'San Pedro Sula, Honduras',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Contact us',
    'contact.lead': 'Our team is ready to help you find the right solution for your industry.',
    'form.name': 'Full name',
    'form.company': 'Company',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.message': 'Message',
    'form.send': 'Send',
    'form.sending': 'Sending…',
    'form.ok': 'Thank you! We received your message and will get back to you soon.',
    'form.error': 'The message could not be sent. Please email us at info@maprimaq.com.',
    'form.invalid': 'Please fill in the required fields.',
    'footer.rights': 'All rights reserved.',
  },
};

let currentLang = localStorage.getItem('maprimaq-lang')
  || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'es');

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('maprimaq-lang', lang);
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-lang-opt]').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-lang-opt') === lang);
  });
  syncToggleLabels();
}

/* ---- Collapsible service lists ---- */
// Sets one card's toggle label from an explicit state (avoids reading the
// `open` class, which is toggled asynchronously while collapsing).
function setCardLabel(card, open) {
  const label = card.querySelector('.toggle-label');
  if (!label) return;
  const dict = I18N[currentLang];
  const count = card.querySelectorAll('.division-list li').length;
  label.textContent = open ? dict['div.less'] : `${dict['div.more']} (${count})`;
}
function syncToggleLabels() {
  document.querySelectorAll('.division-card').forEach((card) => {
    setCardLabel(card, card.classList.contains('open'));
  });
}

function setCardOpen(card, open) {
  const btn = card.querySelector('.division-toggle');
  const wrap = card.querySelector('.division-list-wrap');
  if (open) {
    card.classList.add('open');
    wrap.style.maxHeight = wrap.scrollHeight + 'px';
    // After the expand finishes, lift the cap so a language switch or reflow
    // (which can make the text taller) can never clip the list.
    clearTimeout(wrap._liftTimer);
    wrap._liftTimer = setTimeout(() => {
      if (card.classList.contains('open')) wrap.style.maxHeight = 'none';
    }, 550);
  } else {
    clearTimeout(wrap._liftTimer);
    // Set an explicit height first so the transition from 'none' animates.
    wrap.style.maxHeight = wrap.scrollHeight + 'px';
    requestAnimationFrame(() => {
      card.classList.remove('open');
      wrap.style.maxHeight = '0px';
    });
  }
  btn.setAttribute('aria-expanded', String(open));
  setCardLabel(card, open);
}

document.querySelectorAll('.division-card').forEach((card) => {
  // Stagger the list-item rise animation.
  card.querySelectorAll('.division-list li').forEach((li, i) => {
    li.style.animationDelay = `${Math.min(i * 0.03, 0.4)}s`;
  });
  // The whole card header toggles; clicks inside the open list are ignored
  // so hovering/clicking a service (and its machine preview) doesn't collapse.
  card.addEventListener('click', (e) => {
    if (e.target.closest('.division-list')) return;
    setCardOpen(card, !card.classList.contains('open'));
  });
  // Keyboard access via the focusable card.
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setCardOpen(card, !card.classList.contains('open'));
    }
  });
});

const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => applyLang(currentLang === 'es' ? 'en' : 'es'));
applyLang(currentLang);

/* ---- Header state ---- */
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---- Mobile nav ---- */
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  burger.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.header-nav a').forEach((a) =>
  a.addEventListener('click', () => {
    header.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

/* ---- Scroll reveal (staggered) ---- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach((el, i) => {
  // Stagger siblings that reveal together
  const siblings = el.parentElement ? el.parentElement.querySelectorAll(':scope > .reveal') : [];
  const idx = Array.prototype.indexOf.call(siblings, el);
  if (idx > 0) el.style.setProperty('--reveal-delay', `${Math.min(idx * 0.12, 0.6)}s`);
  revealObserver.observe(el);
});

/* ---- Count-up stats ---- */
function countUp(el, target, duration = 1400) {
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      countUp(entry.target, Number(entry.target.dataset.count));
      counterObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);
document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

/* ---- Hero: years count-up + subtle parallax ---- */
// The stats-band years figure also uses the computed value.
const yearsStat = document.querySelector('.stats [data-count="65"]');
if (yearsStat) yearsStat.dataset.count = YEARS;

const yearsEl = document.getElementById('yearsCounter');
if (yearsEl) countUp(yearsEl, YEARS, 1800);

/* ---- Hero image carousel ---- */
const heroSlides = document.querySelectorAll('.hero-bg .hero-slide');
if (heroSlides.length > 1) {
  let heroIdx = 0;
  setInterval(() => {
    heroSlides[heroIdx].classList.remove('is-active');
    heroIdx = (heroIdx + 1) % heroSlides.length;
    heroSlides[heroIdx].classList.add('is-active');
  }, HERO_SLIDE_MS);
}


/* ---- Machine hover previews ---- */
// Any .division-list li with data-img shows a floating photo on hover;
// data-brand (optional) displays the brand name — omit it for anonymous machines.
if (window.matchMedia('(hover: hover)').matches) {
  const peek = document.createElement('div');
  peek.className = 'machine-peek';
  peek.setAttribute('aria-hidden', 'true');
  peek.innerHTML = '<img alt=""><div class="peek-caption"><span class="peek-name"></span><span class="peek-brand"></span></div>';
  document.body.appendChild(peek);
  const peekImg = peek.querySelector('img');
  const peekName = peek.querySelector('.peek-name');
  const peekBrand = peek.querySelector('.peek-brand');

  const movePeek = (e) => {
    const w = peek.offsetWidth || 330;
    const h = peek.offsetHeight || 240;
    let x = e.clientX + 22;
    let y = e.clientY - h / 2;
    if (x + w > window.innerWidth - 12) x = e.clientX - w - 22;
    y = Math.max(12, Math.min(y, window.innerHeight - h - 12));
    peek.style.left = `${x}px`;
    peek.style.top = `${y}px`;
  };

  document.querySelectorAll('.division-list li[data-img]').forEach((li) => {
    li.addEventListener('mouseenter', (e) => {
      peekImg.src = li.dataset.img;
      peekName.textContent = li.textContent;
      peekBrand.textContent = li.dataset.brand || '';
      peekBrand.style.display = li.dataset.brand ? '' : 'none';
      movePeek(e);
      peek.classList.add('show');
    });
    li.addEventListener('mousemove', movePeek);
    li.addEventListener('mouseleave', () => peek.classList.remove('show'));
  });
}

/* ---- Footer year ---- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---- Contact form → Odoo ---- */
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dict = I18N[currentLang];
  statusEl.className = 'form-status';

  if (!form.checkValidity()) {
    statusEl.textContent = dict['form.invalid'];
    statusEl.classList.add('error');
    form.reportValidity();
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());

  if (!ODOO_URL) {
    // Fallback until Odoo is configured: open a pre-filled email.
    const body = encodeURIComponent(
      `${data.message}\n\n— ${data.name}${data.company ? ' · ' + data.company : ''}${data.phone ? ' · ' + data.phone : ''} · ${data.email}`
    );
    window.location.href = `mailto:info@maprimaq.com?subject=${encodeURIComponent('Contacto sitio web')}&body=${body}`;
    return;
  }

  // Map to Odoo crm.lead fields and post to the stock website-form endpoint.
  // Cross-origin: sent as a "simple" form POST with mode:'no-cors', so the
  // response is opaque — a network-level success is treated as delivered.
  const lead = new URLSearchParams({
    name: `Web: ${data.name}${data.company ? ` (${data.company})` : ''}`,
    contact_name: data.name,
    email_from: data.email,
    phone: data.phone || '',
    partner_name: data.company || '',
    description: data.message,
  });

  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = dict['form.sending'];
  try {
    await fetch(`${ODOO_URL}/website/form/crm.lead`, {
      method: 'POST',
      mode: 'no-cors',
      body: lead,
    });
    statusEl.textContent = dict['form.ok'];
    statusEl.classList.add('ok');
    form.reset();
  } catch (err) {
    statusEl.textContent = dict['form.error'];
    statusEl.classList.add('error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = dict['form.send'];
  }
});
