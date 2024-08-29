import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import AnimatedCursor from "./component/cursor";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div id="root">
        <Navbar />
        <div
          style={{
            paddingTop: "100px",
          }}>
          <main>
            <App />
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
