
import React from 'react'

const index = () => {
  return (
	<>
<footer className="site-footer">
    <div className="footer-main">
        <div className="footer-container">
      {/* <!-- Left Column: Logo & Tagline --> */}

            <div className="footer-brand">
                <a href="/home" className="footer-logo">
                    <img src="/images/footer-logo.png" alt="PHLEX Carbon Fiber Logo" />
                </a>
                <h2 className="footer-heading">
                    We growing up your business<br />with personal AI manager.
                </h2>
                <p className="footer-author">Maxwell, 2023.</p>
            </div>

            <div className="right-partxs-ftr">
                {/* Middle Columns: Our Products (2 Columns) */} 
            <div className="footer-nav-group">
                <h3 className="footer-links-title">Our Products</h3>
                <div className="footer-products-grid">
                   <ul className="footer-links-list">
                        <li><a href="/chhoped-carbon-fiber">Chopped Carbon Fiber</a></li>
                        <li><a href="/phlex-carbonn-cftm">Phlex Carbon CFTM</a></li>
                    </ul> 
                    <ul className="footer-links-list">
                        <li><a href="/phlex-carbon-fcm">Phlex Carbon CFM</a></li>
                        <li><a href="/phlex-carbon-spcf">Phelx Carbon SPCF 12K Tow</a></li>
                        <li><a href="/fiber-sizing-compound">Fiber Sizing Compounds</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-nav-group">
                <h3 className="footer-links-title">Quick Links</h3>
                <ul className="footer-links-list">
                    <li><a href="/about">About</a></li>
                    <li><a href="/blog">Resources</a></li>
                    <li><a href="/contact-us">Contact</a></li>
                </ul>
            </div>
            </div>
        </div>
    </div>

    <div className="footer-bottom">
        <div className="footer-container bottom-container">
            <p className="copyright-text">&copy; 2026 Phlex Cabon Fiber. All rights reserved.</p>
            <ul className="legal-links">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookies</a></li>
            </ul>
        </div>
    </div>
</footer>
	
	</>
  )
}

export default index





