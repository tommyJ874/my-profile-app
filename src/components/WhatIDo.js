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
            <span className='text-[0.8rem] text-white p-1'>
              항상 최신 기술이 더 좋다고 생각하는 것은 아니지만 기회가 있다면
              새로운 언어, 프레임워크, 라이브러리 사용하는 것을 좋아합니다. 빠른
              학습 능력은 가장 큰 장점 입니다.
            </span>
          </div>
          <div className='w-full'>
            <Team className='w-20 h-20 mb-2' />
            <span className='text-[0.8rem] text-white p-1'>
              필요에 따라 직무와 직위에 관계없이 적극적으로 생각을 표현합니다.
              서비스 개발을 위한 커뮤니케이션은 적은 것 보다 많은 게 좋다고
              믿습니다.
            </span>
          </div>
          <div className='w-full'>
            <Bulb className='w-20 h-20 mb-2' />
            <span className='text-[0.8rem] text-white p-1'>
              서비스의 완성도를 높일 수 있는 방법을 고민합니다. 잘 정돈된 화면
              배치, 사용자 경험을 고려한 디자인, 간결하며 유지보수성과 확정성이
              좋은 코드 작성. 업무에 활용한 경험은 많지 않지만 항상 고민하며
              좋은 방향을 탐색합니다.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
