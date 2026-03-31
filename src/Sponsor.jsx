import { useState } from "react";
import { Link } from "react-router-dom";
import "./sponsor.css";

function Sponsor() {
  return (
    <div id="global-padding">
      <h1 style={{ marginTop: "0", marginBottom: "12px" }}>Would you like to support us?</h1>
      <div style={{ color: "white", fontSize: "18px", marginBottom: "8px" }}>
        Send us an email at <a href="mailto:industry@codenetwork.co">industry@codenetwork.co</a>.
      </div>
      <a href="/corporate-sponsorship-prospectus-2026.pdf" id="action" style={{padding: "8px"}} target="_blank">
        Read Our Prospectus
      </a>
      <h1>Our 2026 Sponsors</h1>
      <h2>Platinum Sponsors</h2>
      <div className="sponsor-grid">
        <a href="https://www.technology1.com" id="action">
          <img src="/sponsors/t1.svg" alt="TechnologyOne Logo" className="button-image" />
        </a>
      </div>
      <h2>Gold Sponsors</h2>
      <div className="sponsor-grid">
        <a href="https://www.tanda.co/" id="action">
          <img src="/sponsors/tanda.png" alt="tanda logo" className="button-image" />
        </a>
      </div>
    </div>
  );
}

export default Sponsor;
