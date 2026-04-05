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

/* ─── Clean SVG icons ───────────────────────────────────────── */
const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconCompass = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconBarChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.81-1.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

/* Product icons — clean line SVGs */
const IconTrendUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconUmbrella = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>
  </svg>
);
const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconDollarSign = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);
const IconBank = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/>
    <line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/>
    <line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>
  </svg>
);
const IconFileText = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconScale = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/>
    <path d="M3 6l6 6-6 6"/><path d="M21 6l-6 6 6 6"/>
  </svg>
);

/* ─── Main Component ────────────────────────────────────────── */
export default function Home() {
  const [activeTab, setActiveTab] = useState("mission");
  const [factsStarted, setFactsStarted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle");
  const factsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setFactsStarted(true); obs.disconnect(); } },
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
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      } else setFormStatus("error");
    } catch { setFormStatus("error"); }
  };

  const features = [
    { Icon: IconZap,      title: "Fast Executions",     desc: "Quick and efficient processing of your investments and transactions — we value your time as much as your money." },
    { Icon: IconCompass,  title: "Expert Guidance",     desc: "18+ years of experience means our advice is rooted in deep market knowledge and proven strategies." },
    { Icon: IconShield,   title: "Financial Security",  desc: "We work only with SEBI-registered, government-backed, and reputed institutions — your capital is always protected." },
    { Icon: IconUsers,    title: "Personal Relationship",desc: "You're not a ticket number here. Your advisor knows your name, your goals, and your family situation." },
    { Icon: IconBarChart, title: "Portfolio Monitoring", desc: "Regular reviews and timely rebalancing keep your investments aligned with your evolving goals." },
    { Icon: IconPhone,    title: "Responsive Support",  desc: "Reach us on call, WhatsApp, or email — we respond promptly and never leave you waiting." },
  ];

  const products = [
    { Icon: IconTrendUp,   label: "Mutual Fund",                 to: "/products/mutual-fund" },
    { Icon: IconBriefcase, label: "Demat Account",              to: "/products/demat-account" },
    { Icon: IconLock,      label: "Corporate Fixed Deposit",    to: "/products/corporate-fd" },
    { Icon: IconUmbrella,  label: "Life Insurance",             to: "/products/life-insurance" },
    { Icon: IconHeart,     label: "Health Insurance",           to: "/products/health-insurance" },
    { Icon: IconDollarSign,label: "Capital Gain Bonds",         to: "/products/capital-gain-bonds" },
    { Icon: IconBank,      label: "RBI Bonds",                  to: "/products/rbi-bonds" },
    { Icon: IconFileText,  label: "Physical Shares",            to: "/products/physical-shares" },
    { Icon: IconScale,     label: "Shares Transferred in IEPF", to: "/products/iepf" },
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
                className="btn btn-outline-hero"
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
            <h2 className="section-title">We Help Our Clients To<br /><span>Grow Their Investments</span></h2>
            <p className="about-intro">
              Established in 2018, AVS Financial Services has grown from a Mutual Fund Distributor
              to offering a comprehensive range of financial services — including Equity Broking,
              Corporate Fixed Deposits, Insurance, and Bonds.
            </p>
            <p className="about-intro">
              With over 300 clients served in seven years and 18 years of industry experience,
              we prioritise <strong>trust</strong> and <strong>service excellence</strong> in every interaction.
            </p>

            <div className="about-tabs">
              <div className="tab-buttons">
                <button className={activeTab === "mission" ? "active" : ""} onClick={() => setActiveTab("mission")}>Mission</button>
                <button className={activeTab === "vision"  ? "active" : ""} onClick={() => setActiveTab("vision")}>Vision</button>
              </div>
              <div className="tab-content">
                {activeTab === "mission" && (
                  <p>Our mission is to establish a comprehensive financial services platform that offers a wide range of products. We aim to become a one-stop solution for all financial needs — providing expert guidance and personalised services to help clients achieve their financial goals with confidence and clarity.</p>
                )}
                {activeTab === "vision" && (
                  <p>Our vision is to transform the financial services experience for every Indian family — making quality advice accessible to all. We strive to promote financial literacy, empower informed decision-making, and build a future where everyone can achieve financial independence.</p>
                )}
              </div>
            </div>

            <div className="about-usps">
              {[
                { icon: "✕", title: "No Hidden Cost",    desc: "Transparent pricing with no surprises" },
                { icon: "👥", title: "Dedicated Support", desc: "Personalised assistance whenever needed" },
                { icon: "📞", title: "Always Reachable",  desc: "Quick response — just a call away" },
              ].map(u => (
                <div key={u.title} className="usp-item">
                  <div className="usp-icon">{u.icon}</div>
                  <div><strong>{u.title}</strong><span>{u.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTS ─────────────────────────────────────────────── */}
      <section className="facts-section" ref={factsRef}>
        <div className="container facts-grid">
          <FactItem icon="👥" value={300} suffix="+"     label="Clients Served"      started={factsStarted} />
          <FactItem icon="📅" value={18}  suffix=" Yrs"  label="Industry Experience" started={factsStarted} />
          <FactItem icon="💰" value={30}  suffix=" Cr+"  label="AUM Managed"         started={factsStarted} />
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
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
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="feature-card card">
                <div className="feature-icon-wrap">
                  <Icon />
                </div>
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
                <div className="product-card-icon">
                  <Icon />
                </div>
                <span className="product-card-label">{label}</span>
                <svg className="product-card-arrow" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
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
            <p>Fill out the form and one of our advisors will call you at your preferred time — no obligation, no jargon, just honest financial guidance.</p>
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