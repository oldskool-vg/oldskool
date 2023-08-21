import React from 'react';
import { accordionData } from './accordionData';
import Accordion from './Accordion';
import banner2 from '../assets/banner2.jpg';

function About() {

  return (
    <div className="about">
      <img src={banner2} className="bannerByItself" alt="banner1" />

      <div className="accordion">{
        accordionData.map(({title, content}) => (
          <Accordion title={title} content={content} key={title} />
        ))
      }
        <div className="disclaimerContainer">
          <p className="legalDisclaimer">©bushiroad All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
export default About;