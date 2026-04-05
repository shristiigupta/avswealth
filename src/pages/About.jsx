import { Link } from "react-router-dom";
import "./About.css";

const team = [
  { name: "Varun Agrawal", role: "Founder & Principal Advisor", emoji: "👨‍💼", bio: "18+ years of experience in financial markets. AMFI registered mutual fund distributor with expertise across equity, debt, and insurance domains." },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <nav>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link><span className="breadcrumb-sep">›</span></li>
              <li className="active">About Us</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container about-story-grid">
          <div>
            <span className="section-label">Our Story</span>
            <div className="gold-line" />
            <h2 className="section-title">We Help Our Clients<br/><span>Grow Their Investments</span></h2>
            <p className="story-para">
              Established in 2018, AVS Financial Services has grown from a Mutual Fund Distributor
              to offering a comprehensive range of financial services — including Equity Broking,
              Corporate Fixed Deposits, Life & Health Insurance, Capital Gain Bonds, and more.
            </p>
            <p className="story-para">
              With over <strong>300 clients</strong> served across seven years and <strong>18 years
              of industry experience</strong>, we have built our reputation on two pillars that matter
              most in financial services: <strong>Trust</strong> and <strong>Service Excellence</strong>.
            </p>
            <p className="story-para">
              Our aim is to become a one-stop financial partner for every family we serve — providing
              personalised guidance, transparent advice, and unwavering support through every stage
              of life's financial journey.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: "24px" }}>
              Talk to Us
            </Link>
          </div>

          <div className="about-values">
            <h3 className="values-title">Our Core Values</h3>
            {[
              { icon: "🤝", title: "Trust First", desc: "Every recommendation we make is in your best interest — not ours. Transparency is non-negotiable." },
              { icon: "🎯", title: "Goal-Oriented", desc: "We don't sell products — we solve problems. Your financial goal drives every conversation." },
              { icon: "📚", title: "Financial Literacy", desc: "We believe an informed investor is a confident investor. We take time to explain, not just advise." },
              { icon: "🔄", title: "Long-Term Thinking", desc: "We plan for decades, not months. Short-term noise never overshadows long-term strategy." },
            ].map(v => (
              <div key={v.title} className="value-row">
                <span className="value-icon">{v.icon}</span>
                <div>
                  <strong>{v.title}</strong>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span className="section-label">Our Direction</span>
            <div className="gold-line" />
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To establish a comprehensive financial services platform that offers a wide range of
                products to our clients. We aim to become a one-stop solution for all financial needs —
                providing expert guidance and personalised services to help clients achieve their financial
                goals. With a focus on dedication, innovation, and a client-centric approach, we empower
                individuals to make informed decisions and secure their financial future.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To transform the financial services industry by creating a seamless and accessible platform
                that simplifies the complexities of investing. We see a future where everyone can build wealth
                and achieve financial independence with confidence. By leveraging expertise, we strive to set
                new standards of excellence — making quality advice and services available to all, and promoting
                a culture of financial literacy and empowerment for every Indian family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span className="section-label">The People</span>
            <div className="gold-line" />
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div className="team-grid">
            {team.map(m => (
              <div key={m.name} className="team-card card">
                <div className="team-avatar">{m.emoji}</div>
                <h3 className="team-name">{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <p className="team-bio">{m.bio}</p>
              </div>
            ))}
            <div className="team-cta-card">
              <h3>Join Our Network</h3>
              <p>Are you a financial professional interested in partnering with AVS? We'd love to connect.</p>
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why AVS strip */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <h2 className="section-title">Why Clients Choose AVS</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: "✕", title: "No Hidden Costs", desc: "Transparent pricing, always." },
              { icon: "👥", title: "Dedicated Support", desc: "Personalised help whenever needed." },
              { icon: "⚡", title: "Fast Execution", desc: "Quick, efficient transactions." },
              { icon: "🏆", title: "AMFI Registered", desc: "Fully regulated and compliant." },
            ].map(w => (
              <div key={w.title} className="why-card card">
                <div className="why-icon">{w.icon}</div>
                <strong>{w.title}</strong>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}