import React, { useState } from 'react';
import { accordionData } from './accordionData';
import Accordion from './Accordion';


function About() {

  return (
    <div className="about">
      <div className="accordion">{
        accordionData.map(({title, content}) => (
          <Accordion title={title} content={content} />
        ))
      }</div>
    </div>
  )
}
export default About;