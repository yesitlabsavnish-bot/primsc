import Faq from '@/components/Faq'
import React from 'react'

const PhlexCarbonSpcf = () => {
  return (
          <>
      {/* <!-- Hero Banner Section Start --> */}
<section className="phlex-hero-banner">
  
  {/* Main Background Image (HTML Tag) */}
  {/* <img src="/images/banner-bg.jpg" alt="Phlex Carbon Fiber Background" className="phlex-hero-bg-img" /> */}

  {/* Gradient Overlay */}
  <div className="phlex-hero-overlay"></div>

  <div className="phlex-hero-container">
    <div className="phlex-hero-content">
      
      {/* Main Heading */}
      <h1 className="phlex-hero-title">PHLEX CARBON CFTM</h1>
      
      {/* Sub Heading */}
      <h2 className="phlex-hero-subtitle">
        More Flexibility in a Non-Woven Format
      </h2>
      
      {/* Descriptions */}
      <p className="phlex-hero-desc">
        When your process calls for a non-woven carbon fiber material, having options matters. PhlexCarbon CFM is a wet-laid mat of randomly oriented carbon fibers, available using either high-strength (standard-modulus) or intermediate-modulus fiber.
      </p>
      
      <p className="phlex-hero-desc">
        Designed for closed- and open-mold infusion, pre-preg and compression molding, PhlexCarbon CFM is offered in multiple areal weights, with custom weights and stitch bonding available upon request.
      </p>

      <p className="phlex-hero-desc">
        The material utilizes repurposed carbon fibers and is produced in Lake City, South Carolina.
      </p>

      {/* Action Buttons Container */}
      <div className="phlex-hero-btn-group">
        <a href="#" className="phlex-hero-btn phlex-hero-btn-white">
          <span>Request a Sample/Quote</span>
          <img src="/images/top-right-up.svg"/>
        </a>
        <a href="#" className="phlex-hero-btn phlex-hero-btn-outline">
          <span>Contact Our Team</span>
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
      <h2 className="phlex-options-main-title">One Non-Woven Format, Two Fiber Options</h2>
      <p className="phlex-options-subtitle">
        Different material requirements call for different carbon fiber properties. PhlexCarbon CFM gives you the choice between high-strength (standard-modulus) and intermediate-modulus carbon fiber within the same wet-laid, randomly oriented format.
      </p>
      <p className="phlex-options-subtitle-sub">
        Both options are available in multiple areal weights, making it easier to explore the configuration that fits your process and requirements.
      </p>
    </div>

    {/* <!-- Cards Grid --> */}
    <div className="phlex-options-grid">
      
      {/* Card 01: High-Strength */}
      <div className="phlex-options-card">
        <img src="/images/high-stren.svg" alt="High-Strength Carbon Fiber" className="phlex-options-card-img" />
        <div className="phlex-options-card-overlay phlex-overlay-grey"></div>
        <div className="phlex-options-card-content">
          <span className="phlex-options-number">01.</span>
          <h3 className="phlex-options-card-title">High-Strength (Standard-Modulus)<br/>Carbon Fiber</h3>
          <p className="phlex-options-card-text">
            The high-strength option uses carbon fiber with a 7-micron filament diameter.
          </p>
          <p className="phlex-options-card-text">
            The fiber has a tensile strength of 4,413 MPa, tensile modulus of 231 GPa and elongation at break of 1.7%.
          </p>
        </div>
      </div>

      {/* <!-- Card 02: Intermediate-Modulus --> */}
      <div className="phlex-options-card">
        <img src="/images/high-stren-2.svg" alt="Intermediate-Modulus Carbon Fiber" className="phlex-options-card-img" />
        <div className="phlex-options-card-overlay phlex-overlay-blue"></div>
        <div className="phlex-options-card-content">
          <span className="phlex-options-number">02.</span>
          <h3 className="phlex-options-card-title">Intermediate-Modulus<br/>Carbon Fiber</h3>
          <p className="phlex-options-card-text">
            PhlexCarbon CFM is also available using intermediate-modulus carbon fiber with a 5-micron filament diameter.
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
        <h2 className="phlex-process-title">Made for More Than One Process</h2>
        
        <p className="phlex-process-desc">
          Your manufacturing process plays an important role in the material you choose. PhlexCarbon CFM is designed for use across several composite manufacturing methods, including:
        </p>

        <div className="phlex-process-list">
          <div className="phlex-process-item">
            <img src="/images/closed-mold-infusion .svg"/>
            <span>Closed-mold infusion</span>
          </div>
          <div className="phlex-process-item">
             <img src="/images/closed-mold-infusion .svg"/>
            <span>Open-mold infusion</span>
          </div>
          <div className="phlex-process-item">
             <img src="/images/closed-mold-infusion .svg"/>
            <span>Pre-preg</span>
          </div>
          <div className="phlex-process-item">
             <img src="/images/closed-mold-infusion .svg"/>
            <span>Compression molding</span>
          </div>
        </div>

        <p className="phlex-process-desc">
          Whichever of these processes you're working with, PhlexCarbon CFM provides a wet-laid mat of randomly oriented carbon fibers in a roll format.
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
        <h2 className="phlex-flexibility-title">More Flexibility in the Details</h2>
        
        <p className="phlex-flexibility-desc">
          Material requirements don't always stop at fiber grade. PhlexCarbon CFM is available in 100, 200 and 400 g/m² areal weights, giving you multiple standard configurations to consider.
        </p>

        <p className="phlex-flexibility-desc">
          Have something different in mind? Other custom weights are available upon request, and stitch bonding can also be added upon request.
        </p>

        <p className="phlex-flexibility-desc">
          The material is supplied in roll form with a 1.2 m roll width and nominal 400–500 mm roll diameter.
        </p>
      </div>

      {/* <!-- Right Image Column --> */}
      <div className="phlex-flexibility-media">
        <div className="phlex-flexibility-img-box">
          <img src="/images/right-item-img.svg" alt="PhlexCarbon CFM Mat Sample" className="phlex-flexibility-img" />
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
          <tr>
            <td className="phlex-props-label">Fiber Length</td>
            <td className="phlex-props-val" colSpan={2}>13 mm nominal</td>
          </tr>
          <tr>
            <td className="phlex-props-label">Areal Weight Variation</td>
            <td className="phlex-props-val" colSpan={2} >±6% (coefficient of variation)</td>
          </tr>
          <tr>
            <td className="phlex-props-label">Content</td>
            <td className="phlex-props-val" colSpan={2}>98% repurposed carbon fiber, 2% binder fiber</td>
          </tr>
          <tr>
            <td className="phlex-props-label">Filament Diameter</td>
            <td className="phlex-props-val" colSpan={2}>7 microns (high strength); 5 microns (intermediate modulus)</td>
          </tr>
          <tr>
            <td className="phlex-props-label">Sizing Content</td>
            <td className="phlex-props-val" colSpan={2}>0%</td>
          </tr>
          <tr>
            <td className="phlex-props-label">Form</td>
            <td className="phlex-props-val" colSpan={2}>Roll</td>
          </tr>
          <tr>
            <td className="phlex-props-label">Roll Width</td>
            <td className="phlex-props-val" colSpan={2}>1.2m</td>
          </tr>
          <tr>
            <td className="phlex-props-label">Roll Diameter</td>
            <td className="phlex-props-val" colSpan={2}>400–500 mm nominal</td>
          </tr>
          <tr>
            <td className="phlex-props-label">Stitch Bonding</td>
            <td className="phlex-props-val" colSpan={2}>Available upon request</td>
          </tr>

          <tr className="phlex-props-divider-row">
            <td colSpan={3}>Carbon Fiber Properties</td>
          </tr>

          <tr className="phlex-props-subhead-row">
            <td className="phlex-props-th-sub">Property</td>
            <td className="phlex-props-th-sub">High Strength</td>
            <td className="phlex-props-th-sub">Intermediate</td>
          </tr>

          <tr>
            <td className="phlex-props-label">Tensile Strength</td>
            <td className="phlex-props-val">4,413 MPa</td>
            <td className="phlex-props-val">5,480 MPa</td>
          </tr>
          <tr>
            <td className="phlex-props-label">Elongation at Break</td>
            <td className="phlex-props-val">1.7%</td>
            <td className="phlex-props-val">1.9%</td>
          </tr>
          <tr>
            <td className="phlex-props-label">Tensile Modulus</td>
            <td className="phlex-props-val">231 GPa</td>
            <td className="phlex-props-val">276 GPa</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</section>
{/* <!-- Typical Properties END --> */}

{/* <!-- Available Areal Weights Strat --> */}
{/* <section className="phlex-weights-section">
  
  <img src="/images/available-areal.svg" alt="Carbon Fiber Areal Weights" className="phlex-weights-bg-img" />
  
  <div className="phlex-weights-overlay"></div>

  <div className="phlex-weights-container">
    
    <h2 className="phlex-weights-title">Available Areal Weights</h2>

    <div className="phlex-weights-grid">
      
      <div className="phlex-weight-item">
        <div className="phlex-weight-icon-box">
          <img src="/images/avilable-icon.svg"/>
        </div>
        <h3 className="phlex-weight-val">100 g/m²</h3>
      </div>

      <div className="phlex-weight-divider"></div>

      <div className="phlex-weight-item">
        <div className="phlex-weight-icon-box">
          <img src="/images/avilable-icon.svg"/>
        </div>
        <h3 className="phlex-weight-val">200 g/m²</h3>
      </div>

      <div className="phlex-weight-divider"></div>

      <div className="phlex-weight-item">
        <div className="phlex-weight-icon-box">
          <img src="/images/avilable-icon.svg"/>
        </div>
        <h3 className="phlex-weight-val">400 g/m²</h3>
      </div>

    </div>

    <p className="phlex-weights-footer-text">
      PhlexCarbon CFM is packaged one roll per box, with net weight varying depending on areal weight.
    </p>

  </div>
</section> */}
{/* <!-- Available Areal Weights END --> */}

{/* <!-- Have a Specific Material Requirement?  Strat --> */} 
<section className="phlex-cta-section">
  
  <img src="/images/right-requrement-img.svg" alt="PhlexCarbon Material Requirement" className="phlex-cta-bg-img" />
  
  <div className="phlex-cta-overlay"></div>

  <div className="phlex-cta-container">
    <div className="phlex-cta-content">
      
      <h2 className="phlex-cta-title">Have a Specific Material Requirement?</h2>
      
      <p className="phlex-cta-desc">
        Whether you're deciding between high-strength and intermediate-modulus fiber, considering different areal weights or looking for stitch bonding, our team is here to help you explore the available PhlexCarbon CFM configurations.
      </p>

      <p className="phlex-cta-desc">
        Tell us what you're looking for, and we'll help you navigate the available options for your process.
      </p>

      <div className="phlex-cta-btn-group">
        <a href="#request-sample" className="phlex-cta-btn phlex-cta-btn-white">
          Request a Sample <img src="/images/top-right-up.svg"/>
        </a>
        <a href="#contact" className="phlex-cta-btn phlex-cta-btn-outline">
          Talk to Our Team
        </a>
      </div>

    </div>
  </div>
</section>
{/* <!-- Have a Specific Material Requirement?  END --> */}

{/* <!-- Frequently asked questions Strat --> */}

  <Faq />
{/* <!-- Frequently asked questions END --> */}
    
    </>
  )
}

export default PhlexCarbonSpcf
