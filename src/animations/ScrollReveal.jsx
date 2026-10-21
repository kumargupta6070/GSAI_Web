import React, { useEffect, useRef, useState } from 'react';
import './Animations.css';

export const ScrollReveal = ({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right'
  delay = 0, // milliseconds
  duration = 600, // milliseconds
  threshold = 0.15,
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const current = elementRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal-box ${animation} ${isVisible ? 'revealed' : ''} ${className}`}
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
