import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";

interface AccordionProps {
  title: string,
  content: string
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsActive(!isActive)
  }

  const openAnimation = useSpring({
    from: { maxHeight: 25 },
    to: { maxHeight: isActive ? 1000 : 25 },
    config: { duration: 300 }
  })

  return (
    <animated.div className="accordion-item" style={openAnimation}>
      <div className="accordion-header" onClick={toggleHandler}>
        <h2>{title}</h2>
        <h2>{isActive ? ' - ' : '+'}</h2>
      </div>
      <p className="accordion-content">{content}</p>
    </animated.div>
  );
}
export default Accordion;