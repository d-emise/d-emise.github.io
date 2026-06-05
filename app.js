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
