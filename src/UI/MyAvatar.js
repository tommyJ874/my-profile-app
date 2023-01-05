import React from 'react';

const MyAvatar = (props) => {
  return (
    <div className='flex justify-center md:justify-start'>
      <div className='h-48 w-48 md:mr-10 '>
        <div className='h-full w-full rounded-full bg-gradient-to-tr from-gradient-from via-gradient-via to-gradient-to'>
          <img
            className='h-full w-full rounded-full'
            src={props.src}
            alt='portrait'
          />
        </div>
      </div>
    </div>
  );
};

export default MyAvatar;
