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
    from: { opacity: 0, maxHeight: 25 },
    to: { opacity: 1, maxHeight: isActive ? 600 : 25 },
    config: { duration: 300 }
  })

  return (
    <animated.div className="accordion-item" style={openAnimation}>
      <div className="accordion-header" onClick={toggleHandler}>
        <h2>{title}</h2>
        <h2>{isActive ? ' - ' : '+'}</h2>
      </div>
      <text className="accordion-content">{content}</text>
    </animated.div>
  );
}
export default Accordion;