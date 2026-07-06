import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

import './StatCounters.scss';

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

const STATS: Stat[] = [
  { label: 'yrs shipping software', value: 13, suffix: '+' },
  { label: 'systems in production', value: 9 },
  { label: 'hrs automated', value: 1000, suffix: 's' },
];

const AnimatedNumber = ({ value, suffix = '', prefix = '' }: Stat) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
      }
    });
    return unsub;
  }, [spring, suffix, prefix]);

  return (
    <span ref={ref} className="stat-counters__value">
      {prefix}0{suffix}
    </span>
  );
};

const StatCounters = () => {
  return (
    <motion.div
      className="stat-counters"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      {STATS.map((stat) => (
        <div key={stat.label} className="stat-counters__item">
          <AnimatedNumber {...stat} />
          <span className="stat-counters__label">{stat.label}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default StatCounters;
