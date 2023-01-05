import React from 'react';
import { ReactComponent as Rocket } from '../styles/images/rocket.svg';
import { ReactComponent as Team } from '../styles/images/team.svg';
import { ReactComponent as Bulb } from '../styles/images/bulb.svg';

const WhatIDo = () => {
  return (
    <section id='what-i-do' className='flex justify-center'>
      <div className='w-full max-w-[50rem] px-16 pb-10 md:px-8 md:pb-8'>
        <span className='inline-block text-white font-bold text-xl pb-4'>
          What I Do
        </span>
        <div className='flex flex-col justify-between gap-y-10 break-keep md:gap-x-20 md:flex-row md:justify-between'>
          <div className='w-full'>
            <Rocket className='w-20 h-20 mb-2' />
            <span className='text-[0.7rem] text-white p-1'>
              로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 로렘
              입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽
            </span>
          </div>
          <div className='w-full'>
            <Team className='w-20 h-20 mb-2' />
            <span className='text-[0.7rem] text-white p-1'>
              로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽
            </span>
          </div>
          <div className='w-full'>
            <Bulb className='w-20 h-20 mb-2' />
            <span className='text-[0.7rem] text-white p-1'>
              로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 로렘
              입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 로렘
              입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 로렘
              입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
