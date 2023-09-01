import Garden from "./components/Garden.jsx";
import Instagram from "./components/Instagram.jsx";
import Schedule from "./components/Schedule.jsx";
import Team from "./components/Team.jsx";
import React, { useState } from "react";

import "./App.css";
("");

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

function App() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <main>
        <a href="#title">
          <img
            id="anchor"
            src="https://www.datocms-assets.com/99382/1692823390-a.svg"
            style={{ stroke: "white" }}
            className={`controlsHoverIn ${hovered ? "" : "controlsHoverOut"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></img>
        </a>
        <Garden />

        <section id="title" className="title-section">
          <div>
            <div className="title">DIGITAL DESIGN @ PARSONS</div>
          </div>

          <p className="what-we-do">
            Digital Design @ Parsons <i>(DDAP for short)</i> is a student-run
            club for designers interested in web design, UX and creative coding.
          </p>
          <p className="what-we-do">
            We meet on <u>Wednesdays from 4-6pm,</u> either hosting guest
            speakers, live demos or sharing our work
          </p>
          <p>Our meetings are open to everyone !</p>
          <p>
            For{" "}
            <a
              href="https://docs.google.com/forms/d/1FGlV54QMuCoUHvwZAB28qHUk15tnFaWuM7IxeHvVpDY/edit"
              target="_blank"
            >
              e-mail updates
            </a>{" "}
            about upcoming events ꕤꕤꕤꕤꕤ <br />
            <br />
          </p>

          <p className="what-we-do">
            This semester, we're looking to <u> pay students</u> to give demos
            on new programs and tools. Our{" "}
            <a href="https://forms.gle/zuPjC9pJ7HgYha4MA" target="_blank">
              Demo List
            </a>{" "}
            has a few we want to schedule, but if you have your own idea please
            let us knowwww
          </p>
        </section>
        <section>
          {/* The schedule would be contained here as a React component */}
          <Schedule />
        </section>
        <section></section>
        <section>
          <h2 className="section-title">Gallery</h2>
          <div>
            <Instagram />
          </div>
        </section>
        <section>
          {/* <h2 className="section-title">Leadership</h2> */}
          {/* <div>
            <Team />
          </div> */}
          <div className="ig-link">
            <a
              className="ig-icon"
              href="https://www.instagram.com/parsonscodelab/"
              target="_blank"
            >
              <img src="https://www.datocms-assets.com/103104/1690991093-ig.svg" />
            </a>
            <a
              className="ig-icon"
              href="https://www.instagram.com/parsonscodelab/"
              target="_blank"
            >
              <img src="https://www.datocms-assets.com/99382/1693250696-slack.svg" />
            </a>
          </div>
        </section>

        <footer></footer>
      </main>
    </>
  );
}

export default App;
