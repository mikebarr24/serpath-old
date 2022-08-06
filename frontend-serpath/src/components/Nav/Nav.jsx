import React from "react";
import "./Nav.scss";
import Social from "../utility/Social";
import { HashLink } from "react-router-hash-link";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Nav() {
  const [nav, setNav] = React.useState(false);
  const navToggle = () => {
    setNav(!nav);
  };

  return (
    <nav id="nav">
      <h1 className="nav-logo">SerPath</h1>
      <div className={`nav-items${nav === true ? " open" : ""}`}>
        <ul>
          <HashLink smooth to="#hero" onClick={navToggle}>
            <li className="list-item">Home</li>
          </HashLink>
          <HashLink smooth to="#portfolio" onClick={navToggle}>
            <li className="list-item">My Work</li>
          </HashLink>
          <HashLink smooth to="#about" onClick={navToggle}>
            <li className="list-item">About</li>
          </HashLink>
          <HashLink smooth to="#contact" onClick={navToggle}>
            <li className="list-item">Contact</li>
          </HashLink>
        </ul>
        <Social className="social-icons" />
        <AiOutlineCloseCircle className="nav-close-btn" onClick={navToggle} />
      </div>
      <div className="burger-btn" onClick={navToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Nav;
