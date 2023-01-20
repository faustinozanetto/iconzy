import { m } from 'framer-motion';
import React from 'react';

type FadeAnimatedProps = {
  children: React.ReactNode;
};

export const FadeAnimated: React.FC<FadeAnimatedProps> = (props) => {
  const { children } = props;

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 100,
      }}
    >
      {children}
    </m.div>
  );
};
