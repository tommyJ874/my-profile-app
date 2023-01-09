import React from 'react';

const HashTag = (props) => {
  return (
    <div className='flex justify-center items-center bg-gray-300/70 rounded-lg py-1 px-2'>
      <span className='text-xs text-slate-500'>#{props.children}</span>
    </div>
  );
};

export default HashTag;
