import { useEffect, useState , RefObject } from "react";

const useOnScreen = (ref : RefObject<HTMLElement>, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
        currentElement && observer.unobserve(currentElement);
    };
  }, []);

  return isVisible;

};

export default useOnScreen;
