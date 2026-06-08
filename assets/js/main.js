/* Year */
document.getElementById('year').textContent = new Date().getFullYear();

/* Theme with safe localStorage persistence */
const root = document.documentElement;
const themeBtn = document.getElementById('theme');
try { const saved = localStorage.getItem('theme'); if (saved) root.setAttribute('data-theme', saved); } catch(e) {}
themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch(e) {}
});

/* Nav shadow on scroll + progress bar */
const header = document.getElementById('header');
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (window.scrollY / h * 100) + '%';
});

/* Mobile menu */
const mm = document.getElementById('mobileMenu');
document.getElementById('menuOpen').addEventListener('click', () => mm.classList.add('open'));
document.getElementById('menuClose').addEventListener('click', () => mm.classList.remove('open'));
document.querySelectorAll('.mm-link').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')));

/* Back to top */
document.getElementById('toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* Typewriter effect */
const roles = ['Full-Stack Developer', 'Laravel & Vue Specialist', 'Infrastructure Administrator', 'DevOps & Systems'];
const roleEl = document.getElementById('role');
let ri = 0, ci = 0, deleting = false;
function type() {
  const word = roles[ri];
  roleEl.innerHTML = word.substring(0, ci) + '<span class="cursor"></span>';
  if (!deleting && ci < word.length) { ci++; setTimeout(type, 70); }
  else if (deleting && ci > 0) { ci--; setTimeout(type, 35); }
  else {
    if (!deleting) { deleting = true; setTimeout(type, 1700); }
    else { deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 350); }
  }
}
type();

/* Reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Animated counters */
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(eased * target);
      el.textContent = val.toLocaleString('en') + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString('en') + suffix;
    }
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countIO.observe(el));

/* Project filters */
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('#grid .card');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    cards.forEach(c => {
      const show = (f === 'all' || c.dataset.cat === f);
      c.classList.toggle('hide', !show);
    });
  });
});
