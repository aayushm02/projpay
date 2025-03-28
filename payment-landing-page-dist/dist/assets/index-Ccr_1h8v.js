(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();const e=document.querySelector("#root");e&&(e.innerHTML=`
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

        <!-- Mobile Menu (Hidden by default) -->
        <div class="mobile-menu">
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
      </div>
    </div>
  `);
