"use client";
import Link from "next/link";
import React from "react";

const About = (
  {
    data
  }: {
    data: any
  }
) => {

const [activePathStep, setActivePathStep] = React.useState(-1);

React.useEffect(() => {
  const section = document.querySelector(".pcf-path-flow");

  if (!section) return;

  let animationInterval: ReturnType<typeof setInterval> | null = null;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const totalSteps = data.path_flow?.length || 0;

        if (!totalSteps) return;

        let index = 0;

        // Start from Image 1
        setActivePathStep(0);

        animationInterval = setInterval(() => {
          index = (index + 1) % totalSteps;
          setActivePathStep(index);
        }, 1000);
      } else {
        // Stop when section is not visible
        if (animationInterval) {
          clearInterval(animationInterval);
          animationInterval = null;
        }

        setActivePathStep(-1);
      }
    },
    {
      threshold: 0.4,
    }
  );

  observer.observe(section);

  return () => {
    observer.disconnect();

    if (animationInterval) {
      clearInterval(animationInterval);
    }
  };
}, [data.path_flow]);


  return (
    <>
      {/* Hero Banner Section Start */}
      <section className="phlex-hero-banner about-page">
        {/* <img
          src="/images/banner-bg.jpg"
          alt="Phlex Carbon Fiber Background"
          className="phlex-hero-bg-img"
        /> */}

        <div className="phlex-hero-overlay"></div>

        <div className="phlex-hero-container">
          <div className="phlex-hero-content">
            {/* Main Heading */}
            <h1 className="phlex-hero-title">
              {data.hero_title}
            </h1>

            {/* Descriptions */}
            <p className="phlex-hero-desc">
              {data.hero_description_1}
            </p>

            <p className="phlex-hero-desc">
              {data.hero_description_2}
            </p>

            {/* Action Buttons Container */}
            {/*
            <div className="phlex-hero-btn-group">
              <a
                href="#"
                className="phlex-hero-btn phlex-hero-btn-outline"
              >
                <span>Request a Sample or Quote</span>
              </a>
            </div>
            */}
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

      {/* More Than a Material Supplier Section Start */}
      <section className="pcf-sup-section">
        <div className="pcf-sup-container">
          <div className="pcf-sup-grid">
            {/* Left Content Column */}
            <div className="pcf-sup-content">
              <img
                src="/images/bg-logo.png"
                alt="Watermark Logo"
                className="phlex-adv-watermark-about"
              />

              <h2 className="pcf-sup-title">
               {data.material_head}{" "}
                <span className="pcf-sup-title-blue">{data.material_head_b}</span>
              </h2>

              <p className="pcf-sup-text">
                {data.material_desc1}{" "}
                <strong className="pcf-sup-highlight">
                  {data.material_desc1b}
                </strong>{" "}
                {data.material_desc1a}
              </p>

              <p className="pcf-sup-text">
                {data.material_desc2}
              </p>

              <p className="pcf-sup-text pcf-sup-goal">
                <strong>{data.material_desc3}</strong>{" "}
                <span className="pcf-sup-goal-blue">
                  {data.material_desc3_b}
                </span>
              </p>
            </div>

            {/* Right Image Column */}
            <div className="pcf-sup-media">
              <div className="pcf-sup-img-wrapper">
                <img
                  src={data.material_image?.url}
                  alt={data.material_image?.alt || "Phlex Carbon Fiber Manufacturing Facility"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built on Phlexibility Section Start */}
      <section className="pcf-phlex-section">
        <div className="pcf-phlex-container">
          {/* Top Header Content */}
          <div className="pcf-phlex-header">
            <h2 className="pcf-phlex-title">{data.built_heading}</h2>

            <p className="pcf-phlex-subtitle">
              {data.built_subtitle1}
              <br />
              {data.built_subtitle2}
              <br />
              {data.built_subtitle3}
              <br />
              {data.built_subtitle4}
            </p>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="pcf-phlex-grid">
            {/* Card 01 */}
              {data.built_card?.map((card: any, index: number) => (
                <div
                  className="pcf-phlex-card"
                  key={index}
                >
                  <div
                    className="pcf-phlex-card-bg"
                    style={{
                      backgroundImage: `url(${card.built_card_image?.url || ""})`,
                    }}
                  ></div>

                  <div className="pcf-phlex-card-overlay"></div>

                  <div className="pcf-phlex-card-content">
                    <span className="pcf-phlex-num">
                      {card.built_card_number}
                    </span>

                    <h3 className="pcf-phlex-card-title">
                      {card.built_card_title}
                    </h3>

                    <p className="pcf-phlex-card-desc">
                      {card.built_card_desc}
                    </p>
                  </div>
                </div>
              ))}

            {/* Card 02 */}
            {/* <div className="pcf-phlex-card pcf-phlex-card-blue">
              <div
                className="pcf-phlex-card-bg"
                style={{
                  backgroundImage: "url('/images/built-2.svg')",
                }}
              ></div>

              <div className="pcf-phlex-card-overlay"></div>

              <div className="pcf-phlex-card-content">
                <span className="pcf-phlex-num">02.</span>

                <h3 className="pcf-phlex-card-title">Material Format</h3>

                <p className="pcf-phlex-card-desc">
                  Chopped fiber, continuous tow and wet-laid non-woven
                  materials.
                </p>
              </div>
            </div> */}
           
          </div>

          {/* Bottom Footer Note */}
          <div className="pcf-phlex-footer">
            <p>
             {data.built_desc}
            </p>
          </div>
        </div>
      </section>

      {/* Carbon Fiber Path Forward Section Start */}
      <section className="pcf-path-section">
        <div className="pcf-path-container">
          {/* Top Header */}
          <div className="pcf-path-header">
            <h2 className="pcf-path-title">
              {data.path_heading}
            </h2>

            <p className="pcf-path-desc">
              {data.path_desc1}
              <br />
              <strong>
                {data.path_desc2}
              </strong>
              <br />
              {data.path_desc3}
            </p>
          </div>

          {/* Process Workflow Steps */}
          <div className="pcf-path-flow">
            {data.path_flow?.map((step: any, index: number) => (
              <React.Fragment key={index}>
                {/* Step */}
                <div
                    className={`pcf-path-step ${
                      activePathStep === index ? "path-step-active" : ""
                    }`}
                  >
                  <div className="pcf-path-img-box">
                    <img
                      src={step.path_flow_image?.url || ""}
                      alt={step.path_flow_image?.alt || step.path_flow_title || ""}
                    />
                  </div>

                  <h3 className="pcf-path-step-title">
                    {step.path_flow_title}
                    <br />
                    {step.pathflow_subtitle}
                  </h3>
                </div>

                {/* Arrow - don't show after last step */}
                {index < data.path_flow.length - 1 && (
                  <div className="pcf-path-arrow" aria-hidden="true">
                    <img
                      src="/images/right-arrow-about.svg"
                      alt=""
                    />
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Step 2 */}
            {/* <div className="pcf-path-step">
              <div className="pcf-path-img-box">
                <img
                  src="/images/carbon-2.svg"
                  alt="Recovered / Repurposed Fiber"
                />
              </div>

              <h3 className="pcf-path-step-title">
                Recovered /
                <br />
                Repurposed Fiber
              </h3>
            </div> */}

            {/* Arrow */}
            {/* <div className="pcf-path-arrow" aria-hidden="true">
              <img src="/images/right-arrow-about.svg" alt="" />
            </div> */}
           
          </div>

        </div>
      </section>

      {/* Carbon Fiber Expertise Section Start */}
      <section className="pcf-sup-section">
        <div className="pcf-sup-container">
          <div className="pcf-sup-grid">
            {/* Left Content Column */}
            <div className="pcf-sup-content">
              <h2 className="pcf-sup-title">
                {data.expertise_heading1}
                <br />
                {data.expertise_heading2}
              </h2>

              <p className="pcf-sup-text">
                {data.expertise_desc1}
              </p>

              <p className="pcf-sup-text">
                {data.expertise_desc2}
              </p>

              <p className="pcf-sup-text">
                {data.expertise_desc3}
              </p>

              <p className="pcf-sup-text">
                {data.expertise_desc4}
              </p>
            </div>

            {/* Right Image Column */}
            <div className="pcf-sup-media">
              <div className="pcf-sup-img-wrapper about-ftr">
                <img
                  src={data.expertise_image?.url}
                  alt={data.expertise_image?.alt || "Phlex Carbon Fiber Manufacturing Facility"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made to Meet the Process Section */}
      <section className="phlex-cta-section about-section">
        <img
           src={data.meet_image?.url}
           alt={data.expertise_image?.alt || "PhlexCarbon Material Requirement"}
          className="phlex-cta-bg-img"
        />

        <div className="phlex-cta-overlay"></div>

        <div className="phlex-cta-container">
          <div className="phlex-cta-content">
            <h2 className="phlex-cta-title">{data.meet_heading}</h2>

            <p className="phlex-cta-desc">
              {data.meet_desc1}
            </p>

            <p className="phlex-cta-desc">
              {data.meet_desc2}
            </p>

            <p className="phlex-cta-desc">
              {data.meet_desc3}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner Section Start */}
      <section className="pcf-cta-banner-section">
        <div className="pcf-cta-bg-overlay"></div>

        <div className="pcf-cta-wrapper">
          <h2 className="pcf-cta-main-title">
            {data.talk_heading}
          </h2>

          <p className="pcf-cta-description">
            {data.talk_desc1}
            <br />
            {data.talk_desc2}
          </p>

          <div className="pcf-cta-action-group">
            <a
              href="/contact-us"
              className="pcf-cta-btn pcf-cta-btn-primary"
            >
              Talk to Our Team
              <img src="/images/top-right-up.svg" alt="" />
            </a>

            {/*
            <a
              href="#contact"
              className="pcf-cta-btn pcf-cta-btn-secondary"
            >
              Contact Us
            </a>
            */}
          </div>
        </div>
      </section>

      {/* CTA Banner Section End */}
    </>
  );
};

export default About;
