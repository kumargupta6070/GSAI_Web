import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = ({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true
} = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const node = targetRef.current;
    if (!node || (triggerOnce && isIntersecting)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, isIntersecting]);

  return [targetRef, isIntersecting];
};

export default useIntersectionObserver;
