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
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05, rootMargin: '0px 0px 50px 0px' });
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const isDecimal = Number(target) % 1 !== 0;

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);

      let startTime = null;
      let frameId;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const rawVal = easeProgress * Number(target);
        const currentVal = isDecimal ? parseFloat(rawVal.toFixed(2)) : Math.floor(rawVal);

        setCount(currentVal);

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        } else {
          setCount(Number(target));
        }
      };

      frameId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(frameId);
    }
  }, [isVisible, hasStarted, target, duration, isDecimal]);

  const displayValue = isDecimal 
    ? count.toFixed(2) 
    : count.toLocaleString();

  return (
    <span ref={ref} className={`counter-animation-number ${className}`}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default CounterAnimation;
