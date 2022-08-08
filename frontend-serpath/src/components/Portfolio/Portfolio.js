import React from "react";
import "./Portfolio.scss";
import Project from "./Project/Project";
import { projectDb } from "../../db";
import LearnMore from "./Project/LearnMore";

function Portfolio() {
  const [open, setOpen] = React.useState(false);

  //Stop body from scrolling when modal is open
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const learnMore = (id) => {
    setOpen(id);
  };
  const projects = projectDb.map((project, index) => {
    return (
      <Project
        key={index}
        className="project"
        image={project.image}
        details={project.details}
        url={project.url}
        id={project.id}
        learnMore={learnMore}
        github={project.github}
        tech={project.tech}
      />
    );
  });

  return (
    <section id="portfolio" className="container">
      <h1 className="title-text">My Work</h1>
      <p className="portfolio-text">
        Take a look at some of my past &amp; present projects.
      </p>
      <br />
      <div className="projects-grid">{projects}</div>
      {open && <LearnMore id={open} close={() => setOpen(false)} />}
    </section>
  );
}

export default Portfolio;
