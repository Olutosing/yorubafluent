/* ============================================================
   YorubaFluent — Blog Shared UI Components
   Edit nav and footer content here once.
   Changes apply instantly to every blog page.
   ============================================================ */

/* ── NAV ──────────────────────────────────────────────────── */
const NAV_HTML = `
  <nav class="nav">
    <a href="https://www.yorubafluent.com/" class="nav-logo">YorubaFluent</a>
    <div class="pill-nav">
      <a href="https://www.yorubafluent.com/" class="pill pill-home">Home</a>
      <a href="https://olutosing.github.io/yorubafluent/blog/" class="pill pill-blog">Blog</a>
      <a href="https://www.yorubafluent.com/plans-pricing" class="pill pill-about">About</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="https://www.yorubafluent.com/" class="pill pill-home">Home</a>
    <a href="https://olutosing.github.io/yorubafluent/blog/" class="pill pill-blog">Blog</a>
    <a href="https://www.yorubafluent.com/plans-pricing" class="pill pill-about">About</a>
  </div>`;

/* ── FOOTER ────────────────────────────────────────────────
   To update links, social handles or copyright:
   edit here only — all pages update automatically.
   ──────────────────────────────────────────────────────── */
const FOOTER_HTML = `
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-wordmark-group">
        <div class="footer-eyebrow">
          <div class="eyebrow-tick-sm"></div>
          By Olutosin Akinwumi
        </div>
        <div class="footer-wordmark">Yoruba<br>Fluent</div>
      </div>
      <nav class="footer-nav">
        <a href="https://www.yorubafluent.com/">Home</a>
        <a href="https://olutosing.github.io/yorubafluent/blog/">Blog</a>
        <a href="https://www.yorubafluent.com/plans-pricing">Plans &amp; Pricing</a>
        <a href="https://www.yorubafluent.com/members-area/my/my-bookings">Enter School</a>
        <a href="https://www.yorubafluent.com/vocabularies">Vocabularies</a>
      </nav>
    </div>
    <div class="footer-social">
      <a href="https://instagram.com/" target="_blank" rel="noopener">Instagram</a>
      <a href="https://x.com/" target="_blank" rel="noopener">X</a>
      <a href="https://youtube.com/" target="_blank" rel="noopener">YouTube</a>
      <a href="https://tiktok.com/" target="_blank" rel="noopener">TikTok</a>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">&copy; 2026 YorubaFluent. All rights reserved.</span>
      <span class="footer-copy">Speak Yoruba. Fluently.</span>
    </div>
  </footer>`;

/* ── INJECT ────────────────────────────────────────────────── */
(function () {
  const navSlot    = document.getElementById('site-nav');
  const footerSlot = document.getElementById('site-footer');

  if (navSlot)    navSlot.innerHTML    = NAV_HTML;
  if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;

  // Hamburger toggle
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }
})();
