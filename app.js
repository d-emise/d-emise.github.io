// Tab Switching Logic
const tabs = document.querySelectorAll('.nav-tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute('data-tab');
    switchTab(targetTab);
  });
});

function switchTab(tabId) {
  // Update nav tabs active states
  tabs.forEach(t => {
    if (t.getAttribute('data-tab') === tabId) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  // Update tab content visibility
  contents.forEach(content => {
    if (content.id === tabId) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });

  // Scroll to top of content frame on transition
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Download Button Click Action (Placeholder alert)
const downloadBtn = document.querySelector('.dl-actions .btn-primary');
if (downloadBtn) {
  downloadBtn.addEventListener('click', (e) => {
    if (downloadBtn.getAttribute('href') === '#') {
      e.preventDefault();
      alert('The download is currently being prepared. Check back shortly or join our Discord community for early beta test builds!');
    }
  });
}

// Docs Sidebar Navigation Logic
const docLinks = document.querySelectorAll('.docs-sidebar-link');
const docSections = document.querySelectorAll('.doc-section');

docLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetSection = link.getAttribute('data-section');
    
    // Update active class on sidebar links
    docLinks.forEach(l => {
      if (l.getAttribute('data-section') === targetSection) {
        l.classList.add('active');
      } else {
        l.classList.remove('active');
      }
    });

    // Update active class on doc content sections
    docSections.forEach(sec => {
      if (sec.id === `doc-${targetSection}`) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  });
});
