import React from "react";
import "./Portfolio.scss";
import Project from "./Project/Project";
<<<<<<< HEAD
import db from "../../db";
import useOnScreen from "../../components/utility/useOnScreen";

function Portfolio() {
  const projects = db.map((project, index) => {
    return (
      <Project
        key={index}
        className="project"
        image={project.image}
        details={project.details}
        url={project.url}
      />
    );
  });

  const Carousel = () => {
    const ref = React.useRef();
    const isVisible = useOnScreen(ref);

    return (
      <div ref={ref}>
        {isVisible && <div className="project-carousel">{projects}</div>}
      </div>
    );
  };

=======
import { projectDb } from "../../db";

function Portfolio() {
  const projects = projectDb.map((project, index) => {
    return (
      <Project key={index} image={project.image} details={project.details} />
    );
  });
>>>>>>> b4254d11cb7af381b616ff9549e48e220a893417
  return (
    <section id="portfolio" className="container">
      <h1 className="title-text">My Work</h1>
      <div className="divider"></div>
      <p className="portfolio-text">
<<<<<<< HEAD
        Take a look at some of my past &amp; present projects.
      </p>
      <Carousel />
=======
        Take a look at some of my past &amp; present projects.{" "}
      </p>
      <div className="project-carousel">{projects}</div>
>>>>>>> b4254d11cb7af381b616ff9549e48e220a893417
    </section>
  );
}

export default Portfolio;
