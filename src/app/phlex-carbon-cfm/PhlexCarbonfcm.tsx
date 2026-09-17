"use client";
import React from "react"
import type { Content } from "@prismicio/client"
import Faq from "@/components/Faq"
import Link from "next/link"

const PhlexCarbonfcm = ({
  data,
}: {
  data: Content.PhlexCarbonCfmDocumentData
}) => {


 
  return (
    <>
      {/* <!-- Hero Banner Section Start --> */}
<section
  className="phlex-hero-banner"
    style={{
    background: `
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.92) 0%,
        rgba(0, 0, 0, 0.75) 45%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url(${data?.background_image?.url})
    `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundSize: "cover",
  }}
>

        {/* Main Background Image (HTML Tag) */}
        {/* <img src="/images/banner-bg.jpg" alt="Phlex Carbon Fiber Background" className="phlex-hero-bg-img" /> */}

        {/* Gradient Overlay */}
        {/* <div className="phlex-hero-overlay" ></div> */}

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
              <a href="https://app.smartsuite.com/form/sca8tl4o/MC09mTWsI2" target="_blank" className="phlex-hero-btn phlex-hero-btn-white">
                <span>{data.hero_button_1}</span>
                <img src="/images/top-right-up.svg" />
              </a>
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

          {/* Section Header */}
          <div className="phlex-options-header">
            <h2 className="phlex-options-main-title"> {data.options_title}</h2>
            <p className="phlex-options-subtitle">
              {data.options_description}
            </p>
            <p className="phlex-options-subtitle-sub">
              {data.options_description_2}
            </p>
            <br />

            <div className="phlex-flex-btn-wrapper">
            <a
 href={(data?.cfm_datasheet as any)?.url || "#"}
  download
  target="_blank"
  rel="noopener noreferrer"
  className="phlex-flex-btn"
>
  View Phlex Carbon CFM Technical Data Sheet
  <img
    src="/images/right-arrow.svg"
    alt="arrow"
  />
</a>
            </div>
          </div>


          {/* <!-- Cards Grid --> */}
          <div className="phlex-options-grid">

            {/* Card 01: High-Strength */}
            <div className="phlex-options-card">
              <img src="/images/high-stren.svg" alt="High-Strength Carbon Fiber" className="phlex-options-card-img" />
              <div className="phlex-options-card-overlay "></div>
              <div className="phlex-options-card-content">
                <span className="phlex-options-number">{data.option_1_title}</span>
                <h3 className="phlex-options-card-title">{data.option_1_text_1}</h3>
                <p className="phlex-options-card-text">
                  {data.option_1_text_2}
                </p>
                <p className="phlex-options-card-text">
                  The fiber has a tensile strength of 4,413 MPa, tensile modulus of 231 GPa and elongation at break of 1.7%.
                </p>
              </div>
            </div>

            {/* <!-- Card 02: Intermediate-Modulus --> */}
            <div className="phlex-options-card">
              <img src="/images/high-stren-2.svg" alt="Intermediate-Modulus Carbon Fiber" className="phlex-options-card-img" />
              <div className="phlex-options-card-overlay"></div>
              <div className="phlex-options-card-content">
                <span className="phlex-options-number">{data.option_2_title}</span>
                <h3 className="phlex-options-card-title">{data.option_2_text_1}</h3>
                <p className="phlex-options-card-text">
                  {data.option_2_text_2}
                </p>
                <p className="phlex-options-card-text">
                  The fiber has a tensile strength of 5,480 MPa, tensile modulus of 276 GPa and elongation at break of 1.9%.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- One Non-Woven Format Section End --> */}


      {/* <!-- Made for More Than One Process Start --> */}
      <section className="phlex-process-section">
        <div className="phlex-process-container">
          <div className="phlex-process-grid">

            <div className="phlex-process-content">
              <h2 className="phlex-process-title">{data.process_title}</h2>

              <p className="phlex-process-desc">
                {data.process_description}
              </p>

              <div className="phlex-process-list">
                <div className="phlex-process-item">
                  <img src="/images/closed-mold-infusion .svg" />
                  <span>{data.process_item_1}</span>
                </div>
                <div className="phlex-process-item">
                  <img src="/images/closed-mold-infusion .svg" />
                  <span>{data.process_item_2}</span>
                </div>
                <div className="phlex-process-item">
                  <img src="/images/closed-mold-infusion .svg" />
                  <span>{data.process_item_3}</span>
                </div>
                <div className="phlex-process-item">
                  <img src="/images/closed-mold-infusion .svg" />
                  <span>{data.process_item_4}</span>
                </div>
              </div>

              <p className="phlex-process-desc">
                {data.process_bottom_description}
              </p>
            </div>

            <div className="phlex-process-media">
              <div className="phlex-process-graphic-wrapper">
                <img src="/images/process-right-img.svg" alt="PhlexCarbon Manufacturing Processes" className="phlex-process-img" />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <!-- Made for More Than One Process END --> */}

      {/* <!-- More Flexibility Section Start --> */}
      <section className="phlex-flexibility-section">
        <div className="phlex-flexibility-container">
          <div className="phlex-flexibility-grid">

            {/* <!-- Left Content Column --> */}
            <div className="phlex-flexibility-content">
              <h2 className="phlex-flexibility-title">{data.flexibility_title}</h2>

              <p className="phlex-flexibility-desc">
                {data.flexibility_description_1}
              </p>

              <p className="phlex-flexibility-desc">
                {data.flexibility_description_2}
              </p>

              <p className="phlex-flexibility-desc">
                {data.flexibility_description_3}
              </p>
            </div>

            {/* <!-- Right Image Column --> */}
            <div className="phlex-flexibility-media">
              <div className="phlex-flexibility-img-box">
                <img src={data.flexibility_image?.url||""} alt="PhlexCarbon CFM Mat Sample" className="phlex-flexibility-img" />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <!-- More Flexibility Section End --> */}

      {/* <!-- Typical Properties Strat --> */}
      <section className="phlex-props-section">
        <div className="phlex-props-container">

          <h2 className="phlex-props-title">Typical Properties</h2>

          <div className="phlex-props-table-wrapper">
            <table className="phlex-props-table">
              <thead>
                <tr>
                  <th className="phlex-props-th-left">Property</th>
                  <th className="phlex-props-th-right" colSpan={2}>PhlexCarbon CFM</th>
                </tr>
              </thead>

              <tbody>
                {data.typical_properties?.map((data, index) => (
                  <tr key={index}>
                    <td className="phlex-props-label">{data.property}</td>
                    <td className="phlex-props-val" colSpan={2}>{data.phlex_carbon_cfm}</td>

                  </tr>
                ))}

                <tr className="phlex-props-divider-row">
                  <td colSpan={3}>Carbon Fiber Properties</td>
                </tr>

                <tr className="phlex-props-subhead-row">
                  <td className="phlex-props-th-sub">Property</td>
                  <td className="phlex-props-th-sub">High Strength</td>
                  <td className="phlex-props-th-sub">Intermediate</td>
                </tr>

                {data.carbon_fiber_properties?.map((data, index) => (
                  <tr key={index}>
                    <td className="phlex-props-label">{data.property}</td>
                    <td className="phlex-props-val">{data.high_strength}</td>
                    <td className="phlex-props-val">{data.intermediate}</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

        </div>
      </section>
      {/* <!-- Typical Properties END --> */}

      {/* <!-- Available Areal Weights Strat --> */}
      <section className="phlex-weights-section">

        <img src="/images/available-areal.svg" alt="Carbon Fiber Areal Weights" className="phlex-weights-bg-img" />

        <div className="phlex-weights-overlay"></div>

        <div className="phlex-weights-container">

          <h2 className="phlex-weights-title">Available Areal Weights</h2>

          <div className="phlex-weights-grid">
            {data.areal_weights?.map((weightData, index) => (
              <React.Fragment key={index}>
                <div className="phlex-weight-item">
                  <div className="phlex-weight-icon-box">
                    <img
                      src="/images/avilable-icon.svg"
                      alt="Available"
                    />
                  </div>

                  <h3 className="phlex-weight-val">
                    {weightData.weight}
                  </h3>
                </div>

                {index < data.areal_weights.length - 1 && (
                  <div className="phlex-weight-divider"></div>
                )}
              </React.Fragment>
            ))}
          </div>


          <p className="phlex-weights-footer-text">
            PhlexCarbon CFM is packaged one roll per box, with net weight varying depending on areal weight.
          </p>

        </div>
      </section>
      {/* <!-- Available Areal Weights END --> */}

      {/* <!-- Have a Specific Material Requirement?  Strat --> */}
      <section className="phlex-cta-section">

        <img src="/images/right-requrement-img.svg" alt="PhlexCarbon Material Requirement" className="phlex-cta-bg-img" />

        <div className="phlex-cta-overlay"></div>

        <div className="phlex-cta-container">
          <div className="phlex-cta-content">

            <h2 className="phlex-cta-title">{data.cta_title}</h2>

            <p className="phlex-cta-desc">
              {data.cta_description_1}
            </p>

            <p className="phlex-cta-desc">
              {data.cta_description_2}
            </p>

            <div className="phlex-cta-btn-group">
              <Link href="https://app.smartsuite.com/form/sca8tl4o/MC09mTWsI2" target="_blank" className="phlex-cta-btn phlex-cta-btn-white">
                {data.cta_button_1} <img src="/images/top-right-up.svg" />
              </Link>
              <Link href="contact-us" className="phlex-cta-btn phlex-cta-btn-outline">
                {data.cta_button_2}
              </Link>
            </div>

          </div>
        </div>
      </section>
      {/* <!-- Have a Specific Material Requirement?  END --> */}

      {/* <!-- Frequently asked questions Strat --> */}
      {/* <section className="phlex-faq-section">
  <div className="phlex-faq-container">
    
    <h2 className="phlex-faq-main-title">Frequently asked questions</h2>

    <div className="phlex-faq-grid">
      
      <div className="phlex-faq-left">
        <div className="accordion phlex-custom-accordion" id="phlexFaqAccordion">
        
           {data.faqs?.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h3
                className="accordion-header"
                id={`faqHeading${index}`}
              >
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`faqCollapse${index}`}
                >
                  {faq.question}
                </button>
              </h3>

              <div
                id={`faqCollapse${index}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                aria-labelledby={`faqHeading${index}`}
                data-bs-parent="#phlexFaqAccordion"
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
   
      <div className="phlex-faq-right">
        <div className="phlex-faq-card">
          <div className="phlex-faq-card-icon">
            <img src="/images/circum_mail.svg"/>
          </div>
          <h4 className="phlex-faq-card-title">{data.contact_title}</h4>
          <p className="phlex-faq-card-desc">
            {data.contact_description}
          </p>
          <a href="mailto:info@phlexcarbon.com" className="phlex-faq-card-btn">
           {data.contact_button}<img src="/images/right-arrow.svg" alt="arrow"/>
          </a>
        </div>
      </div>

    </div>

  </div>
</section> */}

      <Faq data={data.faq} />

      {/* <!-- Frequently asked questions END --> */}

    </>
  )
}

export default PhlexCarbonfcm
