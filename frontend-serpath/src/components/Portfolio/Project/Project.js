import React from "react";
import "./Project.scss";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";

function Project(props) {
  return (
    <div
      className={`project-wrapper ${props.className}`}
      onClick={props.onClick}
    >
      <div className="image-wrapper">
        <img src={props.image} alt="Project" className="project-image" />
      </div>
      <div className="project-details-wrapper">
        <p className="project-detail-text">{props.details}</p>
        <div className="learn-more-wrapper">
          <p
            onClick={() => props.learnMore(props.id)}
            className="learn-more-text"
          >
            Learn More
          </p>
          <BsArrowRight className="arrow" />
        </div>
        <Button url={props.url} />
      </div>
    </div>
  );
}

export default Project;
