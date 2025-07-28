document.addEventListener("DOMContentLoaded", function () {
  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Tabbed menu toggle
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabButtons.length && tabContents.length) {
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabButtons.forEach((b) => b.classList.remove("active"));
        tabContents.forEach((section) => section.classList.remove("active"));

        btn.classList.add("active");
        const target = btn.getAttribute("data-target");
        const activeTab = document.getElementById(target);
        if (activeTab) activeTab.classList.add("active");
      });
    });
  }
});

