import "./fiber-sizing.css";
import { createClient } from "@/prismicio";
// import { PrismicText } from "@prismicio/react";

export default async function FiberSizingPage() {
  const client = createClient();

  const { data } = await client
    .getByUID("fiber_sizing", "fiber-sizing")
    .catch(() => ({
      data: null,
    }));

  if (!data) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Fiber Sizing page not found</h1>
        <p>
          Please create a Fiber Sizing document in Prismic with UID:
          <strong> fiber-sizing</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="fiber-page">
      {/* Header */}
      <header className="fiber-header">
        <div className="fiber-wrap fiber-nav-row">
          <div className="fiber-logo">
            <span className="fiber-logo-mark" />

            <span>
              PHLEX
              <br />
              <small>POLYMERS</small>
            </span>
          </div>

          <nav className="fiber-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#" className="active">
                  Products
                </a>
              </li>

              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>

          <div className="fiber-nav-right">
            <a
              href="#"
              className="btn btn-navy"
              style={{ padding: "10px 20px" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="fiber-hero">
        <div className="fiber-hero-texture" />

        <div className="fiber-wrap fiber-hero-inner">
          <div className="fiber-eyebrow-line" />

          <h1>{data.hero_title}</h1>

          <h2>
            {data.hero_subtitle}
          </h2>

          <p>
            {data.hero_description_1}
          </p>

          <p>
            {data.hero_description_2}
          </p>

          <div className="fiber-hero-actions">
            <a href="#offering" className="btn btn-primary">
              {data.hero_button_1} →
            </a>

            <a href="#find-fit" className="btn btn-outline">
              {data.hero_button_2}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="fiber-about" id="about">
        <div className="fiber-about-mark">&quot;</div>

        <div className="fiber-wrap">
          <h2 className="fiber-section-title">
            {data.about_title}
          </h2>

          <p className="fiber-section-sub">
            {data.about_description}
          </p>

          <div className="fiber-about-grid">
            {data.about_cards?.map((card, index) => (
              <div className="fiber-about-card" key={index}>
                <div className="num">
                  {card.number}
                </div>

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fiber-fit-cta" id="find-fit-top">
        <div className="fiber-wrap fiber-fit-cta-inner">
          <div>
            <h2>
              {data.cta_title}
            </h2>

            <p>
              {data.cta_description}
            </p>
          </div>

          <div className="fiber-fit-cta-actions">
            <a href="#find-fit" className="btn btn-primary">
              {data.cta_button}
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="fiber-offering" id="offering">
        <div className="fiber-wrap">
          <h2 className="fiber-section-title">
            Explore the Phlexsize Offering
          </h2>

          <p className="fiber-section-sub">
            Nine formulation families covering film formers, coupling agents,
            lubricants, and specialty dispersions.
          </p>

          <div className="fiber-table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Chemistry</th>
                  <th>Properties</th>
                </tr>
              </thead>

              <tbody>
                {data.products?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {item.product_name}
                    </td>

                    <td>
                      {item.chemistry}
                    </td>

                    <td>
                      {item.properties}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Find Fit */}
      <section className="fiber-find-fit" id="find-fit">
        <div className="fiber-wrap">
          <div className="fiber-find-fit-grid">
            <div className="fiber-find-fit-text">
              <h2>
                {data.find_fit_title}
              </h2>

              <p>
                {data.find_fit_description}
              </p>

              <a href="#" className="btn btn-primary">
                {data.find_fit_button} →
              </a>
            </div>

            <div className="fiber-find-fit-visual" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fiber-faq">
        <div className="fiber-wrap">
          <h2
            className="fiber-section-title"
            style={{ textAlign: "left", marginBottom: 0 }}
          >
            Frequently asked questions
          </h2>

          <div className="fiber-faq-grid">
            <div>
              {data.faqs?.map((faq, index) => (
                <details
                  className="fiber-faq-item"
                  open={index === 0}
                  key={index}
                >
                  <summary className="fiber-faq-q">
                    {faq.question}

                    <span className="chev">▾</span>
                  </summary>

                  <p className="fiber-faq-a">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="fiber-contact-card">
              <div className="fiber-contact-icon">✉</div>

              <h3>
                {data.contact_title}
              </h3>

              <p>
                {data.contact_description}
              </p>

              <a href="#" className="btn btn-navy">
                {data.contact_button} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fiber-footer">
        <div className="fiber-wrap fiber-footer-top">
          <div className="fiber-footer-brand">
            <div className="fiber-logo">
              <span className="fiber-logo-mark" />

              <span>
                PHLEX
                <br />
                <small style={{ color: "#93A0B0" }}>POLYMERS</small>
              </span>
            </div>

            <p>
              Fiber sizing chemistry engineered for glass, carbon, and aramid
              reinforcement.
            </p>

            <div className="fiber-footer-social">
              <span>in</span>
              <span>x</span>
              <span>@</span>
            </div>
          </div>

          <div className="fiber-footer-col">
            <h4>Products</h4>

            <ul>
              <li>
                <a href="#">Film Formers</a>
              </li>

              <li>
                <a href="#">Coupling Agents</a>
              </li>

              <li>
                <a href="#">Lubricants</a>
              </li>

              <li>
                <a href="#">Dispersions</a>
              </li>
            </ul>
          </div>

          <div className="fiber-footer-col">
            <h4>Company</h4>

            <ul>
              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Industries Served</a>
              </li>

              <li>
                <a href="#">Careers</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="fiber-footer-col">
            <h4>Resources</h4>

            <ul>
              <li>
                <a href="#">Technical Data Sheets</a>
              </li>

              <li>
                <a href="#">Safety Data Sheets</a>
              </li>

              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="fiber-wrap fiber-footer-bottom">
          <p>© 2026 Phlex Polymers. All rights reserved.</p>

          <div className="legal">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}