import React from "react";
import "./Portfolio.scss";
import Project from "./Project/Project";
import { projectDb } from "../../db";
import useOnScreen from "../../components/utility/useOnScreen";

function Portfolio() {
  const projects = projectDb.map((project, index) => {
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

  return (
    <section id="portfolio" className="container">
      <h1 className="title-text">My Work</h1>
      <div className="divider"></div>
      <p className="portfolio-text">
        Take a look at some of my past &amp; present projects.{" "}
      </p>
      <div className="project-carousel">
        <Carousel />
      </div>
    </section>
  );
}

export default Portfolio;
