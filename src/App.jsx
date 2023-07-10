import React from "react";
import General from "./components/General";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Buttons from "./components/Buttons";

export default function App() {
  return (
    <div className="app__container">
      <div className="left__container">
        <General />
        <Experience />
        <Education />
        <Buttons />
      </div>
      <div className="right__container">
        <Resume />
      </div>
    </div>
  );
}
