import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 800,
  translateY = 'translate-y-8', 
  className = '' 
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // triggers slightly before entering the center viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Standard smooth easing transition style
  const transitionStyle = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' // Premium smooth ease-out curve
  };

  return (
    <div
      ref={ref}
      style={transitionStyle}
      className={`transition-all ${
        visible ? 'opacity-100 translate-y-0' : `opacity-0 ${translateY}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
