import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Social(props) {
  return (
    <div className={props.className}>
      <a href="https://www.linkedin.com/in/michaelbarr24">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/michaelbarr24/">
        <FaInstagram />
      </a>
      <a href="https://github.com/mikebarr24">
        <FaGithub />
      </a>
    </div>
  );
}

export default Social;
