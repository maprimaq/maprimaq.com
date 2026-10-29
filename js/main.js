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
// Long enough to actually read the slide-2 exhibitor copy before it advances.
const HERO_SLIDE_MS = 5000;

/* ---- i18n ---- */
const I18N = {
  es: {
    'nav.about': 'Nosotros',
    'nav.divisions': 'Servicios',
    'nav.service': 'Servicio técnico',
    'nav.presence': 'Sedes',
    'nav.contact': 'Contáctanos',
    'hero.kicker': 'Innovación industrial desde 1961',
    'hero.years': 'años',
    'hero.title': 'al servicio de la industria',
    'hero.lead': 'Conectamos a la industria con tecnología de clase mundial, representando marcas líderes en los sectores textil, plástico, energía, tratamiento de aguas e industria en general.',
    'hero.cta1': 'Conoce nuestros servicios',
    'hero.cta2': 'Contáctanos',
    'hero.prev': 'Diapositiva anterior',
    'hero.next': 'Diapositiva siguiente',
    'promo.dates': '10 – 13 de noviembre de 2026',
    'promo.venue': 'Centro Banamex · Ciudad de México',
    'promo.stands': 'Estaremos presentes, agenda una reunión con nuestro equipo',
    'promo.cta': 'Agenda una reunión',
    'promo.sw.kicker': 'Nuevo: servicios de software',
    'promo.sw.title': 'Acelere sus procesos con\u00a0IA',
    'promo.sw.lead': 'MAPRIMAQ ahora también desarrolla software a la medida: automatizamos los documentos y procesos de su empresa con inteligencia artificial.',
    'promo.sw.cta': 'Conoce más',
    'ia.hero.kicker': 'IA + validación + integración',
    'ia.ex.eyebrow': 'Del caos al registro',
    'ia.ex.title': 'Cada cliente envía sus pedidos a su manera. El resultado es siempre el mismo registro.',
    'ia.ex.excel': 'Hoja de Excel',
    'ia.ex.pdf': 'PDF escaneado',
    'ia.ex.wa': 'Mensaje de WhatsApp',
    'ia.ex.after': 'Orden de venta creada en su sistema, con la línea ambigua marcada para revisión',
    'ia.ex.note': 'Imágenes ilustrativas con datos ficticios.',
    'ia.hero.title': 'Del documento al sistema. Automáticamente.',
    'ia.hero.lead': 'Automatización inteligente de documentos para integrar órdenes, facturas y otros registros directamente a su ERP, sin digitación manual.',
    'ia.hero.cta': 'Agende un diagnóstico',
    'ia.hero.cta2': 'Véalo en operación',
    'ia.prob.eyebrow': 'El problema',
    'ia.prob.title': 'Procesos manuales que consumen tiempo y generan errores',
    'ia.prob.c1t': 'Documentos en múltiples formatos',
    'ia.prob.c1': 'Correo, WhatsApp, PDF, foto, Excel. Cada cliente o proveedor con su propio formato.',
    'ia.prob.c2t': 'Digitación repetitiva',
    'ia.prob.c2': 'Línea por línea en el sistema. Lento, puede llevar a errores, y sin registro de quién ingresó qué.',
    'ia.prob.c3t': 'Errores detectados demasiado tarde',
    'ia.prob.c3': 'Producto equivocado, precio fuera de lista, total incorrecto. Se nota hasta facturar o al despachar.',
    'ia.prob.applies': 'Aplica a',
    'ia.prob.a1': 'Órdenes de compra de clientes',
    'ia.prob.a2': 'Facturas de proveedores',
    'ia.prob.a3': 'Notas de envío y guías de despacho',
    'ia.prob.a4': 'Cotizaciones y contratos',
    'ia.prob.a5': 'Conteos y formularios de campo',
    'ia.prob.a6': 'Reportes en Excel o en foto',
    'ia.steps.eyebrow': 'Del documento al registro',
    'ia.steps.title': 'La IA lee y vincula con su inventario. Mejora con el tiempo.',
    'ia.steps.s1t': 'Recibir',
    'ia.steps.s1': 'PDF, imagen, Excel o foto de WhatsApp. Uno o varios a la vez.',
    'ia.steps.s2t': 'Extraer',
    'ia.steps.s2': 'La IA lee cliente, referencia, líneas, cantidades y precios.',
    'ia.steps.s3t': 'Cruzar',
    'ia.steps.s3': 'Códigos del cliente, de barras y de producto contra su catálogo real. Esta es la parte clave, y se auto-mejora con el tiempo.',
    'ia.steps.s4t': 'Validar',
    'ia.steps.s4': 'Listas de precios, descuentos, totales, impuestos y cliente.',
    'ia.steps.s5t': 'Registrar',
    'ia.steps.s5': 'Orden, factura o registro creado en su sistema.',
    'ia.steps.noteT': 'Control humano solo donde agrega valor:',
    'ia.steps.note': 'Los casos ambiguos quedan destacados para revisión. Cada ajuste queda registrado para que el sistema aprenda y mejore con el tiempo.',
    'ia.demo.eyebrow': 'Así se ve en operación',
    'ia.demo.title': 'Varios documentos a la vez, revisión solo donde hace falta',
    'ia.demo.caption': 'Capturas con datos ilustrativos',
    'ia.res.eyebrow': 'Resultados reales',
    'ia.res.client': 'Cliente: distribuidor de productos alimenticios · 9 meses en operación',
    'ia.res.s1': 'documentos procesados',
    'ia.res.s2': 'sin intervención humana (último mes completo)',
    'ia.res.s3': 'coincidencias por código, no por aproximación',
    'ia.res.s4': 'por documento, en promedio',
    'ia.res.chart': 'Documentos sin intervención, por mes',
    'ia.res.m1': 'Abr',
    'ia.res.m2': 'May',
    'ia.res.m3': 'Jun',
    'ia.res.m4': 'Jul',
    'ia.res.claimT': 'Cada documento procesado creó su registro.',
    'ia.res.claim': 'Cero órdenes perdidas. El porcentaje automático subió mes a mes al afinar los catálogos.',
    'ia.impl.eyebrow': 'Tres fases, la primera sin compromiso',
    'ia.impl.title': 'Implementación gradual, con resultados medibles',
    'ia.impl.p1w': 'Semanas 1 – 2',
    'ia.impl.p1t': 'Diagnóstico',
    'ia.impl.p1': 'Nos entregan 50 documentos reales y acceso de lectura a su catálogo. Medimos precisión antes de que inviertan.',
    'ia.impl.p2w': 'Semanas 3 – 6',
    'ia.impl.p2t': 'Prueba conectada',
    'ia.impl.p2': 'Integración con su sistema, revisión humana activa, indicadores diarios de avance.',
    'ia.impl.p3w': 'Después',
    'ia.impl.p3t': 'Operación y mejora',
    'ia.impl.p3': 'Afinamos por cliente o proveedor y sumamos tipos de documento. Soporte y seguimiento incluidos.',
    'ia.impl.compat': 'Funciona con Zoho, Odoo, SAP o cualquier sistema que permita conexión (API).',
    'ia.save.eyebrow': 'Ejemplo ilustrativo · 1,000 documentos al mes',
    'ia.save.title': 'Cuánto se ahorra',
    'ia.save.manual': 'Manual',
    'ia.save.ai': 'Con IA',
    'ia.save.saving': 'Ahorro',
    'ia.save.r1': 'Horas de digitación',
    'ia.save.r2': 'Costo de digitación',
    'ia.save.r3': 'Errores al mes',
    'ia.save.r4': 'Costo de errores',
    'ia.save.r5': 'Total mensual',
    'ia.save.h1': 'ahorro al mes, 91 % del costo actual',
    'ia.save.h2': 'al año, gracias a 96 horas liberadas cada mes (más de media persona por tiempo completo)',
    'ia.save.assumptions': 'Supuestos: 6 min de digitación manual por documento; costo de US$ 5 por hora; 3% de documentos con error y US$ 10 por error (devolución, refacturación, reenvío). Automatizado: 78 % sin intervención (resultado en producción) y 1 min de revisión en el resto; 0.5 % de error residual.',
    'ia.price.eyebrow': 'Nuestra regla de precio da un ahorro garantizado',
    'ia.price.title': 'Cuánto cuesta',
    'ia.price.c1f': 'Máx. 50%',
    'ia.price.c1l': 'del ahorro total',
    'ia.price.c1t': 'Regla de precio',
    'ia.price.c1': 'La mensualidad nunca supera la mitad de lo que la IA le ahorra en digitación y errores.',
    'ia.price.c2l': 'liberadas al mes',
    'ia.price.c2t': 'Ejemplo: 1,000 docs',
    'ia.price.c2': '96 h de digitación (US$480) más US$250 en errores evitados: US$730 de ahorro al mes.',
    'ia.price.c3f': 'Máx. US$360',
    'ia.price.c3l': 'por cada 1,000 docs',
    'ia.price.c3t': 'Precio por volumen',
    'ia.price.c3': 'Cada documento le ahorra US$0.73 (US$0.48 en digitación y US$0.25 en errores). Cobramos US$0.36 como máximo.',
    'ia.price.formula': 'Fórmula: mensualidad = documentos al mes × US$0.36. En el ejemplo, usted conserva US$370 de los US$730 que ahorra. La implementación se cotiza aparte, o puede ser amortizada en mensualidad con contrato de 2+ años.',
    'ia.contact.title': 'Agende un diagnóstico',
    'ia.contact.lead': 'Nos entregan 50 documentos reales y acceso de lectura a su catálogo. Medimos precisión antes de que inviertan.',
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
    'div.software.title': 'Software',
    'div.software.desc': 'Automatización de documentos y procesos con inteligencia artificial, integrada a su ERP.',
    'div.software.cta': 'Ver más',
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
    'div.textiles.i13': 'Líneas de corte automático',
    'div.textiles.i14': 'Líneas de reciclaje',
    'div.textiles.i15': 'Climatización',
    'div.textiles.i16': 'Sistemas industriales de aspiración',
    'div.plastics.title': 'Plásticos',
    'div.plastics.desc': 'Maquinaria para transformación, reciclaje y producción de envases plásticos con soluciones enfocadas en productividad y sostenibilidad.',
    'div.plastics.i1': 'Extrusión',
    'div.plastics.i2': 'Soplado',
    'div.plastics.i12': 'Soplado de envases PET',
    'div.plastics.i3': 'Inyección',
    'div.plastics.i13': 'Moldes',
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
    'brands.title': 'Representamos a líderes mundiales',
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
    'nav.presence': 'Locations',
    'nav.contact': 'Contact us',
    'hero.kicker': 'Industrial innovation since 1961',
    'hero.years': 'years',
    'hero.title': 'serving the industry',
    'hero.lead': 'We connect industry with world-class technology, representing leading brands in textiles, plastics, energy, water treatment and general industry.',
    'hero.cta1': 'Explore our services',
    'hero.cta2': 'Contact us',
    'hero.prev': 'Previous slide',
    'hero.next': 'Next slide',
    'promo.dates': 'November 10 – 13, 2026',
    'promo.venue': 'Centro Banamex · Mexico City',
    'promo.stands': 'We will be there, book a meeting with our team',
    'promo.cta': 'Book a meeting',
    'promo.sw.kicker': 'New: software services',
    'promo.sw.title': 'Speed up your processes with\u00a0AI',
    'promo.sw.lead': 'MAPRIMAQ now also builds custom software: we automate your company\'s documents and processes with artificial intelligence.',
    'promo.sw.cta': 'Learn more',
    'ia.hero.kicker': 'AI + validation + integration',
    'ia.ex.eyebrow': 'From chaos to record',
    'ia.ex.title': 'Every customer sends orders their own way. The result is always the same record.',
    'ia.ex.excel': 'Excel sheet',
    'ia.ex.pdf': 'Scanned PDF',
    'ia.ex.wa': 'WhatsApp message',
    'ia.ex.after': 'Sales order created in your system, with the ambiguous line flagged for review',
    'ia.ex.note': 'Illustrative images with fictitious data.',
    'ia.hero.title': 'From document to system. Automatically.',
    'ia.hero.lead': 'Intelligent document automation that brings orders, invoices and other records straight into your ERP, with no manual data entry.',
    'ia.hero.cta': 'Book a diagnostic',
    'ia.hero.cta2': 'See it in action',
    'ia.prob.eyebrow': 'The problem',
    'ia.prob.title': 'Manual processes that eat up time and cause errors',
    'ia.prob.c1t': 'Documents in many formats',
    'ia.prob.c1': 'Email, WhatsApp, PDF, photo, Excel. Every customer or supplier with its own format.',
    'ia.prob.c2t': 'Repetitive data entry',
    'ia.prob.c2': 'Line by line into the system. Slow, error-prone, and with no record of who entered what.',
    'ia.prob.c3t': 'Errors caught too late',
    'ia.prob.c3': 'Wrong product, off-list price, incorrect total. Nobody notices until invoicing or dispatch.',
    'ia.prob.applies': 'Applies to',
    'ia.prob.a1': 'Customer purchase orders',
    'ia.prob.a2': 'Supplier invoices',
    'ia.prob.a3': 'Delivery notes and shipping guides',
    'ia.prob.a4': 'Quotes and contracts',
    'ia.prob.a5': 'Counts and field forms',
    'ia.prob.a6': 'Reports in Excel or as photos',
    'ia.steps.eyebrow': 'From document to record',
    'ia.steps.title': 'AI reads and links to your inventory. It improves over time.',
    'ia.steps.s1t': 'Receive',
    'ia.steps.s1': 'PDF, image, Excel or WhatsApp photo. One or many at once.',
    'ia.steps.s2t': 'Extract',
    'ia.steps.s2': 'AI reads customer, reference, lines, quantities and prices.',
    'ia.steps.s3t': 'Match',
    'ia.steps.s3': 'Customer, barcode and product codes against your real catalog. This is the key step, and it improves itself over time.',
    'ia.steps.s4t': 'Validate',
    'ia.steps.s4': 'Price lists, discounts, totals, taxes and customer.',
    'ia.steps.s5t': 'Record',
    'ia.steps.s5': 'Order, invoice or record created in your system.',
    'ia.steps.noteT': 'Human control only where it adds value:',
    'ia.steps.note': 'Ambiguous cases are flagged for review. Every adjustment is logged so the system learns and improves over time.',
    'ia.demo.eyebrow': 'See it in operation',
    'ia.demo.title': 'Many documents at once, review only where needed',
    'ia.demo.caption': 'Screens with illustrative data',
    'ia.res.eyebrow': 'Real results',
    'ia.res.client': 'Client: food products distributor · 9 months in operation',
    'ia.res.s1': 'documents processed',
    'ia.res.s2': 'with no human intervention (last full month)',
    'ia.res.s3': 'matches by code, not by approximation',
    'ia.res.s4': 'per document, on average',
    'ia.res.chart': 'Documents with no intervention, by month',
    'ia.res.m1': 'Apr',
    'ia.res.m2': 'May',
    'ia.res.m3': 'Jun',
    'ia.res.m4': 'Jul',
    'ia.res.claimT': 'Every processed document created its record.',
    'ia.res.claim': 'Zero lost orders. The automatic share rose month over month as the catalogs were tuned.',
    'ia.impl.eyebrow': 'Three phases, the first with no commitment',
    'ia.impl.title': 'Gradual rollout, with measurable results',
    'ia.impl.p1w': 'Weeks 1 – 2',
    'ia.impl.p1t': 'Diagnostic',
    'ia.impl.p1': 'You share 50 real documents and read access to your catalog. We measure accuracy before you invest.',
    'ia.impl.p2w': 'Weeks 3 – 6',
    'ia.impl.p2t': 'Connected pilot',
    'ia.impl.p2': 'Integration with your system, active human review, daily progress indicators.',
    'ia.impl.p3w': 'After',
    'ia.impl.p3t': 'Operation and improvement',
    'ia.impl.p3': 'We tune per customer or supplier and add document types. Support and follow-up included.',
    'ia.impl.compat': 'Works with Zoho, Odoo, SAP or any system that allows a connection (API).',
    'ia.save.eyebrow': 'Illustrative example · 1,000 documents per month',
    'ia.save.title': 'How much you save',
    'ia.save.manual': 'Manual',
    'ia.save.ai': 'With AI',
    'ia.save.saving': 'Savings',
    'ia.save.r1': 'Data-entry hours',
    'ia.save.r2': 'Data-entry cost',
    'ia.save.r3': 'Errors per month',
    'ia.save.r4': 'Cost of errors',
    'ia.save.r5': 'Monthly total',
    'ia.save.h1': 'saved per month, 91% of the current cost',
    'ia.save.h2': 'per year, thanks to 96 hours freed up every month (more than half a full-time person)',
    'ia.save.assumptions': 'Assumptions: 6 min of manual entry per document; US$5 per hour; 3% of documents with errors at US$10 per error (returns, re-invoicing, re-shipping). Automated: 78% with no intervention (production result) and 1 min of review for the rest; 0.5% residual error.',
    'ia.price.eyebrow': 'Our pricing rule guarantees savings',
    'ia.price.title': 'What it costs',
    'ia.price.c1f': 'Max. 50%',
    'ia.price.c1l': 'of total savings',
    'ia.price.c1t': 'Pricing rule',
    'ia.price.c1': 'The monthly fee never exceeds half of what the AI saves you in data entry and errors.',
    'ia.price.c2l': 'freed up per month',
    'ia.price.c2t': 'Example: 1,000 docs',
    'ia.price.c2': '96 h of data entry (US$480) plus US$250 in avoided errors: US$730 saved per month.',
    'ia.price.c3f': 'Max. US$360',
    'ia.price.c3l': 'per 1,000 docs',
    'ia.price.c3t': 'Volume pricing',
    'ia.price.c3': 'Each document saves you US$0.73 (US$0.48 in data entry and US$0.25 in errors). We charge US$0.36 at most.',
    'ia.price.formula': 'Formula: monthly fee = documents per month × US$0.36. In the example, you keep US$370 of the US$730 you save. Implementation is quoted separately, or can be amortized into the monthly fee with a 2+ year contract.',
    'ia.contact.title': 'Book a diagnostic',
    'ia.contact.lead': 'You share 50 real documents and read access to your catalog. We measure accuracy before you invest.',
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
    'div.software.title': 'Software',
    'div.software.desc': 'AI-powered document and process automation, integrated with your ERP.',
    'div.software.cta': 'Learn more',
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
    'div.textiles.i13': 'Automatic cutting lines',
    'div.textiles.i14': 'Recycling lines',
    'div.textiles.i15': 'Air conditioning',
    'div.textiles.i16': 'Industrial vacuum systems',
    'div.plastics.title': 'Plastics',
    'div.plastics.desc': 'Machinery for plastic processing, recycling and packaging production, with solutions focused on productivity and sustainability.',
    'div.plastics.i1': 'Extrusion',
    'div.plastics.i2': 'Blow molding',
    'div.plastics.i12': 'PET blow molding',
    'div.plastics.i3': 'Injection molding',
    'div.plastics.i13': 'Molds',
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
    'brands.title': 'We represent world leaders',
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

// Fine pointers (mouse) get a floating photo-on-hover tooltip (below); on
// coarse/no-hover pointers (touch) there is no hover to reveal it with, so
// the division list instead becomes a horizontally swipeable strip of cards.
const canHoverDivisionPhotos = window.matchMedia('(hover: hover)').matches;

// Turns one division's <ul class="division-list"> into a horizontal strip
// of square-ish cells — one per brand/item — in place, reusing the same
// <li> elements and data-img/data-brand/data-i18n already on them. Only
// called for touch/no-hover pointers, and only once per card, the first
// time it's opened — so a division the user never opens never has its
// photos inserted into the DOM at all.
function buildDivisionStrip(card) {
  if (card.dataset.stripBuilt) return;
  card.dataset.stripBuilt = 'true';

  const list = card.querySelector('.division-list');
  list.classList.add('division-strip');

  list.querySelectorAll('li').forEach((li) => {
    li.classList.add('division-cell');
    li.tabIndex = 0;

    // Move the translatable text one level down into a child <span> —
    // applyLang() replaces [data-i18n] elements' entire textContent, which
    // would otherwise wipe out the <img>/caption markup added below.
    const i18nKey = li.getAttribute('data-i18n');
    const text = li.textContent;
    li.textContent = '';
    if (i18nKey) li.removeAttribute('data-i18n');

    const textSpan = document.createElement('span');
    textSpan.className = 'cell-text';
    if (i18nKey) textSpan.setAttribute('data-i18n', i18nKey);
    textSpan.textContent = text;

    const imgSrc = li.dataset.img;
    if (imgSrc) {
      li.classList.add('has-photo');

      const img = document.createElement('img');
      img.className = 'cell-img';
      img.src = imgSrc;
      img.alt = '';
      img.loading = 'lazy';
      li.appendChild(img);

      const caption = document.createElement('span');
      caption.className = 'cell-caption';
      if (li.dataset.brand) {
        const brandSpan = document.createElement('span');
        brandSpan.className = 'cell-brand';
        brandSpan.textContent = li.dataset.brand;
        caption.appendChild(brandSpan);
      }
      caption.appendChild(textSpan);
      li.appendChild(caption);
    } else {
      li.classList.add('text-only');
      li.appendChild(textSpan);
    }
  });
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
  document.querySelectorAll('.division-card:not(.division-card-link)').forEach((card) => {
    setCardLabel(card, card.classList.contains('open'));
  });
}

function setCardOpen(card, open) {
  const btn = card.querySelector('.division-toggle');
  const wrap = card.querySelector('.division-list-wrap');
  if (open) {
    // Build the swipeable strip (touch only, idempotent) before measuring
    // scrollHeight below, so the expand animation sizes to its real height
    // instead of the plain list it replaces.
    if (!canHoverDivisionPhotos) buildDivisionStrip(card);
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

document.querySelectorAll('.division-card:not(.division-card-link)').forEach((card) => {
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
  // Keyboard access via the focusable card. Mirrors the click handler's
  // guard above: once the list is open, its cells are tabbable too (the
  // mobile strip), and Enter/Space on one of them must scroll/read it, not
  // collapse the whole card out from under the user's focus.
  card.addEventListener('keydown', (e) => {
    if (e.target.closest('.division-list')) return;
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
// Each copy layer belongs to exactly one slide and crossfades with it, so a
// slide never shows another slide's text: .hero-copy is slide 0, .hero-promo
// (the event promo) is slide 1.
const heroSlides = document.querySelectorAll('.hero-bg .hero-slide');
const heroCopy = document.querySelector('.hero-copy');
const heroPromo = document.querySelector('.hero-promo');
// With a single slide the arrows would do nothing, so they are hidden; adding
// a second .hero-slide in index.html brings them back.
const heroNav = document.querySelector('.hero-nav');
if (heroNav) heroNav.hidden = heroSlides.length < 2;
if (heroSlides.length > 1) {
  let heroIdx = 0;
  let heroTimer = null;

  function showHeroSlide(idx) {
    heroSlides[heroIdx].classList.remove('is-active');
    // Wraps in both directions, so the prev button works from slide 0.
    heroIdx = (idx + heroSlides.length) % heroSlides.length;
    heroSlides[heroIdx].classList.add('is-active');
    if (heroCopy) heroCopy.classList.toggle('is-hidden', heroIdx !== 0);
    if (heroPromo) {
      const promoHidden = heroIdx !== 1;
      // The class is the ONLY thing gating whether the promo renders —
      // identical to how .hero-copy is shown/hidden.
      // NOTE: this element and its selector must stay on the hero-promo-*
      // prefix. Named .hero-ad it was hidden outright by Arc's built-in
      // content blocker (cosmetic filter lists hide "ad" class tokens), which
      // is what made it invisible on iOS while Safari was fine.
      heroPromo.classList.toggle('is-hidden', promoHidden);
      // Everything below is ADDITIVE accessibility only, and is deliberately
      // sequenced after the class toggle: visibility is already settled by the
      // line above, so even if an engine mishandles or throws on `inert`, the
      // promo has still been shown/hidden correctly. Never move `inert` ahead
      // of the class toggle, and never let it become the visibility gate.
      heroPromo.setAttribute('aria-hidden', promoHidden ? 'true' : 'false');
      // Keeps the faded-out promo's links out of the tab order / a11y tree.
      heroPromo.toggleAttribute('inert', promoHidden);
    }
  }
  function stopHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = null;
  }
  // Reduced-motion users never get auto-advance — guarded here rather than at
  // the call sites so hover-out and arrow clicks can't restart it either.
  const heroAutoplay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function startHeroTimer() {
    stopHeroTimer();
    if (!heroAutoplay) return;
    heroTimer = setInterval(() => showHeroSlide(heroIdx + 1), HERO_SLIDE_MS);
  }
  // Manual navigation restarts the dwell so the slide you asked for gets a
  // full turn instead of the remainder of the previous one.
  function goToHeroSlide(idx) {
    showHeroSlide(idx);
    startHeroTimer();
  }

  const heroPrev = document.getElementById('heroPrev');
  const heroNext = document.getElementById('heroNext');
  if (heroPrev) heroPrev.addEventListener('click', () => goToHeroSlide(heroIdx - 1));
  if (heroNext) heroNext.addEventListener('click', () => goToHeroSlide(heroIdx + 1));

  // Pause on hover over the CONTROLS and the ad copy only — never the whole
  // .hero. The hero fills most of the viewport, so the pointer is inside it
  // when the page loads and the browser dispatches mouseenter as soon as
  // layout settles; that stopped the timer immediately after init and left the
  // carousel frozen on slide 1 until an arrow click restarted it.
  // .hero-promo is pointer-events:none while faded out, so it can only pause the
  // slide it actually belongs to.
  if (window.matchMedia('(hover: hover)').matches) {
    [document.querySelector('.hero-nav'), heroPromo].forEach((el) => {
      if (!el) return;
      el.addEventListener('mouseenter', stopHeroTimer);
      el.addEventListener('mouseleave', startHeroTimer);
    });
  }

  // Single init call — startHeroTimer() clears any existing interval first, so
  // this can never stack a second one.
  startHeroTimer();
}


/* ---- Machine hover previews (desktop only — see buildDivisionStrip
   above for the touch equivalent) ---- */
// Any .division-list li with data-img shows a floating photo on hover;
// data-brand (optional) displays the brand name — omit it for anonymous machines.
if (canHoverDivisionPhotos) {
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
