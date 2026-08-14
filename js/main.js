/**
 * IONITY Main JavaScript
 * Handles core UI functionality: scroll reveals, header state, mobile menu, and RTL switching.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Reveals via IntersectionObserver
  const setupReveals = () => {
    const revealElements = document.querySelectorAll('.reveal');
    
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      revealElements.forEach(el => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: stop observing once revealed
          // observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
  };

  // 2. Header Scroll State
  const setupHeader = () => {
    const header = document.querySelector('.header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init
  };

  // 3. Mobile Menu Toggle
  const setupMobileMenu = () => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      
      // We can use a simple class toggle for mobile menu visibility
      navLinks.classList.toggle('active-mobile');
    });
  };

  // 4. RTL / LTR Language Switcher
  const setupLangSwitcher = () => {
    const switchers = document.querySelectorAll('.lang-switcher');
    
    switchers.forEach(btn => {
      btn.addEventListener('click', () => {
        const html = document.documentElement;
        const currentDir = html.getAttribute('dir');
        
        if (currentDir === 'rtl') {
          html.setAttribute('dir', 'ltr');
          html.setAttribute('lang', 'en');
          btn.textContent = 'AR';
        } else {
          html.setAttribute('dir', 'rtl');
          html.setAttribute('lang', 'ar');
          btn.textContent = 'EN';
        }
        
        // Optional: save preference to localStorage
        localStorage.setItem('ionity-lang', html.getAttribute('dir'));
      });
    });

    // Check for saved preference
    const savedDir = localStorage.getItem('ionity-lang');
    if (savedDir) {
      document.documentElement.setAttribute('dir', savedDir);
      document.documentElement.setAttribute('lang', savedDir === 'rtl' ? 'ar' : 'en');
      switchers.forEach(btn => {
        btn.textContent = savedDir === 'rtl' ? 'EN' : 'AR';
      });
    }
  };

  // Initialize all modules
  setupReveals();
  setupHeader();
  setupMobileMenu();
  setupLangSwitcher();

  // Initialize Light Rays if container exists and script is loaded
  if (typeof LightRayBackground !== 'undefined') {
    new LightRayBackground('hero-light-rays', {
      rays: 4,
      minOpacity: 0.05,
      maxOpacity: 0.2
    });
  }
});
