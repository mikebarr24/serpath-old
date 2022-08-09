import "./Footer.scss";
import React from "react";
import { HashLink } from "react-router-hash-link";
import Social from "../utility/Social";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="footer__mask"></div>
      <HashLink smooth to="#hero">
        <div className="footer__logo">Serpath</div>
      </HashLink>
      <div className="footer__menu">
        <ul>
          <HashLink smooth to="#hero">
            <li className="footer__item">Home</li>
          </HashLink>
          <HashLink smooth to="#portfolio">
            <li className="footer__item">My Work</li>
          </HashLink>
          <HashLink smooth to="#about">
            <li className="footer__item">About</li>
          </HashLink>
          <HashLink smooth to="#contact">
            <li className="footer__item">Contact</li>
          </HashLink>
        </ul>
      </div>
      <Social className="social-links" />
      <p className="footer__copyright">All rights reserved Serpath {date}</p>
    </footer>
  );
}

export default Footer;
