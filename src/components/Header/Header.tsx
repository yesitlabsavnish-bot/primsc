import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <header className="navbar">
    <div className="nav-logo">
      <Link href="/home"><img src="/images/logo.png" alt="PHLEX Carbon Fiber Logo" /></Link>
    </div>

    {/* <!-- Mobile Nav Links --> */}
    <ul className="nav-links" id="navLinks">
      <li><Link href="/home">Home</Link></li>
      <li><Link href="/about">About Us</Link></li>
      
      {/* <!-- Custom Dropdown --> */}
      <li className="custom-dropdown">
        <a href="#" className="dropdown-trigger">
          Products <i className="ri-arrow-down-s-line dropdown-icon"></i>
        </a>
        <ul className="dropdown-menu-custom">
          <li><Link href="/chhoped-carbon-fiber">Chopped Carbon Fiber</Link></li>
          <li><Link href="/phlex-carbonn-cftm">Phlex Carbon CFTM</Link></li>
          <li><Link href="/phlex-carbon-fcm">Phlex Carbon CFM</Link></li>
          <li><Link href="/phlex-carbon-spcf">Phelx Carbon SPCF 12K Tow</Link></li>
          <li><Link href="/fiber-sizing-compound">Fiber Sizing Compounds</Link></li>
        </ul>
      </li>

      <li><Link href="/blog" className="active">Blogs</Link></li>
    </ul>

    <div className="nav-action">
      <a href="#" className="btn-contact">
        Contact Us <img src="/images/right-arrow.svg" alt="arrow" />
      </a>
    </div>

    {/* <!-- Hamburger Toggle Icon --> */}
    <div className="hamburger" id="hamburger">
      <i className="ri-menu-line"></i>
    </div>
  </header>
    
    </>
  )
}

export default Header
