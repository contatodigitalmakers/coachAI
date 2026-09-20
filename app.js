/* ══════════════════════════════════════════════════════════════
   COACH AI — Hub de produtos
   Os cards são renderizados a partir do array `products`.
   Para adicionar uma nova modalidade, basta incluir um objeto.
   ══════════════════════════════════════════════════════════════ */

/* ── Ícones minimalistas por modalidade (stroke 1.6, viewBox 24) ── */
const ICONS = {
  football: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 8.2l3.6 2.6-1.4 4.3H9.8l-1.4-4.3L12 8.2z"/><path d="M12 3.5v4.7M20.3 9.5l-4.5 1.3M17.1 19l-2.9-3.9M6.9 19l2.9-3.9M3.7 9.5l4.5 1.3"/></svg>`,

  tennis: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M5.2 5.2c4 3.4 4 10.2 0 13.6M18.8 5.2c-4 3.4-4 10.2 0 13.6"/></svg>`,

  luta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.7 3.5h6.6l5.2 5.2v6.6l-5.2 5.2H8.7l-5.2-5.2V8.7z"/></svg>`,

  volleyball: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5c3.4 2.9 3.4 14.1 0 17M3.8 8.8c4.7 1.9 11.7 1.9 16.4 0M5.1 17.6c4.1-2.3 9.7-2.3 13.8 0"/></svg>`,

  basketball: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17M3.5 12h17M6 4.8c2.6 3.8 2.6 10.6 0 14.4M18 4.8c-2.6 3.8-2.6 10.6 0 14.4"/></svg>`,
};

/* ── Configuração dos produtos ──
   Para trocar os links reais, edite apenas o campo `url`.
   Textos vêm de CoachI18n.t() — sportKey resolve o nome traduzido. */
const products = [
  {
    sport: "Football",
    sportKey: null,
    descKey: "products.football.desc",
    accentColor: "#00FF87",
    icon: "football",
    url: "/football",
  },
  {
    sport: "Tennis",
    sportKey: null,
    descKey: "products.tennis.desc",
    accentColor: "#4D9FFF",
    icon: "tennis",
    url: "/tennis",
  },
  {
    sport: "Combat",
    sportKey: "products.luta.name",
    descKey: "products.luta.desc",
    accentColor: "#FF5C4D",
    icon: "luta",
    url: "/luta",
  },
  {
    sport: "Volleyball",
    sportKey: null,
    descKey: "products.volleyball.desc",
    accentColor: "#9E7BFF",
    icon: "volleyball",
    url: "/volleyball",
  },
  {
    sport: "Basketball",
    sportKey: null,
    descKey: "products.basketball.desc",
    accentColor: "#FF8A2B",
    icon: "basketball",
    url: "/basketball",
  },
];

const ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6"/></svg>`;

/* ── Utilitário: hex → rgba ── */
function hexToRgba(hex, alpha) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

function translate(key) {
  return window.CoachI18n ? window.CoachI18n.t(key) : key;
}

/* ── Componente: ProductCard ── */
function ProductCard(product, index) {
  const { sport, sportKey, descKey, accentColor, icon, url } = product;
  const name = sportKey ? translate(sportKey) : sport;
  const description = translate(descKey);
  const cta = translate("products.cta");
  const access = translate("products.access");

  return `
    <a class="card reveal"
       href="${url}"
       style="--accent:${accentColor}; --accent-soft:${hexToRgba(accentColor, 0.1)}; --i:${index}"
       aria-label="${access} ${name}">

      <span class="card-water" aria-hidden="true">${ICONS[icon]}</span>

      <span class="card-top">
        <svg class="card-mark" aria-hidden="true"><use href="#cai-symbol"/></svg>
        <span class="card-icon" aria-hidden="true">${ICONS[icon]}</span>
      </span>

      <span class="card-info">
        <span class="card-brand">COACH AI</span>
        <span class="card-sport">${name}</span>
        <span class="card-desc">${description}</span>
      </span>

      <span class="card-cta">${cta} ${ARROW}</span>
    </a>`;
}

/* ── Render ── */
const cardsContainer = document.getElementById("cards");
let observer = null;

function observeCards() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

let cardsReady = false;

function renderCards() {
  cardsContainer.innerHTML = products.map(ProductCard).join("");
  if (cardsReady) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    return;
  }
  observeCards();
  cardsReady = true;
}

renderCards();
document.addEventListener("coachai:localechange", renderCards);
