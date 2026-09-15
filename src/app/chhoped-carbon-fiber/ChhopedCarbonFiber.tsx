"use client";
import Faq from '@/components/Faq'
import React from 'react'
import { PrismicText } from '@prismicio/react'
import Link from 'next/link';

const renderText = (field: any) => {
    if (!field) return null;
    if (typeof field === 'string') return field;
    if (Array.isArray(field)) return <PrismicText field={field as any} />;
    if (typeof field === 'object' && field.text) return field.text;
    return null;
}

const ChhopedCarbonFiber = ({ data }: { data: any }) => {


    console.log(data, "chhoped carbon fiber")


    return (
        <>
            {/* <!-- Hero Banner Section Start --> */}
            <section className="phlex-hero-banner">

                {/* Main Background Image (HTML Tag) */}
                {/* <img src="/images/banner-bg.jpg" alt="Phlex Carbon Fiber Background" className="phlex-hero-bg-img" /> */}

                {/* Gradient Overlay */}
                <div className="phlex-hero-overlay" ></div>

                <div className="phlex-hero-container">
                    <div className="phlex-hero-content">

                        {/* Main Heading */}
                        <h1 className="phlex-hero-title">{renderText(data?.title)}</h1>

                        {/* Sub Heading */}
                        <h2 className="phlex-hero-subtitle">
                            {renderText(data?.sub_title)}
                        </h2>

                        {/* Descriptions */}
                        <p className="phlex-hero-desc">
                            {renderText(data?.descriprtion1)}
                        </p>

                        <p className="phlex-hero-desc">
                            {renderText(data?.descriprtion2)}
                        </p>

                        <p className="phlex-hero-desc">
                            {renderText(data?.descriprtion3)}
                        </p>

                        {/* Action Buttons Container */}
                        <div className="phlex-hero-btn-group">
                            <Link href="https://form.smartsuite.com/sca8tl4o/LzQIXwEWlL" target="_blank" className="phlex-hero-btn phlex-hero-btn-white">
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
            <section className="phlex-options-section">


                <img src="/images/bg-logo.png" alt="Watermark Logo" className="phlex-options-watermark" />

                <div className="phlex-options-container">

                    {/* Section Header */}
                    <div className="phlex-options-header">
                        <h2 className="phlex-options-main-title">{renderText(data?.main_title)}</h2>
                        <p className="phlex-options-subtitle">
                            {renderText(data?.phlex_options_subtitle)}
                        </p>
                        {/* <p className="phlex-options-subtitle-sub">
                            Both options are available in multiple areal weights, making it easier to explore the configuration that fits your process and requirements.
                        </p> */}
                    </div>

                    {/* <!-- Cards Grid --> */}
                    <div className="phlex-options-grid">

                        {/* Card 01: High-Strength */}
                        {data?.phlex_options_card?.map((item: any, index: number) => (
                            <div className="phlex-options-card" key={index}>
                                <img src={item?.phlex_options_card_img?.url} alt={item?.phlex_options_card_img?.alt || item?.phlex_options_card_title} className="phlex-options-card-img" />
                                <div className={`phlex-options-card-overlay phlex-overlay`}></div>
                                <div className="phlex-options-card-content">
                                    <span className="phlex-options-number">{renderText(item?.phlex_options_number)}.</span>
                                    <h3 className="phlex-options-card-title">
                                        {renderText(item?.phlex_options_card_title)}
                                        {item?.phlex_options_card_title_str && <>{renderText(item?.phlex_options_card_title_str)}</>}
                                    </h3>
                                    <p className="phlex-options-card-text">
                                        {renderText(item?.phlex_options_card_text1)}
                                    </p>
                                    <p className="phlex-options-card-text">
                                        {renderText(item?.phlex_options_card_text2)}
                                    </p>
                                    <p className="phlex-options-card-text">
                                        {renderText(item?.phlex_options_card_text3)}
                                    </p>
                                    <br />
                                    <a
                                        href={item?.datasheet_pdf?.url || '#'}
                                        download
                                        target="_blank"
                                        className="phlex-hero-btn phlex-hero-btn-white"
                                    >
                                        <span>{renderText(item?.phlex_options_card_datasheet)}</span>
                                        <img src="/images/top-right-up.svg" alt="" />
                                    </a>
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
            </section>
            {/* <!-- One Non-Woven Format Section End --> */}


            {/* <!-- Made for More Than One Process Start --> */}
            <section className="phlex-process-section">
                <div className="phlex-process-container">
                    <div className="phlex-process-grid">

                        <div className="phlex-process-content">
                            <h2 className="phlex-process-title">{renderText(data?.phlex_process_title)}</h2>

                            <p className="phlex-process-desc">
                                {renderText(data?.phlex_process_desc1)}
                            </p>

                            <p className="phlex-process-desc">
                                {renderText(data?.phlex_process_desc2)}
                            </p>

                            <p className="phlex-process-desc">
                                {renderText(data?.phlex_process_desc3)}
                            </p>
                        </div>

                        <div className="phlex-process-media">
                            <div className="phlex-process-graphic-wrapper">
                                <img src={data?.phlex_process_img?.url} alt="PhlexCarbon Manufacturing Processes" className="phlex-process-img" />
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
                            <h2 className="phlex-flexibility-title">{renderText(data?.phlex_flexibility_title)}</h2>

                            <p className="phlex-flexibility-desc">
                                {renderText(data?.phlex_flexibility_desc1)}
                            </p>

                            <p className="phlex-flexibility-desc">
                                {renderText(data?.phlex_flexibility_desc2)}
                            </p>

                            <p className="phlex-flexibility-desc">
                                {renderText(data?.phlex_flexibility_desc3)}
                            </p>
                        </div>

                        {/* <!-- Right Image Column --> */}
                        <div className="phlex-flexibility-media">
                            <div className="phlex-flexibility-img-box">
                                <img src={data?.phlex_flexibility_img?.url} alt="PhlexCarbon CFM Mat Sample" className="phlex-flexibility-img" />
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
                            {/* <thead>
                               {data?.typical_properties.map((item: any, index: any) => (<tr key={index}>
                                                 <th className="phlex-props-th-left" colSpan={2}><PrismicText field={item?.title} /></th>
                                                 <th className="phlex-props-th-center" colSpan={2}>{item.property_header1}</th>
                                                  <th className="phlex-props-th-right" colSpan={2}>{item.property_header2}</th>
                                               </tr>))}
                            </thead> */}

                            <tbody>

                                {/* {data?.typical_properties.map((item: any, index: any) => ( */}
                                <tr className="phlex-props-subhead-row">
                                    <td className="phlex-props-th-sub">{renderText(data?.typical_properties?.[0]?.title)}</td>
                                    <td className="phlex-props-th-sub">{renderText(data?.typical_properties?.[0]?.proeprties)}</td>
                                    <td className="phlex-props-th-sub">{renderText(data?.typical_properties?.[0]?.property_header2)}</td>
                                </tr>
                                {/* ))} */}

                                {/* {item <tr>
                                    <td className="phlex-props-label">Tensile Strength</td>
                                    <td className="phlex-props-val">4,413 MPa</td>
                                    <td className="phlex-props-val">5,480 MPa</td>
                                </tr>} */}

                                {data?.standard_properties?.map((item: any, index: number) => <tr key={index}>
                                    <td className="phlex-props-label">{renderText(item?.proeprties)}</td>
                                    <td className="phlex-props-val">{renderText(item?.value)}</td>
                                    <td className="phlex-props-val">{renderText(item?.value2)}</td>
                                </tr>)}


                            </tbody>
                        </table>
                    </div>

                </div>

                <span
                    className="phlex-props-note text-center d-block mt-3 fw-medium"
                    style={{ color: "#000", fontWeight: "500", lineHeight: "24px" }}
                >
                    Custom fiber lengths are available upon request.
                </span>
            </section>


            {/* <!-- Typical Properties END --> */}

            {/* <!-- Available Areal Weights Strat --> */}

            {/* <!-- Have a Specific Material Requirement?  END --> */}

            {/* <!-- Frequently asked questions Strat --> */}
            <Faq data={data?.faq} />
            {/* <!-- Frequently asked questions END --> */}


            <section className="pcf-cta-banner-section">
                <div className="pcf-cta-bg-overlay"></div>

                <div className="pcf-cta-wrapper">
                    <h2 className="pcf-cta-main-title">
                        {renderText(data?.pcf_cta_main_title)}
                    </h2>

                    <p className="pcf-cta-description">
                        {renderText(data?.pcf_cta_description1)}
                        <br />
                        {data.talk_desc2}
                    </p>

                    <div className="pcf-cta-action-group">
                        <Link
                            href="https://form.smartsuite.com/sca8tl4o/LzQIXwEWlL"
                            target="_blank"
                            className="pcf-cta-btn pcf-cta-btn-primary"
                        >
                            Request a Sample
                            <img src="/images/top-right-up.svg" alt="" />
                        </Link>


                        <Link
                            href="/contact-us"
                            className="pcf-cta-btn pcf-cta-btn-secondary"
                        >
                            Contact Our Team
                        </Link>

                    </div>
                </div>
            </section>

        </>
    )
}

export default ChhopedCarbonFiber