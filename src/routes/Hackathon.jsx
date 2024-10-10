import React, { useState, useEffect } from 'react';

// Stylesheets
import '@/styles/hackathon/snow.css';
import '@/styles/hackathon/hackathon.css';

// Components
import ProjectCard from '@/components/features/hackathon/ProjectCard';
import FAQSection from '@/components/FAQSection';
import CountdownSection from '@/components/CountdownSection';

export default function HackathonPage() {

  return (
    <main className="container" style={{ textAlign: 'center' }}>
      <div className="edges">
        <p style={{ fontSize: "1.5rem" }}>Stay tuned for details about the 2025 Winter Hackathon!</p>
      </div>
    </main>
  )

  //const startTime = '2024-07-12T18:00:00+10:00';
  //
  //const [showRegisterButton, setShowRegisterButton] = useState(true);
  //
  //useEffect(() => {
  //  document.title = "Hackathon | Code Network";
  //
  //  const checkTime = () => {
  //    const now = new Date();
  //    const startDate = new Date(startTime);
  //
  //    if (now >= startDate) {
  //      setShowRegisterButton(false);
  //    }
  //  };
  //
  //  checkTime();
  //  const timer = setInterval(checkTime, 1000 * 60); // Check every minute
  //
  //  return () => clearInterval(timer);
  //}, [startTime]);
  //
  //return (
  //  <main className="container">
  //    <div style={{ background: '#0e091b', borderRadius: '0px' }}>
  //      <div className="snow">
  //        <div className="hero">
  //          <div>
  //            <img className="logo" src="/logo.png" alt="Code Network Logo" />
  //            <h1>Winter Hackathon</h1>
  //
  //            <CountdownSection heading="" />
  //
  //            <p className="font-bold">
  //              12-14 July 2024 <span className="px-2">|</span> The Precinct
  //              <span className="px-2">|</span> Fortitude Valley
  //            </p>
  //            <div className="buttons-list">
  //              {showRegisterButton && (
  //                <a className="btn" href="https://events.humanitix.com/code-network-winter-hackathon-2024">
  //                  Register Today
  //                </a>
  //              )}
  //              <a className="btn" href="https://www.facebook.com/events/742663191123606/">
  //                Facebook Event
  //              </a>
  //              <a
  //                className="btn"
  //                href="https://docs.google.com/document/d/1aps3SSH547lTOm8puOo2tHOzZmVsEIqNqE0K5ISF9Ec/edit#heading=h.a2xy02yl38ow" // Replace this with the actual URL
  //              >
  //                View Rules
  //              </a>
  //              <a className="btn" href="https://events.humanitix.com/code-network-winter-hackathon-pitch-night-2024">
  //                Projects Showcase Night
  //              </a>
  //            </div>
  //          </div>
  //        </div>
  //      </div>
  //    </div>
  //    <div className="edges">
  //      <div>
  //        <h2 style={{ marginTop: '0', textAlign: 'center' }}>What on earth is a Hackathon?</h2>
  //        <div style={{ maxWidth: '80ch', margin: '0 auto' }}>
  //          <p>
  //            A hackathon is a collaborative event where you can put your IT skills to the test and build innovative projects quickly. It's a great chance to build and present your amazing tech concepts and ideas.
  //          </p>
  //          <p>
  //            In a hackathon, you'll usually work in teams of similarly interested IT students and professionals. And you'll have the opportunity to learn new skills and network with other attendees. Oh and don't forget the food! The Code Network hackathon will include food to keep you energised and building.
  //          </p>
  //          <p>
  //            Code Network welcomes everyone interested in participating to register; there is no minimum required skill set to be involved.
  //          </p>
  //          <br />
  //          <h3 style={{ textAlign: 'center' }}>How do I get involved?</h3>
  //          <p>
  //            Use one of the registration links on this page to purchase a ticket from our event page on Humanitix and just turn up Friday night ready to go! Stay tuned to our socials for more information, ask questions and be notified about any updates.
  //          </p>
  //        </div>
  //      </div>
  //      <br />
  //      <p style={{ textAlign: 'center' }}>
  //        12-14 July 2024<span className="px-2">|</span>The Precinct
  //        <span
  //          style={{
  //            paddingLeft: '5px',
  //            paddingRight: '5px',
  //          }}
  //        >
  //          |
  //        </span>
  //        Fortitude Valley
  //      </p>
  //
  //      <FAQSection />
  //      {showRegisterButton && (
  //
  //        <div className="end-cta">
  //          <p>Ready to just say yes!</p>
  //          <a className="btn" href="https://events.humanitix.com/code-network-winter-hackathon-2024">
  //            Register Today
  //          </a>
  //        </div>
  //      )}
  //
  //    </div>
  //
  //  </main>
  //);
}
