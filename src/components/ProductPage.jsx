import { Link } from "react-router-dom";
import "./ProductPage.css";

/**
 * Generic product page layout.
 * data: { Icon (component), title, tagline, intro[], reasons[], cta }
 */
export default function ProductPage({ data }) {
  const { Icon, title, tagline, intro, reasons, cta } = data;

  return (
    <div className="product-page">
      <div className="page-header">
        <div className="container">
          <h1>{title}</h1>
          <nav>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link><span className="breadcrumb-sep">›</span></li>
              <li><span>Products</span><span className="breadcrumb-sep">›</span></li>
              <li className="active">{title}</li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container pp-intro-grid">
          <div className="pp-intro-content">
            <div className="pp-header-icon">
              {Icon && <Icon width="28" height="28" />}
            </div>
            <span className="section-label">Our Products</span>
            <div className="gold-line" />
            <h2 className="section-title">{title}</h2>
            <p className="pp-tagline">{tagline}</p>
            {intro.map((para, i) => <p key={i} className="pp-para">{para}</p>)}
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: "28px" }}>
              Get Started Today
            </Link>
          </div>

          <div className="pp-reasons-col">
            <h3 className="pp-reasons-title">Key Benefits</h3>
            <ul className="pp-reasons">
              {reasons.map((r) => (
                <li key={r.label} className="pp-reason">
                  <div className="pp-reason-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      width="13" height="13">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
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

      <section className="pp-cta-section">
        <div className="container pp-cta-inner">
          <h2>{cta.heading}</h2>
          <p>{cta.sub}</p>
          <div className="pp-cta-btns">
            <Link to="/contact" className="btn btn-primary">Speak to an Advisor</Link>
            <Link to="/" className="btn btn-outline-white">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}