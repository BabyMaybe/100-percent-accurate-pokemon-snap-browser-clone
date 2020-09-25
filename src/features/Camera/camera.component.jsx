import React from 'react';
import './camera.styles.scss';
import { Frame, motion } from 'framer';

const Camera = () => {
  const frameStyle = { originX: 0.5, originY: 0.5, background: 'rgba(0, 0, 0, 0)' };
  const initial = {
    width: 0,
    height: 0,
  };
  const innerAnim = {
    width: 50,
    height: 50,
  };

  const circleInit = { size: 0, rotate: 0 };

  const circleAnim = { size: 100 };
  const circleTrans = { duration: 0.7, easing: 'easeOut' };

  const circleAnimSmall = { size: 60 };
  const circleTransSmall = { duration: 0.7, easing: 'easeOut' };

  const circleAnimContainerBig = { rotate: -180 };
  const circleAnimContainerSmall = { rotate: 180 };

  const frameTrans = { duration: 0.8, easing: 'easeOut' };

  return (
    <Frame className="camera-overlay" style={frameStyle}>
      {/* Viewfinder */}
      <div>
        <Frame
          className="corner top left"
          style={frameStyle}
          initial={initial}
          animate={{ ...innerAnim, left: '-15vw', top: '-20vh' }}
          transition={frameTrans}
          center
        />
        <Frame
          className="corner top right"
          style={frameStyle}
          initial={initial}
          animate={{ ...innerAnim, left: '30vw', top: '-20vh' }}
          transition={frameTrans}
          center
        />
        <Frame
          className="corner bottom left"
          style={frameStyle}
          initial={initial}
          animate={{ ...innerAnim, left: '-15vw', top: '40vh' }}
          transition={frameTrans}
          center
        />
        <Frame
          className="corner bottom right"
          style={frameStyle}
          initial={initial}
          animate={{ ...innerAnim, left: '30vw', top: '40vh' }}
          transition={frameTrans}
          center
        />
      </div>

      {/* Focus Finder */}
      {/* Big Circle */}

      {/* Big Circle Top Container */}
      <Frame
        size={100}
        center
        style={{ y: -50, background: 'rgba(0,0,0,0)' }}
      >
        {/* Top Circle Big */}
        <Frame
          radius="50%"
          size={100}
          center
          style={{
            originY: 0.5,
            y: 50,
            background: 'rgba(183, 183, 183, .25)',
            border: 'solid rgba(229,229,229, .5) 1px',
            boxShadow: 'rgba(229,229,229, 0.5) 0px 0px 0px 10px',
          }}
          animate={{ ...circleAnim, filter: 'blur(0px)' }}
          initial={{ ...circleInit, filter: 'blur(25px)' }}
          transition={circleTrans}
        />
      </Frame>
      {/* Big Circle Bottom Container */}
      <Frame
        size={100}
        center
        style={{
          overflow: 'hidden',
          y: 50,
          background: 'rgba(0,0,0,0)',
          originY: 0,
        }}
        animate={circleAnimContainerBig}
        transition={circleTrans}

      >
        {/* Bottom Circle Big */}
        <Frame
          radius="50%"
          size={100}
          center
          style={{ originY: 0.5, y: -50, background: 'rgba(229,229,229,.5' }}
          animate={circleAnim}
          initial={circleInit}
          transition={circleTrans}
        />
      </Frame>

      {/* Small Circle */}
      <motion.div
        initial={circleInit}
        style={{
          originX: 0.5,
          originY: 0.5,
        }}
      >

        {/* Top Circle Small Container */}
        <Frame
          size={60}
          center
          style={{ y: -30, background: 'rgba(0,0,0,,0' }}
        >
          {/* Top Circle Small */}
          <Frame
            radius="50%"
            size={60}
            center
            style={{ originY: 0.5, y: 30, background: 'rgba(229,229,229,.25', border: 'solid rgba(229,229,229,.2) 1px' }}
            initial={{ ...circleInit, filter: 'blur(50px)' }}
            animate={{ ...circleAnimSmall, filter: 'blur(0px)' }}
            transition={circleTransSmall}
          />
        </Frame>

        {/* Bottom Circle Small Container */}
        <Frame
          size={60}
          center
          style={{
            overflow: 'hidden',
            y: 30,
            background: 'rgba(0,0,0,0)',
            originY: 0,
          }}
          animate={circleAnimContainerSmall}
          transition={circleTrans}
        >
          {/* Bottom Circle Small */}
          <Frame
            radius="50%"
            size={60}
            center
            style={{
              originY: 0.5,
              y: -30,
              background: 'rgba(183, 183, 183, .25)',
            }}
            initial={{ ...circleInit, filter: 'blur(50px)' }}
            animate={{ ...circleAnimSmall, filter: 'blur(0px)' }}
            transition={circleTransSmall}
          />
        </Frame>
      </motion.div>

    </Frame>
  );
};

export default Camera;
