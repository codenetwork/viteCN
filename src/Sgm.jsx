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
        <div style={{ background: "#eee", padding: "1rem 2rem", borderRadius: "8px", marginTop: "2rem" }}>
          <p>This meeting has been scheduled for <strong>5pm on Thursday 22nd May 2025</strong>. Please join us on-campus at <b>GP-P410</b> or click the <a target="_blank" href="https://qut.zoom.us/j/86291858957?pwd=SUkZptYua1ocoNFS8xRuySRkNPgra2.1">Zoom Meeting Link</a> to join online.</p>
          <p>Please also stay tuned to our socials for any updates.</p>
        </div>
        <p>Dear Code Network members,</p>
        <p>
          A Special General Meeting has been called for a motion to remove the <b>President</b> of Code Network. Members of the Executive Team have raised serious concerns surrounding
          the President, including:
        </p>
        <ul>
          <li>Inadequate leadership</li>
          <li>Inability and unwillingness to properly delegate responsibilities</li>
          <li>Blocking proposed changes to the constitution after they were discussed openly in an Executive meeting</li>
          <li>Intentionally pushing out a biased form regarding the proposed changes</li>
          <li>Rigging the results of this biased form</li>
          <li>Lack of action in organising an SGM for Coordinator replacements</li>
        </ul>
        <p>
          Full details are in the <a target="_blank" href="/sgm_petition.pdf">President Motion Petition</a> document.
        </p>
        <p>
          Additionally, the positions of <b>Events Coordinator</b> and <b>Marketing Coordinator</b> have been vacated and will be up for election
          at this meeting.
        </p>
        <p>
          We invite all Code Network members to attend this meeting, either in-person or online, and to be a part of this important moment in the life of our club.
        </p>
        <p>Thank you for your ongoing support.</p>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ background: "#eee", padding: "0.2rem 1.4rem", borderRadius: "8px", marginTop: "1rem", width: "fit-content" }}>
            <p>
              <a style={{ display: "flex", alignItems: "center", gap: "0.6rem" }} className="link" target="_blank" href="https://docs.google.com/document/d/1gz89SGCCg9iZa1Mfrvy7mDWqWTWHZAkUJBUByOmiCU8/edit?usp=sharing">
                <Book />
                Meeting Agenda
              </a>
            </p>
          </div>
          <div style={{ background: "#eee", padding: "0.2rem 1.4rem", borderRadius: "8px", marginTop: "1rem", width: "fit-content" }}>
            <p>
              <a style={{ display: "flex", alignItems: "center", gap: "0.6rem" }} className="link" target="_blank" href="/sgm_petition.pdf">
                <Book />
                President Motion Petition
              </a>
            </p>
          </div>
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
