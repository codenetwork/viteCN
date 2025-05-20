import { Book, Link } from "@mui/icons-material";
import { FileOpen } from "@mui/icons-material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";

export default function SGM() {
  useEffect(() => {
    document.title = "Special General Meeting | Code Network"
  }, [])

  return (
    <div class="edges" style={{ display: "grid" }}>
      <div style={{ maxWidth: "90ch", placeSelf: "center" }}>
        <h1>May 2025 Special General Meeting</h1>
        <p>Dear Code Network members,</p>
        <p>
          A Special General Meeting is scheduled for <b>5pm on Thursday 22nd May 2025 in GP-P410</b>.
        </p>
        <p>
          We invite all Code Network members to attend this meeting, either in-person or online, and to be a part of this important moment in the life of our club.
        </p>
        <p>Thank you for your ongoing support.</p>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ background: "#eee", padding: "0.2rem 1.4rem", borderRadius: "8px", marginTop: "1rem", width: "fit-content" }}>
            <p>
              <a style={{ display: "flex", alignItems: "center", gap: "0.6rem" }} className="link" href="https://qut.zoom.us/j/86291858957?pwd=SUkZptYua1ocoNFS8xRuySRkNPgra2.1">
                <Link />
                Zoom Meeting Link (QUT logon only)
              </a>
            </p>
          </div>
          <div style={{ background: "#eee", padding: "0.2rem 1.4rem", borderRadius: "8px", marginTop: "1rem", width: "fit-content" }}>
            <p>
              <a style={{ display: "flex", alignItems: "center", gap: "0.6rem" }} className="link" target="_blank" href="https://docs.google.com/document/d/1uvIfpRDy4MzC7WLnbMkc7jIDxIUyDdz1n6mRW3hglUI/edit?usp=drive_link">
                <FileOpen />
                Role Descriptions
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
