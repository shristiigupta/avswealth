import { Link } from "react-router-dom";
import "./Breadcrumb.css";

export default function Breadcrumb({ items }) {
  // items = [{ label: "Home", to: "/" }, { label: "About Us" }]
  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className={`breadcrumb-item ${isLast ? "active" : ""}`}>
              {!isLast ? (
                <>
                  <Link to={item.to}>{item.label}</Link>
                  <span className="separator">›</span>
                </>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}