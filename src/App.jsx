// React
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Libraries
import AnimatedCursor from "./component/cursor";

// Pages
import Rules from "./pages/Rules";
import About from "./pages/About";
import Hero from "./pages/Hero";
import AGM from "./pages/Agm";

// Layouts
import HeroLayout from "./layouts/HeroLayout";
import DefaultLayout from "./layouts/DefaultLayout";

// Components
import Footer from "./components/Footer";
import Error404 from "./pages/errors/404";
import Spinner from "./components/Spinner";

// Styles
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";


function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ThemeProvider theme={theme}>
          <div>
            <AnimatedCursor />
            <Routes>
              <Route element={<HeroLayout />}>
                {/* Dark theme background */}
                <Route index path="/" element={<Hero />} />
              </Route>
              <Route element={<DefaultLayout />}>
                <Route path="/about" element={<About />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/agm" element={<AGM />} />
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
