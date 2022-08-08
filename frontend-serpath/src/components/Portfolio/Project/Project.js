import React, { useRef } from "react";
import "./Project.scss";
import useOnScreen from "../../utility/useOnScreen";

function Project(props) {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <div className="project-wrapper" onClick={props.onClick}>
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
      <div ref={ref} className="btn-wrapper">
        {isVisible && (
          <button
            className="more-button"
            onClick={() => props.learnMore(props.id)}
          >
            More Info
          </button>
        )}
      </div>
    </div>
  );
}

export default Project;
