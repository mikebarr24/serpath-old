import React from 'react';
import "./Project.scss";
import Button from "./Button"
import {AiOutlineArrowRight} from "react-icons/ai"
import {BsArrowRight} from "react-icons/bs"

function Project(props) {
  return (
    <div className='project-wrapper'>
      <div className="image-wrapper">
      <img src={props.image} alt="Project" className='project-image'/>
      </div>
      <div className="project-details-wrapper">
        <p className='project-detail-text'>{props.details}</p>
        <div className="learn-more-wrapper">
          <a href="/#" className='learn-more-text'>Learn More</a>
          <BsArrowRight className='arrow' />
        </div>
        <a href={props.link}>
          <Button />
        </a>
      </div>
    </div>
  )
}

export default Project