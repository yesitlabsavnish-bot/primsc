
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
	<>
<footer className="site-footer">
    <div className="footer-main">
        <div className="footer-container">
      {/* <!-- Left Column: Logo & Tagline --> */}

            <div className="footer-brand">
                <Link href="/home" className="footer-logo">
                    <img src="/images/footer-logo.png" alt="PHLEX Carbon Fiber Logo" />
                </Link>
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
                        <li><Link href="/chhoped-carbon-fiber">Chopped Carbon Fiber</Link></li>
                        <li><Link href="/phlex-carbonn-cftm">Phlex Carbon CFTM</Link></li>
                        <li><Link href="/phlex-carbon-fcm">Phlex Carbon CFM</Link></li>
                        <li><Link href="/phlex-carbon-spcf">Phelx Carbon SPCF 12K Tow</Link></li>
                        <li><Link href="/fiber-sizing-compound">Fiber Sizing Compounds</Link></li>
                    </ul> 
                    {/* <ul className="footer-links-list">
                       <li><Link href="/phlex-carbon-fcm">Phlex Carbon CFM</Link></li>
                        <li><Link href="/phlex-carbon-spcf">Phelx Carbon SPCF 12K Tow</Link></li>
                        <li><Link href="/fiber-sizing-compound">Fiber Sizing Compounds</Link></li>
                    </ul> */}
                </div>
            </div>

            <div className="footer-nav-group">
                <h3 className="footer-links-title">Quick Links</h3>
                <ul className="footer-links-list">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Resources</Link></li>
                    <li><Link href="/contact-us">Contact</Link></li>
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





