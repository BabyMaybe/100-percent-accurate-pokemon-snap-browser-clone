import React from 'react';
import { motion, useCycle, useMotionValue, useTransform } from 'framer-motion';
import { Frame } from 'framer';

import './framerTest.styles.scss';

const FramerTest = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1.5, 0.5]);

  const [animate, cycle] = useCycle(
    { scale: 1.5, rotate: 0 },
    { scale: 1.0, rotate: 90 },
  );

  const variants = {
    variantA: { scale: 1.0, rotate: 0 },
    variantB: { scale: 1.5, rotate: 90, background: 'crimson', cursor: 'pointer' },
  };

  return (
    <div className="framer-container">
      <motion.div
        animate={animate}
        transition={{ duration: 2, yoyo: Infinity }}
        className="framer-test"
        onTap={() => cycle()}
      />
      <motion.div
        animate={{
          rotate: 360,
          right: '60vw',
        }}
        style={{ right: '-50vw', position: 'relative' }}
        transition={{ duration: 3, loop: Infinity, ease: 'linear' }}
        className="framer-test"
      />
      <Frame
        animate={{ background: 'gold', radius: 100 }}
        transition={{
          duration: 2,
          yoyo: Infinity,
        }}
        size="100px"
        background="crimson"
        className="framer-test"
      />
      <Frame
        animate={{ background: ['red', 'orange', 'gold', 'limegreen', 'dodgerblue', 'purple', 'red'] }}
        transition={{
          duration: 5,
          loop: Infinity,
          ease: 'linear',
        }}
        size="100px"
        className="framer-test"
        whileHover={{ radius: 50 }}
        drag="x"
      />
      {/* this doesnt seem to work... */}
      <Frame
        drag="x"
        x={x}
        scale={scale}
        className="framer-test"
        size="100px"
      />
      <Frame
        initial="variantA"
        whileHover="variantB"
        variants={variants}
        className="framer-test"
        size="100px"
      />

    </div>
  );
};

export default FramerTest;
