"use client";
import React from 'react'
import { PrismicRichText, PrismicText } from '@prismicio/react'
import Faq from '@/components/Faq'
import Link from 'next/link'


const PhlexCarbonCftm = ({ data }: { data: any }) => {

  console.log(data, "kjdsfdjf")
  console.log(data?.fiber_section_rows)
  console.log(data?.phlex_options_card, "phlex_option_card")

  return (
    <>
      {/* <!-- Hero Banner Section Start --> */}
      <section className="phlex-hero-banner"   style={{
    background: `#0a0a0a url(${data?.background_image?.url}) no-repeat center center / cover`,
  }}>

        {/* Main Background Image (HTML Tag) */}
        {/* <img src="/images/banner-bg.jpg" alt="Phlex Carbon Fiber Background" className="phlex-hero-bg-img" /> */}

        {/* Gradient Overlay */}
        <div className="phlex-hero-overlay"></div>

        <div className="phlex-hero-container">
          <div className="phlex-hero-content">

            {/* Main Heading */}
            <h1 className="phlex-hero-title">{data?.title}</h1>

            {/* Sub Heading */}
            <h2 className="phlex-hero-subtitle">
              {data?.sub_title}
            </h2>

            {/* Descriptions */}
            <p className="phlex-hero-desc">
              {data?.descriprtion1}
            </p>

            <p className="phlex-hero-desc">
              {data?.discription2}
            </p>

            <p className="phlex-hero-desc">
              {data?.descriprtion3}
            </p>

            {/* Action Buttons Container */}
            <div className="phlex-hero-btn-group">
              <Link href="/request-sample" className="phlex-hero-btn phlex-hero-btn-white">
                <span>Request a Sample/Quote</span>
                <img src="/images/top-right-up.svg" />
              </Link>
              <Link href="/contact-us" className="phlex-hero-btn phlex-hero-btn-outline">
                <span>Contact Our Team</span>
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

      < section className="phlex-options-section">


        <img src="/images/bg-logo.png" alt="Watermark Logo" className="phlex-options-watermark" />

        <div className="phlex-options-container">

          {/* Section Header */}
          <div className="phlex-options-header">
            <h2 className="phlex-options-main-title">One Material Format, Multiple Possibilities</h2>
            <p className="phlex-options-subtitle">
              {data?.phlex_options_subtitle}
            </p>
            <p className="phlex-options-subtitle-sub">
              {data?.phlex_options_subtitle_sub}
            </p>
          </div>

          <div className="phlex-flex-btn-wrapper">
            <a href="#" download className="phlex-flex-btn">
              View Phlex Carbon CFTM Technical Data Sheet
              <img
                src="/images/right-arrow.svg"
                alt="arrow"
              />
            </a>
          </div>
          <br />

          {/* <!-- Cards Grid --> */}


          <div className="phlex-options-grid">

            {/* Card 01: High-Strength */}

            {data?.phlex_options_card?.map((item: any, index: number) => (
              <div className="phlex-options-card" key={index}>
                <img src={item?.phlex_options_card_img?.url} alt={item?.phlex_options_card_img?.alt || item?.phlex_options_card_title} className="phlex-options-card-img" />
                <div className={`phlex-options-card-overlay phlex-overlay-${item?.phlex_options_card_overlay}`}></div>
                <div className="phlex-options-card-content">
                  <span className="phlex-options-number">{item?.phlex_options_number}.</span>
                  <h3 className="phlex-options-card-title">
                    {item?.phlex_options_card_title}
                    {item?.phlex_options_card_title_str && <>{item?.phlex_options_card_title_str}</>}
                  </h3>
                  <p className="phlex-options-card-text">
                    {item?.phlex_options_card_text1}
                  </p>
                  <p className="phlex-options-card-text">
                    {item?.phlex_options_card_text2}
                  </p>
                </div>
              </div>
            ))}

            {/* <!-- Card 02: Intermediate-Modulus --> */}
            {/* <div className="phlex-options-card">
                <img src="/images/high-stren-2.svg" alt="Intermediate-Modulus Carbon Fiber" className="phlex-options-card-img" />
                <div className="phlex-options-card-overlay phlex-overlay-blue"></div>
                <div className="phlex-options-card-content">
                  <span className="phlex-options-number">02.</span>
                  <h3 className="phlex-options-card-title">Intermediate-Modulus<br />Carbon Fiber</h3>
                  <p className="phlex-options-card-text">
                    PhlexCarbon CFM is also available using intermediate-modulus carbon fiber with a 5-micron filament diameter.
                  </p>
                  <p className="phlex-options-card-text">
                    The fiber has a tensile strength of 5,480 MPa, tensile modulus of 276 GPa and elongation at break of 1.9%.
                  </p>
                </div>
              </div> */}

          </div>

        </div>
      </section >



      {/* <!-- More Flexibility Section Start --> */}
      <section className="phlex-flexibility-section">
        <div className="phlex-flexibility-container">
          <div className="phlex-flexibility-grid">

            {/* <!-- Left Content Column --> */}
            <div className="phlex-flexibility-content">
              <h2 className="phlex-flexibility-title">{data?.phlex_flexibility_title}</h2>

              <p className="phlex-flexibility-desc">
                {data?.phlex_flexibility_desc1}
              </p>

              <p className="phlex-flexibility-desc">
                {data?.phlex_flexibility_desc2}
              </p>

              <p className="phlex-flexibility-desc">
                {data?.phlex_flexibility_desc3}
              </p>
            </div>

            {/* <!-- Right Image Column --> */}
            <div className="phlex-flexibility-media">
              <div className="phlex-flexibility-img-box">
                <img src={data?.phlex_flexibility_img?.url} alt={data?.phlex_flexibility_img?.alt || "PhlexCarbon CFM Mat Sample"} className="phlex-flexibility-img" style={{ height: '508px' }} />
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
                {data?.typical_properties.map((item: any, index: any) => (<tr key={index}>
                  <th className="phlex-props-th-left"><PrismicText field={item?.title} /></th>
                  <th className="phlex-props-th-right" colSpan={2}>{item.product_header}</th>
                </tr>))}
              </thead>

              <tbody>
                {data?.standard_properties.map((item: any, index: any) => (<tr key={index}>
                  <td className="phlex-props-label">{item?.proeprties}</td>
                  <td className="phlex-props-val" colSpan={2}>{item?.value}</td>
                </tr>))}


                <tr className="phlex-props-divider-row">
                  <td colSpan={3}>Carbon Fiber Properties</td>
                </tr>
<tr className="phlex-props-subhead-row">
  <td className="phlex-props-th-sub">
    {data?.carbon_fiber_properties?.[0]?.property_header?.[0]?.text}
  </td>

  <td className="phlex-props-th-sub">
    {data?.carbon_fiber_properties?.[0]?.high_strength_header}
  </td>

  <td className="phlex-props-th-sub">
    {data?.carbon_fiber_properties?.[0]?.intermediate_header}
  </td>
</tr>


                {data?.fiber_section_rows?.map((item: any, index: number) => <tr key={index}>
                  <td className="phlex-props-label">{item?.proeprties}</td>
                  <td className="phlex-props-val">{item?.high_strength}</td>
                  <td className="phlex-props-val">{item?.intermediate}</td>
                </tr>)}

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

            {data?.phlex_weights_section?.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <div className="phlex-weight-item">
                  <div className="phlex-weight-icon-box">
                    <img src="/images/avilable-icon.svg" />
                  </div>
                  <h3 className="phlex-weight-val">{item.weight}</h3>
                </div>
                {index !== data.phlex_weights_section.length - 1 && (
                  <div className="phlex-weight-divider"></div>
                )}
              </React.Fragment>
            ))}

            {/* <div className="phlex-weight-item">
              <div className="phlex-weight-icon-box">
                <img src="/images/avilable-icon.svg" />
              </div>
              <h3 className="phlex-weight-val">200 g/m²</h3>
            </div> */}

            {/* <div className="phlex-weight-divider"></div> */}

            {/* <div className="phlex-weight-item">
              <div className="phlex-weight-icon-box">
                <img src="/images/avilable-icon.svg" />
              </div>
              <h3 className="phlex-weight-val">400 g/m²</h3>
            </div> */}

          </div>

          <p className="phlex-weights-footer-text">
            {data?.phlex_weights_footer_text}
          </p>

        </div>
      </section>
      {/* <!-- Available Areal Weights END --> */}

      {/* <!-- Have a Specific Material Requirement?  Strat --> */}
      <section className="phlex-cta-section">

        <img src={data?.phlex_cta_bg_img?.url} alt={data?.phlex_cta_bg_img?.alt || "PhlexCarbon Material Requirement"} className="phlex-cta-bg-img" />

        <div className="phlex-cta-overlay"></div>

        <div className="phlex-cta-container">
          <div className="phlex-cta-content">

            <h2 className="phlex-cta-title"><PrismicText field={data?.phlex_cta_title} /></h2>

            <p className="phlex-cta-desc">
              {data?.phlex_cta_desc1}
            </p>

            <p className="phlex-cta-desc">
              {data?.phlex_cta_desc2}
            </p>

            <div className="phlex-cta-btn-group">
              <Link href="#request-sample" className="phlex-cta-btn phlex-cta-btn-white">
                Request a Sample <img src="/images/top-right-up.svg" />
              </Link>
              <Link href="contact-us" className="phlex-cta-btn phlex-cta-btn-outline">
                Talk to Our Team
              </Link>
            </div>

          </div>
        </div>
      </section>
    

      <Faq data={data?.faq} />

      {/* <!-- Frequently asked questions END --> */}

    </>
  )
}

export default PhlexCarbonCftm
