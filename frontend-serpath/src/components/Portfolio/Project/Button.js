import React from "react";
import "./Button.scss";
import { SiGithub } from "react-icons/si";

function Button(props) {
  const [active, setActive] = React.useState(false);
  let styles;
  React.useEffect(() => {
    props.url ? setActive(true) : setActive(false);
  }, [props.url]);
  if (!active) {
    styles = {
      opacity: 0.5,
      pointerEvents: "none",
      cursor: "not-allowed",
    };
  }

  return (
    <a href={props.url} style={styles} target="_blank" rel="noreferrer">
      <button className={props.className}>
        {props.name === "Github" && (
          <span className="git-icon">
            <SiGithub />
          </span>
        )}
        {props.name}
      </button>
    </a>
  );
}

export default Button;
