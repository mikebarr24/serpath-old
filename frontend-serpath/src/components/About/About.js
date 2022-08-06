import React from "react";
import "./About.scss";
import { skillDb } from "../../db";
import Skill from "./Skill";
const cv = require("../../media/mbarr-cv.pdf");
const me = require("../../media/images/mikebarr24.png");

function About() {
  const skills = skillDb.map((skill, index) => {
    return <Skill key={index} name={skill.name} icon={skill.icon} />;
  });
  return (
    <section id="about" className="container">
      <h1 className="title-text about-me">About Me</h1>
      <div className="divider"></div>
      <p className="about-text">
        I'm Michael and I'm a web developer. I've got a long history with
        technology and I'd love for you to have a look about my site to see what
        I've been working on.
      </p>
      <img src={me} className="me" alt="portrait" />
      <div className="skills-wrapper">{skills}</div>
      <a href={cv} download className="download-cv">
        Download CV
      </a>
    </section>
  );
}

export default About;
