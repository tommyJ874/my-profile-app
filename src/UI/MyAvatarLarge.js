import React from 'react';

const MyAvatarLarge = (props) => {
  return (
    <div className='flex justify-center md:justify-start'>
      <div className='h-60 w-60 md:h-[18rem] md:w-[18rem] '>
        <div className='h-full w-full rounded-full bg-gradient-to-tr from-gradient-from via-gradient-via to-gradient-to'>
          <img
            className='h-full w-full rounded-full z-50 rotate-12'
            src={props.src}
            alt='portrait'
          />
        </div>
      </div>
    </div>
  );
};

export default MyAvatarLarge;
