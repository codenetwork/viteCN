import { Client } from "@notionhq/client"
import { useEffect, useState } from "react"
import "../styles/projects.css"
// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react"

const notion = new Client({
  auth: import.meta.env.VITE_NOTION_KEY,
  baseUrl: location.origin + "/api"
})

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
  const [projects, setProjects] = useState();

  useEffect(() => {
    document.title = "Projects | Code Network";
    
    async function fetchData() {
      const databaseId = "5bdf608c128647368673c36a2b549566"
      const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
          property: "Status",
          status: {
            equals: "Active"
          }
        }
      })
      setProjects(response.results)
      // console.log(response.results)
    }
    fetchData()
  }, [])

  return (
    <main className="container">
      <div className="edges">
        <h1>Code Network Projects</h1>
        <p>Looking to flex your coding muscles? Help us build the most awesome projects!</p>
        <p>Ways you can contribute to our projects:</p>
        <ul>
          <li>Writing code</li>
          <li>Testing and writing issues</li>
          <li>Writing documentation</li>
          <li>Coming up with new feature ideas</li>
        </ul>
        <h2>Our Current Projects</h2>
        {projects ? <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: "0.5em" }}>
          {projects.map(project =>
            <a
              className="project-card"
              href={project.properties["GitHub Repo"].url}
              target="_blank"
            >
              <span style={{ fontSize: "2em" }}>{project.icon?.emoji}</span>
              <span>{project.properties.Name.title[0].text.content}</span>
              <span style={{ display: "flex", gap: "0.25em", fontSize: "0.75em" }}>{project.properties.Tags.multi_select.map(tag =>
                <span class="project-badge" style={{ backgroundColor: notionBgColorMap[tag.color], color: notionFgColorMap[tag.Color], padding: "0.25em", borderRadius: "0.25em" }}>{tag.name}</span>
              )}</span>
            </a>)}
        </div> : <p>Loading our current projects...</p>}
      </div>
    </main>
  )
}