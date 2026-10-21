import React from 'react';
import useIntersectionObserver from '../useIntersectionObserver';
import './ScrollReveal.css';

export const ScrollReveal = ({
  children,
  animation = 'fade-up',
  direction, // optional alias for animation ('up' | 'down' | 'left' | 'right')
  delay = 0,
  duration = 600,
  className = '',
  style = {}
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  let resolvedAnim = animation;
  if (direction) {
    if (direction === 'up') resolvedAnim = 'fade-up';
    else if (direction === 'down') resolvedAnim = 'fade-down';
    else if (direction === 'left') resolvedAnim = 'slide-left';
    else if (direction === 'right') resolvedAnim = 'slide-right';
    else resolvedAnim = direction;
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal-container ${resolvedAnim} ${isVisible ? 'is-revealed' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
