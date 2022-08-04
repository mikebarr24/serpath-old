import React from "react";
import "./Nav.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Nav() {
  const [nav, setNav] = React.useState(false);
  const navToggle = ()=> {
    setNav(!nav)
  }
  
  let closeDisplay;
  let burgerDisplay;
  if (nav) {
    closeDisplay = {
      display: "block"
    }
    burgerDisplay = {
      display: "none"
    }
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
      </div>
      <div className="burger-btn" style={burgerDisplay} onClick={navToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    <AiOutlineCloseCircle className="nav-close-btn" style={closeDisplay}  onClick={navToggle} />
    </nav>
  );
}

export default Nav;
