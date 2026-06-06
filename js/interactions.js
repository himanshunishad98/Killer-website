/* ════════════════════════════════════════
   INTERACTIONS & EFFECTS MODULE
   ════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. IntersectionObserver Scroll Reveal
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // For subpages, we unobserve once revealed to save performance
          if (!entry.target.classList.contains('continuous-reveal')) {
            revealObserver.unobserve(entry.target);
          }
        }
      });
    }, { 
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  }

  // 2. Sticky Mobile Bar Visibility
  const stickyBar = document.querySelector('.sticky-bar');
  if (stickyBar) {
    const toggleStickyBar = () => {
      stickyBar.style.display = window.innerWidth > 640 ? 'none' : 'flex';
    };
    toggleStickyBar();
    window.addEventListener('resize', toggleStickyBar);
  }

  // 3. Header Shadow scroll effect
  const navWrap = document.querySelector('.nav-wrap') || document.querySelector('.nav');
  if (navWrap) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navWrap.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
      } else {
        navWrap.style.boxShadow = navWrap.classList.contains('nav') 
          ? '0 1px 8px rgba(30, 64, 175, 0.06)' 
          : '0 1px 3px rgba(0, 0, 0, 0.04)';
      }
    });
  }
});
