import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect, useRef } from 'react'
const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,     // animation duration in ms
      once: true,        // whether animation should happen only once
      offset: 20,       // offset (in px) from the original trigger point
    });
  }, []);
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, inView };
};

export default useInView;