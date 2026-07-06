import { useEffect, useRef, useState } from 'react';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#________';

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'div';
  duration?: number;
}

const ScrambleText = ({ text, className = '', as: Tag = 'span', duration = 1200 }: ScrambleTextProps) => {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number>();
  const startRef = useRef<number>();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(text);
      return;
    }

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const resolved = Math.floor(progress * text.length);

      const scrambled = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < resolved) return text[i];
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join('');

      setDisplay(scrambled);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    };

    startRef.current = undefined;
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, duration]);

  return <Tag className={className}>{display}</Tag>;
};

export default ScrambleText;
