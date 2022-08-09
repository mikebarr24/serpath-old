import React from "react";
import "./Skill.scss";

function Skill(props) {
  return (
    <div className="skill">
      <div className="skill__icon-wrapper">{props.icon}</div>
      <h2 className="skill__icon-name">{props.name}</h2>
    </div>
  );
}

export default Skill;
