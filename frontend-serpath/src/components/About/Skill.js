import React from "react";
import "./Skill.scss";

function Skill(props) {
  return (
    <div className="skill">
      <div className="icon-wrapper">{props.icon}</div>
      <h2 className="icon-name">{props.name}</h2>
    </div>
  );
}

export default Skill;
