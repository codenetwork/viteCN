import "@/styles/design-comp.css"
import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs } from "@mui/material"
import { useState } from "react"

function CompetitionTab({children, index, currentIndex}) {
    return (
        <div style={{display: index === currentIndex ? "block" : "none", border: "1px solid lightgray", padding: "0.5em"}}>
            {children}
        </div>
    )
}

export default function DesignCompetitionPage() {
    const [value, setValue] = useState(0);

    return (
        <main className="container">
            <div className="header" style={{ borderRadius: '0px', color: 'white', fontSize: '2rem', padding: "1em", textAlign: 'center', fontWeight: 'bold' }}>
                Code Network Website Re-Design Competition
            </div>
            <div className="edges">
                <h1>What's this all about?</h1>
                <p>
                    Code Network's website was most recently rebuilt in 2022. While the developer team at the time did a great job bringing in more interactive
                    elements to the site, it is, in its current state, very difficult to maintain.
                </p>
                <p>
                    In 2025, Code Network is planning to re-build this website, and as part of our transition towards more open club projects, we feel that
                    this is a great opportunity to give our members a cool open-source project to contribute to.
                </p>
                <p>
                    And then we thought, why stop with the code? Why don't we give our members a chance to design our website? <b>That's where you come in!</b>
                </p>
                <h1>Your Mission...</h1>
                <p>...should you choose to accept it, is to show us your design skills and to create the coolest website anyone has ever seen!</p>

                <Tabs
                    value={value}
                    onChange={(e, val) => setValue(val)}
                    textColor="inherit"
                    variant="fullWidth"
                >
                    <Tab label="Timeline" />
                    <Tab label="Prizes" />
                    <Tab label="Item Three" />
                </Tabs>
                
                <CompetitionTab index={0} currentIndex={value}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{fontWeight: "bold"}}>Phase</TableCell>
                                    <TableCell sx={{fontWeight: "bold"}}>Date</TableCell>
                                    <TableCell sx={{fontWeight: "bold"}}>Details</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
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
                </CompetitionTab>
                <CompetitionTab index={1} currentIndex={value}>
                    test2
                </CompetitionTab>
            </div>

        </main>
    )
}
