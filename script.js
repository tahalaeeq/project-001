// JavaScript code for the Welcome Website

// Function to highlight the active page in the navigation
function highlightActivePage() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href").split("/").pop();
    if (linkHref === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Function to initialize the website
function initializeWebsite() {
  highlightActivePage();
}

// Initialize the website when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeWebsite);
