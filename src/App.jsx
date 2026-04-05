import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import TopBar    from "./components/TopBar";
import Navbar    from "./components/Navbar";
import Footer    from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Pages
import Home     from "./pages/Home";
import About    from "./pages/About";
import Contact  from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Product pages
import MutualFund       from "./pages/products/MutualFund";
import DematAccount     from "./pages/products/DematAccount";
import CorporateFD      from "./pages/products/CorporateFD";
import LifeInsurance    from "./pages/products/LifeInsurance";
import HealthInsurance  from "./pages/products/HealthInsurance";
import CapitalGainBonds from "./pages/products/CapitalGainBonds";
import RBIBonds         from "./pages/products/RBIBonds";
import PhysicalShares   from "./pages/products/PhysicalShares";
import IEPF             from "./pages/products/IEPF";

import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <TopBar />
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Core pages */}
            <Route path="/"       element={<Home />} />
            <Route path="/about"  element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Product pages */}
            <Route path="/products/mutual-fund"        element={<MutualFund />} />
            <Route path="/products/demat-account"      element={<DematAccount />} />
            <Route path="/products/corporate-fd"       element={<CorporateFD />} />
            <Route path="/products/life-insurance"     element={<LifeInsurance />} />
            <Route path="/products/health-insurance"   element={<HealthInsurance />} />
            <Route path="/products/capital-gain-bonds" element={<CapitalGainBonds />} />
            <Route path="/products/rbi-bonds"          element={<RBIBonds />} />
            <Route path="/products/physical-shares"    element={<PhysicalShares />} />
            <Route path="/products/iepf"               element={<IEPF />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}