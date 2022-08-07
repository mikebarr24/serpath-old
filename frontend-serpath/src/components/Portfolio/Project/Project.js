import React from "react";
import "./Project.scss";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

function Project(props) {
  return (
    <div
      className={`project-wrapper ${props.className}`}
      onClick={props.onClick}
    >
      <div className="image-wrapper">
        <img src={props.image} alt="Project" className="project-image" />

        {props.tech && (
          <div className="icons-wrapper">
            {props.tech.map((icon, index) => (
              <span key={index} className="icon">
                {icon}
              </span>
            ))}
          </div>
        )}
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
        <Button url={props.url} name="Live Site" />
        <Button url={props.github} name="Github" />
      </div>
    </div>
  );
}

export default Project;
