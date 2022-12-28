import { Mail } from '@vectopus/atlas-icons-react';
import kakaoTalkIcon from '../styles/images/kakaoTalk.png';
import githubIcon from '../styles/images/github-90.png';
import gmailIcon from '../styles/images/gmail-100.png';
import React, { useState } from 'react';

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  const toggleHandler = () => {
    setIsShown(!isShown);
  };

  return (
    <nav>
      <div className='flex justify-between'>
        {/* mobile menu */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleHandler}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 9h16.5m-16.5 6.75h16.5'
              />
            </svg>
          </button>
        </div>
        {/* 좌측 메뉴 */}
        <div className='hidden md:flex items-center space-x-8 text-gray-500'>
          <a href='#' className='text-sm '>
            About Me
          </a>
          <a href='#' className='text-sm'>
            Portfolio
          </a>
          <a href='#' className='text-sm'>
            Cooperation
          </a>
          {/* <a
            href='#'
            className='py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300'
          >
            Signup
          </a> */}
        </div>
        {/* 우측 SNS 버튼 */}
        <div className='flex items-center text-gray-500 space-x-5'>
          <a
            href='https://open.kakao.com/o/s3szcbVe'
            target='_blank'
            rel='noreferrer'
            className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'
          >
            <img
              class='w-7 h-7'
              src={kakaoTalkIcon}
              alt='kakaoTalk'
              title='kakaoTalk'
            />
          </a>
          <div className='w-7 h-7 inline-flex justify-center align-middle bg-slate-900 rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'>
            <a
              href='mailto:tommyJ.dev@gmail.com'
              target='_blank'
              rel='noreferrer'
              className=''
            >
              <img class='w-7 h-7' src={gmailIcon} alt='gmail' title='gmail' />
            </a>
          </div>
          <a
            href='https://github.com/tommyJ874'
            target='_blank'
            rel='noreferrer'
            className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'
          >
            <img class='w-8 h-8' src={githubIcon} alt='github' title='github' />
          </a>
          {/* <div class='inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-200 rounded-full'></div>
          <div class='inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-200 rounded-full'>
          </div>
          <div class='inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-200 rounded-full'>
          </div> */}
        </div>
      </div>

      {/* mobile menu items */}
      <div className={`md:hidden ${!isShown && 'hidden'}`}>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>
          Pricing
        </a>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>
          Features
        </a>
      </div>
    </nav>
  );
};

export default Header;
