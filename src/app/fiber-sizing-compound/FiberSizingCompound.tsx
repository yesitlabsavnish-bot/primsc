"use client";
import Faq from '@/components/Faq'
import Link from 'next/link'
import React from 'react'

const FiberSizingCompound = (
  {
    data
  }: {
    data: any
  }
) => {

console.log(data)
  return (
    <>

      <>
        {/* <!-- Hero Banner Section Start --> */}
        <section className="phlex-hero-banner-fiber">

          {/* Main Background Image (HTML Tag) */}
          {/* <img src="/images/fibersizing.png" alt="Phlex Carbon Fiber Background" className="phlex-hero-bg-img" /> */}

          {/* Gradient Overlay */}
          <div className="phlex-hero-overlay-fiber"></div>

          <div className="phlex-hero-container">
            <div className="phlex-hero-content">

              {/* Main Heading */}
              <h1 className="phlex-hero-title">{data.hero_title}</h1>

              {/* Sub Heading */}
              <h2 className="phlex-hero-subtitle">
                {data.hero_subtitle}
              </h2>

              {/* Descriptions */}
              <p className="phlex-hero-desc">
                {data.hero_description_1}
              </p>

              <p className="phlex-hero-desc">
                {data.hero_description_2}
              </p>

              <p className="phlex-hero-desc">
                {data.hero_description_3}
              </p>

              {/* Action Buttons Container */}
              <div className="phlex-hero-btn-group">
                <Link href="#" className="phlex-hero-btn phlex-hero-btn-white">
                  <span>{data.hero_button_1} </span>
                  <img src="/images/top-right-up.svg" />
                </Link>
                <Link href="/contact-us" className="phlex-hero-btn phlex-hero-btn-outline">
                  <span>{data.hero_button_2}</span>
                </Link>
              </div>

            </div>

            {/* Scroll Indicator Bottom */}
            <div 
              className="phlex-hero-scroll"
              onClick={() => {
                document.querySelector(".phlex-adv-section")?.scrollIntoView({ behavior: "smooth" });
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
              }}
              style={{ cursor: "pointer" }}
            >
              <span>SCROLL TO EXPLORE</span>
              <i className="ri-arrow-down-s-line phlex-hero-scroll-icon"></i>
            </div>
          </div>
        </section>
        {/* <!-- Hero Banner Section End --> */}


        {/* <!-- One Non-Woven Format Section Start --> */}
        <section className="phlex-options-section">


          <img src="/images/bg-logo.png" alt="Watermark Logo" className="phlex-options-watermark" />

          <div className="phlex-options-container">


            <div className="phlex-options-header">
              <h2 className="phlex-options-main-title">{data.about_title}</h2>
              <p className="phlex-options-subtitle">
                {data.about_description}
              </p>
              <p className="phlex-options-subtitle">
                {data.about_description_1}
              </p>
              <p className="phlex-options-subtitle-sub">
                {data.about_description_2}
              </p>
            </div>

            <div className="phlex-flex-btn-wrapper">
              <a href={(data?.fibersizing_datasheet as any)?.url} download target="_blank" className="phlex-flex-btn">
                View Fiber Sizing Compounds Technical Data Sheet
                <img
                  src="/images/right-arrow.svg"
                  alt="arrow"
                />
              </a>
            </div>

          </div>
        </section>
        {/* <!-- One Non-Woven Format Section End --> */}

        <section className="phlex-cta-section">

          <img src="/images/fiber_sizing_1.png" alt="PhlexCarbon Material Requirement" className="phlex-cta-bg-img" />

          <div className="phlex-cta-overlay"></div>

          <div className="phlex-cta-container">
            <div className="phlex-cta-content">

              <h2 className="phlex-cta-title">{data.find_fit_title}</h2>

              <p className="phlex-cta-desc">
                {data.find_fit_description}
              </p>

              <p className="phlex-cta-desc">
                {data.find_fit_description_1}
              </p>

              <p className="phlex-cta-desc">
                {data.find_fit_description_2}
              </p>

              <div className="phlex-cta-btn-group">
                <Link href="contact-us" className="phlex-cta-btn phlex-cta-btn-white">
                  {data.find_fit_button} <img src="/images/top-right-up.svg" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* <!-- Typical Properties Strat --> */}
        <section className="phlex-props-section">
          <div className="phlex-props-container">

            <h2 className="phlex-props-title">Explore the Phlexsize Offering</h2>

            <div className="phlex-props-table-wrapper">
              <table className="phlex-props-table">
                <thead>
                  <tr>
                    <th className="phlex-props-th-sub">Product</th>
                    <th className="phlex-props-th-sub" >Chemistry</th>
                    <th className="phlex-props-th-sub">Properties</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    data.products?.map((data: any, index: number) => (
                      <tr key={index}>
                        <td className="phlex-props-label">{data.product_name}</td>
                        <td className="phlex-props-val">{data.chemistry}</td>
                        <td className="phlex-props-val">{data.properties}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

          </div>
        </section>
        {/* <!-- Typical Properties END --> */}



        {/* <!-- Have a Specific Material Requirement?  Strat --> */}
        <section className="phlex-cta-section">

          <img src="/images/right-requrement-img.svg" alt="PhlexCarbon Material Requirement" className="phlex-cta-bg-img" />

          <div className="phlex-cta-overlay"></div>

          <div className="phlex-cta-container">
            <div className="phlex-cta-content">

              <h2 className="phlex-cta-title">{data.cta_title}</h2>

              <p className="phlex-cta-desc">
                {data.cta_description}
              </p>

              <p className="phlex-cta-desc">
                {data.cta_description_1}
              </p>

              <div className="phlex-cta-btn-group">
                <Link href="https://form.smartsuite.com/sca8tl4o/LzQIXwEWlL" target="_blank" className="phlex-cta-btn phlex-cta-btn-white">
                  {data.cta_button} <img src="/images/top-right-up.svg" />
                </Link>
                <Link href="contact-us" className="phlex-cta-btn phlex-cta-btn-outline">
                  {data.cta_button_1}
                </Link>
              </div>

            </div>
          </div>
        </section>
        {/* <!-- Have a Specific Material Requirement?  END --> */}


        <Faq data={data?.faqs} />

      </></>
  )
}

export default FiberSizingCompound
