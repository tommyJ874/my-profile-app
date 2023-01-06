import React from 'react';

const BorderGradientButton = (props) => {
  return (
    <button className='h-8 w-24 rounded-lg shadow-md hover:shadow-lg shadow-gray-300 border bg-gradient-to-tr from-gradient-from via-gradient-via to-gradient-to p-[0.08rem]'>
      <div className='flex h-full w-full rounded-md items-center justify-center bg-white back'>
        <span className='text-[0.4rem] font-bold text-gradient-via'>
          {props.children}
        </span>
      </div>
    </button>
  );
};

export default BorderGradientButton;
