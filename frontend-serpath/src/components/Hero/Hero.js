import React from "react";
import "./Hero.scss";
import TypeAnimation from "react-type-animation";

function Hero() {
  return (
    <section id="hero" className="container">
      <h1>
        <span className="hero--heading">SerPath</span>
        <TypeAnimation
          cursor={true}
          sequence={["Web Development", 5000]}
          wrapper="span"
          className="hero--subheading"
        />
      </h1>
    </section>
  );
}

export default Hero;
