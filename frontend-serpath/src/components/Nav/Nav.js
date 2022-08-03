import React from "react";
import "./Nav.scss";
/* import { AiOutlineCloseCircle } from "react-icons/ai";
 */
function Nav() {
  const [nav, setNav] = React.useState(false);
  console.log(nav);
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
      <div className="burger-btn" onClick={() => setNav(!nav)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Nav;
