import React, { useState } from 'react';
import { accordionData } from './accordionData';
import Accordion from './Accordion';
import banner1 from '../assets/banner1.jpg';


function About() {

  return (
    <div className="about">
      <img src={banner1} className="banner" />
      <div className="accordion">{
        accordionData.map(({title, content}) => (
          <Accordion title={title} content={content} />
        ))
      }</div>
    </div>
  )
}
export default About;