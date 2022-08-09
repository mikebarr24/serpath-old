import React, { useRef } from "react";
import "./Project.scss";
import useOnScreen from "../../utility/useOnScreen";

function Project(props) {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <div className="project__wrapper" onClick={props.onClick}>
      <img src={props.image} alt="Project" className="project__image" />
      {props.tech && (
        <div className="project__icons-wrapper">
          {props.tech.map((icon, index) => (
            <span key={index} className="project__icon">
              {icon}
            </span>
          ))}
        </div>
      )}
      <div ref={ref} className="project__btn-wrapper">
        {isVisible && (
          <button
            className="project__more-button"
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
