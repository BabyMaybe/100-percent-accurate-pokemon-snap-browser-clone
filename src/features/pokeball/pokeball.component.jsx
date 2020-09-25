import React from 'react';
import { motion } from 'framer-motion';
import './pokeball.styles.scss';

const PokeBall = () => (

  <div
    className="pokeball-container"
  >
    <motion.div
      className="poke-ball"
      initial={{
        rotate: -20,
        x: '-10px',
      }}
      animate={{ rotate: 10, x: '10px' }}
      transition={{
        type: 'spring',
        // damping: 2,
        // stiffness: 40,
        mass: 0.75,
        duration: 1,
        yoyo: Infinity,
        ease: 'easeOut',
      }}
    >
      <motion.div
        className="poke-ball-top"
        initial={{ backgroundColor: '#83887a', opacity: 0.1 }}
        animate={{ backgroundColor: '#ff0000', opacity: 0.6 }}
        transition={{
          duration: 1,
          yoyo: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="poke-ball-center">
        <motion.div
          className="poke-ball-dot"
          // initial={{ backgroundColor: '#666' }}
          // animate={{ backgroundColor: '#Ac1d18' }}
          transition={{
            type: 'spring',
            duration: 1,
            yoyo: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      <div className="poke-ball-bottom" />
    </motion.div>
    <motion.div
      className="poke-ball"
      initial={{
        rotate: -20,
        x: '-10px',
      }}
      animate={{ rotate: 10, x: '10px' }}
      transition={{
        type: 'spring',
        // damping: 2,
        // stiffness: 40,
        mass: 1,
        duration: 1,
        yoyo: Infinity,
        ease: 'easeOut',
      }}
    >
      <motion.div
        className="poke-ball-top"
        initial={{ backgroundColor: '#83887a', opacity: 0.1 }}
        animate={{ backgroundColor: '#ff0000', opacity: 0.6 }}
        transition={{
          duration: 1,
          yoyo: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="poke-ball-center">
        <motion.div
          className="poke-ball-dot"
          // initial={{ backgroundColor: '#666' }}
          // animate={{ backgroundColor: '#Ac1d18' }}
          transition={{
            type: 'spring',
            duration: 1,
            yoyo: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      <div className="poke-ball-bottom" />
    </motion.div>
    <motion.div
      className="poke-ball"
      initial={{
        rotate: -20,
        x: '-10px',
      }}
      animate={{ rotate: 10, x: '10px' }}
      transition={{
        type: 'spring',
        // damping: 0.5,
        stiffness: 120,
        mass: 1.25,
        duration: 1,
        yoyo: Infinity,
        ease: 'easeOut',
      }}
    >
      <motion.div
        className="poke-ball-top"
        initial={{ backgroundColor: '#83887a', opacity: 0.1 }}
        animate={{ backgroundColor: '#ff0000', opacity: 0.6 }}
        transition={{
          duration: 1,
          yoyo: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="poke-ball-center">
        <motion.div
          className="poke-ball-dot"
          // initial={{ backgroundColor: '#666' }}
          // animate={{ backgroundColor: '#Ac1d18' }}
          transition={{
            type: 'spring',
            duration: 1,
            yoyo: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      <div className="poke-ball-bottom" />
    </motion.div>
  </div>
);

export default PokeBall;
