import { Client } from "@notionhq/client"
import { useEffect, useState } from "react"

const notion = new Client({
  auth: import.meta.env.VITE_NOTION_KEY,
  baseUrl: location.origin + "/api"
})

export default function ProjectsPage() {
  const [projects, setProjects] = useState();

  useEffect(() => {
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
        <h2>Our Current Projects</h2>
        {projects ? <ul>
          {projects.map(project => <li key={project.id}>{project.properties.Name.title[0].text.content} <a href={project.properties["GitHub Repo"].url}>({project.properties["GitHub Repo"].url})</a></li>)}  
        </ul> : <p>Loading our current projects...</p>}
      </div>
    </main>
  )
}