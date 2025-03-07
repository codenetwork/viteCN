import { Client } from "@notionhq/client"
import { useEffect, useState } from "react"
import "../styles/projects.css"


export default function Projects101Page() {
  // const [projects, setProjects] = useState();

  useEffect(() => {
    document.title = "Projects 101 | Code Network";
  }, [])

  return (
    <main className="container">
      <div className="edges">
        <p><a href="/projects">⬅️ Go back to projects</a></p>
        <h1>Projects 101</h1>
        <p style={{ textAlign: 'center', fontSize: '1.5rem', padding: "1em 0em", borderTop: "0.1em solid #34cd3c", borderBottom: "0.1em solid #34cd3c" }}>
          Getting started with working on projects? <b>You're in the right place!</b>
        </p>

        <h2>Projects 101 Workshop</h2>
        <p>
          Our Projects Coordinator, Corey McCormick, gave this presentation at our Project Night on Monday 3/03/2025. This workshop covered a range of fundamental
          topics, including open source, Git, and GitHub. This project is a crash course in all things projects, and if you are interested in further resources,
          please see the 2024 Git Demystified workshop and other links below.
        </p>
        <p>Corey also presented two Fireship videos in this presentation. Please find the links to these videos further down the page.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ahgc9gWrY1A?si=ztRxyj3HmniT5bPL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h2>Git Demystified Workshop</h2>
        <p>
          This workshop was delivered by Corey McCormick in 2024 and goes into a lot more depth on setting up Git and GitHub. A recommended watch if you are just
          getting started with Git and GitHub and would like to see a work-through of setting it up.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RR_PPXPXMhE?si=iZPo1eK1qwvMmQMQ&amp;start=245" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h2>Further Resources</h2>
        <p>The following is a list of links to resources that may help you get started with your journey with Git.</p>
        <ul>
          <li><a target="_blank" href="https://www.youtube.com/watch?v=hwP7WQkmECE">Fireship: Git Explained in 100 Seconds (youtube.com)</a></li>
          <li><a target="_blank" href="https://www.youtube.com/watch?v=8lGpZkjnkt4">Fireship: GitHub Pull Request in 100 Seconds (youtube.com)</a></li>
          <li><a target="_blank" href="https://docs.github.com/en/get-started/git-basics/set-up-git">How to setup Git (github.com)</a></li>
          <li><a target="_blank" href="https://docs.github.com/en/get-started/using-github/github-flow">GitHub Flow (github.com)</a></li>
          <li>Have another useful resource? <b>Let us know!</b></li>
        </ul>

        <h2>I need help!</h2>
        <p>
          If you need help getting started with Git and GitHub, please let us know on our <a href="https://discord.gg/scXBk2j4uE">Discord server</a> or on any of our other social media platforms.
        </p>
        
      </div>
    </main>
  )
}