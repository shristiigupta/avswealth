import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: connect to your auth backend
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Brand */}
        <Link to="/" className="login-logo">
          <span className="logo-mark">▲</span>
          <span>Triangle Wealth</span>
        </Link>

        <h1 className="login-title">Welcome back</h1>
        <p className="login-sub">Sign in to your investment portal</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn-login-submit" disabled={loading}>
            {loading ? <span className="spinner" /> : "Sign In"}
          </button>
        </form>

        <p className="login-footer">
          Don't have an account?{" "}
          <Link to="/contact" className="login-cta-link">Contact us to get started</Link>
        </p>
      </div>

      {/* Background decoration */}
      <div className="login-bg-triangle">▲</div>
    </div>
  );
}