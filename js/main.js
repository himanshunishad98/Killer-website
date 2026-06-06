/* ════════════════════════════════════════
   SKILLNEST BOOTSTRAP ENTRY POINT
   ════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  console.log('SkillNest App Initialized successfully.');
  
  // Custom focus ring support for mouse users (hides focus outline unless tabbing)
  document.body.addEventListener('mousedown', () => {
    document.body.classList.add('using-mouse');
  });
  
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.remove('using-mouse');
    }
  });
});
