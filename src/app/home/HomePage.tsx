import React from "react";

const HomePage = (
    {
    data
  }: {
    data: any
  }
) => {
  return (
    <>
      {/* Hero Banner Section Start */}
      <section className="phlex-hero-banner home-page">
        {/* Main Background Image */}
        {/* <img
          src="/images/banner-bg.jpg"
          alt="Phlex Carbon Fiber Background"
          className="phlex-hero-bg-img"
        /> */}

        {/* Gradient Overlay */}
        <div className="phlex-hero-overlay"></div>

        <div className="phlex-hero-container">
          <div className="phlex-hero-content">
            <h1 className="phlex-hero-title">
              {data.hero_title}
            </h1>

            <p className="phlex-hero-desc">
              {data.hero_description_1}
            </p>

            <p className="phlex-hero-desc">
              {data.hero_description_2}
            </p>

            <div className="phlex-hero-btn-group">
              <a
                href="#"
                className="phlex-hero-btn phlex-hero-btn-outline"
              >
                <span>Request a Sample or Quote</span>
              </a>
            </div>
          </div>

          <div className="phlex-hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <i className="ri-arrow-down-s-line phlex-hero-scroll-icon"></i>
          </div>
        </div>
      </section>
      {/* Hero Banner Section End */}

      {/* Advanced Manufacturing Section Start */}
      <section className="phlex-adv-section">
        <div className="phlex-adv-container">
          <div className="phlex-adv-grid">
            <div className="phlex-adv-heading-wrapper">
              <img
                src="/images/bg-logo.png"
                alt="Watermark Logo"
                className="phlex-adv-watermark"
              />

              <h2 className="phlex-adv-title">
                <span className="phlex-adv-blue-text">
                  {data.manf_blue_title}
                </span>{" "}
                {data.manf_black_title}
              </h2>
            </div>

            <div className="phlex-adv-content">
              <p className="phlex-adv-subtext">
                {data.manf_descp_1}
              </p>

              <p className="phlex-adv-desc">
                <strong>{data.manf_descp_2_blue}</strong> {data.manf_descp_2}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Advanced Manufacturing Section End */}

      {/* Carbon Fiber Processing Section Start */}
      <section className="phlex-cta-section">
        <img
          src="/images/left-flag-img.svg"
          alt="PhlexCarbon Material Requirement"
          className="phlex-cta-bg-img"
        />

        <div className="phlex-cta-overlay"></div>

        <div className="phlex-cta-container">
          <div className="phlex-cta-content">
            <h2 className="phlex-cta-title">
              {data.lake_title}
            </h2>

            <p className="phlex-cta-desc">
              {data.lake_desc_1}
            </p>

            <p className="phlex-cta-desc">
             {data.lake_desc_2} 
            </p>
          </div>
        </div>
      </section>
      {/* Carbon Fiber Processing Section End */}

      {/* Carbon Fiber Products Section Start */}
      <section className="phlex-products-section">
        <div className="phlex-products-container">
          <h2 className="phlex-products-title">
            Explore Our <span>Carbon Fiber Products</span>
          </h2>

          <div className="phlex-products-grid">
            {/* Card 01 */}
            <div className="phlex-product-card card-gray">
              <div className="phlex-card-content">
                <span className="phlex-card-num">{data.product1_title}</span>

                <h3 className="phlex-card-title">
                  {data.product1_heading}
                </h3>

                <p className="phlex-card-desc">
                  {data.product1_desc}
                </p>
              </div>

              <div className="home-cards-wrp">
                <a href="#" className="arrow-icons">
                  <img
                    src="/images/top-right-arrow.png"
                    alt="View product"
                  />
                </a>

                <div className="phlex-card-img-wrapper">
                  <img
                    src="/images/explore-1.svg"
                    alt="PhlexCarbon Chopped HSC"
                  />
                  <div className="phlex-card-overlay"></div>
                </div>
              </div>
            </div>

            {/* Card 02 */}
            <div className="phlex-product-card card-blue">
              <div className="phlex-card-content">
                <span className="phlex-card-num">{data.product2_title}</span>

                <h3 className="phlex-card-title">
                  {data.product2_heading}
                </h3>

                <p className="phlex-card-desc">
                  {data.product2_desc1}
                  <br />
                  <br />
                  {data.product2_desc2}
                </p>
              </div>

              <div className="home-cards-wrp">
                <a href="#" className="arrow-icons">
                  <img
                    src="/images/top-right-arrow.png"
                    alt="View product"
                  />
                </a>

                <div className="phlex-card-img-wrapper">
                  <img
                    src="/images/explore-2.svg"
                    alt="PhlexCarbon Chopped IMC"
                  />
                  <div className="phlex-card-overlay"></div>
                </div>
              </div>
            </div>

            {/* Card 03 */}
            <div className="phlex-product-card card-gray">
              <div className="phlex-card-content">
                <span className="phlex-card-num">{data.product3_title}</span>

                <h3 className="phlex-card-title">
                  {data.product3_heading}
                </h3>

                <p className="phlex-card-desc">
                  {data.product3_desc}
                  <br />
                  <br />
                  {data.product3_desc2}
                </p>
              </div>

              <div className="home-cards-wrp">
                <a href="#" className="arrow-icons">
                  <img
                    src="/images/top-right-arrow.png"
                    alt="View product"
                  />
                </a>

                <div className="phlex-card-img-wrapper">
                  <img
                    src="/images/explore-3.svg"
                    alt="Phlex Carbon SPCF 12K Tow"
                  />
                  <div className="phlex-card-overlay"></div>
                </div>
              </div>
            </div>

            {/* Card 04 */}
            <div className="phlex-product-card card-gray">
              <div className="phlex-card-content">
                <span className="phlex-card-num">{data.product4_title}</span>

                <h3 className="phlex-card-title">{data.product4_heading}</h3>

                <p className="phlex-card-desc">
                  {data.product4_desc}
                </p>
              </div>

              <div className="home-cards-wrp">
                <a href="#" className="arrow-icons">
                  <img
                    src="/images/top-right-arrow.png"
                    alt="View product"
                  />
                </a>

                <div className="phlex-card-img-wrapper">
                  <img
                    src="/images/explore-4.svg"
                    alt="PhlexCarbon CFM"
                  />
                  <div className="phlex-card-overlay"></div>
                </div>
              </div>
            </div>

            {/* Card 05 */}
            <div className="phlex-product-card card-blue">
              <div className="phlex-card-content">
                <span className="phlex-card-num">{data.product5_title}</span>

                <h3 className="phlex-card-title">{data.product5_heading}</h3>

                <p className="phlex-card-desc">
                  {data.product5_desc}
                </p>
              </div>

              <div className="home-cards-wrp">
                <a href="#" className="arrow-icons">
                  <img
                    src="/images/top-right-arrow.png"
                    alt="View product"
                  />
                </a>

                <div className="phlex-card-img-wrapper">
                  <img
                    src="/images/explore-5.svg"
                    alt="PhlexCarbon CFTM"
                  />
                  <div className="phlex-card-overlay"></div>
                </div>
              </div>
            </div>

            {/* Card 06 */}
            <div className="phlex-product-card card-gray">
              <div className="phlex-card-content">
                <span className="phlex-card-num">{data.product6_title}</span>

                <h3 className="phlex-card-title">
                  {data.product6_heading}
                </h3>

                <p className="phlex-card-desc">
                  {data.product6_desc}
                </p>
              </div>

              <div className="home-cards-wrp">
                <a href="#" className="arrow-icons">
                  <img
                    src="/images/top-right-arrow.png"
                    alt="View product"
                  />
                </a>

                <div className="phlex-card-img-wrapper">
                  <img
                    src="/images/explore-6.svg"
                    alt="Phlexsize Carbon Fiber Sizing"
                  />
                  <div className="phlex-card-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Carbon Fiber Products Section End */}

      {/* Demanding Applications Section Start */}
      <section className="phlex-apps-section">
        <div className="phlex-apps-container">
          <div className="phlex-apps-grid">
            <div className="phlex-apps-left">
              <h2 className="phlex-apps-title">
                {data.demand_head_black}{" "}
                <span className="phlex-blue-text">
                  {data.demand_head_blue}
                </span>
              </h2>

              <p className="phlex-apps-subtext">
                <strong>{data.demand_desc_blue}</strong> {data.demand_desc1}
              </p>

              <p className="phlex-apps-caption">
                {data.demand_desc2}
              </p>

              <div className="phlex-apps-tabs">
                <div
                  className="phlex-tab-item active"
                  data-img="/images/item-1.svg"
                >
                  <h3 className="phlex-tab-title">
                    {data.dhead1}
                  </h3>

                  <p className="phlex-tab-desc">
                    {data.ddesc1}
                  </p>
                </div>

                <div
                  className="phlex-tab-item"
                  data-img="/images/item-1.svg"
                >
                  <h3 className="phlex-tab-title">
                    {data.dhead2}
                  </h3>

                  <p className="phlex-tab-desc">
                    {data.ddesc2}
                  </p>
                </div>

                <div
                  className="phlex-tab-item"
                  data-img="/images/item-1.svg"
                >
                  <h3 className="phlex-tab-title">
                    {data.dhead3}
                  </h3>

                  <p className="phlex-tab-desc">
                    {data.ddesc3}
                  </p>
                </div>

                <div
                  className="phlex-tab-item"
                  data-img="/images/item-1.svg"
                >
                  <h3 className="phlex-tab-title">
                    {data.dhead4}
                  </h3>

                  <p className="phlex-tab-desc">
                    {data.ddesc4}
                  </p>
                </div>

                <div
                  className="phlex-tab-item"
                  data-img="/images/item-1.svg"
                >
                  <h3 className="phlex-tab-title">
                    {data.dhead5}
                  </h3>

                  <p className="phlex-tab-desc">
                    {data.ddesc5}
                  </p>
                </div>
              </div>
            </div>

            <div className="phlex-apps-right">
              <div className="phlex-circle-badge">
                <svg
                  className="phlex-rotating-text"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />

                  <text
                    fontSize="10.5"
                    fontWeight="600"
                    fill="#031F55"
                    letterSpacing="1.2"
                  >
                    <textPath href="#circlePath">
                      PHLEX CARBON FIBER PHLEX CARBON FIBER PHLEX CARBON FIBER
                    </textPath>
                  </text>
                </svg>

                <div className="phlex-center-logo">
                  <img
                    src="/images/move-logo.png"
                    alt="Phlex Logo"
                  />
                </div>
              </div>

              <div className="phlex-img-frame">
                <img
                  id="phlexFeatureImg"
                  src="/images/item-1.svg"
                  alt="Aerospace & Defense"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Demanding Applications Section End */}

      {/* Flexible Materials Section Start */}
      <section className="phlex-flex-section">
        <div className="phlex-flex-container">
          <h2 className="phlex-flex-title">
            <span className="phlex-blue-text">
              {data.flexible_head_blue}
            </span>{" "}
            {data.flexible_head}
          </h2>

          <p className="phlex-flex-subtext">
            Material requirements can vary significantly from one application
            and manufacturing process to another. That's why{" "}
            <strong>Phlex Carbon Fiber</strong> offers flexibility across our
            product portfolio.
          </p>

          <p className="phlex-flex-desc">
            {data.flexible_desc_2}
          </p>

          <div className="phlex-flex-img-wrapper">
            <img
              src="/images/raw-material-img.svg"
              alt="Flexible Carbon Fiber Materials"
            />
          </div>

          <div className="phlex-flex-btn-wrapper">
            <a href="#products" className="phlex-flex-btn">
              Find the Right Product
              <img
                src="/images/right-arrow.svg"
                alt="arrow"
              />
            </a>
          </div>
        </div>
      </section>
      {/* Flexible Materials Section End */}

      {/* Why Phlex Carbon Fiber Section Start */}
      <section className="phlex-why-section">
        <div className="phlex-why-container">
          <div className="phlex-why-grid">
            <div className="phlex-why-left">
              <h2 className="phlex-why-title">
                Why Phlex Carbon
                Fiber?
              </h2>

              <p className="phlex-why-desc">
                Chopped carbon fiber is available in high-strength and
                intermediate-modulus grades, with multiple fiber lengths and
                seeded or unseeded configurations. Carbon fiber tow can be
                re-wound to customer-specific spool weights. Non-woven
                materials are offered in multiple areal weights, with custom
                weights available upon request. Our fiber sizing portfolio
                provides additional options for compatibility with a range of
                resin systems.
              </p>
            </div>

            <div className="phlex-why-right">
              {/* Card 01 */}
              <div className="phlex-card bg-grey">
                <div className="phlex-card-num">01</div>

                <div className="phlex-card-content">
                  <h3 className="phlex-card-title">
                    Multiple Carbon Fiber Formats
                  </h3>

                  <p className="phlex-card-desc">
                    Chopped carbon fiber, continuous tow, non-woven carbon
                    fiber and fiber sizing solutions.
                  </p>
                </div>

                <div className="phlex-card-img">
                  <img
                    src="/images/format-chopped-1.svg"
                    alt="Multiple Carbon Fiber Formats"
                  />
                </div>
              </div>

              {/* Card 02 */}
              <div className="phlex-card bg-blue">
                <div className="phlex-card-num">02</div>

                <div className="phlex-card-content">
                  <h3 className="phlex-card-title">
                    High-Strength &amp; Intermediate-Modulus Options
                  </h3>

                  <p className="phlex-card-desc">
                    Carbon fiber grades designed to address different
                    material and performance requirements.
                  </p>
                </div>

                <div className="phlex-card-img">
                  <img
                    src="/images/format-chopped-2.svg"
                    alt="High Strength Carbon Fiber Spool"
                  />
                </div>
              </div>

              {/* Card 03 */}
              <div className="phlex-card bg-grey">
                <div className="phlex-card-num">03</div>

                <div className="phlex-card-content">
                  <h3 className="phlex-card-title">
                    Customizable Solutions
                  </h3>

                  <p className="phlex-card-desc">
                    Options for custom fiber lengths, spool weights,
                    non-woven areal weights and sizing systems.
                  </p>
                </div>

                <div className="phlex-card-img">
                  <img
                    src="/images/format-chopped-3.svg"
                    alt="Customizable Non-woven Solutions"
                  />
                </div>
              </div>

              {/* Card 04 */}
              <div className="phlex-card bg-blue">
                <div className="phlex-card-num">04</div>

                <div className="phlex-card-content">
                  <h3 className="phlex-card-title">
                    U.S. Based Processing
                  </h3>

                  <p className="phlex-card-desc">
                    Carbon fiber processing and production in Lake City,
                    South Carolina.
                  </p>
                </div>

                <div className="phlex-card-img">
                  <img
                    src="/images/format-chopped-4.svg"
                    alt="U.S. Based Processing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Phlex Carbon Fiber Section End */}

      {/* CTA Banner Section Start */}
      <section className="pcf-cta-banner-section">
        <div className="pcf-cta-bg-overlay"></div>

        <div className="pcf-cta-wrapper">
          <h2 className="pcf-cta-main-title">
            Find the Right Carbon Fiber for Your Application
          </h2>

          <p className="pcf-cta-description">
            Your material should fit your process - not the other way
            around.
            <br />
            Tell us about your application, manufacturing process and
            material requirements, and our team can help identify the Phlex
            Carbon Fiber product and configuration that best fits your
            needs.
          </p>

          <div className="pcf-cta-action-group">
            <a
              href="#request-sample"
              className="pcf-cta-btn pcf-cta-btn-primary"
            >
              Request a Sample
              <img
                src="/images/top-right-up.svg"
                alt=""
              />
            </a>

            <a
              href="#contact"
              className="pcf-cta-btn pcf-cta-btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      {/* CTA Banner Section End */}

      {/* Resources Section Start */}
      <section className="pcf-res-section">
        <div className="pcf-res-container">
          <div className="pcf-res-header">
            <div className="pcf-res-header-left">
              <h2 className="pcf-res-title">Resources</h2>

              <p className="pcf-res-subtitle">
                Chopped carbon fiber is available in high-strength and
                intermediate-modulus grades, with multiple fiber lengths and
                seeded or unseeded configurations.
              </p>
            </div>

            <div className="pcf-res-header-right">
              <a
                href="#resources"
                className="pcf-res-view-btn"
              >
                View all Resources
                <img
                  src="/images/right-arrow.svg"
                  alt="arrow"
                />
              </a>
            </div>
          </div>

          <div className="pcf-res-grid">
            {/* Resource Card 01 */}
            <article className="pcf-res-card">
              <div className="pcf-res-img-wrapper pcf-res-img-tall">
                <img
                  src="/images/resource-home-img-1.svg"
                  alt="Construction Warehouse"
                />
              </div>

              <div className="pcf-res-card-content">
                <span className="pcf-res-date">
                  Jan 15, 2025
                </span>

                <h3 className="pcf-res-card-title">
                  <a href="#">
                    What to Consider Before Starting a Construction Project
                  </a>
                </h3>
              </div>
            </article>

            {/* Resource Card 02 */}
            <article className="pcf-res-card">
              <div className="pcf-res-img-wrapper pcf-res-img-short">
                <img
                  src="/images/resource-home-img-2.svg"
                  alt="Plastic Pellets"
                />
              </div>

              <div className="pcf-res-card-content">
                <span className="pcf-res-date">
                  Jan 15, 2025
                </span>

                <h3 className="pcf-res-card-title">
                  <a href="#">
                    How Better Planning Can Prevent Cost Overruns
                  </a>
                </h3>
              </div>
            </article>

            {/* Resource Card 03 */}
            <article className="pcf-res-card">
              <div className="pcf-res-img-wrapper pcf-res-img-tall">
                <img
                  src="/images/resource-home-img-3.svg"
                  alt="Lab Testing"
                />
              </div>

              <div className="pcf-res-card-content">
                <span className="pcf-res-date">
                  Jan 15, 2025
                </span>

                <h3 className="pcf-res-card-title">
                  <a href="#">
                    What Clients Should Look for in a Construction Partner
                  </a>
                </h3>
              </div>
            </article>

            {/* Resource Card 04 */}
            <article className="pcf-res-card">
              <div className="pcf-res-img-wrapper pcf-res-img-short">
                <img
                  src="/images/resource-home-img-4.svg"
                  alt="Electric Car on Mountain Road"
                />
              </div>

              <div className="pcf-res-card-content">
                <span className="pcf-res-date">
                  Jan 15, 2025
                </span>

                <h3 className="pcf-res-card-title">
                  <a href="#">
                    How Technology Is Changing Project Visibility
                  </a>
                </h3>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Resources Section End */}
    </>
  );
};

export default HomePage;
