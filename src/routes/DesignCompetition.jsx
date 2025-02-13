import CountdownSection from "@/components/CountdownSection";
import "@/styles/design-comp.css"
import { Alert, Button, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs } from "@mui/material"
import { useState, useEffect } from "react"

function CompetitionTab({ children, index, currentIndex }) {
  return (
    <div style={{ display: index === currentIndex ? "block" : "none", border: "1px solid lightgray", padding: "1em" }}>
      {children}
    </div>
  )
}

export default function DesignCompetitionPage() {
  const [value, setValue] = useState(0);
  const [showEnterButton, setShowEnterButton] = useState(false);
  const [compClosed, setCompClosed] = useState(false)

  const openDateStr = '2024-11-18T00:00:00+10:00';
  const openDate = new Date(openDateStr);
  const dueDateStr = '2025-02-11T00:00:00+10:00';
  const dueDate = new Date(dueDateStr)

  useEffect(() => {
    document.title = "Website Redesign Competition | Code Network";

    const checkTime = () => {
      const now = new Date();

      if (now >= dueDate) {
        setShowEnterButton(false);
        setCompClosed(true)
        return;
      }
      if (now >= openDate) {
        setShowEnterButton(true);
      }
    };

    checkTime();
    const timer = setInterval(checkTime, 1000); // Check every second

    return () => clearInterval(timer);
  }, [dueDate]);

  return (
    <main className="container">
      <div className="header" style={{ borderRadius: '0px', color: 'white', fontSize: '2rem', padding: "1em", textAlign: 'center', fontWeight: 'bold' }}>
        <h1 style={{ marginTop: "12px", marginBottom: "12px" }}>Code Network Website Re-Design Competition</h1>
        {showEnterButton &&
          <>
            <Alert severity="info" sx={{ maxWidth: "36em", marginX: "auto" }} action={
              <Button href="https://codenetwork.notion.site/1311e884ce0d80eda987f9d6ddb9a06d?pvs=105" target="_blank" color="inherit" size="small" sx={{ ":hover": { color: "inherit" } }}>Enter your design here</Button>
            }>Competition entries now open!</Alert>
            <CountdownSection initialDate={dueDateStr} />
          </>
        }
        {compClosed && <h2 className="countdown" style={{fontFamily: "monospace"}}>COMPETITION CLOSED - JUDGING UNDERWAY</h2>}
      </div>
      <div className="edges">
        <h1>What's this all about?</h1>
        <p>
          Code Network's website is where we showcase who our club is, why we exist, and what we do. We need to communicate this information to:
        </p>
        <ul>
          <li>Students - who want to know why they should join our community and how they can get involved</li>
          <li>Members - who want to see what our upcoming events are</li>
          <li>Academics at QUT - who want to share our club with their students</li>
          <li>People in the industry - who want to know why they should support our club</li>
        </ul>
        <p>
          Code Network is planning to rebuild this website in 2025 as part of our transition towards more open club projects. We feel that this
          would be a great opportunity for our members to contribute to a real-world project.
        </p>
        <p>
          And then we thought, why stop with the code? Why don't we give our members a chance to design our website? <b>That's where you come in!</b>
        </p>
        <p style={{textAlign: 'center', fontSize: '1.5rem', padding: "1em 0em", borderTop: "0.1em solid #34cd3c", borderBottom: "0.1em solid #34cd3c"}}>Your mission is to <b>create an awesome new design for our website!</b></p>

        <h1>All the details:</h1>
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          textColor="inherit"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Timeline" />
          <Tab label="Eligibility" />
          <Tab label="Submission Requirements" />
          <Tab label="Judging Criteria" />
          <Tab label="Prizes" />
          <Tab label="Who to Contact" />
          <Tab label="Design Resources" />
        </Tabs>

        <CompetitionTab index={0} currentIndex={value}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Phase</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Expressions of Interest Open</TableCell>
                  <TableCell>21 October until 15 November 2024</TableCell>
                  <TableCell>
                    People who would be interested in participating in the competition are asked to express their interest during this time period.
                  </TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: showEnterButton ? "#e2ffde" : "white" }}>
                  <TableCell>Entries Open</TableCell>
                  <TableCell>18 November 2024 until 10 February 2025</TableCell>
                  <TableCell>{!compClosed && <>Submissions to be made via {showEnterButton ? <a href="https://codenetwork.notion.site/1311e884ce0d80eda987f9d6ddb9a06d?pvs=105">this link</a> : <span>a link to be provided soon!</span>}<br /><b>Please note the 48 hour late submission period does not apply for this competition!</b></>}</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: "#e2ffde" }}>
                  <TableCell>Entrant Judging</TableCell>
                  <TableCell>11 to 23 February 2025</TableCell>
                  <TableCell>All entries will be judged by our judging panel, which will be comprised of key stakeholders from our Executive Team.</TableCell>
                </TableRow>
                {/* <TableRow>
                  <TableCell>Shortlist Announced</TableCell>
                  <TableCell>16 February 2025</TableCell>
                  <TableCell>The Top 10 entrants from the judging phase will be shortlisted and put to a community vote.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Community Vote</TableCell>
                  <TableCell>17 to 20 February 2025</TableCell>
                  <TableCell>Members of the Code Network community will be asked to vote on their favourite design.</TableCell>
                </TableRow> */}
                <TableRow>
                  <TableCell>Winning Design Announced</TableCell>
                  <TableCell>24 February 2025</TableCell>
                  <TableCell>The winning design will be announced at the first Code Network event of the year. Shortlisted candidates will be invited to attend to be recognised in-person.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <p>Please note, this timeline is subject to change at the discretion of the Executive Team. Please check back regularly for the latest details.</p>
        </CompetitionTab>
        <CompetitionTab index={1} currentIndex={value}>
          <h3>Competition Eligibility</h3>
          <p>To enter this competition, you must be a <b>current</b> student at the Queensland University of Technology as of Semester 1, 2025.</p>
          <p>We are unable to accept submissions from students who are graduating in Semester 2, 2024 at this time.</p>
        </CompetitionTab>
        <CompetitionTab index={2} currentIndex={value}>
          <h3>Design Mock-ups</h3>
          <ul>
            <li>Can be of any format, but we strongly recommend using Figma.</li>
            <li>Can be of any level of fidelity, but preference will be given to high-fidelity designs</li>
            <li>Please provide a version of the design for both desktop and mobile users.</li>
            <li>
              We are looking for wireframes that will be relevant to our website. Some suggestions are below, but you are not required to design all of these,
              and you are encouraged to add your own pages that you see are relevant.
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>Page</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Notes</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ width: "20%" }}>Home Page</TableCell>
                      <TableCell>This should act as the cover page to Code Network, and should provide any visitors to our site with a good indication of what our club is like overall. This is where your creativity should <b>shine!</b></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>About Us</TableCell>
                      <TableCell>Could be combined with the Home Page. This is where you can go into more detail about who we are as a club, why we exist, and what we do.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Upcoming Events</TableCell>
                      <TableCell>Could also be integrated with the Home Page, but should serve as a quick way to see what events are coming up for our club.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Major Event Details Page</TableCell>
                      <TableCell>Show us, if we had a major event coming up, such as our Winter Hackathon, what should people see?</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Member Projects Showcase</TableCell>
                      <TableCell>
                        Our members build awesome projects throughout the year, such as at our Project Nights, Winter Hackathon, and other
                        special events. This page should be where members can show off the cool things they have built. They should also
                        have a link to a form where they can submit their project for display.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Club Projects</TableCell>
                      <TableCell>
                        This year, our club is running a range of projects that our members can contribute towards. On this section of
                        the site, we want to list the projects our members can contribute to, show them how they can contribute, and point
                        them towards where they can find further information (e.g. GitHub repository, our Discord server).
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Blog</TableCell>
                      <TableCell>Where our club shares the latest updates regarding what's happening.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Industry Engagement</TableCell>
                      <TableCell>
                        Our club relies on funding from industry sponsors to run our activies. We may need to dedicate a page to telling
                        companies why they should support our club and what they would get out of sponsorship. Consider our prospectus
                        on the current home page for inspiration.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>General Content</TableCell>
                      <TableCell>
                        If our club needs to publish a page with general information, how would the page look? Show us how we should typeset
                        and format our basic content pages (this is basically a <a href="https://loremipsum.io/" target="_blank">"Lorem Ipsum"</a> page - 
                        doesn't need to have actual content on it.)
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Anything Else</TableCell>
                      <TableCell>
                        Show us your creativity! What else do you think people visiting our website should be able to see?
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>
          </ul>
          <h3>Explanation of Design Choices</h3>
          <p>
            You will be asked to provide a brief statement to explain your overall design choices in your wireframes. This doesn't need to be an exhaustive
            explanation, but this is an opportunity to explain any big design decisions that you made so we can take these into consideration when evaluting
            your design.
          </p>
        </CompetitionTab>
        <CompetitionTab index={3} currentIndex={value}>
          <p>
            All entries will be judged along the following criteria by our judging panel (excluding community vote).
          </p>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Criteria</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Question</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Weighting</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Creativity</TableCell>
                  <TableCell>How well does the design incorporate creative elements that make it stand out?</TableCell>
                  <TableCell>20%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Usability</TableCell>
                  <TableCell>How well organised is the site content? How easy is the site to navigate and understand?</TableCell>
                  <TableCell>20%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand Identity</TableCell>
                  <TableCell>How easily can a visitor tell that this is the Code Network website?</TableCell>
                  <TableCell>20%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Responsiveness</TableCell>
                  <TableCell>How well does the prototype respond to / work with different form factors?</TableCell>
                  <TableCell>10%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cohesiveness</TableCell>
                  <TableCell>How cohesive is the design overall? Does it all feel like one website promoting Code Network?</TableCell>
                  <TableCell>10%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Presentation</TableCell>
                  <TableCell>How well did the entrant explain their design choices and thought process?</TableCell>
                  <TableCell>10%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Community Vote</TableCell>
                  <TableCell>Members of the Code Network Community will be asked to rank the designs. Each shortlisted design will receive a score reflective of their average ranking.</TableCell>
                  <TableCell>10%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CompetitionTab>
        <CompetitionTab index={4} currentIndex={value}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Prize</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Award</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>First Prize</TableCell>
                  <TableCell>$500 Prezzee eGift Card</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shortlist Prize</TableCell>
                  <TableCell>$25 QUT Retail Gift Voucher (to be confirmed)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <p>Other prizes may also be announced at the discretion of the Executive Team.</p>
        </CompetitionTab>
        <CompetitionTab index={5} currentIndex={value}>
          <p>Please direct any questions to <a href="mailto:hello@codenetwork.co">hello@codenetwork.co</a>.</p>
          <p>We would be happy to answer any questions relating to the competition or about what we would like to see from the website.</p>
          <p>You are also welcome to contact us if you would like some feedback on your draft design.</p>
        </CompetitionTab>
        <CompetitionTab index={6} currentIndex={value}>
          <h3>Logo</h3>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5em", marginBottom: "0.5em" }}>
            <a href="./logo.svg" target="_blank"><img src="./logo.svg" style={{ backgroundColor: "#0A0D2A", padding: "8px", width: "fit-content" }} height={80} /></a>
            <a href="./logo.svg" target="_blank">Code Network Logo (SVG Version)</a>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5em", marginBottom: "0.5em" }}>
            <a href="./logo.png" target="_blank"><img src="./logo.png" style={{ backgroundColor: "#0A0D2A", padding: "8px", width: "fit-content" }} height={80} /></a>
            <a href="./logo.png" target="_blank">Code Network Logo (PNG Version)</a>
          </div>
          <h3>Colour Scheme</h3>
          <p>These are the colours we generally use around our website and marketing resources. Please do not feel restricted to these!</p>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5em", marginBottom: "0.5em" }}>
            <div style={{ width: "36px", height: "36px", backgroundColor: "#0A0D2A" }}></div>
            <span><b>Dark Blue</b> #0A0D2A</span>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5em", marginBottom: "0.5em" }}>
            <div style={{ width: "36px", height: "36px", backgroundColor: "#101139" }}></div>
            <span><b>Medium Blue</b> #101139</span>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5em", marginBottom: "0.5em" }}>
            <div style={{ width: "36px", height: "36px", backgroundColor: "#212154" }}></div>
            <span><b>Light Blue</b> #212154</span>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5em", marginBottom: "0.5em" }}>
            <div style={{ width: "36px", height: "36px", backgroundColor: "#34CD3C" }}></div>
            <span><b>Accent Green</b> #34CD3C</span>
          </div>
        </CompetitionTab>
        <p>Last Updated: 13 February 2025</p>
      </div>
    </main>
  )
}
