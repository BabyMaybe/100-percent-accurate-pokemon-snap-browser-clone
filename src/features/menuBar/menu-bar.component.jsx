import React, { useState } from 'react';
import './menu-bar.styles.scss';
import { motion } from 'framer';

const MenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    open: { y: -275 },
    closed: { y: -25 },
  };

  const menuItemVariants = {
    open: { scale: 1 },
    closed: { scale: 0 },
  };

  const butonVariants = {
    open: { background: '#ec2135' },
    closed: { background: '#71141d' },
  };

  return (
    <motion.div className="menu-bar-container">
      <motion.div
        className="menu-items-container"
        variants={menuVariants}
        animate={menuOpen ? 'open' : 'closed'}
        initial="closed"
        transition={{
          type: 'spring',
          duration: 0.75,
          bounce: 0.1,
          damping: 25,
          mass: 1.25,
          stiffness: 200,
          staggerChildren: 0.05,
          staggerDirection: menuOpen ? 1 : -1,
          delay: menuOpen ? 0 : 0.04,
        }}
      >
        <motion.ul className="menu-items">
          <motion.li
            className="menu-item"
            variants={menuItemVariants}
          >
            Apple
          </motion.li>
          <motion.li
            className="menu-item"
            variants={menuItemVariants}
          >
            Poke Flute
          </motion.li>
          <motion.li
            className="menu-item"
            variants={menuItemVariants}
          >
            Camera
          </motion.li>
          <motion.li
            className="menu-item"
            variants={menuItemVariants}
          >
            Boost
          </motion.li>
        </motion.ul>

      </motion.div>

      <motion.div className="menu-bar">

        <motion.div
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          variants={butonVariants}
          initial="closed"
          animate={menuOpen ? 'open' : 'closed'}
        />

        <div className="grates" />
        <div className="grates" />
        <div className="grates" />

      </motion.div>
    </motion.div>

  );
};

export default MenuBar;
