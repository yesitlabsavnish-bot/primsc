"use client";

import Link from "next/link";
import React, { useState } from "react";


const HomePage = (
  {
    data,
    blogs
  }: {
    data: any;
    blogs?: any[];
  }
) => {
  const [activeDemand, setActiveDemand] = useState(0);
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
          src={data.lake_image?.url}
          alt={data.lake_image?.alt || "FPhlexCarbon Material Requirement"}
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

          {/* <div className="phlex-products-grid">
            <div className="phlex-product-card card-gray">
              <div className="phlex-card-content">
                <span className="phlex-card-num">{data.product1_title}</span>

                <h3 className="phlex-card-title">
                  {data.product1_heading}
                </h3>

                <p className="phlex-card-desc">
                  {data.product1_desc}
                   <br />
                  <br />
                  {data.product1_desc1}
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

            <div className="phlex-product-card card-gray">
              <div className="phlex-card-content">
                <span className="phlex-card-num">{data.product4_title}</span>

                <h3 className="phlex-card-title">{data.product4_heading}</h3>

                <p className="phlex-card-desc">
                  {data.product4_desc}
                   <br />
                  <br />
                  {data.product4_des4}
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

            <div className="phlex-product-card card-blue">
              <div className="phlex-card-content">
                <span className="phlex-card-num">{data.product5_title}</span>

                <h3 className="phlex-card-title">{data.product5_heading}</h3>

                <p className="phlex-card-desc">
                  {data.product5_desc}
                   <br />
                  <br />
                  {data.product5_desc5}
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
          </div> */}

          <div className="phlex-products-grid">
            {data.product_card?.map((item: any, index: number) => (
              <div
                key={index}
                className="phlex-product-card card-gray"
              >
                <div className="phlex-card-content">
                  <span className="phlex-card-num">
                    {item.product_title}
                  </span>

                  <h3 className="phlex-card-title">
                    {item.product_heading}
                  </h3>

                  <p className="phlex-card-desc">
                    {item.product_desc_1}

                    {item.product_desc_2 && (
                      <>
                        <br />
                        <br />
                        {item.product_desc_2}
                      </>
                    )}
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
                    {item.product_image?.url && (
                      <img
                        src={item.product_image.url}
                        alt={
                          item.product_image.alt ||
                          item.product_heading ||
                          "Phlex Carbon Fiber"
                        }
                      />
                    )}

                    <div className="phlex-card-overlay"></div>
                  </div>
                </div>
              </div>
            ))}
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

              {/* <div className="phlex-apps-tabs">
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
              </div> */}
              <div className="phlex-apps-tabs">
                {data.demand_group?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`phlex-tab-item ${
                      activeDemand === index ? "active" : ""
                    }`}
                    onClick={() => setActiveDemand(index)}
                  >
                    <h3 className="phlex-tab-title">
                      {item.dhead}
                    </h3>

                    <p className="phlex-tab-desc">
                      {item.ddesc}
                    </p>
                  </div>
                ))}
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

              {/* <div className="phlex-img-frame">
                <img
                  id="phlexFeatureImg"
                  src="/images/item-1.svg"
                  alt="Aerospace & Defense"
                />
              </div> */}
              <div className="phlex-img-frame">
                {data.demand_group?.[activeDemand]?.dimage?.url && (
                  <img
                    id="phlexFeatureImg"
                    src={data.demand_group[activeDemand].dimage.url}
                    alt={
                      data.demand_group[activeDemand].dimage.alt ||
                      data.demand_group[activeDemand].dhead ||
                      "Phlex Carbon Fiber"
                    }
                  />
                )}
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
              src={data.flexible_image?.url}
              alt={data.flexible_image?.alt || "Flexible Carbon Fiber Materials"}
            />
          </div>

          <div className="phlex-flex-btn-wrapper">
            <a href="/contact-us" className="phlex-flex-btn">
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
                {data.why_title}
              </h2>

              <p className="phlex-why-desc">
                {data.why_description}
              </p>
            </div>

            <div className="phlex-why-right">


                {data.why_card?.map((card: any, index: number) => (
                  <div
                    className={`phlex-card ${
                      index % 2 === 0 ? "bg-grey" : "bg-blue"
                    }`}
                    key={index}
                  >
                    <div className="phlex-card-num">
                      {card.why_title}
                    </div>

                    <div className="phlex-card-content">
                      <h3 className="phlex-card-title">
                        {card.why_heading}
                      </h3>

                      <p className="phlex-card-desc">
                        {card.why_description}
                      </p>
                    </div>

                    <div className="phlex-card-img">
                      <img
                        src={card.why_image?.url || ""}
                        alt={
                          card.why_image?.alt ||
                          card.why_title ||
                          ""
                        }
                      />
                    </div>
                  </div>
                ))}


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
            {data.cta_heading}
          </h2>

          <p className="pcf-cta-description">
            {data.cta_desc1}
            <br />
            {data.cta_desc2}
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
              href="/contact-us"
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
              <Link
                href="/blog"
                className="pcf-res-view-btn"
              >
                View all Resources
                <img
                  src="/images/right-arrow.svg"
                  alt="arrow"
                />
              </Link>
            </div>
          </div>

     <div className="pcf-res-grid">
            {blogs?.map((blog: any, index: number) => (
              <article className="pcf-res-card" key={blog.id || index}>
                <div className={`pcf-res-img-wrapper ${index % 2 === 0 ? 'pcf-res-img-tall' : 'pcf-res-img-short'}`}>
                  {blog.data.featured_image?.url ? (
                    <img
                      src={blog.data.featured_image.url}
                      alt={blog.data.featured_image.alt || blog.data.title || "Blog image"}
                    />
                  ) : (
                    <img
                      src={`/images/resource-home-img-${(index % 4) + 1}.svg`}
                      alt="Placeholder"
                    />
                  )}
                </div>
 
                <div className="pcf-res-card-content">
                  <span className="pcf-res-date">
                    {blog.data.publication_date || "Jan 15, 2025"}
                  </span>
 
                  <h3 className="pcf-res-card-title">
                    <Link href={`/blog-detail/${blog.uid}`}>
                      {blog.data.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>


        </div>
      </section>
      {/* Resources Section End */}
    </>
  );
};

export default HomePage;
