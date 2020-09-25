import React, { useState } from 'react';
import './bush.styles.scss';
import { motion } from 'framer-motion';

const Bush = () => {
  const [jiggle, setJiggle] = useState(false);

  const toggleJiggle = () => {
    setJiggle(!jiggle);
    console.log('set jiggle', jiggle);
  };

  const loop = {
    duration: 0.25,
    yoyo: Infinity,
    staggerChildren: 0.1,
    repeatDelay: 0.05,

  };

  const stop = {
    duration: 0,
    yoyo: 0,
  };

  const parent = {
    anim: { scale: 1 },
    still: { scale: 1 },
  };

  const leftBushVariants = {
    anim: { scaleX: 1.1, scaleY: [1, 1.05, 1], rotate: -10, y: '10px' },
    still: { scaleX: 1, scaleY: 1, rotate: 0, y: 0 },
  };
  const midBushVariants = {
    anim: { scaleX: 1.1, scaleY: [1, 1.05, 1], y: '0px' },
    still: { scaleX: 1, scaleY: 1, y: '0px' },
  };
  const rightBushVariants = {
    anim: { scaleX: 1.1, scaleY: [1, 1.05, 1], rotate: 10, y: '0px' },
    still: { scaleX: 1, scaleY: 1, rotate: 0, y: '0px' },
  };

  return (
    <motion.div
      className="bushes"
      variants={parent}
      // initial={jiggle ? 'still' : 'anim'}
      animate={jiggle ? 'anim' : 'still'}
      // style={{ background: 'pink' }}
      transition={jiggle ? loop : stop}
      onHoverStart={toggleJiggle}
      onHoverEnd={toggleJiggle}
    >

      <motion.div
        className="bush left"
        stlye={{ zIndex: 1 }}
        variants={leftBushVariants}
        transition={jiggle ? loop : stop}
      />
      <motion.div
        className="bush middle"
        stlye={{ zIndex: 2 }}
        variants={midBushVariants}
        transition={jiggle ? loop : stop}
      />
      <motion.div
        className="bush right"
        stlye={{ zIndex: 3, originX: 0 }}
        variants={rightBushVariants}
        transition={jiggle ? loop : stop}
      />
    </motion.div>
  );
};

export default Bush;
