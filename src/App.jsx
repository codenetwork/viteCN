import { useState } from "react";
import "./App.css";
import GeneralRules from "./general_rules";
import { Routes, Route } from "react-router-dom";
import AnimatedCursor from "./component/cursor";
import Header from "./Header";
import Ssp from "./ssp";
import Coc from "./coc";
import About from "./About";
import Agm from "./Agm";
import Rules from "./Rules";
import Constitution from "./constitution";
import SGM from "./Sgm";

import HackathonPage from "@/routes/Hackathon";
import DesignCompetitionPage from "./routes/DesignCompetition";
import ProjectsPage from "./routes/Projects";

function App() {
  return (
    <div>
      <section className="auto-margin App">
        <AnimatedCursor />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/rules/general" element={<GeneralRules />} />
          <Route path="/rules/ssp" element={<Ssp />} />
          <Route path="/rules/coc" element={<Coc />} />
          <Route path="/rules/constitution" element={<Constitution />} />
          <Route path="/agm" element={<Agm />} />
          <Route path="/sgm" element={<SGM />} />
          <Route path="/hackathon" element={<HackathonPage />} />
          <Route path="/competition" element={<DesignCompetitionPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
