import { Client } from "@notionhq/client"
import { useEffect, useState } from "react"
import "../styles/projects.css"
import FAQSection from "@/components/FAQSection"
import { Alert } from "@mui/material"
// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react"

// const notion = new Client({
//   auth: import.meta.VITE_NOTION_KEY,
//   baseUrl: location.origin + "/api"
// })

const projects = [
  {
    title: "B{AI}by Steps",
    emoji: "🧠",
    repo: "https://github.com/codenetwork/baiby-steps",
    tags: [{ name: "Reinforcement Learning", color: "blue" }]
  },
  {
    title: "Code Network Website Rebuild",
    emoji: "🌐",
    repo: "https://github.com/codenetwork/codenetwork.co",
    tags: [{ name: "Web", color: "red" }, { name: "Design", color: "orange" }]
  },
  {
    title: "Code Network Discord Bot",
    emoji: "🤖",
    repo: "https://github.com/codenetwork/discord-bot-v3",
    tags: [{ name: "Discord", color: "green" }]
  },
  {
    title: "Duit",
    emoji: "✅",
    repo: "https://github.com/TwirlySeal/duit",
    tags: [{ name: "Web", color: "red" }, { name: "Full-Stack", color: "purple" }, { name: "Golang", color: "yellow" }]
  },
]

// Source: https://notioneers.eu/en/insights/notion-colors-codes
const notionBgColorMap = {
  "red": "#BE524B",
  "pink": "#BA4A78",
  "purple": "#865DBB",
  "blue": "#447ACB",
  "green": "#4F9768",
  "yellow": "#C19138",
  "orange": "#CB7B37",
  "brown": "#A27763",
  "gray": "#9B9B9B",
  "default": "#D4D4D4"
}

const notionFgColorMap = {
  "red": "#332523",
  "pink": "#2E2328",
  "purple": "#2A2430",
  "blue": "#1F282D",
  "green": "#242B26",
  "yellow": "#372E20",
  "orange": "#36291F",
  "brown": "#2E2724",
  "gray": "#252525",
  "default": "#191919"
}

export default function ProjectsPage() {
  // const [projects, setProjects] = useState();

  useEffect(() => {
    document.title = "Projects | Code Network";

    //   async function fetchData() {
    //     const databaseId = "5bdf608c128647368673c36a2b549566"
    //     const response = await notion.databases.query({
    //       database_id: databaseId,
    //       filter: {
    //         property: "Status",
    //         status: {
    //           equals: "Active"
    //         }
    //       }
    //     })
    //     setProjects(response.results)
    //     // console.log(response.results)
    //   }
    //   fetchData()
  }, [])

  return (
    <main className="container">
      <div className="edges">
        <h1>Our Club's Projects</h1>
        <p style={{ textAlign: 'center', fontSize: '1.5rem', padding: "1em 0em", borderTop: "0.1em solid #34cd3c", borderBottom: "0.1em solid #34cd3c" }}>
          Looking to flex your coding muscles? <b>Help us build the most awesome projects in 2025!</b>
        </p>

        {/* <h2>Our Current Projects</h2> */}
        {/* <p>Click on any of the projects below to see the GitHub repository!</p> */}
        <p style={{ textAlign: "center", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "0.1em" }}>Here's what we're building this year!</p>
        <p style={{ textAlign: "center", marginTop: "0" }}>Click a project to open its GitHub repository ⤵️</p>
        {projects ? <div className="project-list">
          {projects.map(project =>
            <a
              className="project-card"
              href={project.repo}
              target="_blank"
            >
              <span style={{ fontSize: "2em" }}>{project.emoji}</span>
              <div className="project-title">
                <div>{project.title}</div>
                <span style={{ display: "flex", gap: "0.25em", fontSize: "0.75em" }}>{project.tags.map(tag =>
                  <span class="project-badge" style={{ backgroundColor: notionBgColorMap[tag.color], padding: "0.25em", borderRadius: "0.25em" }}>{tag.name}</span>
                )}</span>
              </div>
            </a>)}
        </div> : <p>Loading our current projects...</p>}
        <h2 style={{ marginBottom: "0.5em", marginTop: "1.5em", fontSize: "1.5rem", fontWeight: "medium" }}>Ways you can contribute to our projects:</h2>
        <div className="project-ways">
          <div>🧑‍💻 Writing code</div>
          <div>🚩 Testing and writing issues</div>
          <div>📖 Writing documentation</div>
          <div>💡 Coming up with new feature ideas</div>
        </div>
        <h2 style={{ marginBottom: "0.5em", fontSize: "1.5rem", fontWeight: "medium" }}>Project Contribution Flow</h2>
        <p style={{ textAlign: "center", paddingTop: "1em", paddingBottom: "1em", borderTop: "0.1em solid #34cd3c", borderBottom: "0.1em solid #34cd3c" }}>⚠️ New to projects? <a href="/projects/101">Learn more about how Git on our <b>Projects 101 page</b></a></p>
        <div className="project-flow">
          <img src="/project_flow.png" />
          <div>
            <p>These are the basic steps to make a contribution to any of our projects. Further details can be found at the project repositories linked above.</p>
            <ol>
              <li>Create a fork from your chosen project.</li>
              <li>Make commits on your project fork.</li>
              <li>Open a pull request to the Code Network repo when ready.</li>
              <li>Make further commits to your fork, and discuss in the pull request.</li>
              <li>When our team is satisfied with the changes, we'll merge into our repository.</li>
            </ol>
          </div>
        </div>
        <h2 style={{ marginBottom: "0.5em", fontSize: "1.5rem", fontWeight: "medium" }}>Join us at our Project Nights!</h2>
        <Alert severity="warning">
          <p style={{ margin: 0 }}>Project Nights are currently on pause for the mid-semester break and upcoming public holidays.</p>
          <p>With that said, our projects are always open for anyone to explore and contribute to! If you would be interested in contributing but are not sure where to get started, reach out to our Projects Team via our club's <a href="https://discord.gg/scXBk2j4uE">Discord server</a>.</p>
          <p>See our social media pages for further details about our upcoming events!</p>
        </Alert>
        {/* <p>Interested in helping us to build our cool projects? Join us at our weekly project nights on <b>Mondays 5-8pm</b>!</p> */}
        {/* <p>See our social media pages for further details!</p> */}
        <FAQSection />
      </div>
    </main>
  )
}
