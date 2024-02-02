import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// STYLING
import "./tailwind.css";
import "./styles/global.css";

// Updated to React 18 compliant root render format 
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
