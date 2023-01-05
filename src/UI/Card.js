import React from 'react';

const Card = (props) => {
  return (
    <div className='flex flex-col w-full m-10 p-5 md:p-8 shadow-2xl border-white border-solid rounded-3xl bg-white md:max-w-4xl'>
      {props.children}
    </div>
  );
};

export default Card;
