(() => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isWorkPage = currentPage === 'Work.dc.html' || currentPage.startsWith('Project ');

  function renderSharedLayout() {
    const headerMount = document.querySelector('[data-site-header]');
    const footerMount = document.querySelector('[data-site-footer]');

    if (headerMount && !headerMount.dataset.rendered) {
      headerMount.innerHTML = `
        <header class="site-header">
          <a class="site-brand" href="index.html">Madhura Mendis</a>
          <nav class="site-nav" aria-label="Main navigation">
            <a href="Work.dc.html"${isWorkPage ? ' aria-current="page"' : ''}>Work</a>
            <a href="About.dc.html"${currentPage === 'About.dc.html' ? ' aria-current="page"' : ''}>About</a>
            <a href="https://www.linkedin.com/in/madhura-mendis/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://www.behance.net/madhuramenad7b" target="_blank" rel="noopener">Behance</a>
          </nav>
        </header>`;
      headerMount.dataset.rendered = 'true';
    }

    if (footerMount && !footerMount.dataset.rendered) {
      footerMount.innerHTML = `
        <footer class="site-footer">
          <span>Madhura Mendis &mdash; designer, developer, technical lead</span>
          <span>&copy; 2026</span>
        </footer>`;
      footerMount.dataset.rendered = 'true';
    }
  }

  renderSharedLayout();
  new MutationObserver(renderSharedLayout).observe(document.body, { childList: true, subtree: true });
})();
