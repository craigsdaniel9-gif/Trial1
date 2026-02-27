const greetings = ["Hola.", "Ciao.", "BonJour.", "नमस्ते.", "Hello."];
const word = document.getElementById("hello");

greetings.forEach((greets, index) => {
  setTimeout(() => {
    word.textContent = greets;
  }, index * 750); 
});

document.addEventListener('DOMContentLoaded', () => {
  const socialButtons = document.querySelectorAll('.sites button, .contact button');

  socialButtons.forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });
});





// theme-toggle.js
(function () {
  const KEY = 'site-theme'; // 'dark' or 'light'
  const btn = document.getElementById('theme-select');
  if (!btn) return;

  // helper: apply theme class on <html>
  function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === 'dark') html.classList.add('dark');
    else html.classList.remove('dark');

    // update button visual and accessibility
    if (theme === 'dark') {
      btn.textContent = '🌙'; // moon
      btn.title = 'Switch to light theme';
      btn.setAttribute('aria-label', 'Switch to light theme');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.textContent = '☀️'; // sun
      btn.title = 'Switch to dark theme';
      btn.setAttribute('aria-label', 'Switch to dark theme');
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  // determine initial theme:
  // 1) localStorage
  // 2) system preference
  // 3) default to light
  const stored = localStorage.getItem(KEY);
  let current;
  if (stored === 'dark' || stored === 'light') {
    current = stored;
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    current = prefersDark ? 'dark' : 'light';
  }
  applyTheme(current);

  // toggle on click
  btn.addEventListener('click', function () {
    current = (current === 'dark') ? 'light' : 'dark';
    localStorage.setItem(KEY, current);
    applyTheme(current);
  });

  // optional: react to system changes if no explicit stored pref
  if (!stored && window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener?.('change', (e) => {
      current = e.matches ? 'dark' : 'light';
      applyTheme(current);
    });
  }
})();