// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  const body = document.body;
  // Load saved theme or default to system
  const savedTheme = localStorage.getItem('theme') || 'system';
  body.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = body.getAttribute('data-theme');
    let next = current === 'light' ? 'dark' : current === 'dark' ? 'system' : 'light';
    body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
