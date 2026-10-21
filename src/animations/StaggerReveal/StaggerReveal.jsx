import React from 'react';
import useIntersectionObserver from '../useIntersectionObserver';
import './StaggerReveal.css';

export const StaggerReveal = ({
  children,
  staggerMs = 90,
  animation = 'fade-up',
  className = ''
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <div ref={ref} className={`stagger-reveal-grid ${className}`}>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;
        return (
          <div
            className={`stagger-item ${animation} ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: `${idx * staggerMs}ms` }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default StaggerReveal;
