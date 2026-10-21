import React from 'react';
import useIntersectionObserver from '../useIntersectionObserver';
import './ScrollReveal.css';

export const ScrollReveal = ({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right'
  delay = 0,
  duration = 600,
  className = '',
  style = {}
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`scroll-reveal-container ${animation} ${isVisible ? 'is-revealed' : ''} ${className}`}
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
