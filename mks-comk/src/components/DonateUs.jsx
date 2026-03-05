import React from 'react';
import './DonateUs.css';

const DonateUs = () => {
    return (
        <div className="donate-us-page">
            {/* Hero Section */}
            <section className="donate-hero">
                <div className="donate-hero-overlay"></div>
                <img src="/Hero.jpg" alt="Donate Us Hero" className="donate-hero-bg" />
                <div className="donate-hero-content">
                    <h1 className="donate-hero-title fade-up">Donate Us</h1>
                </div>
            </section>

            {/* COVID Appeal Section */}
            <section className="covid-appeal-section">
                <div className="appeal-container">
                    <div className="appeal-image-wrapper">
                        <img
                            src="https://mks.org.au/wp-content/uploads/2021/04/COVID-19-APPEAL-1.jpeg"
                            alt="Covid 19 Appeal"
                            className="appeal-image"
                        />
                    </div>
                    <div className="appeal-text-wrapper">
                        <p className="appeal-greeting">Dear All,</p>
                        <p>
                            A second wave of the coronavirus pandemic is sweeping across India, with a devastating impact on people’s lives.
                        </p>
                        <p>
                            If we can’t flatten the curve and stop this second wave. Daily infection rates are soaring. Hospitals are overwhelmed & shortage out of oxygen.
                        </p>
                        <p>
                            Intensive care units are full. People are being turned away from emergency rooms because they just don’t have the supplies.
                        </p>
                        <p className="appeal-highlight">
                            With India’s healthcare system under such enormous strain, your urgent support is needed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Donation Details Section */}
            <section className="donation-details-section">
                <div className="container">
                    <h2 className="donation-title">Make a life-changing donation to Save Lives in India!</h2>
                    <div className="donation-divider"></div>

                    <div className="donation-cards-wrapper">
                        {/* MKS Card */}
                        <div className="donation-card">
                            <h3>MELBOURNE KANNADA SANGHA</h3>
                            <p><strong>Account Name:</strong> MELBOURNE KANNADA SANGHA</p>
                            <p><strong>BSB:</strong> 063882</p>
                            <p><strong>ACC NO:</strong> 10148074</p>
                            <div className="reference-box">
                                <p><strong>Please Quote Reference:</strong><br />FULL NAME / COVID INDIA</p>
                            </div>
                        </div>

                        {/* OR text */}
                        <div className="donation-or">
                            <span>(OR)</span>
                        </div>

                        {/* IAHV Card */}
                        <div className="donation-card iahv-card">
                            <h3>IAHV – INTERNATIONAL ASSOCIATION FOR HUMAN VALUES</h3>
                            <p className="tax-text">All donations over $2 are tax-deductible.</p>
                            <p>If you have any questions or concerns, please get in touch via <a href="mailto:donations@iahv.org.au">donations@iahv.org.au</a></p>

                            <a href="https://www.iahv.org.au/" target="_blank" rel="noopener noreferrer" className="donate-btn">CLICK HERE TO DONATE TO IAHV</a>
                        </div>
                    </div>

                    <div className="donation-footer">
                        <p>On behalf of everyone at Melbourne Kannada Sangha, we acknowledge the far-reaching impact of this pandemic.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default DonateUs;