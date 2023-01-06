import React from 'react';

const BGGradientButton = (props) => {
  return (
    <button className='h-8 w-24 rounded-lg shadow-md hover:shadow-lg shadow-gray-300 border bg-gradient-to-tr from-gradient-from via-gradient-via to-gradient-to'>
      <div className='flex h-full w-full justify-center items-center'>
        <span className='text-[0.4rem] font-bold text-white'>
          {props.children}
        </span>
      </div>
    </button>
  );
};

export default BGGradientButton;
