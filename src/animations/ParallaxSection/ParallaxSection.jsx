import React, { useRef, useEffect, useState } from 'react';
import './ParallaxSection.css';

export const ParallaxSection = ({
  children,
  speed = 0.2, // speed multiplier
  className = '',
  style = {}
}) => {
  const sectionRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top <= viewportHeight && rect.bottom >= 0) {
        const relativeScroll = (viewportHeight - rect.top) * speed;
        setOffsetY(relativeScroll * 0.15);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`parallax-section-wrapper ${className}`} style={style}>
      <div 
        className="parallax-inner-content"
        style={{ transform: `translateY(${offsetY.toFixed(1)}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
