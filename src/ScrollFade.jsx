import { useEffect, useRef, useState } from "react";

const ScrollFade = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <Tag
      ref={elementRef}
      style={{ "--fade-delay": `${delay}s` }}
      className={`scroll-fade ${isVisible ? "scroll-fade-show" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default ScrollFade;