import React, { useEffect } from "react";

const FacebookFeed = () => {

    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <section className="facebook-section">
            <div className="container">
                <div className="facebook-content">
                    <h2 className="title">Latest From Facebook</h2>
                    <div className="facebook-divider"></div>
                    <p className="subtitle">
                        Stay connected with Melbourne Kannada Sangha! Explore our latest events, community updates, and vibrant moments shared on our Facebook page.
                    </p>

                    <div className="facebook-feed-wrapper">
                        <div
                            className="fb-page"
                            data-href="https://www.facebook.com/melbournekannadasangha"
                            data-tabs="timeline"
                            data-width="500"
                            data-height="600"
                            data-small-header="false"
                            data-adapt-container-width="true"
                            data-hide-cover="false"
                            data-show-facepile="true"
                        >
                            <blockquote cite="https://www.facebook.com/melbournekannadasangha" className="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/melbournekannadasangha">Melbourne Kannada Sangha</a>
                            </blockquote>
                        </div>
                    </div>

                    <div className="visit-btn-container">
                        <a
                            href="https://www.facebook.com/melbournekannadasangha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="visit-btn"
                        >
                            <i className="fab fa-facebook-f"></i> Visit Our Facebook Page
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacebookFeed;