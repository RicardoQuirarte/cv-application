import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import General from "./components/general.jsx";
import Education from "./components/education.jsx";
import Practical from "./components/practical.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>CV Application</h1>
    <General />
    <h2>Educational Experience</h2>
    <Education />
    <h2>Practical Experience</h2>
    <Practical />
  </React.StrictMode>
);
