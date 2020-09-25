import React, { useState } from 'react';
import { motion, useCycle } from 'framer';
import './bg.styles.scss';

const BgChanger = () => {
  const [color, cycleColors] = useCycle('#e61f1f', '#e66432', '#e2983c', '#51b34b', '#0146e0', '#7838b3');
  const [previous, setPrevious] = useState('#7838b3');

  return (
    <motion.div
      className="bg-container"
      animate={{ background: color }}
    >

      <motion.div
        className="shrinky-dink"
        style={{
          height: '100vh',
          width: '100vw',
          background: previous,
          boxShadow: `0px 0px 10vh 10vh ${previous}`,
          opacity: 1,
        }}
        animate={{
          height: '0vh',
          width: '0vw',
          // opacity: 0.1,
          // rotate: [0, 90],
        }}
        transition={{
          duration: 0.5,
          loop: Infinity,
          origin: 'center',
          ease: 'linear',
        }}
        onUpdate={latest => {
          if (latest.height === 0) {
            setPrevious(color);
            cycleColors();
          }
        }}
      />

    </motion.div>
  );
};

export default BgChanger;
