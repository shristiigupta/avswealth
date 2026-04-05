import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const products = [
  { label: "Mutual Fund",               to: "/products/mutual-fund" },
  { label: "Demat Account",             to: "/products/demat-account" },
  { label: "Corporate Fixed Deposit",   to: "/products/corporate-fd" },
  { label: "Life Insurance",            to: "/products/life-insurance" },
  { label: "Health Insurance",          to: "/products/health-insurance" },
  { label: "Capital Gain Bonds",        to: "/products/capital-gain-bonds" },
  { label: "RBI Bonds",                 to: "/products/rbi-bonds" },
  { label: "Physical Shares",           to: "/products/physical-shares" },
  { label: "Shares Transferred in IEPF",to: "/products/iepf" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen]  = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [location]);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hash-aware navigation (for #about / #services on Home)
  const handleHashNav = (hash) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">AVS</span>
          <span className="logo-text">Financial Services</span>
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>

          <button className="nav-link" onClick={() => handleHashNav("about")}>
            About
          </button>

          <button className="nav-link" onClick={() => handleHashNav("services")}>
            Services
          </button>

          {/* Products Dropdown */}
          <div
            className={`nav-dropdown ${dropOpen ? "open" : ""}`}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button
              className="nav-link dropdown-trigger"
              onClick={() => setDropOpen(p => !p)}
            >
              Products
              <svg className="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div className="dropdown-panel">
              {products.map(p => (
                <Link key={p.to} to={p.to} className="dropdown-item">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}