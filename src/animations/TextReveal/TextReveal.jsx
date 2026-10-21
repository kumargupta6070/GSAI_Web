import React from 'react';
import useIntersectionObserver from '../useIntersectionObserver';
import './TextReveal.css';

export const TextReveal = ({
  text = '',
  className = '',
  staggerMs = 45,
  as: Component = 'span'
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const words = text.split(' ');

  return (
    <Component ref={ref} className={`text-reveal-root ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="text-reveal-word-wrapper">
          <span
            className={`text-reveal-word ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: `${i * staggerMs}ms` }}
          >
            {word}
          </span>
          {i < words.length - 1 && <span className="text-reveal-space">&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
};

export default TextReveal;
