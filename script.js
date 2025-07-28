// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Toggle navbar
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close nav when link is clicked (mobile UX)
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('show');
      }
    });
  });

  // Optional: Scroll to top on reload
  window.scrollTo(0, 0);
});
