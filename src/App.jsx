import { Suspense, createContext, useState } from "react";
// import "./App.css";
import GeneralRules from "./general_rules";
import { Routes, Route } from "react-router-dom";
import AnimatedCursor from "./component/cursor";
import Ssp from "./ssp";
import Coc from "./coc";

import Agm from "./Agm";
import Constitution from "./constitution";
import SGM from "./Sgm";
import Example from "./pages/example";

// React
import { useContext } from "react";

// Pages
import Rules from "./pages/Rules";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Events from "./pages/Events"

// Layouts
import HeroLayout from "./layouts/HeroLayout";
import DefaultLayout from "./layouts/DefaultLayout";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "./pages/errors/404";

// Styles
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Spinner from "./components/Spinner";

function App() {
  return (
    <>
      <Suspense fallback={<Spinner/>}>
        <ThemeProvider theme={theme}>
          <Header />
          <div>
            <AnimatedCursor />
            <Routes>
              <Route element={<HeroLayout />}>
                {" "}
                {/* Dark theme background */}
                <Route index path="/" element={<Hero />} />
              </Route>
              <Route element={<DefaultLayout />}>
                <Route path="/about" element={<About />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/rules/general" element={<GeneralRules />} />
                <Route path="/rules/ssp" element={<Ssp />} />
                <Route path="/rules/coc" element={<Coc />} />
                <Route path="/rules/constitution" element={<Constitution />} />
                <Route path="/agm" element={<Agm />} />
                <Route path="/sgm" element={<SGM />} />
                <Route path="/example" element={<Example />} />
                <Route path="/events" element={<Events />} />
                {/* Handle 404 errors */}
                <Route path="*" element={<Error404 />} />
              </Route>
            </Routes>
          </div>
          <Footer />
        </ThemeProvider>
      </Suspense>
    </>
  );
}

export default App;
