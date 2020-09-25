import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Color } from 'framer';

const Basic = () => {
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [randomColor, setRandomColor] = useState('#fda');
  // const randomColor = Color.random();
  // let xPos = 0;
  // const yPos = 0;
  // const randomColor = 'rgba(0,0,0,0)';

  // window.setxPos = setxPos;
  window.randomColor = Color.random;

  // setInterval(() => {
  //   setxPos(Math.random() * (window.innerWidth - 100));
  // }, 1000);

  return (
    <motion.div
      style={{ width: 100, height: 100 }}
      animate={{ x: xPos, y: yPos, backgroundColor: randomColor }}
      onAnimationComplete={() => {
        setxPos(Math.random() * (window.innerWidth - 100));
        setyPos(Math.random() * (window.innerHeight - 100));
        setRandomColor(Color.random().initialValue);
        // xPos = (Math.random() * (window.innerWidth - 100));
        // yPos = (Math.random() * (window.innerHeight - 100));
        // randomColor = (Color.random().initialValue);
        console.log(randomColor);
      }}
    />

  );
};

export default Basic;
