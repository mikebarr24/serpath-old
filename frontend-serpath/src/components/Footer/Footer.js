import "./Footer.scss";
import React from "react";
import { HashLink } from "react-router-hash-link";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="mask"></div>
      <HashLink smooth to="#hero">
        <div className="logo">Serpath</div>
      </HashLink>
      <div className="footer-menu">
        <ul>
          <HashLink smooth to="#hero">
            <li className="footer-item">Home</li>
          </HashLink>
          <HashLink smooth to="#portfolio">
            <li className="footer-item">My Work</li>
          </HashLink>
          <HashLink smooth to="#about">
            <li className="footer-item">About</li>
          </HashLink>
          <HashLink smooth to="#contact">
            <li className="footer-item">Contact</li>
          </HashLink>
        </ul>
      </div>
      <p className="copyright">All rights reserved Serpath {date}</p>
    </footer>
  );
}

export default Footer;
