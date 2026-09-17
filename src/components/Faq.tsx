"use client";
import React, { useState } from 'react'
import { PrismicRichText, PrismicText } from '@prismicio/react'

// import { PrismicRichText, PrismicText } from '@prismicio/react';

const renderText = (field: any) => {
    if (!field) return null;

    if (typeof field === 'string') return field;

    if (Array.isArray(field)) {
        return <PrismicRichText field={field as any} />;
    }

    if (typeof field === 'object' && field.text) return field.text;

    return null;
};

const Faq = ({ data }: { data: any }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('faqCollapse0');

  console.log(data, "faq data")

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <>
      <section className="phlex-faq-section">
        <div className="phlex-faq-container">

          <h2 className="phlex-faq-main-title">Frequently asked questions</h2>

          <div className="phlex-faq-grid">

            <div className="phlex-faq-left">
              <div className="accordion phlex-custom-accordion" id="phlexFaqAccordion">

                {data?.map((item: any, index: number) => {
                  const collapseId = `faqCollapse${index}`;
                  const isExpanded = activeAccordion === collapseId;
                  
                  return (
                    <div className="accordion-item" key={index}>
                      <h3 className="accordion-header" id={`faqHeading${index}`}>
                        <button 
                          className={`accordion-button ${isExpanded ? '' : 'collapsed'}`} 
                          type="button" 
                          onClick={() => toggleAccordion(collapseId)} 
                          aria-expanded={isExpanded} 
                          aria-controls={collapseId}
                        >
                          {renderText(item.question)}
                        </button>
                      </h3>
                      <div 
                        id={collapseId} 
                        className={`accordion-collapse ${isExpanded ? 'block' : 'hidden'}`} 
                        aria-labelledby={`faqHeading${index}`} 
                        data-bs-parent="#phlexFaqAccordion"
                      >
                        <div className="accordion-body">
                          {renderText(item.answer)}
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

            <div className="phlex-faq-right">
              <div className="phlex-faq-card">
                <div className="phlex-faq-card-icon">
                  <img src="/images/circum_mail.svg" />
                </div>
                <h4 className="phlex-faq-card-title">Do you have more question?</h4>
                <p className="phlex-faq-card-desc">
                  If you have more questions, feel free to reach out to us anytime!
                </p>
                <a href="mailto:info@phlexcarbon.com" className="phlex-faq-card-btn">
                  Shoot a Direct Mail<img src="/images/right-arrow.svg" alt="arrow" />
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
