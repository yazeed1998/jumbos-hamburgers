document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const header = document.querySelector('.site-header');

  // Mobile nav toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close nav on link click
  navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) navLinks.classList.remove('show');
    })
  );

  // Header background on scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Scroll to top on reload
  window.scrollTo(0, 0);
});
