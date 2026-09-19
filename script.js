const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const brandMenu = document.querySelector('.brand-menu');
const brand = document.querySelector('.brand');

brand.addEventListener('click', (event) => {
  event.preventDefault();
  const isOpen = brandMenu.classList.toggle('open');
  brand.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', (event) => {
  if (!brandMenu.contains(event.target)) {
    brandMenu.classList.remove('open');
    brand.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    brandMenu.classList.remove('open');
    brand.setAttribute('aria-expanded', 'false');
  }
});

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.brand-actions a').forEach((link) => {
  link.addEventListener('click', () => {
    brandMenu.classList.remove('open');
    brand.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const ambientField = document.querySelector('.ambient-field');

if (ambientField) {
  window.addEventListener('pointermove', (event) => {
    ambientField.style.setProperty('--ambient-x', `${event.clientX}px`);
    ambientField.style.setProperty('--ambient-y', `${event.clientY}px`);
  }, { passive: true });
}
