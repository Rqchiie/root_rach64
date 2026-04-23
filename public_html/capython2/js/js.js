// ── Sticky nav (always visible) ──
const header = document.querySelector('.site-header');

// ── Active page highlight ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-header nav a').forEach(link => {
const linkPage = link.getAttribute('href').split('/').pop();
if (linkPage === currentPage) {
      link.classList.add('active');
}
});