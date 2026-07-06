import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import './BootSequence.scss';

const BOOT_LINES = [
  { text: 'initializing render engine...', delay: 0 },
  { text: 'loading agent modules...', delay: 400 },
  { text: 'mounting LangChain pipelines... OK', delay: 800 },
  { text: 'connecting knowledge_base... OK', delay: 1100 },
  { text: 'starting agentic loop... OK', delay: 1400 },
  { text: 'system ready.', delay: 1700 },
];

const STORAGE_KEY = 'kao-dev-boot-seen';

const BootSequence = () => {
  const [visible, setVisible] = useState(false);
  const [linesShown, setLinesShown] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduced) return;

    const dismiss = () => {
      setVisible(false);
      sessionStorage.setItem(STORAGE_KEY, '1');
    };

    const onKey = () => dismiss();

    setVisible(true);
    BOOT_LINES.forEach((line, index) => {
      setTimeout(() => setLinesShown(index + 1), line.delay);
    });

    const hideTimer = setTimeout(dismiss, 2600);
    window.addEventListener('keydown', onKey);

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={dismiss}
          onKeyDown={dismiss}
          role="presentation"
        >
          <div className="boot__terminal">
            <div className="boot__line boot__line--header">kao-dev boot v2.0</div>
            {BOOT_LINES.slice(0, linesShown).map((line, index) => (
              <motion.div
                key={index}
                className="boot__line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="boot__prompt">&gt;</span> {line.text}
              </motion.div>
            ))}
            <div className="boot__skip">[ press any key to skip ]</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
