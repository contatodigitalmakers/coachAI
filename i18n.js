/* ══════════════════════════════════════════════════════════════
   COACH AI — i18n
   Detecção: localStorage → navigator.languages → en
   ══════════════════════════════════════════════════════════════ */

(() => {
const STORAGE_KEY = "coachai.lang";
const EVENT = "coachai:localechange";

const I18N = {
  defaultLocale: "en",
  locales: {
    en:      { code: "en",    htmlLang: "en",    ogLocale: "en_US", label: "EN", name: "English" },
    fr:      { code: "fr",    htmlLang: "fr",    ogLocale: "fr_FR", label: "FR", name: "Français" },
    es:      { code: "es",    htmlLang: "es",    ogLocale: "es_ES", label: "ES", name: "Español" },
    de:      { code: "de",    htmlLang: "de",    ogLocale: "de_DE", label: "DE", name: "Deutsch" },
    it:      { code: "it",    htmlLang: "it",    ogLocale: "it_IT", label: "IT", name: "Italiano" },
    "pt-BR": { code: "pt-BR", htmlLang: "pt-BR", ogLocale: "pt_BR", label: "PT", name: "Português" },
  },
  strings: {
    en: {
      "meta.title": "Coach AI — Intelligence for Coachs",
      "meta.description": "Artificial intelligence for sports coaches. Create personalized training sessions for your sport with Coach AI.",
      "nav.home": "Coach AI — home",
      "nav.lang": "Language",
      "hero.title": "TRAIN<br>SMARTER<span class=\"g\">.</span>",
      "hero.sub": "Create personalized workouts with artificial intelligence and bring more strategy to your training.",
      "hero.cta": "ACCESS COACH AI",
      "products.title": "CHOOSE YOUR SPORT",
      "products.cta": "ACCESS",
      "products.access": "Access Coach AI",
      "products.football.desc": "Plan your sessions with AI.",
      "products.tennis.desc": "Personalized training with AI.",
      "products.luta.name": "Combat",
      "products.luta.desc": "Strategy and planning for every session.",
      "products.volleyball.desc": "Build intelligent training sessions.",
      "products.basketball.desc": "More strategy in every workout.",
    },
    fr: {
      "meta.title": "Coach AI — Intelligence for Coachs",
      "meta.description": "Intelligence artificielle pour les entraîneurs sportifs. Créez des séances personnalisées pour votre sport avec Coach AI.",
      "nav.home": "Coach AI — accueil",
      "nav.lang": "Langue",
      "hero.title": "ENTRAÎNEZ-VOUS<br>PLUS INTELLIGEMMENT<span class=\"g\">.</span>",
      "hero.sub": "Créez des entraînements personnalisés avec l'intelligence artificielle et apportez plus de stratégie à vos séances.",
      "hero.cta": "ACCÉDER À COACH AI",
      "products.title": "CHOISISSEZ VOTRE SPORT",
      "products.cta": "ACCÉDER",
      "products.access": "Accéder à Coach AI",
      "products.football.desc": "Planifiez vos séances avec l'IA.",
      "products.tennis.desc": "Entraînements personnalisés avec l'IA.",
      "products.luta.name": "Combat",
      "products.luta.desc": "Stratégie et planification pour chaque séance.",
      "products.volleyball.desc": "Créez des séances d'entraînement intelligentes.",
      "products.basketball.desc": "Plus de stratégie à chaque entraînement.",
    },
    es: {
      "meta.title": "Coach AI — Intelligence for Coachs",
      "meta.description": "Inteligencia artificial para entrenadores deportivos. Crea entrenamientos personalizados para tu deporte con Coach AI.",
      "nav.home": "Coach AI — inicio",
      "nav.lang": "Idioma",
      "hero.title": "ENTRENA DE FORMA<br>MÁS INTELIGENTE<span class=\"g\">.</span>",
      "hero.sub": "Crea entrenamientos personalizados con inteligencia artificial y lleva más estrategia a tu preparación.",
      "hero.cta": "ACCEDER A COACH AI",
      "products.title": "ELIGE TU DEPORTE",
      "products.cta": "ACCEDER",
      "products.access": "Acceder a Coach AI",
      "products.football.desc": "Planifica tus sesiones con IA.",
      "products.tennis.desc": "Entrenamientos personalizados con IA.",
      "products.luta.name": "Combate",
      "products.luta.desc": "Estrategia y planificación para cada sesión.",
      "products.volleyball.desc": "Crea sesiones de entrenamiento inteligentes.",
      "products.basketball.desc": "Más estrategia en cada entrenamiento.",
    },
    de: {
      "meta.title": "Coach AI — Intelligence for Coachs",
      "meta.description": "Künstliche Intelligenz für Sporttrainer. Erstelle personalisierte Trainingseinheiten für deine Sportart mit Coach AI.",
      "nav.home": "Coach AI — Startseite",
      "nav.lang": "Sprache",
      "hero.title": "TRAINIERE<br>INTELLIGENTER<span class=\"g\">.</span>",
      "hero.sub": "Erstelle personalisierte Trainings mit künstlicher Intelligenz und bringe mehr Strategie in deine Einheiten.",
      "hero.cta": "COACH AI ÖFFNEN",
      "products.title": "WÄHLE DEINE SPORTART",
      "products.cta": "ÖFFNEN",
      "products.access": "Coach AI öffnen",
      "products.football.desc": "Plane deine Einheiten mit KI.",
      "products.tennis.desc": "Persönliches Training mit KI.",
      "products.luta.name": "Kampf",
      "products.luta.desc": "Strategie und Planung für jede Einheit.",
      "products.volleyball.desc": "Erstelle intelligente Trainingseinheiten.",
      "products.basketball.desc": "Mehr Strategie in jedem Training.",
    },
    it: {
      "meta.title": "Coach AI — Intelligence for Coachs",
      "meta.description": "Intelligenza artificiale per gli allenatori sportivi. Crea sessioni personalizzate per il tuo sport con Coach AI.",
      "nav.home": "Coach AI — home",
      "nav.lang": "Lingua",
      "hero.title": "ALLENA IN MODO<br>PIÙ INTELLIGENTE<span class=\"g\">.</span>",
      "hero.sub": "Crea allenamenti personalizzati con l'intelligenza artificiale e porta più strategia nella tua preparazione.",
      "hero.cta": "ACCEDI A COACH AI",
      "products.title": "SCEGLI IL TUO SPORT",
      "products.cta": "ACCEDI",
      "products.access": "Accedi a Coach AI",
      "products.football.desc": "Pianifica le sessioni con l'IA.",
      "products.tennis.desc": "Allenamenti personalizzati con l'IA.",
      "products.luta.name": "Combattimento",
      "products.luta.desc": "Strategia e pianificazione per ogni sessione.",
      "products.volleyball.desc": "Crea sessioni di allenamento intelligenti.",
      "products.basketball.desc": "Più strategia in ogni allenamento.",
    },
    "pt-BR": {
      "meta.title": "Coach AI — Intelligence for Coachs",
      "meta.description": "Inteligência artificial para treinadores esportivos. Crie treinos personalizados para seu esporte com o Coach AI.",
      "nav.home": "Coach AI — início",
      "nav.lang": "Idioma",
      "hero.title": "TREINE DE FORMA<br>MAIS INTELIGENTE<span class=\"g\">.</span>",
      "hero.sub": "Crie treinos personalizados com inteligência artificial e leve mais estratégia para o seu treinamento.",
      "hero.cta": "ACESSAR COACH AI",
      "products.title": "ESCOLHA SUA MODALIDADE",
      "products.cta": "ACESSAR",
      "products.access": "Acessar Coach AI",
      "products.football.desc": "Planeje seus treinos com IA.",
      "products.tennis.desc": "Treinamentos personalizados com IA.",
      "products.luta.name": "Luta",
      "products.luta.desc": "Estratégia e planejamento para seus treinos.",
      "products.volleyball.desc": "Crie sessões de treino inteligentes.",
      "products.basketball.desc": "Mais estratégia para cada treinamento.",
    },
  },
};

const ALIASES = {
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  fr: "fr",
  "fr-fr": "fr",
  "fr-ca": "fr",
  es: "es",
  "es-es": "es",
  "es-mx": "es",
  de: "de",
  "de-de": "de",
  "de-at": "de",
  it: "it",
  "it-it": "it",
  pt: "pt-BR",
  "pt-br": "pt-BR",
  "pt-pt": "pt-BR",
};

function normalize(code) {
  if (!code) return null;
  const raw = String(code).trim();
  if (I18N.locales[raw]) return raw;
  const lower = raw.toLowerCase();
  if (ALIASES[lower]) return ALIASES[lower];
  const base = lower.split("-")[0];
  return ALIASES[base] || null;
}

function readStored() {
  try {
    return normalize(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function persist(code) {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* private mode / blocked storage */
  }
}

function detectBrowser() {
  const list = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];
  for (const lang of list) {
    const match = normalize(lang);
    if (match) return match;
  }
  return I18N.defaultLocale;
}

function resolve() {
  return readStored() || detectBrowser() || I18N.defaultLocale;
}

let currentLocale = resolve();

function t(key) {
  const pack = I18N.strings[currentLocale] || I18N.strings[I18N.defaultLocale];
  return pack[key] ?? I18N.strings[I18N.defaultLocale][key] ?? key;
}

function applyMeta() {
  const meta = I18N.locales[currentLocale];
  document.documentElement.lang = meta.htmlLang;
  document.title = t("meta.title");

  const desc = t("meta.description");
  const description = document.querySelector('meta[name="description"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (description) description.setAttribute("content", desc);
  if (ogDesc) ogDesc.setAttribute("content", desc);
  if (twDesc) twDesc.setAttribute("content", desc);
  if (ogLocale) ogLocale.setAttribute("content", meta.ogLocale);
}

function applyDom() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
}

function syncSwitcher() {
  const meta = I18N.locales[currentLocale];
  const trigger = document.getElementById("lang-trigger");
  const label = document.getElementById("lang-label");
  if (label) label.textContent = meta.label;
  if (trigger) trigger.setAttribute("aria-label", `${t("nav.lang")}: ${meta.name}`);

  document.querySelectorAll("[data-locale]").forEach((btn) => {
    const active = btn.dataset.locale === currentLocale;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-current", active ? "true" : "false");
  });
}

function apply() {
  applyMeta();
  applyDom();
  syncSwitcher();
}

function setLocale(code, { persistChoice = true } = {}) {
  const next = normalize(code) || I18N.defaultLocale;
  currentLocale = next;
  if (persistChoice) persist(next);
  apply();
  document.dispatchEvent(new CustomEvent(EVENT, { detail: { locale: next } }));
}

function getLocale() {
  return currentLocale;
}

function getLocales() {
  return Object.values(I18N.locales);
}

function closeSwitcher() {
  const root = document.getElementById("lang-switcher");
  const trigger = document.getElementById("lang-trigger");
  if (!root || !trigger) return;
  root.classList.remove("is-open");
  trigger.setAttribute("aria-expanded", "false");
}

function toggleSwitcher() {
  const root = document.getElementById("lang-switcher");
  const trigger = document.getElementById("lang-trigger");
  if (!root || !trigger) return;
  const open = root.classList.toggle("is-open");
  trigger.setAttribute("aria-expanded", String(open));
}

function bindSwitcher() {
  const root = document.getElementById("lang-switcher");
  const trigger = document.getElementById("lang-trigger");
  if (!root || !trigger) return;

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleSwitcher();
  });

  root.querySelectorAll("[data-locale]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLocale(btn.dataset.locale);
      closeSwitcher();
    });
  });

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) closeSwitcher();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSwitcher();
  });
}

window.CoachI18n = {
  resolve,
  t,
  setLocale,
  getLocale,
  getLocales,
  EVENT,
};

document.addEventListener("DOMContentLoaded", () => {
  currentLocale = resolve();
  persist(currentLocale);
  apply();
  bindSwitcher();
});
})();
