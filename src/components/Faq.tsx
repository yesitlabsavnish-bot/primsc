import React from 'react'

const Faq = () => {
  return (
    <>
       <section className="phlex-faq-section">
  <div className="phlex-faq-container">
    
    <h2 className="phlex-faq-main-title">Frequently asked questions</h2>

    <div className="phlex-faq-grid">
      
      <div className="phlex-faq-left">
        <div className="accordion phlex-custom-accordion" id="phlexFaqAccordion">
          
          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeadingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseOne" aria-expanded="true" aria-controls="faqCollapseOne">
                How do I choose the right PhlexCarbon CFM configuration for my application?
              </button>
            </h3>
            <div id="faqCollapseOne" className="accordion-collapse collapse show" aria-labelledby="faqHeadingOne" data-bs-parent="#phlexFaqAccordion">
              <div className="accordion-body">
                Selection depends on the required fiber performance and material requirements of the application. PhlexCarbon CFM is available with different fiber types and areal weights, allowing the configuration to be matched to specific needs.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeadingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo">
                Are custom areal weights available for PhlexCarbon CFM?
              </button>
            </h3>
            <div id="faqCollapseTwo" className="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#phlexFaqAccordion">
              <div className="accordion-body">
                Yes, custom areal weights beyond our standard configurations (100, 200, and 400 g/m²) can be manufactured upon request to meet your specific application requirements.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeadingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree">
                Can I discuss a specific application before selecting PhlexCarbon CFM?
              </button>
            </h3>
            <div id="faqCollapseThree" className="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#phlexFaqAccordion">
              <div className="accordion-body">
                Absolutely! Our technical sales team is ready to analyze your process demands and help you select or design the exact configuration required for your project.
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="phlex-faq-right">
        <div className="phlex-faq-card">
          <div className="phlex-faq-card-icon">
            <img src="/images/circum_mail.svg"/>
          </div>
          <h4 className="phlex-faq-card-title">Do you have more question?</h4>
          <p className="phlex-faq-card-desc">
            If you have more questions, feel free to reach out to us anytime!
          </p>
          <a href="mailto:info@phlexcarbon.com" className="phlex-faq-card-btn">
            Shoot a Direct Mail<img src="/images/right-arrow.svg" alt="arrow"/>
          </a>
        </div>
      </div>

    </div>

  </div>
</section>
    </>
  )
}

export default Faq
