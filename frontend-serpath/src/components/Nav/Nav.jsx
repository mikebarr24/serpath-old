import React from "react";
import "./Nav.scss";
import { AiOutlineCloseCircle, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

function Nav() {
  const [nav, setNav] = React.useState(false);
  const navToggle = ()=> {
    setNav(!nav)
  }


  return (
    <nav id="nav">
      <h1 className="nav-logo">SerPath</h1>
      <div className={`nav-items${nav === true ? " open" : ""}`}>
        <ul>
          <li className="list-item">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">My Work</li>
          <li className="list-item">Contact</li>
        </ul>
        <div className="social-icons">
        <AiOutlineGithub className="icon" />
        <AiOutlineInstagram className="icon" />
        </div>
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
