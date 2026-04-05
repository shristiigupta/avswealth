import { Link } from "react-router-dom";
import "./Footer.css";

const productLinks = [
  { label: "Mutual Fund",                 to: "/products/mutual-fund" },
  { label: "Demat Account",              to: "/products/demat-account" },
  { label: "Corporate Fixed Deposit",    to: "/products/corporate-fd" },
  { label: "Life Insurance",             to: "/products/life-insurance" },
  { label: "Health Insurance",           to: "/products/health-insurance" },
  { label: "Capital Gain Bonds",         to: "/products/capital-gain-bonds" },
  { label: "RBI Bonds",                  to: "/products/rbi-bonds" },
  { label: "Physical Shares",            to: "/products/physical-shares" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand col */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">AVS</span>
              <span>AVS Financial Services</span>
            </div>
            <p>
              Your trusted partner for comprehensive financial planning and
              investment solutions since 2018. Building wealth, securing futures.
            </p>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>164, Block-E, Nehru Nagar - IIIrd,<br/>Ghaziabad, Uttar Pradesh - 201001</span>
              </div>
              <div className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.81-1.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+919958111375">+91 9958111375</a>
              </div>
              <div className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:varunagrawal@avsfs.in">varunagrawal@avsfs.in</a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Products</h4>
            <ul>
              {productLinks.map(p => (
                <li key={p.to}><Link to={p.to}>{p.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            <h4 className="footer-heading" style={{ marginTop: "2rem" }}>Business Hours</h4>
            <ul>
              <li><span style={{ color: "rgba(255,255,255,0.6)" }}>Mon – Saturday</span></li>
              <li><span style={{ color: "rgba(255,255,255,0.6)" }}>10:00 AM – 6:00 PM</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} AVS Financial Services. All Rights Reserved.</p>
          <p className="footer-disclaimer">
            Investments are subject to market risks. Please read all scheme-related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}