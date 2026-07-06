import React from 'react';
import { AnimatePresence } from 'framer-motion';

import PageTransition from './src/components/PageTransition';

export const wrapPageElement = ({ element, props }) => {
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={props.location.pathname}>{element}</PageTransition>
    </AnimatePresence>
  );
};
