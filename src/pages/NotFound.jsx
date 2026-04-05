import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="nf-num">404</div>
      <h1 className="nf-title">Page Not Found</h1>
      <p className="nf-desc">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <div className="nf-actions">
        <Link to="/" className="btn btn-primary">Go to Home</Link>
        <Link to="/contact" className="btn btn-outline">Contact Us</Link>
      </div>
    </div>
  );
}