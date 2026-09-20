"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const Contactus = ({ data }: { data: any }) => {
  console.log("data", data);

  const latitude = data?.map_latitude;
  const longitude = data?.map_longitude;

  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);

const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;

  const [contactForm, setContactForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Submission failed:", result.error);

        toast.error(
          result?.error ||
            "Something went wrong while submitting the form."
        );

        return;
      }

      console.log("Success:", result.message);

      // Reset form only after successful submission
      setContactForm({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
      });

      toast.success(
        result?.message ||
          "Your message has been submitted successfully."
      );
    } catch (error) {
      console.error("Submit error:", error);

      toast.error(
        "Something went wrong while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* <!-- Hero Banner Section Start --> */}
      <section className="phlex-hero-banner contact-us"   
      style={{
    background: `
      linear-gradient(
        90deg,
        #031F55 0%,
        #031F55 42%,
        rgba(3, 31, 85, 0.90) 52%,
        rgba(3, 31, 85, 0.55) 62%,
        rgba(3, 31, 85, 0.20) 72%,
        transparent 82%
      ),
      url(${data?.background_image?.url})
      center center / cover no-repeat
    `,
  }}
  >
        {/* <img src={data?.background_image?.url} alt="Phlex Carbon Fiber Background" className="phlex-hero-bg-img" /> */}

        <div className="phlex-hero-overlay"></div>

        <div className="phlex-hero-container">
          <div className="phlex-hero-content">
            <h1 className="phlex-hero-title">
              {data?.phlex_contact_title}
            </h1>

            <p className="phlex-hero-desc">
              {data?.phlex_hero_desc}
            </p>

            {/* <!-- Action Buttons Container --> */}
            {/* 
            <div className="phlex-hero-btn-group">
              <a href="https://form.smartsuite.com/sca8tl4o/LzQIXwEWlL" target="_blank" className="phlex-hero-btn phlex-hero-btn-outline">
                <span>Request a Sample or Quote</span>
              </a>
            </div>
            */}
          </div>

          {/* <!-- Scroll Indicator Bottom --> */}
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

      {/* <!-- Get In Touch Section Start --> */}
      <section className="pcf-git-section">
        <div className="pcf-git-container">
          <div className="pcf-git-wrapper">

            {/* <!-- Left Contact Info Card --> */}
            <div className="pcf-git-info-card">
              <h3 className="pcf-git-info-heading">
                Contact Information
              </h3>

              <div className="pcf-git-info-list">

                {/* <!-- Email Block --> */}
                <div className="pcf-git-info-item">
                  <div className="pcf-git-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="4"
                        width="20"
                        height="16"
                        rx="2"
                      ></rect>

                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>

                  <div className="pcf-git-details">
                    <span className="pcf-git-label">Email</span>

                    <a
                      href="mailto:Cservice@phlextek.com"
                      className="pcf-git-val"
                    >
                      {data?.email}
                    </a>
                  </div>
                </div>

                {/* <!-- Phone Block --> */}
                <div className="pcf-git-info-item">
                  <div className="pcf-git-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>

                  <div className="pcf-git-details">
                    <span className="pcf-git-label">
                      Phone Number
                    </span>

                    <a
                      href="tel:8557543865"
                      className="pcf-git-val"
                    >
                      {data?.number}
                    </a>
                  </div>
                </div>

                {/* <!-- Available Block --> */}
                <div className="pcf-git-info-item">
                  <div className="pcf-git-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                      ></circle>

                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>

                  <div className="pcf-git-details">
                    <span className="pcf-git-label">
                      Available
                    </span>

                    <span className="pcf-git-val">
                      {data?.available_day}
                    </span>

                    <span className="pcf-git-val pcf-git-subval">
                      {data?.available_time}
                    </span>
                  </div>
                </div>
              </div>

              {/* <!-- Decorative Background Circles Overlay --> */}
              <div className="pcf-git-circle pcf-git-circle-1"></div>
              <div className="pcf-git-circle pcf-git-circle-2"></div>
            </div>

            {/* <!-- Right Form Card --> */}
            <div className="pcf-git-form-card">
              <h2 className="pcf-git-form-title">
                Get In Touch
              </h2>

              {/* <form
                className="pcf-git-form"
                onSubmit={handleSubmit}
              >
                <div className="pcf-git-form-row">

                  <div className="pcf-git-field">
                    <label
                      htmlFor="pcf-fname"
                      className="pcf-git-field-label"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      name="first_name"
                      value={contactForm.first_name}
                      onChange={handleInputChange}
                      id="pcf-fname"
                      className="pcf-git-input"
                      placeholder="Enter your first name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="pcf-git-field">
                    <label
                      htmlFor="pcf-lname"
                      className="pcf-git-field-label"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="last_name"
                      value={contactForm.last_name}
                      onChange={handleInputChange}
                      id="pcf-lname"
                      className="pcf-git-input"
                      placeholder="Enter your last name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="pcf-git-field">
                  <label
                    htmlFor="pcf-email"
                    className="pcf-git-field-label"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    id="pcf-email"
                    className="pcf-git-input"
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="pcf-git-field">
                  <label
                    htmlFor="pcf-message"
                    className="pcf-git-field-label"
                  >
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    id="pcf-message"
                    className="pcf-git-input pcf-git-textarea"
                    rows={2}
                    placeholder="Write your message..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div className="pcf-git-btn-wrap">
                  <button
                    type="submit"
                    className="pcf-git-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}

                    <img
                      src="/images/right-arrow.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
              </form> */}
              <iframe src="https://app.smartsuite.com/form/sca8tl4o/MC09mTWsI2?embed=true&header=false" width="100%" height="600px" frameBorder={0}></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Get In Touch Section End --> */}

      {/* <!-- Map Section Start --> */}
      <section className="pcf-map-section">
        <div className="pcf-map-container">
          <div className="pcf-map-card">

            {/* <!-- Custom Overlay Controls (Top Left) --> */}
            <div className="pcf-map-overlay-left">

              {/* <!-- Zoom Controls --> */}
              <div className="pcf-map-zoom-controls">
                <button
                  type="button"
                  className="pcf-map-zoom-btn"
                  title="Zoom In"
                >
                  +
                </button>

                <button
                  type="button"
                  className="pcf-map-zoom-btn"
                  title="Zoom Out"
                >
                  −
                </button>
              </div>

              {/* <!-- Get Directions Button --> */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pcf-map-directions-btn"
              >
                <span className="pcf-map-icon"></span>
                <span>GET DIRECTIONS</span>
              </a>
            </div>

            {/* <!-- Crop Wrapper to hide default Google Info Card --> */}
            <div className="pcf-map-iframe-wrapper">
              <iframe
                className="pcf-map-iframe"
                src={mapUrl}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Map Section End --> */}
    </>
  );
};

export default Contactus;