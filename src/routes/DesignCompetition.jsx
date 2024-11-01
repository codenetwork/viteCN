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
  const [showEnterButton, setShowEnterButton] = useState(true);

  const dueDateStr = '2025-02-10T00:00:00+10:00';
  const dueDate = new Date(dueDateStr)

  useEffect(() => {
    document.title = "Website Redesign Competition | Code Network";

    const checkTime = () => {
      const now = new Date();

      if (now >= dueDate) {
        setShowEnterButton(false);
      }
    };

    checkTime();
    const timer = setInterval(checkTime, 1000 * 60); // Check every minute

    return () => clearInterval(timer);
  }, [dueDate]);

  return (
    <main className="container">
      <div className="header" style={{ borderRadius: '0px', color: 'white', fontSize: '2rem', padding: "1em", textAlign: 'center', fontWeight: 'bold' }}>
        <h1 style={{ marginTop: "12px", marginBottom: "12px" }}>Code Network Website Re-Design Competition</h1>
        <Alert severity="info" sx={{ maxWidth: "36em", marginX: "auto" }} action={
          <Button href="https://codenetwork.notion.site/1311e884ce0d80eda987f9d6ddb9a06d?pvs=105" target="_blank" color="inherit" size="small" sx={{ ":hover": { color: "inherit" } }}>Enter your design here</Button>
        }>Competition entries now open!</Alert>
        <CountdownSection initialDate={dueDateStr} />
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
        <h1>Your Mission...</h1>
        <p>...should you choose to accept it, is to show us your design skills and to create the coolest website anyone has ever seen!</p>

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
          <Tab label="Submission Requirements" />
          <Tab label="Judging Criteria" />
          <Tab label="Prizes" />
          <Tab label="Who to Contact" />
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
                <TableRow sx={{ backgroundColor: "#e2ffde" }}>
                  <TableCell>Entries Open</TableCell>
                  <TableCell>18 November 2024 until 10 February 2025</TableCell>
                  <TableCell>Submissions to be made via a Google Form. Link to be provided soon!</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shortlist Announced</TableCell>
                  <TableCell>16 February 2025</TableCell>
                  <TableCell>The top 10 candidates will be announced and will be voted on by the community.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Community Vote</TableCell>
                  <TableCell>17 to 20 February 2025</TableCell>
                  <TableCell>Members of the Code Network community will be asked to vote on their favourite design.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Winning Design Announced</TableCell>
                  <TableCell>TBA</TableCell>
                  <TableCell>The winning design will be announced at the first Code Network event of the year. Shortlisted candidates will be invited to attend to be recognised in-person.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <p>Please note, this timeline is subject to change at the discretion of the Executive Team. Please check back regularly for the latest details.</p>
        </CompetitionTab>
        <CompetitionTab index={1} currentIndex={value}>
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
                      <TableCell>Projects Showcase</TableCell>
                      <TableCell>A place for our members to display the cool things they have been building as part of our club.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Club Projects</TableCell>
                      <TableCell>
                        This is a place for people to see the projects our club is building that they can contribute to.
                        Different from the Projects Showcase in that the showcase page is more of a hall of fame, while
                        the Club Projects is where members can find things they can contribute to.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Blog</TableCell>
                      <TableCell>Where our club shares the latest updates regarding what's happening</TableCell>
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
          <p>You will be asked to provide a brief statement to explain your overall design choices in your wireframes.</p>
        </CompetitionTab>
        <CompetitionTab index={2} currentIndex={value}>
          <p>
            Our team of judges will be looking at the following aspects of each design, and will be considering these when making a decision
            on which design should proceed to the shortlist.
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
                  <TableCell>15%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Completeness</TableCell>
                  <TableCell>How comprehensively does the website cover all aspects of our club?</TableCell>
                  <TableCell>15%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Presentation</TableCell>
                  <TableCell>How well did the entrant explain their design choices and thought process?</TableCell>
                  <TableCell>10%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <p>
            Please note that the judging panel may consider additional criteria in relation to the visual appeal and cohesiveness of the design
            when making their final decision.
          </p>
        </CompetitionTab>
        <CompetitionTab index={3} currentIndex={value}>
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
        <CompetitionTab index={4} currentIndex={value}>
          <p>Please direct any questions to <a href="mailto:hello@codenetwork.co">hello@codenetwork.co</a>.</p>
          <p>We would be happy to answer any questions relating to the competition or about what we would like to see from the website.</p>
        </CompetitionTab>
      </div>

    </main>
  )
}
