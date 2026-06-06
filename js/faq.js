/* ════════════════════════════════════════
   FAQ ACCORDION MODULE
   ════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Landing Page FAQ Style (.faq-btn)
  const faqBtns = document.querySelectorAll('.faq-btn');
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;

      const isOpen = item.classList.contains('open');

      // Close all open FAQs
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        const openBtn = openItem.querySelector('.faq-btn');
        if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
      });

      // Open the clicked one if it was closed
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 2. Subpages FAQ Style (.faq-question)
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const targetId = btn.getAttribute('aria-controls');
      const targetEl = targetId ? document.getElementById(targetId) : btn.nextElementSibling;

      // Close all other FAQs
      faqQuestions.forEach(q => {
        if (q !== btn) {
          q.setAttribute('aria-expanded', 'false');
          const otherTargetId = q.getAttribute('aria-controls');
          const otherTargetEl = otherTargetId ? document.getElementById(otherTargetId) : q.nextElementSibling;
          
          if (otherTargetEl) {
            otherTargetEl.classList.remove('open');
            if (otherTargetEl.style.maxHeight !== undefined) {
              otherTargetEl.style.maxHeight = null;
            }
          }
        }
      });

      // Toggle clicked FAQ
      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (targetEl) {
          targetEl.classList.remove('open');
          if (targetEl.style.maxHeight !== undefined) {
            targetEl.style.maxHeight = null;
          }
        }
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (targetEl) {
          targetEl.classList.add('open');
          if (targetEl.classList.contains('faq-answer')) {
            // Apply maxHeight transition if it matches article faq styling
            targetEl.style.maxHeight = targetEl.scrollHeight + "px";
          }
        }
      }
    });
  });
});
