import React from "react";
import "./Button.scss";

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
    <a href={props.url} style={styles}>
      <button className="project-btn">Live Site</button>
    </a>
  );
}

export default Button;
