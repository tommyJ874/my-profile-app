import React from 'react';
import Fade from 'react-reveal/Fade';

const CardSmall = (props) => {
  return (
    <Fade bottom>
      <div className='flex flex-col shadow-lg hover:shadow-2xl border-white border-solid rounded-3xl bg-white'>
        {props.children}
      </div>
    </Fade>
  );
};

export default CardSmall;
