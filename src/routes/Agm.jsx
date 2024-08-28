import { Book, FileOpen } from "@mui/icons-material";
import "../App.css";
import "../assets/agm.css";
import React from "react";
import { Button, Link, Stack } from "@mui/material";

function Agm() {
  return (
    <div className="content-wrapper">
      <div className="edges" style={{ color: "#111", fontFamily: "Montserrat" }}>
        <div className="global-padding">
          <h1>January 2024 Annual General Meeting</h1>
          <p>
            The 2024 Annual General Meeting will be held on <strong>Monday, September 9th at 5pm</strong> in <strong>GP D-108</strong>.
          </p>
          <p>
            I know... it sounds boring, but the AGM is arguably the most important event of the year for Code Network. This is where our
            club reflects on the year that has been and we look forward to the new year ahead.
          </p>
          <p>You are invited to join us at our 2024 Annual General Meeting. This is your opportunity to:</p>
          <ul style={{ listStyle: "none", padding: "0 0 12px" }}>
            <li>📣 Hear about our club's achievements from this year</li>
            <li>❔ Ask questions about our club and our achievements</li>
            <li>📝 And most importantly, to join the 2025 Executive Team and shape the future of our club!</li>
          </ul>
          <p>This page may be updated with additional information in the lead up to our AGM. To learn more see:</p>
          <Stack direction="row" spacing={1}>
            <a href="https://docs.google.com/document/d/1uvIfpRDy4MzC7WLnbMkc7jIDxIUyDdz1n6mRW3hglUI/edit#heading=h.lmgx5rxt46zj">
              <Button variant="contained" sx={{ background: "var(--primary)!important" }}>
                About the Roles
              </Button>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVTq382wX-cfjMIZGEFmNBTkRD9a210IW1gAUzw-d3Ck_EDA/viewform">
              <Button variant="contained" sx={{ background: "var(--primary)!important" }}>
                Apply to Join
              </Button>
            </a>
            <a href="https://docs.google.com/document/d/1YdBWYmZJXsmeLzP2AO0t1cuK1NEf1uhoSXdQU6qHalE/edit#heading=h.lmgx5rxt46zj">
              <Button variant="contained" sx={{ background: "var(--primary)!important", ":hover": { background: "" } }}>
                Meeting Agenda
              </Button>
            </a>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Agm;
