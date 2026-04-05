import { useState } from "react";
import { Link } from "react-router-dom";
import { IconMapPin, IconPhone, IconMail, IconClock } from "../components/Icons";
import "./Contact.css";

const contactInfo = [
  {
    Icon: IconMapPin,
    title: "Our Office",
    lines: ["164, Block-E, Nehru Nagar - IIIrd,", "Ghaziabad, Uttar Pradesh - 201001"],
  },
  {
    Icon: IconPhone,
    title: "Call Us",
    lines: ["+91 9958111375"],
    href: "tel:+919958111375",
  },
  {
    Icon: IconMail,
    title: "Email Us",
    lines: ["varunagrawal@avsfs.in"],
    href: "mailto:varunagrawal@avsfs.in",
  },
  {
    Icon: IconClock,
    title: "Business Hours",
    lines: ["Monday – Saturday", "10:00 AM – 6:00 PM"],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: "c5c798a9-7135-4f67-a832-b46f7dc0f2d3", ...formData }),
      });
      if (res.ok) { setStatus("success"); setFormData({ name: "", email: "", subject: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <nav>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link><span className="breadcrumb-sep">›</span></li>
              <li className="active">Contact</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Info strip */}
      <section className="contact-strip">
        <div className="container contact-strip-grid">
          {contactInfo.map(({ Icon, title, lines, href }) => (
            <div key={title} className="contact-strip-item">
              <div className="csi-icon-wrap">
                <Icon width="18" height="18" />
              </div>
              <div>
                <strong>{title}</strong>
                {href ? (
                  <a href={href}>{lines[0]}</a>
                ) : (
                  lines.map((l, i) => <span key={i}>{l}</span>)
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="section">
        <div className="container contact-main-grid">
          <div>
            <span className="section-label">Send a Message</span>
            <div className="gold-line" />
            <h2 className="section-title">If You Have Any Query,<br /><span>Please Contact Us</span></h2>

            {status === "success" ? (
              <div className="contact-success">
                <div className="cs-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
                    strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within one business day.</p>
                <button className="btn btn-primary" onClick={() => setStatus("idle")}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input name="subject" placeholder="What is this about?" value={formData.subject} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" placeholder="Tell us how we can help you..." rows={5} value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary send-btn" disabled={status === "loading"}>
                  {status === "loading" ? <span className="spinner" /> : "Send Message"}
                </button>
                {status === "error" && (
                  <p className="form-error">Something went wrong. Please try again or call +91 9958111375.</p>
                )}
              </form>
            )}
          </div>

          <div className="contact-map-wrap">
            <iframe
              title="AVS Financial Services Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0948128594164!2d77.43814767314592!3d28.656879629182846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1c3462ae9f3%3A0x5de3224cce666004!2s164%2C%20Block%20E%2C%20Nehru%20Nagar%20III%2C%20Kavi%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201001!5e0!3m2!1sen!2sin!4v1719337425060!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, borderRadius: "12px", minHeight: "420px" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}