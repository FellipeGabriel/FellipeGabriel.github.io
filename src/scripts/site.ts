import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis: Lenis | null = null;

const $ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => scope.querySelector<T & Element>(sel) as T | null;
const $$ = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) => Array.from(scope.querySelectorAll<T & Element>(sel)) as T[];

function initCopy() {
  $$<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    const group = btn.closest('[data-copy-group]') ?? btn.parentElement!;
    const status = $('[data-copy-status]', group);
    const text = $('[data-copy-text]', btn);
    const original = text?.textContent ?? '';
    btn.addEventListener('click', async () => {
      const value = btn.dataset.copy ?? '';
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.append(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      const label = btn.dataset.copiedLabel ?? '';
      btn.classList.add('is-copied');
      if (text) text.textContent = label;
      if (status) status.textContent = label;
      window.setTimeout(() => {
        btn.classList.remove('is-copied');
        if (text) text.textContent = original;
        if (status) status.textContent = '';
      }, 2200);
    });
  });
}

function initLangSwitch() {
  $$<HTMLAnchorElement>('[data-lang-switch]').forEach((a) =>
    a.addEventListener('click', () => {
      try {
        localStorage.setItem('lang', a.dataset.langSwitch ?? '');
      } catch {
      }
    }),
  );
}

function initMenu() {
  const dialog = $<HTMLDialogElement>('[data-menu]');
  const openBtn = $<HTMLButtonElement>('[data-menu-open]');
  if (!dialog || !openBtn) return;
  openBtn.addEventListener('click', () => {
    dialog.showModal();
    lenis?.stop();
    if (!reduceMotion) {
      gsap.fromTo(dialog, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.6, ease: 'expo.out' });
      gsap.from($$('.menu-list a', dialog), { yPercent: 60, opacity: 0, stagger: 0.05, duration: 0.7, ease: 'expo.out', delay: 0.1 });
    }
  });
  $('[data-menu-close]', dialog)?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    lenis?.start();
    openBtn.focus();
  });
  $$<HTMLAnchorElement>('[data-menu-link], .menu-name', dialog).forEach((a) =>
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') ?? '';
      const hash = href.includes('#') ? href.slice(href.indexOf('#')) : '';
      const samePage = href.startsWith('#') || (hash && href.split('#')[0] === location.pathname);
      dialog.close();
      if (samePage && hash) {
        e.preventDefault();
        scrollToHash(hash);
      }
    }),
  );
}

function scrollToHash(hash: string, immediate = false) {
  const target = hash && hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  if (!target) return;
  if (lenis) lenis.scrollTo(target, { immediate, offset: 0 });
  else target.scrollIntoView({ behavior: immediate || reduceMotion ? 'auto' : 'smooth' });
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}

function setNavField(field: string | undefined) {
  if (field) root.dataset.navField = field;
}

function initNav() {
  root.classList.add('nav-fixed');
  const onScroll = (y: number) => root.classList.toggle('nav-top', y < 8);
  onScroll(window.scrollY);
  if (lenis) lenis.on('scroll', (l: Lenis) => onScroll(l.scroll));
  else window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
}

function initNavTriggers() {
  const wallPinned = !reduceMotion && window.innerWidth >= 900;
  $$('[data-field]')
    .filter((el) => !wallPinned || !el.closest('[data-track]'))
    .forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 56px',
        end: 'bottom 56px',
        onToggle: (self) => self.isActive && setNavField(el.dataset.field),
      });
    });

  const links = $$<HTMLAnchorElement>('[data-nav-link]');
  links.forEach((a) => {
    const id = a.hash.slice(1);
    const section = id ? document.getElementById(id) : null;
    if (!section || document.body.dataset.page !== 'home') return;
    const spacer = section.parentElement;
    ScrollTrigger.create({
      trigger: spacer?.classList.contains('pin-spacer') ? spacer : section,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: (self) => {
        if (self.isActive) links.forEach((l) => l.setAttribute('aria-current', String(l === a)));
        else a.setAttribute('aria-current', 'false');
      },
    });
  });
}

function fitHeadings() {
  $$('[data-fit]').forEach((el) => {
    const parent = el.parentElement;
    if (!parent) return;
    const cs = getComputedStyle(parent);
    const available = parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const ratio = parseFloat(el.dataset.fit || '1') || 1;
    el.style.transition = 'none';
    el.style.fontSize = '100px';
    el.style.width = 'max-content';
    const natural = el.getBoundingClientRect().width;
    el.style.width = '';
    if (!natural) return;
    const size = Math.min((100 * available * ratio) / natural, window.innerWidth * 0.3);
    el.style.fontSize = `${Math.floor(size * 0.97)}px`;
  });
}

function watchFit() {
  let frame = 0;
  let lastW = window.innerWidth;
  window.addEventListener('resize', () => {
    if (window.innerWidth === lastW) return;
    lastW = window.innerWidth;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      fitHeadings();
      ScrollTrigger.refresh();
    });
  });
}

function initLenis() {
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95, anchors: { offset: 0 } });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function heroMotion() {
  const hero = $('.hero');
  if (!hero) return;
  const lines0 = $$('[data-hero-line="0"]', hero);
  const lines1 = $$('[data-hero-line="1"]', hero);
  const img = $('[data-hero-img]', hero);
  const inner = $('[data-hero-img-inner]', hero);

  const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
  if (img) intro.from(img, { clipPath: 'inset(0 0 100% 0)', duration: 1.4 }, 0);
  if (inner) intro.from(inner, { scale: 1.18, duration: 2 }, 0);
  intro.from([...lines0, ...lines1], { yPercent: 70, opacity: 0, duration: 1.2, stagger: 0.09 }, 0.15);
  intro.from($$('.hero-foot > *', hero), { y: 24, opacity: 0, duration: 1, stagger: 0.07 }, 0.45);

  const out = gsap.timeline({
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.5 },
  });
  out.to(lines0, { xPercent: -22, ease: 'none' }, 0);
  out.to(lines1, { xPercent: 16, ease: 'none' }, 0);
  if (inner) out.to(inner, { yPercent: 14, ease: 'none' }, 0);
}

function splitHeadings() {
  $$('[data-split]').forEach((el) => {
    const split = SplitText.create(el, { type: 'lines,chars', mask: 'lines', linesClass: 'split-line' });
    gsap.from(split.chars, {
      yPercent: 105,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.025,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
}

function projectsWall() {
  const section = $('[data-projects]');
  const track = section ? $('[data-track]', section) : null;
  if (!section || !track) return;

  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    const distance = () => track.scrollWidth - window.innerWidth;
    const wall = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${distance() * 1.4}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => gsap.set('[data-track-progress]', { scaleX: self.progress }),
      },
    });

    $$('[data-field]', track).forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        containerAnimation: wall,
        start: 'left 50%',
        end: 'right 50%',
        onToggle: (self) => self.isActive && setNavField(panel.dataset.field),
      });
    });

    $$('[data-panel]', track).forEach((panel) => {
      const title = $('.project-title', panel);
      const ghost = $('.project-ghost', panel);
      gsap.fromTo(
        [title, ghost].filter(Boolean),
        { x: () => window.innerWidth * 0.16 },
        {
          x: () => -window.innerWidth * 0.05,
          ease: 'none',
          scrollTrigger: { trigger: panel, containerAnimation: wall, start: 'left right', end: 'right left', scrub: true, invalidateOnRefresh: true },
        },
      );
      $$('[data-depth]', panel).forEach((shot) => {
        const depth = parseFloat(shot.dataset.depth ?? '0');
        gsap.fromTo(
          shot,
          { xPercent: depth * 100 },
          {
            xPercent: depth * -100,
            ease: 'none',
            scrollTrigger: { trigger: panel, containerAnimation: wall, start: 'left right', end: 'right left', scrub: true },
          },
        );
      });
    });

    return () => gsap.set('[data-track-progress]', { scaleX: 0 });
  });

  mm.add('(max-width: 899px)', () => {
    $$('[data-depth]', track).forEach((shot) => {
      const depth = parseFloat(shot.dataset.depth ?? '0');
      gsap.fromTo(shot, { yPercent: depth * 60 }, {
        yPercent: depth * -60,
        ease: 'none',
        scrollTrigger: { trigger: shot.closest('[data-panel]'), start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });
  });
}

function contactMotion() {
  const img = $('[data-contact-img] img');
  if (!img) return;
  gsap.fromTo(img, { yPercent: -8, scale: 1.12 }, {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: { trigger: '[data-contact-img]', start: 'top bottom', end: 'bottom top', scrub: true },
  });
}

function caseMotion() {
  const plate = $('[data-case-plate] img');
  if (plate) {
    gsap.fromTo(plate, { scale: 1 }, {
      scale: 1.06,
      ease: 'none',
      scrollTrigger: { trigger: '[data-case-plate]', start: 'top top', end: 'bottom top', scrub: true },
    });
  }
  $$('.case-shot .plate').forEach((p) => {
    gsap.from(p, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: { trigger: p, start: 'top 85%', once: true },
    });
  });
}

initCopy();
initLangSwitch();

if (reduceMotion) {
  initNav();
  initMenu();
  document.fonts.ready.then(() => {
    fitHeadings();
    watchFit();
    initNavTriggers();
    root.classList.add('motion-ready');
    ScrollTrigger.refresh();
  });
} else {
  initLenis();
  initNav();
  initMenu();
  document.fonts.ready.then(() => {
    fitHeadings();
    watchFit();
    heroMotion();
    splitHeadings();
    projectsWall();
    contactMotion();
    caseMotion();
    initNavTriggers();
    root.classList.add('motion-ready');
    ScrollTrigger.refresh();
    if (location.hash) requestAnimationFrame(() => scrollToHash(location.hash, true));
  });
}
