"use client";
    
    {/* import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <header className="navbar">
    <div className="nav-logo">
      <Link href="/home"><img src="/images/logo.png" alt="PHLEX Carbon Fiber Logo" /></Link>
    </div>

    <ul className="nav-links" id="navLinks">
      <li><Link href="/home">Home</Link></li>
      <li><Link href="/about">About Us</Link></li>
      
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

      <li><Link href="/blog" className="active">Resources</Link></li>
    </ul>

    <div className="nav-action">
      <a href="#" className="btn-contact">
        Contact Us <img src="/images/right-arrow.svg" alt="arrow" />
      </a>
    </div>

   <!-- Hamburger Toggle Icon -->
    <div className="hamburger" id="hamburger">
      <i className="ri-menu-line"></i>
    </div>
  </header>
    
    </>
  )
}

export default Header  */}


import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
      navLinks.classList.remove("open");
    }
    const dropdowns = document.querySelectorAll(".custom-dropdown");
    dropdowns.forEach((d) => d.classList.remove("is-open"));
  }, [pathname]);

  const isProductActive =
  pathname === "/chhoped-carbon-fiber" ||
  pathname === "/phlex-carbon-cftm" ||
  pathname === "/phlex-carbon-cfm" ||
  pathname === "/phlex-carbon-spcf" ||
  pathname === "/fiber-sizing-compound";

console.log("pathname:", pathname, "isProductActive:", isProductActive);

  return (
    <>
      <header className="navbar">
        <div className="nav-logo">
          <Link href="/home">
            <img
              src="/images/logo.png"
              alt="PHLEX Carbon Fiber Logo"
            />
          </Link>
        </div>

        <ul className="nav-links" id="navLinks">

          {/* Home */}
          <li>
            <Link
              href="/home"
              className={pathname === "/home" ? "active" : ""}
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About Us
            </Link>
          </li>

          {/* Products */}
          <li className="custom-dropdown">
            <a
              href="#"
              className={`dropdown-trigger ${
                isProductActive ? "active" : ""
              }`}
            >
              Products
              <i className="ri-arrow-down-s-line dropdown-icon"></i>
            </a>

            <ul className="dropdown-menu-custom">
              <li>
                <Link href="/chhoped-carbon-fiber">
                  Chopped Carbon Fiber
                </Link>
              </li>

              <li>
                <Link href="/phlex-carbon-cftm">
                  Phlex Carbon CFTM
                </Link>
              </li>

              <li>
                <Link href="/phlex-carbon-cfm">
                  Phlex Carbon CFM
                </Link>
              </li>

              <li>
                <Link href="/phlex-carbon-spcf">
                  Phelx Carbon SPCF 12K Tow
                </Link>
              </li>

              <li>
                <Link href="/fiber-sizing-compound">
                  Fiber Sizing Compounds
                </Link>
              </li>
            </ul>
          </li>

          {/* Resources */}
          <li>
            <Link
              href="/blog"
              className={pathname === "/blog" ? "active" : ""}
            >
              Resources
            </Link>
          </li>

        </ul>

        <div className="nav-action">
          <Link href="contact-us" className="btn-contact">
            Contact Us
            <img src="/images/right-arrow.svg" alt="arrow" />
          </Link>
        </div>

        <div className="hamburger" id="hamburger">
          <i className="ri-menu-line"></i>
        </div>
      </header>
    </>
  );
};

export default Header;

