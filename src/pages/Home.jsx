import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  IconZap, IconCompass, IconShield, IconUsers, IconBarChart, IconHeadphones,
  IconTag, IconCheckCircle,
  IconTrendUp, IconBriefcase, IconLock, IconUmbrella, IconHeart,
  IconDollarSign, IconBank, IconFileText, IconScale,
} from "../components/Icons";
import "./Home.css";

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function FactItem({ iconSvg, value, suffix, label, started }) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="fact-item">
      <div className="fact-svg-icon">{iconSvg}</div>
      <div className="fact-number">{count}{suffix}</div>
      <div className="fact-label">{label}</div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("mission");
  const [factsStarted, setFactsStarted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle");
  const factsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setFactsStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (factsRef.current) obs.observe(factsRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "c5c798a9-7135-4f67-a832-b46f7dc0f2d3", ...formData }),
      });
      if (res.ok) { setFormStatus("success"); setFormData({ name: "", email: "", mobile: "", subject: "", message: "" }); }
      else setFormStatus("error");
    } catch { setFormStatus("error"); }
  };

  const features = [
    { Icon: IconZap, title: "Fast Executions", desc: "Quick and efficient processing of your investments — we value your time as much as your money." },
    { Icon: IconCompass, title: "Expert Guidance", desc: "18+ years of experience means our advice is rooted in deep market knowledge and proven strategies." },
    { Icon: IconShield, title: "Financial Security", desc: "We work only with SEBI-registered, government-backed institutions — your capital is always protected." },
    { Icon: IconUsers, title: "Personal Relationship", desc: "You're not a ticket number. Your advisor knows your name, your goals, and your family situation." },
    { Icon: IconBarChart, title: "Portfolio Monitoring", desc: "Regular reviews and timely rebalancing keep your investments aligned with your evolving goals." },
    { Icon: IconHeadphones, title: "Responsive Support", desc: "Reach us on call, WhatsApp, or email — we respond promptly and never leave you waiting." },
  ];

  const products = [
    { Icon: IconTrendUp, label: "Mutual Fund", to: "/products/mutual-fund" },
    { Icon: IconBriefcase, label: "Demat Account", to: "/products/demat-account" },
    { Icon: IconLock, label: "Corporate Fixed Deposit", to: "/products/corporate-fd" },
    { Icon: IconUmbrella, label: "Life Insurance", to: "/products/life-insurance" },
    { Icon: IconHeart, label: "Health Insurance", to: "/products/health-insurance" },
    { Icon: IconDollarSign, label: "Capital Gain Bonds", to: "/products/capital-gain-bonds" },
    { Icon: IconBank, label: "RBI Bonds", to: "/products/rbi-bonds" },
    { Icon: IconFileText, label: "Physical Shares", to: "/products/physical-shares" },
    { Icon: IconScale, label: "Shares Transferred in IEPF", to: "/products/iepf" },
  ];

  const usps = [
    { Icon: IconTag, title: "No Hidden Cost", desc: "Transparent pricing — no surprises, ever." },
    { Icon: IconUsers, title: "Dedicated Support", desc: "Personalised assistance whenever needed." },
    { Icon: IconHeadphones, title: "Always Reachable", desc: "Quick response — just a call or message away." },
  ];

  const factIcons = {
    clients: <IconUsers width="26" height="26" />,
    years: <IconCheckCircle width="26" height="26" />,
    aum: <IconBarChart width="26" height="26" />,
  };

  return (
    <div className="home-page">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">Welcome to AVS Wealth Financial Services</div>
            <h1 className="hero-title">Your Financial Status<br /><span>Is Our Goal</span></h1>
            <p className="hero-desc">
              Trusted financial advisors since 2018 — helping 300+ families across India invest wisely,
              protect their wealth, and plan for a secure future.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Get Free Consultation</Link>
              <button className="btn btn-outline-hero"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                Discover More
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hstat"><span className="hstat-num">300+</span><span className="hstat-lbl">Happy Clients</span></div>
            <div className="hstat"><span className="hstat-num">18</span><span className="hstat-lbl">Years Experience</span></div>
            <div className="hstat"><span className="hstat-num">₹30Cr+</span><span className="hstat-lbl">Assets Managed</span></div>
          </div>
          <div className="hero-founder">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <div className="hero-founder-text">
              <div className="hero-founder-name">
                <span>Varun Agrawal</span>
                <span className="hero-founder-arn">ARN-130840</span>
              </div>
              <span className="hero-founder-amfi">AMFI Registered Mutual Fund Distributor</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="section" id="about">
        <div className="container about-grid">

          {/* Left visual column — stats + illustration */}
          <div className="about-visual-col">
            <div className="about-visual-card">
              {/* Top stat */}
              <div className="avc-stat-row">
                <div className="avc-stat">
                  <IconUsers className="avc-stat-icon" width="28" height="28" />
                  <div><strong>300+</strong><span>Clients Served</span></div>
                </div>
                <div className="avc-divider" />
                <div className="avc-stat">
                  <IconCheckCircle className="avc-stat-icon" width="28" height="28" />
                  <div><strong>18 Yrs</strong><span>Experience</span></div>
                </div>
              </div>

              {/* Centre illustration */}
              <div className="avc-illustration">
                <div className="avc-rings">
                  <div className="avc-ring r1" />
                  <div className="avc-ring r2" />
                  <div className="avc-ring r3" />
                </div>
                <div className="avc-center-icon">
                  <IconBarChart width="36" height="36" />
                </div>
                {/* Floating labels */}
                <div className="avc-float top-left">
                  <IconShield width="14" height="14" />
                  <span>Secure</span>
                </div>
                <div className="avc-float top-right">
                  <IconCheckCircle width="14" height="14" />
                  <span>AMFI</span>
                </div>
                <div className="avc-float bottom-left">
                  <IconTrendUp width="14" height="14" />
                  <span>Growth</span>
                </div>
                <div className="avc-float bottom-right">
                  <IconLock width="14" height="14" />
                  <span>Trusted</span>
                </div>
              </div>

              {/* AUM badge */}
              <div className="avc-aum-badge">
                <IconBarChart width="20" height="20" />
                <div>
                  <strong>₹30 Cr+ AUM</strong>
                  <span>Assets Under Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right text content */}
          <div className="about-content">
            <span className="section-label">About Us</span>
            <div className="gold-line" />
            <h2 className="section-title">We Help Our Clients To<br /><span>Grow Their Investments</span></h2>
            <p className="about-intro">
              Established in 2018, AVS Financial Services has grown from a Mutual Fund Distributor
              to offering a comprehensive range of financial services — including Equity Broking,
              Corporate Fixed Deposits, Insurance, and Bonds.
            </p>
            <p className="about-intro">
              With over 300 clients and 18 years of industry experience, we prioritise
              <strong> trust</strong> and <strong>service excellence</strong> in every interaction.
            </p>

            <div className="about-tabs">
              <div className="tab-buttons">
                <button className={activeTab === "mission" ? "active" : ""} onClick={() => setActiveTab("mission")}>Mission</button>
                <button className={activeTab === "vision" ? "active" : ""} onClick={() => setActiveTab("vision")}>Vision</button>
              </div>
              <div className="tab-content">
                {activeTab === "mission" && (
                  <p>Our mission is to establish a comprehensive financial services platform that offers a wide range of products to our clients. We aim to become a one-stop solution for all financial needs, providing expert guidance and personalized services to help clients achieve their financial goals. With a focus on dedication, innovation, and a client-centric approach, we empower individuals to make informed decisions and secure their financial future.</p>
                )}
                {activeTab === "vision" && (
                  <p>Our vision is to transform the financial services industry by creating a seamless and accessible platform that simplifies the complexities of investing. We see a future where everyone can build wealth and achieve financial independence with confidence. By leveraging technology and expertise, we strive to set new standards of excellence, making quality advice and services available to all, and promoting a culture of financial literacy and empowerment. Together, we envision a brighter financial future for everyone.</p>
                )}
              </div>
            </div>

            {/* USPs with SVG icons */}
            <div className="about-usps">
              {usps.map(({ Icon, title, desc }) => (
                <div key={title} className="usp-item">

                  <div><strong>{title}</strong><span>{desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTS ─────────────────────────────────────────────── */}
      <section className="facts-section" ref={factsRef}>
        <div className="container facts-grid">
          <FactItem iconSvg={factIcons.clients} value={300} suffix="+" label="Clients Served" started={factsStarted} />
          <FactItem iconSvg={factIcons.years} value={18} suffix=" Yrs" label="Industry Experience" started={factsStarted} />
          <FactItem iconSvg={factIcons.aum} value={30} suffix=" Cr+" label="AUM Managed" started={factsStarted} />
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="section section-alt" id="services">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span className="section-label">Why Choose Us</span>
            <div className="gold-line" />
            <h2 className="section-title">Few Reasons People Trust AVS</h2>
            <p className="section-desc">Experience unparalleled service tailored to your needs. Our commitment to transparency and excellence ensures you get the best value.</p>
          </div>
          <div className="features-grid">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="feature-card card">
                <div className="feature-icon-wrap"><Icon width="22" height="22" /></div>
                <h4 className="feature-title">{title}</h4>
                <p className="feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span className="section-label">What We Offer</span>
            <div className="gold-line" />
            <h2 className="section-title">Our Financial Products</h2>
            <p className="section-desc">A comprehensive suite of investment and protection products under one roof.</p>
          </div>
          <div className="products-grid">
            {products.map(({ Icon, label, to }) => (
              <Link key={to} to={to} className="product-card card">
                <div className="product-card-icon"><Icon width="20" height="20" /></div>
                <span className="product-card-label">{label}</span>
                <svg className="product-card-arrow" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALLBACK FORM ─────────────────────────────────────── */}
      <section className="callback-section">
        <div className="container callback-inner">
          <div className="callback-text">
            <span className="section-label light">Get In Touch</span>
            <div className="gold-line" />
            <h2 className="callback-title">Request a <em>Call-Back</em></h2>
            <p>Fill out the form and one of our advisors will call you — no obligation, no jargon, just honest financial guidance.</p>
            <ul className="callback-perks">
              <li><IconCheckCircle width="15" height="15" /> Free initial consultation</li>
              <li><IconCheckCircle width="15" height="15" /> No hidden fees</li>
              <li><IconCheckCircle width="15" height="15" /> AMFI registered advisors</li>
              <li><IconCheckCircle width="15" height="15" /> Personalised portfolio review</li>
            </ul>
          </div>

          <div className="callback-form-wrap">
            {formStatus === "success" ? (
              <div className="form-success">
                <div className="form-success-icon"><IconCheckCircle width="36" height="36" /></div>
                <h3>Request Submitted!</h3>
                <p>We'll call you back within one business day.</p>
                <button className="btn btn-primary" onClick={() => setFormStatus("idle")}>Submit Another</button>
              </div>
            ) : (
              <form className="callback-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group"><label>Your Name *</label><input name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required /></div>
                  <div className="form-group"><label>Your Email *</label><input name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label>Mobile Number *</label><input name="mobile" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.mobile} onChange={handleChange} required /></div>
                  <div className="form-group"><label>Subject</label><input name="subject" placeholder="e.g. Mutual Fund Query" value={formData.subject} onChange={handleChange} /></div>
                </div>
                <div className="form-group"><label>Message</label><textarea name="message" placeholder="Tell us about your financial goals..." rows={4} value={formData.message} onChange={handleChange} /></div>
                <button type="submit" className="btn btn-primary submit-btn" disabled={formStatus === "loading"}>
                  {formStatus === "loading" ? <span className="spinner" /> : "Submit Request"}
                </button>
                {formStatus === "error" && <p className="form-error">Something went wrong. Please try again or call +91 9958111375.</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}