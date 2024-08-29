import { Close, CopyAll, LinkOutlined, OpenInNew } from "@mui/icons-material";
import { Box, Button, Dialog, IconButton, Stack } from "@mui/material";
import React from "react";
import "../App.css";
import "../assets/agm.css";

function Agm() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  return (
    <div className="content-wrapper">
      <div className="edges" style={{ color: "#111", fontFamily: "Montserrat" }}>
        <div style={{ maxWidth: "80ch" }}>
          <h1 style={{ padding: 0, margin: "0 0 0.7rem 0" }}>Annual General Meeting (AGM) 2024</h1>
          <p style={{ padding: 0, margin: 0, fontSize: "1.4rem" }}>
            Have your say on our 2025 executive team and nominate yourself or others to be in the 2025 Code Network Executive team.
          </p>
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
                Apply to Join The Team
              </Button>
            </a>
            <a href="https://docs.google.com/document/d/1YdBWYmZJXsmeLzP2AO0t1cuK1NEf1uhoSXdQU6qHalE/edit#heading=h.lmgx5rxt46zj">
              <Button variant="contained" sx={{ background: "var(--primary)!important", ":hover": { background: "" } }}>
                Meeting Agenda
              </Button>
            </a>
            <a>
              <Button
                variant="contained"
                sx={{ background: "var(--primary)!important", ":hover": { background: "" } }}
                onClick={() => setIsDialogOpen(true)}>
                <LinkOutlined sx={{ pr: 1 }} /> Zoom Meeting Info
              </Button>
            </a>
          </Stack>
          <Dialog open={isDialogOpen} fullWidth={true} sx={{ zIndex: 10 }} onClose={() => setIsDialogOpen(false)}>
            <IconButton sx={{ position: "absolute", right: 8, top: 8 }} onClick={() => setIsDialogOpen(false)}>
              <Close />
            </IconButton>
            <Box p={4}>
              <h2 style={{ padding: 0, margin: "0 0 0.5rem 0" }}>AGM Zoom Meeting</h2>
              <p style={{ padding: 0, margin: "0 0 1rem 0" }}>QUT Login Only</p>
              <Stack direction="column">
                <Box bgcolor="#ececec" px={1} borderRadius={1}>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center">
                      <strong>Meeting Link:</strong>
                      <a href="https://qut.zoom.us/j/84965499570?pwd=obz8wIob8vdTB3YjQx5EVIpwQWkYvn.1" target="_blank">
                        <IconButton size="12px">
                          <OpenInNew sx={{ height: "20px" }} />
                        </IconButton>
                      </a>
                    </Stack>
                    <p style={{ padding: 0, margin: 0 }}>
                      {" "}
                      <a
                        href="https://qut.zoom.us/j/84965499570?pwd=obz8wIob8vdTB3YjQx5EVIpwQWkYvn.1"
                        target="_blank"
                        style={{ textWrap: "wrap", wordBreak: "break-all" }}>
                        https://qut.zoom.us/j/84965499570?pwd=obz8wIob8vdTB3YjQx5EVIpwQWkYvn.1
                      </a>{" "}
                    </p>
                  </Stack>
                  <Box display="flex" alignItems="center" gap={1} mt={1}>
                    <strong>Meeting ID:</strong> 849 6549 9570
                    <IconButton onClick={() => navigator.clipboard.writeText("84965499570")}>
                      <CopyAll sx={{ height: "20px" }} />
                    </IconButton>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <strong>Passcode:</strong> 320767
                    <IconButton onClick={() => navigator.clipboard.writeText("320767")}>
                      <CopyAll sx={{ height: "20px" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Agm;
