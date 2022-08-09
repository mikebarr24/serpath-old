import "./LearnMore.scss";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { projectDb } from "../../../db";
import ReactDOM from "react-dom";
import Button from "./Button";

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
      <div
        className="modal__overlay"
        style={OVERLAY_STYLES}
        onClick={props.close}
      />
      <div className="modal__container">
        <div className="modal">
          <div className="modal__title-bar">
            <h2 className="modal__project-title">{project.project}</h2>
            <AiOutlineCloseCircle
              onClick={props.close}
              className="modal__close-btn"
            />
          </div>
          <img className="modal__image" src={project.image} alt="" />
          <br />
          <div className="modal__button-wrapper">
            <Button name="Github" className="modal__btn" url={project.github} />
            <Button name="Live Site" className="modal__btn" url={project.url} />
          </div>
          {project.tech && (
            <div className="modal__tech-used-wrapper">
              <h3 className="modal-heading">Technology Used</h3>
              <div className="modal__tech-icon-wrapper">
                {project.tech.map((item, index) => (
                  <span className="modal__tech-icon" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          <br />
          <h3 className="modal-heading">About</h3>
          <p className="modal__text">{project.details}</p>
          <br />

          <h3 className="modal-heading">Challenges</h3>
          {project.challenges && (
            <ul>
              {project.challenges.map((challenge, index) => {
                return (
                  <li key={index} className="modal__challenge-item">
                    {challenge}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default LearnMore;
