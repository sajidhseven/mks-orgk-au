import React from 'react'
import './AnnualMembershipForm.css';

const LifeMembershipForm = () => {
    return (
        <div className="membership-page">
            {/* Hero Section */}
            <section className="mem-hero">
                <div className="mem-hero-overlay"></div>
                <img src="/Hero.jpg" alt="Life Membership Hero" className="mem-hero-bg" />
                <div className="mem-hero-content">
                    <h1 className="mem-hero-title fade-up">Life Membership Form</h1>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="mem-container">

                {/* Intro Information Box */}
                <div className="mem-info-box">
                    <p>Let’s become a member of <span className="mem-highlight">MKS</span> and serve the community.</p>
                    <p>Please fill the below form and remit <strong>$250</strong> for Life membership fee.</p>
                </div>

                {/* Membership Form */}
                <div className="mem-form-wrapper">
                    <h2 className="mem-form-title">Registration Form</h2>
                    <form onSubmit={(e) => e.preventDefault()}>

                        {/* Personal Details row 1 */}
                        <div className="mem-row">
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label htmlFor="firstName">1. First Name</label>
                                    <input type="text" id="firstName" placeholder="Enter your first name" required />
                                </div>
                            </div>
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label htmlFor="lastName">2. Last Name</label>
                                    <input type="text" id="lastName" placeholder="Enter your last name" required />
                                </div>
                            </div>
                        </div>

                        {/* Contact Details row 2 */}
                        <div className="mem-row">
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label htmlFor="mobile">3. Mobile Number</label>
                                    <input type="tel" id="mobile" placeholder="Your mobile number" required />
                                </div>
                            </div>
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label htmlFor="email">3.1 Email Address</label>
                                    <input type="email" id="email" placeholder="Your email address" required />
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mem-form-group">
                            <label htmlFor="address">4. Address (Australian format)</label>
                            <textarea id="address" placeholder="Enter your full residential address..." required></textarea>
                        </div>

                        {/* Family Info Sub-section */}
                        <h3 className="mem-section-subtitle">5. Family Information</h3>

                        <div className="mem-row">
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label htmlFor="spouseName">5.1 Spouse Name (Optional)</label>
                                    <input type="text" id="spouseName" placeholder="Spouse's full name" />
                                </div>
                            </div>
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label htmlFor="child1">5.2 Child 1 Full Name (Optional)</label>
                                    <input type="text" id="child1" placeholder="Child 1 name" />
                                </div>
                            </div>
                        </div>

                        <div className="mem-row">
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label htmlFor="child2">5.3 Child 2 Full Name (Optional)</label>
                                    <input type="text" id="child2" placeholder="Child 2 name" />
                                </div>
                            </div>
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label htmlFor="child3">5.4 Child 3 Full Name (Optional)</label>
                                    <input type="text" id="child3" placeholder="Child 3 name" />
                                </div>
                            </div>
                        </div>

                        <div className="mem-row">
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label htmlFor="child4">5.5 Child 4 Full Name (Optional)</label>
                                    <input type="text" id="child4" placeholder="Child 4 name" />
                                </div>
                            </div>
                        </div>

                        {/* Payment & Donation Sub-section */}
                        <h3 className="mem-section-subtitle">Payment Details</h3>

                        <div className="mem-row">
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label>6. Life Membership Fee</label>
                                    <input type="text" value="$250.00" readOnly className="readonly-input" />
                                </div>
                            </div>
                            <div className="mem-col">
                                <div className="mem-form-group">
                                    <label htmlFor="donation">7. Donation Amount ($) (Optional)</label>
                                    <input type="number" id="donation" placeholder="Enter amount if any" min="0" />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="mem-submit-btn">Submit Registration Form</button>
                    </form>
                </div>

                {/* Bank Details Section */}
                <div className="mem-bank-details">
                    <h3>Bank Transfer Instructions</h3>
                    <div className="mem-bank-data">
                        <strong>Account Name:</strong> MELBOURNE KANNADA SANGHA
                    </div>
                    <div className="mem-bank-data">
                        <strong>BSB:</strong> 063882
                    </div>
                    <div className="mem-bank-data">
                        <strong>ACC NO:</strong> 10148074
                    </div>
                    <div className="mem-ref">
                        Please Quote Reference: FULL NAME / MOBILE / RECEIPT NUMBER
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LifeMembershipForm