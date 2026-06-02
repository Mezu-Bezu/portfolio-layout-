import './styles.css';

const body = document.body;
const loader = document.querySelector('#loader');
const transitionLayer = document.querySelector('#transitionLayer');
const siteHeader = document.querySelector('#siteHeader');
const menuToggle = document.querySelector('#menuToggle');
const mobileMenu = document.querySelector('#mobileMenu');
const casesSection = document.querySelector('#cases');
const carouselShell = document.querySelector('.carousel-shell');
const caseCarousel = document.querySelector('#caseCarousel');
const caseCards = Array.from(document.querySelectorAll('[data-case-panel]'));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

body.classList.add('loading');

let lastScrollY = window.scrollY;

window.addEventListener('load', () => {
  window.setTimeout(() => {
    loader?.classList.add('is-hidden');
    body.classList.remove('loading');
    setCaseScrollSpace();
    updateHorizontalCases();
  }, 450);
});

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const shouldHide = currentScrollY > lastScrollY && currentScrollY > 120 && !body.classList.contains('menu-open');

  siteHeader?.classList.toggle('is-hidden', shouldHide);
  lastScrollY = currentScrollY;
  updateHorizontalCases();
});

window.addEventListener('resize', () => {
  setCaseScrollSpace();
  updateHorizontalCases();
});

const closeMenu = () => {
  menuToggle?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  mobileMenu?.classList.remove('is-open');
  mobileMenu?.setAttribute('aria-hidden', 'true');
  body.classList.remove('menu-open');
};

const openMenu = () => {
  menuToggle?.classList.add('is-open');
  menuToggle?.setAttribute('aria-expanded', 'true');
  mobileMenu?.classList.add('is-open');
  mobileMenu?.setAttribute('aria-hidden', 'false');
  body.classList.add('menu-open');
};

menuToggle?.addEventListener('click', () => {
  if (body.classList.contains('menu-open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

const runTransition = (target) => {
  if (!transitionLayer || !target) return;

  transitionLayer.classList.remove('is-active');
  window.requestAnimationFrame(() => {
    transitionLayer.classList.add('is-active');
  });

  window.setTimeout(() => {
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }, 330);

  window.setTimeout(() => {
    transitionLayer.classList.remove('is-active');
  }, 1000);
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    const target = id ? document.querySelector(id) : null;

    if (!target) return;

    event.preventDefault();
    closeMenu();
    runTransition(target);
  });
});

const getCaseMaxTranslate = () => {
  if (!caseCarousel || !carouselShell) return 0;

  return Math.max(0, caseCarousel.scrollWidth - carouselShell.clientWidth);
};

function setCaseScrollSpace() {
  if (!casesSection) return;

  const maxTranslate = getCaseMaxTranslate();
  casesSection.style.height = `${window.innerHeight + maxTranslate}px`;
}

function updateHorizontalCases() {
  if (!casesSection || !carouselShell || !caseCarousel) return;

  const sectionTop = casesSection.getBoundingClientRect().top + window.scrollY;
  const scrollableDistance = Math.max(1, casesSection.offsetHeight - window.innerHeight);
  const rawProgress = (window.scrollY - sectionTop) / scrollableDistance;
  const progress = Math.max(0, Math.min(rawProgress, 1));
  const translateX = getCaseMaxTranslate() * progress;

  caseCarousel.style.transform = `translate3d(${-translateX}px, 0, 0)`;
  setActiveCaseFromPosition(translateX);
}

function setActiveCaseFromPosition(translateX) {
  if (!carouselShell || !caseCards.length) return;

  const viewportCenter = translateX + carouselShell.clientWidth / 2;
  const activeIndex = caseCards.reduce((nearestIndex, card, index) => {
    const nearestCard = caseCards[nearestIndex];
    const nearestDistance = Math.abs(nearestCard.offsetLeft + nearestCard.offsetWidth / 2 - viewportCenter);
    const cardDistance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - viewportCenter);

    return cardDistance < nearestDistance ? index : nearestIndex;
  }, 0);

  caseCards.forEach((card, index) => card.classList.toggle('is-active', index === activeIndex));
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
