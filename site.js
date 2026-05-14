// === Ponto por Ponto, i18n + site interactions ===

const I18N = {
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.process': 'Processo',
    'nav.collections': 'Coleções',
    'nav.stockists': 'Onde estamos',
    'nav.contact': 'Contacto',

    'hero.tag': 'Atelier · Porto · desde sempre',
    'hero.title': 'Cada peça,<br/>uma história.',
    'hero.sub': 'Batizado, comunhão e cerimónia, feito à mão em Portugal.',
    'hero.cta1': 'Para lojistas →',
    'hero.cta2': 'Ver coleções',
    'hero.caption': '[ fotografia principal ]\nbebé em vestido de batizado · luz natural · 1920×1080',

    'about.eyebrow': 'Quem somos',
    'about.title': 'Quatro irmãs,<br/>um atelier.',
    'about.p1': 'Num pequeno atelier no Porto, costuramos vestidos de batizado, vestidos de comunhão e peças de cerimónia da forma como as nossas avós nos ensinaram, à mão, ponto por ponto. Cada renda, cada botão de pérola, cada bordado é escolhido para o dia que uma família vai querer recordar para sempre.',
    'about.p2': 'Como família, criámos uma coleção digna de um conto de fadas, com glamour, requinte e elegância na medida certa para marcar, com carinho, os momentos mais importantes dos nossos pequenos.',
    'about.p3': 'Lançamos duas coleções por ano, Verão e Inverno, em pequenas séries, disponíveis em lojas selecionadas por toda a Europa.',
    'about.caption': '— a família por trás da Ponto por Ponto',

    'process.eyebrow': 'O nosso processo',
    'process.title': 'Feito ponto por ponto.',
    'process.note': '4 passos · cada peça, devagar',
    'process.s1.title': 'Tecidos & rendas',
    'process.s1.desc': 'Linhos, sedas, rendas francesas, escolhidos pelo toque, não pelo preço.',
    'process.s1.ph': 'detalhe macro · tecido',
    'process.s2.title': 'Padrão',
    'process.s2.desc': 'Cortado à medida, todas as estações, no andar de cima do atelier.',
    'process.s2.ph': 'mesa de corte · padrão',
    'process.s3.title': 'Costura à mão',
    'process.s3.desc': 'Costurado pela nossa pequena equipa, sem linha de produção.',
    'process.s3.ph': 'mãos a costurar · close-up',
    'process.s4.title': 'Acabamento',
    'process.s4.desc': 'Botões de pérola, bainhas enroladas à mão, caixas atadas com fita.',
    'process.s4.ph': 'caixa com fita · still life',

    'col.eyebrow': 'Explorar',
    'col.title': 'As coleções',
    'col.note': 'Três famílias de peças, meninas, meninos, acessórios.',
    'col.girl.kicker': '01 · Menina',
    'col.girl.title': 'Meninas',
    'col.girl.sub': 'Vestidos de batizado, vestidos de comunhão, casacos de cerimónia.',
    'col.girl.ph': 'menina em vestido de comunhão · jardim',
    'col.boy.kicker': '02 · Menino',
    'col.boy.title': 'Meninos',
    'col.boy.sub': 'Fatos de linho, camisas de batizado, blazers.',
    'col.boy.ph': 'menino em fato de linho · batizado',
    'col.acc.kicker': '03 · Acessórios',
    'col.acc.title': 'Acessórios',
    'col.acc.sub': 'Toucas, fitas, sapatos, mantas, os pequenos detalhes.',
    'col.acc.ph': 'flat lay de acessórios · still life',

    'stk.eyebrow': 'Visite o atelier',
    'stk.address': 'Rua João das Regras 95<br/>4000-292 Porto<br/>Portugal',
    'stk.email.label': 'Email',
    'stk.phone.label': 'Telefone',
    'stk.hours.label': 'Horário',
    'stk.hours.val': 'Segunda a sexta · 9h–18h',
    'stk.socials': 'Siga-nos',
    'stk.maplabel': 'Atelier · Porto',

    'cnt.eyebrow': 'Diga olá',
    'cnt.title': 'Entre em contacto.',
    'cnt.lead': 'Para lojistas, imprensa, encomendas personalizadas ou simplesmente para dizer bom dia, lemos todas as mensagens.',
    'cnt.quick1.label': 'Email direto',
    'cnt.quick2.label': 'Telefone',
    'cnt.f.name': 'Nome',
    'cnt.f.email': 'Email',
    'cnt.f.msg': 'A sua mensagem',
    'cnt.submit': 'Enviar →',
    'cnt.status': 'Obrigada, recebemos a sua mensagem.',

    'ftr.tag': 'Feito à mão em Portugal',
    'ftr.nav': 'Navegar',
    'ftr.contact': 'Contacto',
    'ftr.social': 'Redes sociais',
    'ftr.rights': '©2026 Ponto por Ponto · Todos os direitos reservados',
  },

  en: {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.process': 'Process',
    'nav.collections': 'Collections', 'nav.stockists': 'Find us', 'nav.contact': 'Contact',

    'hero.tag': 'Atelier · Porto · since always',
    'hero.title': 'Every piece,<br/>a story.',
    'hero.sub': 'Christening, communion & ceremony, handmade in Portugal.',
    'hero.cta1': 'Trade enquiries →',
    'hero.cta2': 'See collections',
    'hero.caption': '[ hero photograph ]\nbaby in christening gown · natural light · 1920×1080',

    'about.eyebrow': 'Who we are',
    'about.title': 'Four sisters,<br/>one atelier.',
    'about.p1': 'From a small atelier in Porto, we sew christening gowns, communion dresses and ceremony pieces the way our grandmothers taught us, by hand, point by point. Every cut of lace, every pearl button, every embroidery is chosen for the day a family will want to remember forever.',
    'about.p2': 'As a family, we built a collection worthy of a fairy tale, with glamour, refinement and elegance in just the right measure to mark, with love, the most important moments of our little ones.',
    'about.p3': 'Two collections each year, Summer and Winter, in small runs, available through selected stockists across Europe.',
    'about.caption': '— the family behind Ponto por Ponto',

    'process.eyebrow': 'Our process',
    'process.title': 'Made point by point.',
    'process.note': '4 steps · each piece, slowly',
    'process.s1.title': 'Cloth & lace',
    'process.s1.desc': 'Linens, silks, French laces, chosen for hand, not for price.',
    'process.s1.ph': 'fabric detail · macro',
    'process.s2.title': 'Pattern',
    'process.s2.desc': 'Cut to size, every season, in the atelier upstairs.',
    'process.s2.ph': 'cutting table · pattern',
    'process.s3.title': 'Hand-sewn',
    'process.s3.desc': 'Stitched by our small team, no production line.',
    'process.s3.ph': 'hands stitching · close-up',
    'process.s4.title': 'Finished',
    'process.s4.desc': 'Pearl buttons, hand-rolled hems, ribbon-tied boxes.',
    'process.s4.ph': 'ribbon-tied box · still life',

    'col.eyebrow': 'Browse',
    'col.title': 'The collections',
    'col.note': 'Three families of pieces, girls, boys, accessories.',
    'col.girl.kicker': '01 · Girls',
    'col.girl.title': 'Girls',
    'col.girl.sub': 'Christening gowns, communion dresses, ceremony coats.',
    'col.girl.ph': 'girl in communion dress · garden',
    'col.boy.kicker': '02 · Boys',
    'col.boy.title': 'Boys',
    'col.boy.sub': 'Linen suits, christening shirts, blazers.',
    'col.boy.ph': 'boy in linen suit · christening',
    'col.acc.kicker': '03 · Accessories',
    'col.acc.title': 'Accessories',
    'col.acc.sub': 'Bonnets, ribbons, shoes, blankets, the small things.',
    'col.acc.ph': 'accessories flat lay · still life',

    'stk.eyebrow': 'Visit the atelier',
    'stk.address': 'Rua João das Regras 95<br/>4000-292 Porto<br/>Portugal',
    'stk.email.label': 'Email',
    'stk.phone.label': 'Phone',
    'stk.hours.label': 'Hours',
    'stk.hours.val': 'Monday to Friday · 9am–6pm',
    'stk.socials': 'Follow us',
    'stk.maplabel': 'Atelier · Porto',

    'cnt.eyebrow': 'Say hello',
    'cnt.title': 'Get in touch.',
    'cnt.lead': 'For stockist enquiries, press, custom orders or simply to say hello, we read every message.',
    'cnt.quick1.label': 'Email direct',
    'cnt.quick2.label': 'Phone',
    'cnt.f.name': 'Name',
    'cnt.f.email': 'Email',
    'cnt.f.msg': 'Your message',
    'cnt.submit': 'Send →',
    'cnt.status': 'Thank you, we received your message.',

    'ftr.tag': 'Handmade in Portugal',
    'ftr.nav': 'Navigate',
    'ftr.contact': 'Contact',
    'ftr.social': 'Social',
    'ftr.rights': '©2026 Ponto por Ponto · All rights reserved',
  },

  es: {
    'nav.home': 'Inicio', 'nav.about': 'Nosotras', 'nav.process': 'Proceso',
    'nav.collections': 'Colecciones', 'nav.stockists': 'Encuéntranos', 'nav.contact': 'Contacto',

    'hero.tag': 'Atelier · Oporto · desde siempre',
    'hero.title': 'Cada pieza,<br/>una historia.',
    'hero.sub': 'Bautizo, comunión y ceremonia, hecho a mano en Portugal.',
    'hero.cta1': 'Para tiendas →',
    'hero.cta2': 'Ver colecciones',
    'hero.caption': '[ fotografía principal ]\nbebé con vestido de bautizo · luz natural · 1920×1080',

    'about.eyebrow': 'Quiénes somos',
    'about.title': 'Cuatro hermanas,<br/>un atelier.',
    'about.p1': 'En un pequeño atelier de Oporto, cosemos vestidos de bautizo, vestidos de comunión y piezas de ceremonia como nos enseñaron nuestras abuelas, a mano, punto por punto. Cada encaje, cada botón de perla, cada bordado se elige para el día que una familia querrá recordar para siempre.',
    'about.p2': 'Como familia, creamos una colección digna de un cuento de hadas, con glamour, refinamiento y elegancia en la medida justa para marcar, con cariño, los momentos más importantes de los más pequeños.',
    'about.p3': 'Lanzamos dos colecciones al año, Verano e Invierno, en pequeñas series, disponibles en tiendas seleccionadas de toda Europa.',
    'about.caption': '— la familia detrás de Ponto por Ponto',

    'process.eyebrow': 'Nuestro proceso',
    'process.title': 'Hecho punto a punto.',
    'process.note': '4 pasos · cada pieza, despacio',
    'process.s1.title': 'Tela y encaje',
    'process.s1.desc': 'Linos, sedas, encajes franceses, elegidos por el tacto, no por el precio.',
    'process.s1.ph': 'detalle de tela · macro',
    'process.s2.title': 'Patrón',
    'process.s2.desc': 'Cortado a medida, cada temporada, en el atelier de arriba.',
    'process.s2.ph': 'mesa de corte · patrón',
    'process.s3.title': 'Cosido a mano',
    'process.s3.desc': 'Cosido por nuestro pequeño equipo, sin línea de producción.',
    'process.s3.ph': 'manos cosiendo · primer plano',
    'process.s4.title': 'Acabado',
    'process.s4.desc': 'Botones de perla, dobladillos a mano, cajas atadas con cinta.',
    'process.s4.ph': 'caja con cinta · bodegón',

    'col.eyebrow': 'Explorar',
    'col.title': 'Las colecciones',
    'col.note': 'Tres familias de piezas, niñas, niños, accesorios.',
    'col.girl.kicker': '01 · Niñas',
    'col.girl.title': 'Niñas',
    'col.girl.sub': 'Vestidos de bautizo, vestidos de comunión, abrigos de ceremonia.',
    'col.girl.ph': 'niña con vestido de comunión · jardín',
    'col.boy.kicker': '02 · Niños',
    'col.boy.title': 'Niños',
    'col.boy.sub': 'Trajes de lino, camisas de bautizo, blazers.',
    'col.boy.ph': 'niño con traje de lino · bautizo',
    'col.acc.kicker': '03 · Accesorios',
    'col.acc.title': 'Accesorios',
    'col.acc.sub': 'Gorros, cintas, zapatos, mantas, los pequeños detalles.',
    'col.acc.ph': 'accesorios en plano · bodegón',

    'stk.eyebrow': 'Visita el atelier',
    'stk.address': 'Rua João das Regras 95<br/>4000-292 Oporto<br/>Portugal',
    'stk.email.label': 'Email',
    'stk.phone.label': 'Teléfono',
    'stk.hours.label': 'Horario',
    'stk.hours.val': 'Lunes a viernes · 9h–18h',
    'stk.socials': 'Síguenos',
    'stk.maplabel': 'Atelier · Oporto',

    'cnt.eyebrow': 'Saluda',
    'cnt.title': 'Escríbenos.',
    'cnt.lead': 'Para tiendas, prensa, encargos personalizados o simplemente para saludar, leemos cada mensaje.',
    'cnt.quick1.label': 'Email directo',
    'cnt.quick2.label': 'Teléfono',
    'cnt.f.name': 'Nombre',
    'cnt.f.email': 'Email',
    'cnt.f.msg': 'Tu mensaje',
    'cnt.submit': 'Enviar →',
    'cnt.status': 'Gracias, hemos recibido tu mensaje.',

    'ftr.tag': 'Hecho a mano en Portugal',
    'ftr.nav': 'Navegar',
    'ftr.contact': 'Contacto',
    'ftr.social': 'Redes',
    'ftr.rights': '©2026 Ponto por Ponto · Todos los derechos reservados',
  },

  it: {
    'nav.home': 'Home', 'nav.about': 'Chi siamo', 'nav.process': 'Processo',
    'nav.collections': 'Collezioni', 'nav.stockists': 'Dove siamo', 'nav.contact': 'Contatti',

    'hero.tag': 'Atelier · Porto · da sempre',
    'hero.title': 'Ogni pezzo,<br/>una storia.',
    'hero.sub': 'Battesimo, comunione e cerimonia, fatto a mano in Portogallo.',
    'hero.cta1': 'Per rivenditori →',
    'hero.cta2': 'Vedi collezioni',
    'hero.caption': '[ fotografia principale ]\nneonato in abito da battesimo · luce naturale · 1920×1080',

    'about.eyebrow': 'Chi siamo',
    'about.title': 'Quattro sorelle,<br/>un atelier.',
    'about.p1': 'In un piccolo atelier a Porto, cuciamo abiti da battesimo, abiti da comunione e capi da cerimonia come ci hanno insegnato le nostre nonne, a mano, punto per punto. Ogni pizzo, ogni bottone di perla, ogni ricamo è scelto per il giorno che una famiglia vorrà ricordare per sempre.',
    'about.p2': 'Come famiglia, abbiamo creato una collezione degna di una fiaba, con glamour, raffinatezza ed eleganza nella misura giusta per segnare, con amore, i momenti più importanti dei più piccoli.',
    'about.p3': 'Lanciamo due collezioni all\'anno, Estate e Inverno, in piccole serie, disponibili presso rivenditori selezionati in tutta Europa.',
    'about.caption': '— la famiglia dietro Ponto por Ponto',

    'process.eyebrow': 'Il nostro processo',
    'process.title': 'Fatto punto per punto.',
    'process.note': '4 passi · ogni pezzo, lentamente',
    'process.s1.title': 'Tessuti e pizzi',
    'process.s1.desc': 'Lini, sete, pizzi francesi, scelti per il tatto, non per il prezzo.',
    'process.s1.ph': 'dettaglio tessuto · macro',
    'process.s2.title': 'Modello',
    'process.s2.desc': 'Tagliato su misura, ogni stagione, nell\'atelier al piano di sopra.',
    'process.s2.ph': 'tavolo da taglio · modello',
    'process.s3.title': 'Cucito a mano',
    'process.s3.desc': 'Cucito dal nostro piccolo team, nessuna linea di produzione.',
    'process.s3.ph': 'mani che cuciono · primo piano',
    'process.s4.title': 'Finitura',
    'process.s4.desc': 'Bottoni di perla, orli arrotolati a mano, scatole legate con nastro.',
    'process.s4.ph': 'scatola con nastro · still life',

    'col.eyebrow': 'Esplora',
    'col.title': 'Le collezioni',
    'col.note': 'Tre famiglie di pezzi, bambine, bambini, accessori.',
    'col.girl.kicker': '01 · Bambine',
    'col.girl.title': 'Bambine',
    'col.girl.sub': 'Abiti da battesimo, abiti da comunione, cappotti da cerimonia.',
    'col.girl.ph': 'bambina in abito da comunione · giardino',
    'col.boy.kicker': '02 · Bambini',
    'col.boy.title': 'Bambini',
    'col.boy.sub': 'Completi di lino, camicie da battesimo, blazer.',
    'col.boy.ph': 'bambino in completo di lino · battesimo',
    'col.acc.kicker': '03 · Accessori',
    'col.acc.title': 'Accessori',
    'col.acc.sub': 'Cuffiette, nastri, scarpine, copertine, i piccoli dettagli.',
    'col.acc.ph': 'accessori flat lay · still life',

    'stk.eyebrow': 'Visita l\'atelier',
    'stk.address': 'Rua João das Regras 95<br/>4000-292 Porto<br/>Portogallo',
    'stk.email.label': 'Email',
    'stk.phone.label': 'Telefono',
    'stk.hours.label': 'Orari',
    'stk.hours.val': 'Lunedì a venerdì · 9–18',
    'stk.socials': 'Seguici',
    'stk.maplabel': 'Atelier · Porto',

    'cnt.eyebrow': 'Salutaci',
    'cnt.title': 'Scrivici.',
    'cnt.lead': 'Per rivenditori, stampa, ordini personalizzati o semplicemente per salutare, leggiamo ogni messaggio.',
    'cnt.quick1.label': 'Email diretta',
    'cnt.quick2.label': 'Telefono',
    'cnt.f.name': 'Nome',
    'cnt.f.email': 'Email',
    'cnt.f.msg': 'Il tuo messaggio',
    'cnt.submit': 'Invia →',
    'cnt.status': 'Grazie, abbiamo ricevuto il tuo messaggio.',

    'ftr.tag': 'Fatto a mano in Portogallo',
    'ftr.nav': 'Naviga',
    'ftr.contact': 'Contatti',
    'ftr.social': 'Social',
    'ftr.rights': '©2026 Ponto por Ponto · Tutti i diritti riservati',
  },
};

const LANG_META = {
  pt: { code: 'PT', label: 'Português', flag: 'flag-pt' },
  en: { code: 'EN', label: 'English',    flag: 'flag-en' },
  es: { code: 'ES', label: 'Español',    flag: 'flag-es' },
  it: { code: 'IT', label: 'Italiano',   flag: 'flag-it' },
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.pt;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph-label');
    if (dict[key]) el.setAttribute('data-label', dict[key]);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });
  document.documentElement.lang = lang;
  // update active button + nav label
  document.querySelectorAll('.lang-menu button').forEach(b => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
  });
  const meta = LANG_META[lang];
  const btn = document.querySelector('.lang-btn');
  if (btn && meta) {
    btn.querySelector('.flag').className = `flag ${meta.flag}`;
    btn.querySelector('.lang-code').textContent = meta.code;
  }
  try { localStorage.setItem('ppp.lang', lang); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  // language: default PT, unless user previously selected
  let lang = 'pt';
  try { lang = localStorage.getItem('ppp.lang') || 'pt'; } catch (e) {}
  if (!I18N[lang]) lang = 'pt';

  // build language menu
  const menu = document.querySelector('.lang-menu');
  if (menu) {
    menu.innerHTML = '';
    Object.entries(LANG_META).forEach(([code, meta]) => {
      const b = document.createElement('button');
      b.dataset.lang = code;
      b.innerHTML = `<span class="flag ${meta.flag}"></span>${meta.label}`;
      b.addEventListener('click', () => {
        applyLang(code);
        menu.classList.remove('is-open');
      });
      menu.appendChild(b);
    });
  }
  const langBtn = document.querySelector('.lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('is-open');
    });
    document.addEventListener('click', () => menu.classList.remove('is-open'));
  }

  applyLang(lang);

  // mobile menu toggle
  const burger = document.querySelector('.nav-burger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // contact form
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.status');
      status.classList.add('is-shown');
      form.reset();
      setTimeout(() => status.classList.remove('is-shown'), 4000);
    });
  }

  // gentle parallax on hero media
  const heroMedia = document.querySelector('.hero-media');
  if (heroMedia) {
    window.addEventListener('scroll', () => {
      const y = Math.min(window.scrollY, 600);
      heroMedia.style.transform = `translateY(${y * 0.15}px)`;
    }, { passive: true });
  }
});
