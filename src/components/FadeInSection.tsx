import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import './FadeInSection.scss';

const FadeInSection = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRef = useRef<any>();

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!isVisible && entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    return () => domRef.current && observer?.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={classnames('fade-in-section', {
        'is-visible': isVisible,
        [className]: !!className,
      })}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
