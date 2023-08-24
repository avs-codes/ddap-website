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

        <section id="title" class="title-section">
          <div>
            <div className="title">DIGITAL DESIGN @ PARSONS</div>
          </div>
          <div>
            <p className="what-we-do">
              <br />
            </p>
          </div>

          <p className="what-we-do">
            We meet on Wednesdays from 4-6pm, either hosting guest speakers,
            live demos, sharing our work or just vibing
          </p>
        </section>
        <section>
          {/* The schedule would be contained here as a React component */}
          <Schedule />
        </section>
        <section>
          <p>
            Our meetings are open to everyone !
            <br />
            <br /> For e-mail updates about upcoming events, please fill out{" "}
            <a
              href="https://docs.google.com/forms/d/1FGlV54QMuCoUHvwZAB28qHUk15tnFaWuM7IxeHvVpDY/edit"
              target="_blank"
            >
              this form. <br />
              <br />
            </a>{" "}
            For non New School students interested in attending, please{" "}
            <a href="mailto:codelab@newschool.edu">e-mail us </a> and we’ll get
            you a guest pass
          </p>
        </section>
        <section>
          <h2 className="section-title">Leadership</h2>
          <div>
            <Team />
          </div>
        </section>
        <section>
          <h2 className="section-title">Gallery</h2>
          <div>
            <Instagram />
          </div>

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
              <img src="https://www.datocms-assets.com/99382/1692656235-slack.png" />
            </a>
          </div>
        </section>
        <footer></footer>
      </main>
    </>
  );
}

export default App;
