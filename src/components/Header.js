import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <div className='flex justify-end gap-x-6 pb-5 pr-[8%] md:gap-x-11 md:pb-0'>
      <HashLink smooth to='#about' className='text-[0.5rem]'>
        About
      </HashLink>
      <HashLink smooth to='#what-i-do' className='text-[0.5rem]'>
        What I Do
      </HashLink>
      <HashLink smooth to='#portfolio' className='text-[0.5rem]'>
        Portfolio
      </HashLink>
      <HashLink
        smooth
        to='#lets-talk'
        className='text-[0.5rem] text-transparent bg-clip-text bg-gradient-to-tr from-gradient-from via-gradient-via to-gradient-to'
      >
        {"Let's Talk"}
      </HashLink>
    </div>
  );
};

export default Header;
