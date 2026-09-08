import React from "react";

const About = () => {
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
              High-Performance Carbon Fiber Materials
            </h1>

            {/* Descriptions */}
            <p className="phlex-hero-desc">
              Phlex Carbon Fiber supplies carbon fiber materials and sizing
              solutions for demanding composite and manufacturing applications.
            </p>

            <p className="phlex-hero-desc">
              From precision-cut chopped carbon fiber and continuous carbon
              fiber tow to non-woven materials and fiber sizing compounds, our
              product portfolio gives manufacturers multiple options to meet
              their material, processing and performance requirements.
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
          <div className="phlex-hero-scroll">
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
                More Than a{" "}
                <span className="pcf-sup-title-blue">Material Supplier</span>
              </h2>

              <p className="pcf-sup-text">
                Selecting carbon fiber is only part of the equation. Fiber
                length, modulus, sizing, material format, and compatibility
                with the manufacturing process can all influence which
                solution makes sense for a particular application.{" "}
                <strong className="pcf-sup-highlight">
                  Phlex Carbon Fiber
                </strong>{" "}
                brings these considerations together.
              </p>

              <p className="pcf-sup-text">
                Rather than approaching every customer with the same material,
                we work to understand what they are manufacturing and the
                requirements behind it. Our broad range of carbon fiber
                formats, grades, and configurations gives customers more ways
                to align the material with their process.
              </p>

              <p className="pcf-sup-text pcf-sup-goal">
                <strong>The goal is simple:</strong>{" "}
                <span className="pcf-sup-goal-blue">
                  provide the right carbon fiber in the right form for the work
                  it needs to do.
                </span>
              </p>
            </div>

            {/* Right Image Column */}
            <div className="pcf-sup-media">
              <div className="pcf-sup-img-wrapper">
                <img
                  src="/images/right-material-img.svg"
                  alt="Phlex Carbon Fiber Manufacturing Facility"
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
            <h2 className="pcf-phlex-title">Built on Phlexibility</h2>

            <p className="pcf-phlex-subtitle">
              Our capabilities have been developed around the reality that
              manufacturers don't all need carbon fiber the same way.
              <br />
              Some applications require precision cut short fibers. Others
              require continuous tow, randomly oriented non-wovens or carbon
              fiber combined with thermoplastics.
              <br />
              Resin systems can introduce another set of requirements
              entirely.
              <br />
              Phlex Carbon Fiber addresses those differences through a
              portfolio that can be adapted across several key variables.
            </p>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="pcf-phlex-grid">
            {/* Card 01 */}
            <div className="pcf-phlex-card pcf-phlex-card-grey">
              <div
                className="pcf-phlex-card-bg"
                style={{
                  backgroundImage: "url('/images/built-1.svg')",
                }}
              ></div>

              <div className="pcf-phlex-card-overlay"></div>

              <div className="pcf-phlex-card-content">
                <span className="pcf-phlex-num">01.</span>

                <h3 className="pcf-phlex-card-title">Fiber Grade</h3>

                <p className="pcf-phlex-card-desc">
                  High-strength standard-modulus and intermediate-modulus
                  carbon fiber options.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="pcf-phlex-card pcf-phlex-card-blue">
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
            </div>

            {/* Card 03 */}
            <div className="pcf-phlex-card pcf-phlex-card-grey">
              <div
                className="pcf-phlex-card-bg"
                style={{
                  backgroundImage: "url('/images/built-3.svg')",
                }}
              ></div>

              <div className="pcf-phlex-card-overlay"></div>

              <div className="pcf-phlex-card-content">
                <span className="pcf-phlex-num">03.</span>

                <h3 className="pcf-phlex-card-title">Configuration</h3>

                <p className="pcf-phlex-card-desc">
                  High-strength standard-modulus and intermediate-modulus
                  carbon fiber options.
                </p>
              </div>
            </div>

            {/* Card 04 */}
            <div className="pcf-phlex-card pcf-phlex-card-blue">
              <div
                className="pcf-phlex-card-bg"
                style={{
                  backgroundImage: "url('/images/built-4.svg')",
                }}
              ></div>

              <div className="pcf-phlex-card-overlay"></div>

              <div className="pcf-phlex-card-content">
                <span className="pcf-phlex-num">04.</span>

                <h3 className="pcf-phlex-card-title">
                  Fiber–Matrix Compatibility
                </h3>

                <p className="pcf-phlex-card-desc">
                  A range of aqueous sizing dispersions for different resin
                  systems, supported by expertise in selecting the appropriate
                  sizing chemistry.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer Note */}
          <div className="pcf-phlex-footer">
            <p>
              This flexibility allows us to support established manufacturing
              processes while also working with customers developing new
              applications for carbon fiber.
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
              Giving Carbon Fiber Another Path Forward
            </h2>

            <p className="pcf-path-desc">
              Several Phlex Carbon Fiber products put that material back to
              work. PhlexCarbon Chopped IMC repurposes intermediate-modulus
              carbon fiber from manufacturing processes, while our carbon fiber
              non-wovens utilize repurposed carbon fibers to create new
              material formats.
              <br />
              <strong>
                At the same time, other products within our portfolio are
                manufactured using virgin carbon fiber where the product calls
                for it.
              </strong>
              <br />
              For Phlex, material efficiency is about finding productive uses
              for valuable carbon fiber while continuing to provide customers
              with material options for their applications.
            </p>
          </div>

          {/* Process Workflow Steps */}
          <div className="pcf-path-flow">
            {/* Step 1 */}
            <div className="pcf-path-step">
              <div className="pcf-path-img-box">
                <img
                  src="/images/carbon-1.svg"
                  alt="Carbon Fiber Manufacturing"
                />
              </div>

              <h3 className="pcf-path-step-title">
                Carbon Fiber
                <br />
                Manufacturing
              </h3>
            </div>

            {/* Arrow */}
            <div className="pcf-path-arrow" aria-hidden="true">
              <img src="/images/right-arrow-about.svg" alt="" />
            </div>

            {/* Step 2 */}
            <div className="pcf-path-step">
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
            </div>

            {/* Arrow */}
            <div className="pcf-path-arrow" aria-hidden="true">
              <img src="/images/right-arrow-about.svg" alt="" />
            </div>

            {/* Step 3 */}
            <div className="pcf-path-step">
              <div className="pcf-path-img-box">
                <img src="/images/carbon-3.svg" alt="Processing" />
              </div>

              <h3 className="pcf-path-step-title">Processing</h3>
            </div>

            {/* Arrow */}
            <div className="pcf-path-arrow" aria-hidden="true">
              <img src="/images/right-arrow-about.svg" alt="" />
            </div>

            {/* Step 4 */}
            <div className="pcf-path-step">
              <div className="pcf-path-img-box">
                <img
                  src="/images/carbon-4.svg"
                  alt="Chopped IMC / Non-Wovens"
                />
              </div>

              <h3 className="pcf-path-step-title">
                Chopped IMC /
                <br />
                Non-Wovens
              </h3>
            </div>

            {/* Arrow */}
            <div className="pcf-path-arrow" aria-hidden="true">
              <img src="/images/right-arrow-about.svg" alt="" />
            </div>

            {/* Step 5 */}
            <div className="pcf-path-step">
              <div className="pcf-path-img-box">
                <img src="/images/carbon-5.svg" alt="New Applications" />
              </div>

              <h3 className="pcf-path-step-title">New Applications</h3>
            </div>
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
                Carbon Fiber Expertise,
                <br />
                From Fiber to Interface
              </h2>

              <p className="pcf-sup-text">
                The performance of a composite depends on more than the carbon
                fiber itself.
              </p>

              <p className="pcf-sup-text">
                Our capabilities extend into fiber sizing through Phlexsize
                Carbon Fiber Sizing, a portfolio of aqueous sizing dispersions
                developed to enhance fiber–matrix compatibility, composite
                performance and manufacturing efficiency.
              </p>

              <p className="pcf-sup-text">
                With sizing options for resin systems including PA66, PEEK,
                PEKK and epoxy, our team can help customers consider not only
                the carbon fiber they need, but how that fiber interacts with
                the surrounding matrix.
              </p>

              <p className="pcf-sup-text">
                It's a broader approach to carbon fiber — one that considers
                the material as part of the complete manufacturing system.
              </p>
            </div>

            {/* Right Image Column */}
            <div className="pcf-sup-media">
              <div className="pcf-sup-img-wrapper about-ftr">
                <img
                  src="/images/right-corbonflex.svg"
                  alt="Phlex Carbon Fiber Manufacturing Facility"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made to Meet the Process Section */}
      <section className="phlex-cta-section about-section">
        <img
          src="/images/left-flag-img.svg"
          alt="PhlexCarbon Material Requirement"
          className="phlex-cta-bg-img"
        />

        <div className="phlex-cta-overlay"></div>

        <div className="phlex-cta-container">
          <div className="phlex-cta-content">
            <h2 className="phlex-cta-title">Made to Meet the Process</h2>

            <p className="phlex-cta-desc">
              Our carbon fiber processing and production take place in Lake
              City, South Carolina.
            </p>

            <p className="phlex-cta-desc">
              But what defines Phlex Carbon Fiber isn't simply where we
              operate. It's our ability to work across different fiber grades,
              material formats, and customer requirements.
            </p>

            <p className="phlex-cta-desc">
              From custom chopped fiber lengths and customer-specific spool
              weights to custom non-woven weights and specialized sizing
              systems, our capabilities give manufacturers room to specify
              materials around their process rather than forcing their process
              around a standard product.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner Section Start */}
      <section className="pcf-cta-banner-section">
        <div className="pcf-cta-bg-overlay"></div>

        <div className="pcf-cta-wrapper">
          <h2 className="pcf-cta-main-title">
            Let's Talk About What You're Building
          </h2>

          <p className="pcf-cta-description">
            The best place to start isn't with a product number. It's with the
            application.
            <br />
            Tell us what you're manufacturing, how you're processing it and
            what you need from the material. We'll help you determine which
            Phlex Carbon Fiber solution makes sense for your requirements.
          </p>

          <div className="pcf-cta-action-group">
            <a
              href="#request-sample"
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
