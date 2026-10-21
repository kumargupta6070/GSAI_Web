import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../useIntersectionObserver';
import './CounterAnimation.css';

export const CounterAnimation = ({
  target = 100,
  prefix = '',
  suffix = '+',
  duration = 2000,
  className = ''
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);

      let startTime = null;
      let frameId;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.floor(easeProgress * target);

        setCount(currentVal);

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      frameId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(frameId);
    }
  }, [isVisible, hasStarted, target, duration]);

  return (
    <span ref={ref} className={`counter-animation-number ${className}`}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default CounterAnimation;
