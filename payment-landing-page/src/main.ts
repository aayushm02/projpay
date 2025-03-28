import './styles.css'

// Get the root element
const root = document.querySelector('#root');

// Create the HTML content
if (root) {
  root.innerHTML = `
    <div class="container">
      <!-- Decorative lines -->
      <div class="line line-1"></div>
      <div class="line line-2"></div>

      <!-- Main container for the app UI -->
      <div class="app-container">
        <!-- Header with navigation -->
        <header>
          <div class="logo">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDlMMTIgNUwyIDlMMTIgMTNMMjIgOVpNMTIgM0wyIEwyIDExTDEyIDE1TDIyIDExVjdMMTIgM1oiIGZpbGw9IiMzMzMiLz4KPC9zdmc+" alt="PayApp Logo">
          </div>

          <nav>
            <ul class="nav-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </nav>

          <div class="auth-buttons">
            <button class="btn btn-primary">Log In</button>
            <button class="btn btn-primary">Sign Up</button>
          </div>

          <div class="hamburger-menu">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </div>
        </header>

        <!-- Mobile Menu (Enhanced with smooth transitions) -->
        <div class="mobile-menu">
          <button class="mobile-menu-close">×</button>
          <ul class="nav-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About us</a></li>
          </ul>

          <div class="auth-buttons">
            <button class="btn btn-primary">Log In</button>
            <button class="btn btn-primary">Sign Up</button>
          </div>
        </div>

        <!-- Hero Section -->
        <section class="hero">
          <div class="hero-content">
            <p class="subtitle">START SAVING MONEY</p>
            <h1 class="hero-title">Smart Credit Card For Your Daily Life.</h1>
            <button class="btn btn-primary download-btn">
              Download
              <span class="download-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L7 11H17L12 16Z" fill="white"/>
                </svg>
              </span>
            </button>
          </div>

          <div class="hero-image">
            <div class="phone-mockup">
              <!-- Phone header with menu and notification icons -->
              <div class="phone-header">
                <div class="menu-icon">
                  <span class="menu-line"></span>
                  <span class="menu-line"></span>
                  <span class="menu-line"></span>
                </div>
                <p class="welcome-text">Welcome, Erik</p>
                <div class="notification-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="white"/>
                  </svg>
                </div>
              </div>

              <!-- Credit card previews -->
              <div class="card-preview">
                <div class="credit-card active">
                  <p class="balance-label">Balance</p>
                  <p class="card-number">**** **** **** 2468</p>
                  <p class="balance-amount">$ 30,896</p>
                  <div class="card-details">
                    <span>02/26</span>
                    <span class="visa-logo">VISA</span>
                  </div>
                </div>

                <div class="credit-card">
                  <p class="balance-label">Balance</p>
                  <p class="card-number">**** **** **** 2468</p>
                  <p class="balance-amount">$ 30,896</p>
                  <div class="card-details">
                    <span>02/26</span>
                    <span class="visa-logo">VISA</span>
                  </div>
                </div>
              </div>

              <!-- Card navigation dots -->
              <div class="card-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>

              <!-- Credit limits and monthly spend info -->
              <div class="card-info-boxes">
                <div class="info-box">
                  <p class="info-title">Credit Limits</p>
                  <p class="info-value">$ 10,000</p>
                </div>
                <div class="info-box">
                  <p class="info-title">Monthly Spend</p>
                  <p class="info-value">$ 5,254.00</p>
                </div>
              </div>

              <!-- Transaction history section -->
              <div class="history-section">
                <h3 class="history-title">History</h3>

                <!-- Transaction items -->
                <div class="transaction">
                  <div class="transaction-details">
                    <div class="transaction-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                        <path d="M2 17L12 22L22 17" fill="white"/>
                        <path d="M2 12L12 17L22 12" fill="white"/>
                      </svg>
                    </div>
                    <div class="transaction-text">
                      <p class="transaction-name">McDonald's</p>
                      <p class="transaction-date">Today</p>
                    </div>
                  </div>
                  <p class="transaction-amount">$50</p>
                </div>

                <div class="transaction">
                  <div class="transaction-details">
                    <div class="transaction-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                        <path d="M2 17L12 22L22 17" fill="white"/>
                        <path d="M2 12L12 17L22 12" fill="white"/>
                      </svg>
                    </div>
                    <div class="transaction-text">
                      <p class="transaction-name">Netflix</p>
                      <p class="transaction-date">Yesterday</p>
                    </div>
                  </div>
                  <p class="transaction-amount">$120</p>
                </div>

                <div class="transaction">
                  <div class="transaction-details">
                    <div class="transaction-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                        <path d="M2 17L12 22L22 17" fill="white"/>
                        <path d="M2 12L12 17L22 12" fill="white"/>
                      </svg>
                    </div>
                    <div class="transaction-text">
                      <p class="transaction-name">Starbucks</p>
                      <p class="transaction-date">Yesterday</p>
                    </div>
                  </div>
                  <p class="transaction-amount">$12</p>
                </div>
              </div>

              <!-- Phone navigation bar -->
              <div class="phone-nav">
                <div class="nav-item active">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="white"/>
                  </svg>
                </div>
                <div class="nav-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="white"/>
                  </svg>
                </div>
                <div class="nav-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section class="features-section">
          <div class="section-header">
            <h2 class="section-title">Why Choose Our Smart Credit Card?</h2>
            <p class="section-description">Experience the next generation of payment solutions with features designed to make your financial life easier.</p>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.6 16.8H10.9V14.6H9V12.7H10.9V12H9V10.1H10.9V7.5H13.6C15.5 7.5 17.1 9 17.1 10.9C17.1 11.8 16.7 12.7 16.1 13.3C17.1 14 17.6 15.1 17.6 16.3C17.5 17.8 15.9 16.8 13.6 16.8Z" fill="white"/>
                </svg>
              </div>
              <h3 class="feature-title">Secure Transactions</h3>
              <p class="feature-description">Our advanced encryption technology ensures your transactions are always secure, protecting your financial data at all times.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19.5C7.86 19.5 4.5 16.14 4.5 12C4.5 7.86 7.86 4.5 12 4.5C16.14 4.5 19.5 7.86 19.5 12C19.5 16.14 16.14 19.5 12 19.5ZM15.29 8.29L10 13.59L8.71 12.29C8.32 11.9 7.68 11.9 7.29 12.29C6.9 12.68 6.9 13.32 7.29 13.71L9.29 15.71C9.68 16.1 10.32 16.1 10.71 15.71L16.71 9.71C17.1 9.32 17.1 8.68 16.71 8.29C16.32 7.9 15.68 7.9 15.29 8.29Z" fill="white"/>
                </svg>
              </div>
              <h3 class="feature-title">Real-time Tracking</h3>
              <p class="feature-description">Monitor your spending habits in real-time with instant notifications and detailed transaction history at your fingertips.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10C16.1 10 17 9.1 17 8C17 6.9 16.1 6 15 6C13.9 6 13 6.9 13 8C13 9.1 13.9 10 15 10ZM9 10C10.1 10 11 9.1 11 8C11 6.9 10.1 6 9 6C7.9 6 7 6.9 7 8C7 9.1 7.9 10 9 10ZM9 14C7.9 14 7 14.9 7 16C7 17.1 7.9 18 9 18C10.1 18 11 17.1 11 16C11 14.9 10.1 14 9 14ZM15 14C13.9 14 13 14.9 13 16C13 17.1 13.9 18 15 18C16.1 18 17 17.1 17 16C17 14.9 16.1 14 15 14Z" fill="white"/>
                </svg>
              </div>
              <h3 class="feature-title">Smart Rewards</h3>
              <p class="feature-description">Earn smart rewards on every purchase with customized cashback offers tailored to your spending patterns and preferences.</p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z" fill="white"/>
                </svg>
              </div>
              <h3 class="feature-title">Personalized Experience</h3>
              <p class="feature-description">Our AI-powered system learns your habits to provide a custom financial experience that adapts to your lifestyle.</p>
            </div>
          </div>
        </section>
      </div>

      <!-- Theme Toggle Button -->
      <button class="theme-toggle" aria-label="Toggle light and dark mode">
        <span class="theme-icon">
          <svg class="sun-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="#333"/>
            <path d="M12 1V3M12 21V23M1 12H3M21 12H23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="#333" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg class="moon-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:none;">
            <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.69 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z" fill="white"/>
          </svg>
        </span>
      </button>
    </div>
  `;

  // Add JavaScript for interactive elements

  // Mobile menu functionality
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');

  if (hamburgerMenu && mobileMenu) {
    hamburgerMenu.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      if (hamburgerMenu) {
        hamburgerMenu.classList.add('active');
      }
    });
  }

  if (mobileMenuClose && mobileMenu && hamburgerMenu) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      hamburgerMenu.classList.remove('active');
    });
  }

  // Theme toggle functionality
  const themeToggle = document.querySelector('.theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  if (themeToggle && sunIcon instanceof SVGElement && moonIcon instanceof SVGElement) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');

      if (document.body.classList.contains('light-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    });
  }

  // Animate feature cards on scroll
  const featureCards = document.querySelectorAll('.feature-card');

  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  featureCards.forEach(card => {
    observer.observe(card);
  });

  // Credit card selection
  const creditCards = document.querySelectorAll('.credit-card');

  creditCards.forEach(card => {
    card.addEventListener('click', () => {
      creditCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Card dots navigation
  const dots = document.querySelectorAll('.dot');

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      // Here you would typically change the active card
      // This is a simplified version
      creditCards.forEach(c => c.classList.remove('active'));
      if (creditCards[index]) {
        creditCards[index].classList.add('active');
      } else {
        creditCards[0].classList.add('active');
      }
    });
  });
}
