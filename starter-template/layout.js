/* =============================================
   LAYOUT.JS
   Handles: sidebar collapse, theme toggle,
   mobile menu, active nav items
   ============================================= */

/* ── DOM ── */
const sidebar      = document.getElementById('sidebar');
const collapseBtn  = document.getElementById('collapseBtn');
const collapseIcon = document.getElementById('collapseIcon');
const themeBtn     = document.getElementById('themeBtn');
const themeIcon    = document.getElementById('themeIcon');
const mobileMenuBtn= document.getElementById('mobileMenuBtn');
const overlay      = document.getElementById('overlay');
const pageTitle    = document.getElementById('pageTitle');
const html         = document.documentElement;

/* ── STATE ── */
const state = {
  collapsed: false,
  theme: localStorage.getItem('theme') || 'dark',
  mobileOpen: false,
};

/* ── INIT ── */
function init() {
  applyTheme(state.theme);
  const savedCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  if (savedCollapsed) setCollapsed(true);
}

/* ── SIDEBAR COLLAPSE ── */
function setCollapsed(val) {
  state.collapsed = val;
  sidebar.classList.toggle('collapsed', val);
  collapseIcon.className = val ? 'bx bx-chevrons-right' : 'bx bx-chevrons-left';
  localStorage.setItem('sidebar-collapsed', val);
}

collapseBtn.addEventListener('click', () => {
  setCollapsed(!state.collapsed);
});

/* ── THEME ── */
function applyTheme(theme) {
  state.theme = theme;
  html.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon';
  localStorage.setItem('theme', theme);
}

themeBtn.addEventListener('click', () => {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
});

/* ── MOBILE MENU ── */
function setMobileMenu(open) {
  state.mobileOpen = open;
  sidebar.classList.toggle('mobile-open', open);
  overlay.classList.toggle('hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

mobileMenuBtn.addEventListener('click', () => setMobileMenu(true));
overlay.addEventListener('click', () => setMobileMenu(false));

/* ── ACTIVE NAV ── */
document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    pageTitle.textContent = link.dataset.label;
    if (state.mobileOpen) setMobileMenu(false);
  });
});

/* ── RUN ── */
init();
