import "./LearnMore.scss";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { projectDb } from "../../../db";
import ReactDOM from "react-dom";

function LearnMore(props) {
  const [project] = projectDb.filter((item) => item.id === props.id);

  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <>
      <div className="overlay" style={OVERLAY_STYLES} onClick={props.close} />
      <div className="modal-container">
        <div className="modal">
          <div className="modal-title-bar">
            <h2 className="project-title">{project.project}</h2>
            <AiOutlineCloseCircle
              onClick={props.close}
              className="modal-close"
            />
          </div>
          <img className="project-image" src={project.image} alt="" />
          <p className="modal-text">{project.details}</p>
          {project.tech && (
            <div className="tech-used-wrapper">
              <h3 className="modal-title">Technology Used</h3>
              {project.tech.map((item, index) => (
                <span className="tech-icon" key={index}>
                  {item}
                </span>
              ))}
            </div>
          )}
          <h2 className="modal-title">Challenges</h2>
          <p className="modal-text">{project.challenges}</p>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default LearnMore;
