import Faq from '@/components/Faq'
import React from 'react'

const PhlexCarbonSpcf = (
  {
    data
  }: {
    data: any
  }
) => {
  return (
          <>
      {/* <!-- Hero Banner Section Start --> */}
<section className="phlex-hero-banner-spcf">
  
  {/* Main Background Image (HTML Tag) */}
  {/* <img src="/images/banner-bg.jpg" alt="Phlex Carbon Fiber Background" className="phlex-hero-bg-img" /> */}

  {/* Gradient Overlay */}
  <div className="phlex-hero-overlay-spcf"></div>

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
        <a href="#" className="phlex-hero-btn phlex-hero-btn-white">
          <span>{data.hero_button_1}</span>
          <img src="/images/top-right-up.svg"/>
        </a>
        <a href="/contact-us" className="phlex-hero-btn phlex-hero-btn-outline">
          <span>{data.hero_button_2}</span>
        </a>
      </div>

    </div>

    {/* Scroll Indicator Bottom */}
    <div className="phlex-hero-scroll">
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
      <h2 className="phlex-options-main-title">{data.about_title}</h2>
      <p className="phlex-options-subtitle">
        {data.about_description}
      </p>

          <div className="phlex-flex-btn-wrapper">
            <a href="#" className="phlex-flex-btn">
              View Phelx Carbon SPCF 12K Tow Technical Data Sheet
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
        <div className="phlex-options-card-overlay phlex-overlay-grey"></div>
        <div className="phlex-options-card-content">
          <span className="phlex-options-number">{data.option_1_title}</span>
          <h3 className="phlex-options-card-title">{data.option_1_text_1}</h3>
          <p className="phlex-options-card-text">
            {data.option_1_text_2}
          </p>
          <p className="phlex-options-card-text">
            {data.option_1_text_3}
          </p>
        </div>
      </div>

      {/* <!-- Card 02: Intermediate-Modulus --> */}
      <div className="phlex-options-card">
        <img src="/images/high-stren-2.svg" alt="Intermediate-Modulus Carbon Fiber" className="phlex-options-card-img" />
        <div className="phlex-options-card-overlay phlex-overlay-blue"></div>
        <div className="phlex-options-card-content">
          <span className="phlex-options-number">{data.option_2_title}</span>
          <h3 className="phlex-options-card-title">{data.option_2_text_1}</h3>
          <p className="phlex-options-card-text">
            {data.option_2_text_2}
          </p>
          <p className="phlex-options-card-text">
            {data.option_2_text_3}
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
        <h2 className="phlex-process-title">{data.winding_title}</h2>
        
        <p className="phlex-process-desc">
          {data.winding_subtitle}
        </p>

         <p className="phlex-process-desc">{data.winding_des1}</p>
         <p className="phlex-process-desc">{data.winding_des2}</p>
         <p className="phlex-process-desc">{data.winding_des3}</p>
         <p className="phlex-process-desc">{data.winding_des4}</p>

        <p className="phlex-process-desc">
          {data.winding_des5}
        </p>
      </div>

      <div className="phlex-process-media">
        <div className="phlex-process-graphic-wrapper">
          <img src="/images/spcf1.png" alt="PhlexCarbon Manufacturing Processes" className="phlex-process-img" />
        </div>
      </div>

    </div>
  </div>
</section>
{/* <!-- Made for More Than One Process END --> */}

{/* <!-- Typical Properties Strat --> */}
<section className="phlex-props-section">
  <div className="phlex-props-container">
    
    <h2 className="phlex-props-title">Typical Properties</h2>

    <div className="phlex-props-table-wrapper">
      <table className="phlex-props-table">
        <thead>
          <tr>
            <th className="phlex-props-th-left">Property</th>
            <th className="phlex-props-th-right" colSpan={2}>Phlex Carbon SPCF 12K Tow</th>
          </tr>
        </thead>
        
        <tbody>
            {
              data.typical_properties?.map((data: any, index: number) => (
                <tr key={index}>
                  <td className="phlex-props-label">{data.properties}</td>
                  <td className="phlex-props-val" colSpan={2}>{data.phlex_carbon_spcf}</td>

                </tr>
              ))
            }

          <tr className="phlex-props-divider-row">
            <td colSpan={3}>Available Options</td>
          </tr>

          {
            data.available_options?.map((data: any, index: number) => (
              <tr key={index}>
                <td className="phlex-props-label">{data.option1}</td>
                <td className="phlex-props-val">{data.option2}</td>
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
      
      <h2 className="phlex-cta-title">{data.tell_us_title}</h2>
      
      <p className="phlex-cta-desc">
        {data.tell_us_subtitle}
      </p>

      <p className="phlex-cta-desc">
        {data.tell_us_des}
      </p>

      <div className="phlex-cta-btn-group">
        <a href="#request-sample" className="phlex-cta-btn phlex-cta-btn-white">
          {data.tell_us_button1} <img src="/images/top-right-up.svg"/>
        </a>
        <a href="#contact" className="phlex-cta-btn phlex-cta-btn-outline">
          {data.tell_us_button2}
        </a>
      </div>

    </div>
  </div>
</section>
{/* <!-- Have a Specific Material Requirement?  END --> */}

{/* <!-- Frequently asked questions Strat --> */}

      <Faq data={data?.faqs} />

{/* <!-- Frequently asked questions END --> */}
    
    </>
  )
}

export default PhlexCarbonSpcf
