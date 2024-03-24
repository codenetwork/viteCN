import Page from "../components/Page";
import Person from "../components/Person";
import { H1 } from "../components/Text";

import team from "../component/TeamData.json";
import { Link } from "@mui/material";

export default function About() {
  return (
    <Page title="About">
      <H1>Build anything, as long as it's awesome</H1>
      <p>Code Network is a student-led organisation dedicated to fostering a strong developer community for anyone interested in code.</p>
      <p>
        We seek gradual and consistent development of our members' skills and knowledge through weekly meetups and workshops, providing a
        stage for them to shine via project engagement, industry-sponsored events and hackathons. We also offer networking opportunities and
        social spaces for like-minded and aspiring students to communicate, collaborate and most importantly, build and share something
        awesome.
      </p>
      <p>
        We are also active in the Brisbane startup scene, and collaborate frequently with other tech communities on various events,
        including talks and hackathons. We are confident that we can build an welcoming network that empowers our members to develop
        fantastic experiences with coding and the tech community.
      </p>
      <p>Our 6.5k and growing Facebook membership base is active in both the local and international startup communities.</p>
      <p>This site is a work in progress. If you'd like to contribute, you can do so on our <Link href="https://github.com/codenetwork/viteCN">Github</Link></p>
      <section>
        <h2 class="text-3xl mb-8 mt-10">Our Team</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-12">
          {team.map((member, index) => (
            <Person key={index} member={member} />
          ))}
        </ul>
      </section>
    </Page>
  );
}
