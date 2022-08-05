import React from "react";
import "./Portfolio.scss";
import Project from "./Project/Project";
import { projectDb } from "../../db";

function Portfolio() {
  const projects = projectDb.map((project, index) => {
    return (
      <Project key={index} image={project.image} details={project.details} />
    );
  });
  return (
    <section id="portfolio" className="container">
      <h1 className="title-text">My Work</h1>
      <div className="divider"></div>
      <p className="portfolio-text">
        Take a look at some of my past &amp; present projects.{" "}
      </p>
      <div className="project-carousel">{projects}</div>
    </section>
  );
}

export default Portfolio;
