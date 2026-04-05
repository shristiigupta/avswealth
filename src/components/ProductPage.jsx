import { Link } from "react-router-dom";
import "./ProductPage.css";

/**
 * Generic product detail page layout.
 * Each product page passes its data object as a prop.
 *
 * data shape: { icon, title, tagline, intro[], reasons[], cta }
 */
export default function ProductPage({ data }) {
  const { icon, title, tagline, intro, reasons, cta } = data;

  return (
    <div className="product-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>{title}</h1>
          <nav>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link><span className="breadcrumb-sep">›</span></li>
              <li><span className="breadcrumb-sep">Products</span><span className="breadcrumb-sep">›</span></li>
              <li className="active">{title}</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Intro Section */}
      <section className="section">
        <div className="container pp-intro-grid">
          <div className="pp-intro-content">
            <span className="section-label">Our Products</span>
            <div className="gold-line" />
            <h2 className="section-title">{title}</h2>
            <p className="pp-tagline">{tagline}</p>
            {intro.map((para, i) => (
              <p key={i} className="pp-para">{para}</p>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: "28px" }}>
              Get Started Today
            </Link>
          </div>

          <div className="pp-reasons-col">
            <div className="pp-icon-wrap">{icon}</div>
            <h3 className="pp-reasons-title">Why Choose This?</h3>
            <ul className="pp-reasons">
              {reasons.map((r) => (
                <li key={r.label} className="pp-reason">
                  <div className="pp-reason-dot">✓</div>
                  <div>
                    <strong>{r.label}</strong>
                    <p>{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pp-cta-section">
        <div className="container pp-cta-inner">
          <h2>{cta.heading}</h2>
          <p>{cta.sub}</p>
          <Link to="/contact" className="btn btn-primary">Speak to an Advisor</Link>
          <Link to="/" className="btn btn-outline-white">Back to Home</Link>
        </div>
      </section>
    </div>
  );
}