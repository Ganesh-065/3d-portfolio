import { useState, useEffect, useCallback } from 'react';

interface ScrollValues {
  scrollY: number;
  scrollYProgress: number;
}

export const useScrollAnimation = (): ScrollValues => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollYProgress, setScrollYProgress] = useState<number>(0);

  const handleScroll = useCallback(() => {
    // Current scroll position
    const currentScrollY = window.scrollY;

    // Calculate scroll progress (0 to 1)
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentProgress = scrollHeight > 0 ? currentScrollY / scrollHeight : 0;

    setScrollY(currentScrollY);
    setScrollYProgress(currentProgress);
  }, []);

  useEffect(() => {
    // Set initial values
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { scrollY, scrollYProgress };
};

export default useScrollAnimation;
