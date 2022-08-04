import React from "react";
import "./About.scss";
const cv = require("../../media/mbarr-cv.pdf");

function About() {
  return (
    <section id="about" className="container">
      <h1 className="title-text about-me">About Me</h1>
      <div className="divider"></div>
      <p className="about-text">
        I'm Michael and I'm a web developer. I've got a long history with
        technology.
      </p>
      <a href={cv} download className="download-cv">
        Download CV
      </a>
    </section>
  );
}

export default About;
