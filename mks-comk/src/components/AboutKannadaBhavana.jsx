import React from 'react';
import './AboutKannadaBhavana.css';

const AboutKannadaBhavana = () => {
  return (
    <div className="about-kannada-bhavana-page">
      {/* Hero Section */}
      <section className="akb-hero">
        <div className="akb-hero-overlay"></div>
        <img src="/Hero.jpg" alt="About Kannada Bhavana Hero" className="akb-hero-bg" />
        <div className="akb-hero-content">
          <h1 className="akb-hero-title">About Kannada Bhavana</h1>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="akb-container">

        {/* Intro Section */}
        <div className="akb-intro-section">
          <h2 className="akb-section-title">About Kannada Bhavana</h2>
          <div className="akb-section-line"></div>
          <div className="akb-text-content">
            <p>
              Kannada Bhavana is a cultural hub located at <strong>1173 Heatherton Rd, Noble Park VIC 3174</strong>, dedicated to fostering the rich heritage and traditions of the Kannada-speaking community. It serves as a vibrant center for cultural exchange, learning, and community growth.
            </p>
            <p>
              The Bhavana recently celebrated its inauguration ceremony on <strong>July 8, 2023</strong>, which was graced by esteemed guests whose presence added immense credibility and inspiration to the event.
            </p>
            <p>
              As the Bhavana embarks on its journey, it aims to expand its facilities to accommodate a larger audience and cater to a diverse range of cultural programs.
              Plans include the establishment of educational initiatives for children and temporary accommodation for newly arrived immigrants.
            </p>
            <p>
              The support and guidance of the community are crucial in achieving these goals, and Kannada Bhavana eagerly looks forward to continued collaboration to create a welcoming and inclusive space for all.
            </p>
          </div>
        </div>

        {/* Dream Banner Section */}
        <div className="akb-dream-banner">
          <img src="/Kannada-Bhavana-1.png" alt="Kannada Bhavana Dream" className="akb-dream-banner-bg" />
          <div className="akb-dream-banner-overlay"></div>
          <div className="akb-dream-banner-content">
            <h2>Project Starts on 10 January 2018</h2>
            <h1>Realise our dream of Kannada Bhavana</h1>
          </div>
        </div>

        {/* Projects Section */}
        <div className="akb-projects-section">
          <h2 className="akb-section-title">Kannada Bhavana Projects</h2>
          <div className="akb-section-line"></div>

          <div className="akb-project-intro">
            <p>
              Since its inception of non-profit organisation, MKS is dreaming to establish Kannada Bhavana to uplift its presence and create Kannada Icon in Australia. Our goal to provide a unique business model involving local patrons, life members of MKS to build and manage Kannada Bhavana by raising local and overseas shares.
            </p>
            <p>
              Melbourne has experienced steady population growth in the 15 years to 2016. The stable growth rate is expected to continue in the next 15 years, with Indian population forecasted to increase to 300,000 by 2031. Hence it is right time that MKS dream can be realised in coming years.
            </p>
          </div>

          <div className="akb-grid-container">
            {/* Objectives Card */}
            <div className="akb-card">
              <div className="akb-card-header">
                <h3>Objectives</h3>
              </div>
              <ul className="akb-list">
                <li>Invest in quality well cared for property that are priced within the local market range</li>
                <li>Excellent location access to public transport and shopping areas</li>
                <li>Venue for wedding, sporting, school, corporate and birthday/Anniversary parties.</li>
                <li>Generate growth and passive income.</li>
                <li>Potential capital gain &amp; equity.</li>
                <li>Cash Flow and loan pay down</li>
                <li>Tax benefits.</li>
              </ul>
            </div>

            {/* Benefits to Shareholders Card */}
            <div className="akb-card">
              <div className="akb-card-header">
                <h3>Benefits to Shareholders</h3>
              </div>
              <ul className="akb-list">
                <li>Safe and Secured</li>
                <li>Easy to get started</li>
                <li>Easier to research than stocks and shares</li>
                <li>Relatively easy to get finance</li>
                <li>Tax breaks – negative gearing</li>
                <li>Keep growing – even retired</li>
                <li>Australian economy is strong</li>
                <li>Pass onto your kids</li>
                <li>More stable investment</li>
                <li>Demand is outstripping supply</li>
                <li>Make use for wedding/anniversary/birthday parties at discounted price</li>
                <li>Sell of share to other MKS members</li>
              </ul>
            </div>
          </div>

          {/* Project Details */}
          <div className="akb-project-details">
            <h3>PROJECT DETAILS</h3>
            <div className="akb-details-badges">
              <span className="akb-badge">
                <span className="akb-badge-icon">📅</span>
                <strong>Starts:</strong> 10 January 2018
              </span>
              <span className="akb-badge">
                <span className="akb-badge-icon">💰</span>
                <strong>Budget:</strong> $2,000,000
              </span>
              <span className="akb-badge">
                <span className="akb-badge-icon">📍</span>
                <strong>Location:</strong> Melbourne, Kannada
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutKannadaBhavana;