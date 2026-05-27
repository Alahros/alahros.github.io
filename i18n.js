/*
 *  i18n — Static text translations.
 *  Project text (titles, bullets, descriptions) lives inside projects.js.
 *
 *  Any element with [data-i18n="key"] gets its text replaced by I18N[lang][key].
 *  Any element with [data-i18n-html="key"] receives innerHTML (allows <br>, etc.).
 */

window.I18N = {
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.subtitle": "2D Artist · Pixel Art · Unity Game Developer",
    "hero.tagline": "I build worlds with pixels and code — from character animation to gameplay scripting.",
    "hero.cta.projects": "View Projects",
    "hero.cta.cv": "Download CV",

    "stats.years.label": "Years making games",
    "stats.jams.label": "Game jams shipped",
    "stats.projects.label": "Projects built",
    "stats.roles.label": "Hats worn (Art + Code)",

    "projects.title": "Selected Projects",
    "projects.subtitle": "Browse my recent work. Use the arrows, the thumbnails below, or the ← → keys.",
    "projects.role": "Role",
    "projects.links.play": "Play",
    "projects.links.download": "Download",
    "projects.links.trailer": "Trailer",
    "projects.links.source": "Source",
    "projects.prev": "Previous project",
    "projects.next": "Next project",

    "skills.title": "Skills & Tools",
    "skills.engines": "Engines",
    "skills.languages": "Languages",
    "skills.art": "Art & Animation",
    "skills.tools": "Tools",

    "experience.title": "Experience",
    "experience.item1.title": "LAGS Game Jam — Mi Esmeralda",
    "experience.item1.desc": "Lead 2D Artist. Characters, props and frame-by-frame animation.",
    "experience.item2.title": "Limited Capacity Game Jam — Asteroid Energy",
    "experience.item2.desc": "2D Artist + Programmer. Animator setup and player movement.",
    "experience.item3.title": "Wrong Genre Game Jam — What da fuq is wrong with my gun",
    "experience.item3.desc": "Full 2D pipeline plus character & weapon scripting.",
    "experience.item4.title": "Personal Projects",
    "experience.item4.desc": "Ongoing pixel-art studies, Unity prototypes and animation tests.",

    "about.title": "About Me",
    "about.p1": "I'm Alejandro Ahumada, a 2D artist and game developer obsessed with pixel art, animation and tight gameplay feel.",
    "about.p2": "I've been jumping between art and code since my first game jam — I love that switch from drawing a character to actually making it move on screen.",
    "about.p3": "Right now I'm looking for opportunities to collaborate on indie titles, contribute to small studios, or join teams that care about handcrafted visuals.",
    "about.interests": "Outside work: RPGs, metroidvanias, retro consoles and learning music for game soundtracks.",

    "contact.title": "Let's talk",
    "contact.subtitle": "Open to indie collaborations, freelance gigs and full-time roles.",
    "contact.cta": "Send me an email",

    "footer.text": "Built with HTML, CSS and a lot of pixels."
  },

  es: {
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    "hero.subtitle": "Artista 2D · Pixel Art · Desarrollador en Unity",
    "hero.tagline": "Construyo mundos con píxeles y código — de la animación de personajes a la programación de gameplay.",
    "hero.cta.projects": "Ver Proyectos",
    "hero.cta.cv": "Descargar CV",

    "stats.years.label": "Años haciendo juegos",
    "stats.jams.label": "Game jams entregadas",
    "stats.projects.label": "Proyectos creados",
    "stats.roles.label": "Roles (Arte + Código)",

    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Explora mis trabajos recientes. Usa las flechas, los thumbnails de abajo o las teclas ← →.",
    "projects.role": "Rol",
    "projects.links.play": "Jugar",
    "projects.links.download": "Descargar",
    "projects.links.trailer": "Trailer",
    "projects.links.source": "Código",
    "projects.prev": "Proyecto anterior",
    "projects.next": "Proyecto siguiente",

    "skills.title": "Habilidades y Herramientas",
    "skills.engines": "Motores",
    "skills.languages": "Lenguajes",
    "skills.art": "Arte y Animación",
    "skills.tools": "Herramientas",

    "experience.title": "Experiencia",
    "experience.item1.title": "LAGS Game Jam — Mi Esmeralda",
    "experience.item1.desc": "Artista 2D principal. Personajes, props y animación cuadro a cuadro.",
    "experience.item2.title": "Limited Capacity Game Jam — Asteroid Energy",
    "experience.item2.desc": "Artista 2D + Programador. Animator y movimiento del jugador.",
    "experience.item3.title": "Wrong Genre Game Jam — What da fuq is wrong with my gun",
    "experience.item3.desc": "Pipeline 2D completo más programación de personaje y armas.",
    "experience.item4.title": "Proyectos Personales",
    "experience.item4.desc": "Estudios de pixel art, prototipos en Unity y pruebas de animación en curso.",

    "about.title": "Sobre mí",
    "about.p1": "Soy Alejandro Ahumada, artista 2D y desarrollador de videojuegos obsesionado con el pixel art, la animación y el buen feel de gameplay.",
    "about.p2": "Desde mi primera game jam vivo saltando entre el arte y el código — me encanta ese momento en el que un personaje que dibujé empieza a moverse en pantalla.",
    "about.p3": "Actualmente busco oportunidades para colaborar en indies, aportar a estudios pequeños o unirme a equipos que valoren el arte hecho a mano.",
    "about.interests": "Fuera del trabajo: RPGs, metroidvanias, consolas retro y aprendiendo música para bandas sonoras de juegos.",

    "contact.title": "Hablemos",
    "contact.subtitle": "Abierto a colaboraciones indie, freelance y posiciones full-time.",
    "contact.cta": "Envíame un email",

    "footer.text": "Hecho con HTML, CSS y muchos píxeles."
  }
};

window.currentLang = "en";

window.setLang = function (lang) {
  if (!window.I18N[lang]) return;
  window.currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = window.I18N[lang][key];
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    const value = window.I18N[lang][key];
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    const value = window.I18N[lang][key];
    if (value != null) el.setAttribute("aria-label", value);
  });

  // Mark active language button.
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Let the carousel re-render its dynamic text.
  if (typeof window.renderProject === "function") {
    window.renderProject();
  }
};
