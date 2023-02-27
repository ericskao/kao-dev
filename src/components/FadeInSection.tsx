import { useEffect, useRef, useState } from 'react';
import './FadeInSection.scss';

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = useState<boolean>(true);

  const domRef = useRef<any>();

  useEffect(() => {
    const observer: any = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => domRef.current && observer?.unobserve(domRef.current);
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {children}
    </div>
  );
};

export default FadeInSection;
