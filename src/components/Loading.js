import React from 'react';
import Lottie from 'react-lottie';
import data from '../styles/lottie/434-gradient-animated-background.json';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      style={{ zIndex: -1, display: 'flex', width: 'auto', height: 'screen' }}
    >
      <Lottie options={defaultOptions} height='' />
    </div>
  );
};

export default Loading;
