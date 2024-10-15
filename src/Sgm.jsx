import { Book, Link } from "@mui/icons-material";
import { FileOpen } from "@mui/icons-material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SGM() {
  return (
    <div class="edges" style={{ display: "grid" }}>
      <div style={{ maxWidth: "90ch", placeSelf: "center" }}>
        <p>There are no Special General Meetings currently scheduled at this time.</p>
        {/* <h1>January 2024 Special General Meeting</h1>
        <p>Dear Code Network members,</p>
        <p>
          In light of a significant transition within the execute team for 2024, we are required, as per section 15.2 of the Constitution,
          to convene a General Meeting (GM) to elect a replacement for the vacant role.
        </p>
        <p>
          We extend an invitation to all members interested in assuming the responsibilities of <strong>Treasurer</strong> to attend and
          formally express their interest. Please use this{" "}
          <a className="link" href="https://forms.gle/JfwvXfwXbJbrwnHs6">
            expression of interest form
          </a>{" "}
          to register your interest as soon as possible.
        </p>
        <p>
          Additionally, as a result of any movement of current executives roles, there exists an opportunity for members to step into any
          vacated positions during the meeting.
        </p>
        <p>Thank you for your ongoing support.</p>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ background: "#eee", padding: "0.2rem 1.4rem", borderRadius: "8px", marginTop: "1rem", width: "fit-content" }}>
            <p>
              <a style={{ display: "flex", alignItems: "center", gap: "0.6rem" }} className="link" href="https://forms.gle/guqyaRLKieMeaPgg7">
                <Book />
                Meeting Attendance Form
              </a>
            </p>
          </div>
          <div style={{ background: "#eee", padding: "0.2rem 1.4rem", borderRadius: "8px", marginTop: "1rem", width: "fit-content" }}>
            <p>
              <a style={{ display: "flex", alignItems: "center", gap: "0.6rem" }} className="link" href="https://qut.zoom.us/j/85306265388?pwd=aXIrQmdFS1dmTUR3cFVqUDJ3SHpGdz09">
                <Link />
                Zoom Meeting Link
              </a>
            </p>
          </div>
          <div style={{ background: "#eee", padding: "0.2rem 1.4rem", borderRadius: "8px", marginTop: "1rem", width: "fit-content" }}>
            <p>
              <a style={{ display: "flex", alignItems: "center", gap: "0.6rem" }} className="link" href="https://forms.gle/JfwvXfwXbJbrwnHs6">
                <Link />
                Expression of Interest Form
              </a>
            </p>
          </div>
          <div style={{ background: "#eee", padding: "0.2rem 1.4rem", borderRadius: "8px", marginTop: "1rem", width: "fit-content" }}>
            <p>
              <a style={{ display: "flex", alignItems: "center", gap: "0.6rem" }} className="link" href="https://docs.google.com/document/d/14B5BQF3ZJI59j8-ShqwZTzza6a4yyKqlGDCNZcSCQtg/edit#heading=h.lmgx5rxt46zj">
                <FileOpen />
                Information about roles
              </a>
            </p>
          </div>
        </div>
        <div style={{ background: "#eee", padding: "1rem 2rem", borderRadius: "8px", marginTop: "2rem" }}>
          <p>This event has been scheduled for <strong>12pm on Monday 22nd January 2024</strong>. Please click the Zoom Meeting Link above to join the virtual meeting.</p>
          <p>Please also stay tuned to our socials for any updates.</p>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h2>Roles</h2>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>Treasurer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The Treasurer oversees the finances of the club. This includes income from funding, sponsors, and events; and club
                expenditures
                <p>
                  <strong>Responsibilities</strong>: <br />
                  <ul>
                    <li>Issue transactions and request authorizations from Guild Treasurer</li>
                    <li>Keep a receipt book</li>
                    <li>Manage reimbursement forms</li>
                    <li>Manage sponsorship funding</li>
                    <li>Submit funding applications to QUT Guild and SGDO</li>
                    <li>Issue a end-of-semester financial report to the Executive Team</li>
                    <li>Liaise with the Academic Champion to set up an Account Code with QUT</li>
                  </ul>
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography>Other Roles</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Subject to nominations and changes in roles at the Special General Meeting, other roles may become vacated. Please read the document <a href="https://docs.google.com/document/d/14B5BQF3ZJI59j8-ShqwZTzza6a4yyKqlGDCNZcSCQtg/edit#heading=h.lmgx5rxt46zj" className="link">here</a> to learn more about Code Network's Executive Roles.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div> */}
      </div>
    </div>
  );
}
