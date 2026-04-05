import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import "./ServicePage.css";

/**
 * Generic service detail layout.
 * Each individual service page passes its own content as props.
 */
export default function ServicePage({ service }) {
  const { icon, title, tagline, intro, highlights, howItWorks, cta } = service;

  return (
    <div className="service-detail-page">
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/" },
          { label: title },
        ]}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="service-hero-icon">{icon}</span>
          <p className="section-eyebrow">Our Services</p>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-desc">{tagline}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="section-inner sd-intro-grid">
          <div className="sd-intro-text">
            <p className="section-eyebrow">Overview</p>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "1.25rem" }}>
              What We Offer
            </h2>
            {intro.map((para, i) => (
              <p key={i} className="sd-para">{para}</p>
            ))}
          </div>

          {/* Highlights */}
          <div className="sd-highlights">
            {highlights.map((h) => (
              <div key={h.label} className="sd-highlight-card">
                <span className="sd-h-icon">{h.icon}</span>
                <div>
                  <p className="sd-h-label">{h.label}</p>
                  <p className="sd-h-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section sd-how-section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-eyebrow">The Process</p>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="sd-steps">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="sd-step">
                <div className="sd-step-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="sd-step-title">{step.title}</h3>
                  <p className="sd-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sd-cta-section">
        <div className="sd-cta-inner">
          <h2>{cta.heading}</h2>
          <p>{cta.sub}</p>
          <Link to="/contact" className="btn-primary-cta">Book a Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}