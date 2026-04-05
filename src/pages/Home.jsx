import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

/* ─── Counter Hook ──────────────────────────────────────────── */
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ─── Fact Item ─────────────────────────────────────────────── */
function FactItem({ icon, value, suffix, label, started }) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="fact-item">
      <div className="fact-icon">{icon}</div>
      <div className="fact-number">{count}{suffix}</div>
      <div className="fact-label">{label}</div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */
export default function Home() {
  const [activeTab, setActiveTab] = useState("mission");
  const [factsStarted, setFactsStarted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle");
  const factsRef = useRef(null);

  // Intersection observer for facts counter
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setFactsStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (factsRef.current) obs.observe(factsRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) =>
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "c5c798a9-7135-4f67-a832-b46f7dc0f2d3",
          ...formData,
        }),
      });
      if (res.ok) { setFormStatus("success"); setFormData({ name: "", email: "", mobile: "", subject: "", message: "" }); }
      else setFormStatus("error");
    } catch {
      setFormStatus("error");
    }
  };

  const products = [
    { icon: "📈", label: "Mutual Fund",                 to: "/products/mutual-fund" },
    { icon: "🏦", label: "Demat Account",              to: "/products/demat-account" },
    { icon: "🔒", label: "Corporate Fixed Deposit",    to: "/products/corporate-fd" },
    { icon: "🛡️", label: "Life Insurance",             to: "/products/life-insurance" },
    { icon: "❤️", label: "Health Insurance",           to: "/products/health-insurance" },
    { icon: "📊", label: "Capital Gain Bonds",         to: "/products/capital-gain-bonds" },
    { icon: "🏛️", label: "RBI Bonds",                  to: "/products/rbi-bonds" },
    { icon: "📜", label: "Physical Shares",            to: "/products/physical-shares" },
    { icon: "⚖️", label: "Shares in IEPF",            to: "/products/iepf" },
  ];

  return (
    <div className="home-page">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">Welcome to AVS Financial Services</div>
            <h1 className="hero-title">
              Your Financial Status<br />
              <span>Is Our Goal</span>
            </h1>
            <p className="hero-desc">
              Trusted financial advisors since 2018 — helping 300+ families across
              India invest wisely, protect their wealth, and plan for a secure future.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Get Free Consultation</Link>
              <button
                className="btn btn-outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Discover More
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hstat"><span className="hstat-num">300+</span><span className="hstat-lbl">Happy Clients</span></div>
            <div className="hstat"><span className="hstat-num">18</span><span className="hstat-lbl">Years Experience</span></div>
            <div className="hstat"><span className="hstat-num">₹30Cr+</span><span className="hstat-lbl">Assets Managed</span></div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div className="about-img-col">
            <div className="about-img-box">
              <div className="about-img-pattern" />
              <div className="about-card-float">
                <span className="about-card-icon">🏆</span>
                <div>
                  <strong>AMFI Registered</strong>
                  <span>Mutual Fund Distributor</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">About Us</span>
            <div className="gold-line" />
            <h2 className="section-title">
              We Help Our Clients To<br />
              <span>Grow Their Investments</span>
            </h2>
            <p className="about-intro">
              Established in 2018, AVS Financial Services has grown from a Mutual Fund Distributor
              to offering a comprehensive range of financial services — including Equity Broking,
              Corporate Fixed Deposits, Insurance, and Bonds.
            </p>
            <p className="about-intro">
              With over 300 clients served in seven years and 18 years of industry experience behind us,
              we prioritise <strong>trust</strong> and <strong>service excellence</strong> in every interaction.
            </p>

            {/* Tabs */}
            <div className="about-tabs">
              <div className="tab-buttons">
                <button className={activeTab === "mission" ? "active" : ""} onClick={() => setActiveTab("mission")}>Mission</button>
                <button className={activeTab === "vision" ? "active" : ""} onClick={() => setActiveTab("vision")}>Vision</button>
              </div>
              <div className="tab-content">
                {activeTab === "mission" && (
                  <p>
                    Our mission is to establish a comprehensive financial services platform that offers a wide range of products.
                    We aim to become a one-stop solution for all financial needs — providing expert guidance and personalised services
                    to help clients achieve their financial goals with confidence and clarity.
                  </p>
                )}
                {activeTab === "vision" && (
                  <p>
                    Our vision is to transform the financial services experience for every Indian family — making quality advice
                    accessible to all. We strive to promote financial literacy, empower informed decision-making, and build
                    a future where everyone can achieve financial independence.
                  </p>
                )}
              </div>
            </div>

            {/* USPs */}
            <div className="about-usps">
              {[
                { icon: "✕", title: "No Hidden Cost", desc: "Transparent pricing with no surprises" },
                { icon: "👥", title: "Dedicated Support", desc: "Personalised assistance whenever needed" },
                { icon: "📞", title: "Always Reachable", desc: "Quick response — we're just a call away" },
              ].map(u => (
                <div key={u.title} className="usp-item">
                  <div className="usp-icon">{u.icon}</div>
                  <div>
                    <strong>{u.title}</strong>
                    <span>{u.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTS ─────────────────────────────────────────────── */}
      <section className="facts-section" ref={factsRef}>
        <div className="container facts-grid">
          <FactItem icon="👥" value={300} suffix="+" label="Clients Served" started={factsStarted} />
          <FactItem icon="📅" value={18} suffix=" Yrs" label="Industry Experience" started={factsStarted} />
          <FactItem icon="💰" value={30} suffix=" Cr+" label="AUM Managed" started={factsStarted} />
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="section section-alt" id="services">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span className="section-label">Why Choose Us</span>
            <div className="gold-line" />
            <h2 className="section-title">Few Reasons People Trust AVS</h2>
            <p className="section-desc">
              Experience unparalleled service tailored to your needs. Our commitment to
              transparency and excellence ensures you get the best value and peace of mind.
            </p>
          </div>

          <div className="features-grid">
            {[
              { icon: "⚡", title: "Fast Executions", desc: "Quick and efficient processing of your investments and transactions — we value your time as much as your money." },
              { icon: "🧭", title: "Expert Guidance", desc: "18+ years of experience means our advice is rooted in deep market knowledge and proven strategies." },
              { icon: "🔐", title: "Financial Security", desc: "We work only with SEBI-registered, government-backed, and reputed institutions — your capital is always protected." },
              { icon: "🤝", title: "Personal Relationship", desc: "You're not a ticket number here. Your advisor knows your name, your goals, and your family situation." },
              { icon: "📊", title: "Portfolio Monitoring", desc: "Regular reviews and timely rebalancing keep your investments aligned with your evolving goals." },
              { icon: "📞", title: "Responsive Support", desc: "Reach us on call, WhatsApp, or email — we respond promptly and never leave you waiting." },
            ].map(f => (
              <div key={f.title} className="feature-card card">
                <div className="feature-icon">{f.icon}</div>
                <h4 className="feature-title">{f.title}</h4>
                <p className="feature-desc">{f.desc}</p>
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
            <p className="section-desc">
              A comprehensive suite of investment and protection products under one roof.
            </p>
          </div>
          <div className="products-grid">
            {products.map(p => (
              <Link key={p.to} to={p.to} className="product-card card">
                <span className="product-card-icon">{p.icon}</span>
                <span className="product-card-label">{p.label}</span>
                <span className="product-card-arrow">→</span>
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
            <p>
              Fill out the form and one of our advisors will call you at your preferred time —
              no obligation, no jargon, just honest financial guidance.
            </p>
            <ul className="callback-perks">
              <li>✓ Free initial consultation</li>
              <li>✓ No hidden fees</li>
              <li>✓ AMFI registered advisors</li>
              <li>✓ Personalised portfolio review</li>
            </ul>
          </div>

          <div className="callback-form-wrap">
            {formStatus === "success" ? (
              <div className="form-success">
                <span>✅</span>
                <h3>Request Submitted!</h3>
                <p>We'll call you back within one business day.</p>
                <button className="btn btn-primary" onClick={() => setFormStatus("idle")}>Submit Another</button>
              </div>
            ) : (
              <form className="callback-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Your Email *</label>
                    <input name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input name="mobile" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.mobile} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input name="subject" placeholder="e.g. Mutual Fund Query" value={formData.subject} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Tell us a little about your financial goals..." rows={4} value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn" disabled={formStatus === "loading"}>
                  {formStatus === "loading" ? <span className="spinner" /> : "Submit Request"}
                </button>
                {formStatus === "error" && <p className="form-error">Something went wrong. Please try again or call us directly.</p>}
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}