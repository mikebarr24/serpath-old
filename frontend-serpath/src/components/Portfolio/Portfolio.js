import React from "react";
import "./Portfolio.scss";
import Project from "./Project/Project";
import { projectDb } from "../../db";
import useOnScreen from "../../components/utility/useOnScreen";
import LearnMore from "./Project/LearnMore";

function Portfolio() {
  const [open, setOpen] = React.useState(false);
  const learnMore = (id) => {
    setOpen(id);
  };

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

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
      {open && <LearnMore id={open} close={() => setOpen(false)} />}
    </section>
  );
}

export default Portfolio;
