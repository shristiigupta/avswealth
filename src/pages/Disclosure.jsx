import "./Disclosure.css";

export default function Disclosure() {
  return (
    <div className="disclosure">
      
      <h1 className="dis-title">Disclosure</h1>

      <p className="dis-desc">
        The bank earns commissions on investments made under its ARN code, with rates subject to clawback as per SEBI regulations and AMC interpretations. In line with SEBI circular SEBI/IMD/CIR.4/168230/09 and RBI guidelines on mutual fund marketing and distribution, the table presents a comparative commission structure across different fund houses. These commission rates are updated periodically based on actual rates provided by AMCs, on a best-effort basis.
      </p>

      <p className="dis-desc">
        For detailed scheme-wise commission structures, please select the respective AMC.
      </p>

      <h2 className="dis-subtitle">Mandatory Declaration</h2>

      <p className="dis-desc">
        In accordance with SEBI Circular No. SEBI/IMD/CIR No. 4/168230/09, the following are the details of the commission (trail) earned by AVS Wealth (ARN-130840) from various Asset Management Companies (AMCs). This disclosure is made to ensure full transparency regarding the remuneration we receive for the distribution of Mutual Fund products.
      </p>

      <h2 className="dis-subtitle">Summary of Commission Structure</h2>

      <p className="dis-desc">
        The rates mentioned below are indicative and vary by AMC, specific scheme, and the duration of the investment. All commissions are paid directly by the AMCs and not by the investor.
      </p>

      {/* TABLE */}
      <div className="table-wrap">
        <table className="dis-table">
          <thead>
            <tr>
              <th>Asset Category</th>
              <th>Scheme Type</th>
              <th>Trail Commission Range (p.a.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Equity</td>
              <td>Large Cap, Mid Cap, Small Cap, ELSS</td>
              <td>0.50% - 1.25%</td>
            </tr>
            <tr>
              <td>Hybrid</td>
              <td>Aggressive Hybrid, Balanced Advantage</td>
              <td>0.60% - 1.10%</td>
            </tr>
            <tr>
              <td>Debt</td>
              <td>Short Term, Corporate Bond, Gilt</td>
              <td>0.15% - 0.60%</td>
            </tr>
            <tr>
              <td>Liquid / Overnight</td>
              <td>Cash Management, Overnight Funds</td>
              <td>0.05% - 0.15%</td>
            </tr>
            <tr>
              <td>Others</td>
              <td>Index Funds, ETFs, Gold Funds</td>
              <td>0.10% - 0.40%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="dis-subtitle">Important Notes for Investors</h2>

      <ul className="dis-list">
        <li><strong>Regular Plans:</strong> AVS Wealth offers Mutual Fund products under the Regular Plan only. These plans involve a trail commission paid to the distributor by the AMC.</li>
        <li><strong>Conflict of Interest:</strong> Our recommendations are based on the suitability of the product to your financial goals and risk profile, independent of the commission rates offered by the AMCs.</li>
        <li><strong>GST:</strong> The commission rates mentioned above are inclusive of applicable GST, unless otherwise specified.</li>
        <li><strong>Change in Rates:</strong> Commission structures are subject to change by the AMCs periodically. We endeavor to update this page on a quarterly basis.</li>
      </ul>

    </div>
  );
}