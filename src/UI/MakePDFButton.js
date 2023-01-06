import React from 'react';
import makePDF from '../utils/makePDF';

const makePDFButton = (props) => {
  const pdf = makePDF();

  const handleClick = async (e) => {
    e.preventDefault();
    await pdf.viewWithPdf();
  };

  return (
    <button
      onClick={handleClick}
      className='h-8 w-44 rounded-lg shadow-md hover:shadow-lg shadow-gray-300 border bg-gradient-to-tr from-gradient-from via-gradient-via to-gradient-to'
    >
      <div className='flex h-full w-full justify-center items-center'>
        <span className='text-[0.4rem] font-bold text-white'>
          {props.children}
        </span>
      </div>
    </button>
  );
};

export default makePDFButton;
