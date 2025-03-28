// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
  // Get elements for mobile menu
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Toggle mobile menu when hamburger is clicked
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      if (!mobileMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        mobileMenu.classList.remove('active');
      }
    }
  });

  // Add hover effect for navigation links
  const navLinks = document.querySelectorAll('.nav-links li a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.opacity = '0.8';
    });

    link.addEventListener('mouseleave', function() {
      this.style.opacity = '1';
    });
  });

  // Add active class to card when clicked
  const creditCards = document.querySelectorAll('.credit-card');
  creditCards.forEach(card => {
    card.addEventListener('click', function() {
      // Remove active class from all cards
      creditCards.forEach(c => c.classList.remove('active'));
      // Add active class to clicked card
      this.classList.add('active');
    });
  });
});
