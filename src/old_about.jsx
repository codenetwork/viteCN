// import './App.css'
// import GeneralRules from './general_rules'
// import { Routes, Route } from "react-router-dom"
// import AnimatedCursor from "./component/cursor"
// import teamData from "./component/TeamData.json"
// import './team.css';
// import { Email, GitHub, LinkedIn } from "@mui/icons-material"
// import { useEffect } from 'react'

// function About() {
//   // useEffect(() => document.title = "About | Code Network", []);
//   return (
//     <div className="content-wrapper">
//       <div className="edges" style={{ color: "#111", fontFamily: 'Montserrat' }}>
//         <div className="global-padding">
//           <h1>Build anything, as long as it&apos;s awesome</h1>
//           <p>
//             Code Network is a student-led organisation dedicated to fostering a strong developer community for anyone interested in code.
//           </p>
//           <p>
//             We seek gradual and consistent development of our members' skills and knowledge through weekly meetups and workshops, providing a stage for them to shine via project engagement, industry-sponsored events and hackathons. We also offer networking opportunities and social spaces for like-minded and aspiring students to communicate, collaborate and most importantly, build and share something awesome.
//           </p>
//           <p>
//             We are also active in the Brisbane startup scene, and collaborate frequently with other tech communities on various events, including talks and hackathons. We are confident that we can build an welcoming network that empowers our members to develop fantastic experiences with coding and the tech community.
//           </p>
//           <p>
//             Our 6.5k and growing Facebook membership base is active in both the local and international startup communities.
//           </p>
//           <p>This site is a work in progress. If you'd like to contribute, you can do
//             so <a href="https://github.com/codenetwork/viteCN">here</a>
//           </p>
//           <div className='padding'></div>
//           <h2 style={{marginBottom: 0}}>Our Team</h2>
//           <div className="team-section">
//             {teamData.map((member, index) => (
//               <div className="team-member" key={index}>
//                 <img src={member.photo} alt={member.name} />
//                 <h2 style={{fontWeight: 500, marginBottom: 0}}>{member.name}</h2>
//                 <p className="role" style={{fontWeight: 400, marginTop: "0.5rem"}}>{member.role}</p>
//                 <p className="description">{member.description}</p>
//                 <p className="personalLinks">
//                   {member.link?.email && <a className="link" href={"mailto:" + member.link.email}><Email /></a>}
//                   {member.link?.linkedin && <a className="link" href={member.link.linkedin}><LinkedIn /></a>}
//                   {member.link?.github && <a className="link" href={member.link.github}><GitHub /></a>}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div >
//     </div>
//   )
// }

// export default About;