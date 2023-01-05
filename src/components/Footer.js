import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { ReactComponent as Rectangle } from '../styles/images/rectangle.svg';
import { ReactComponent as Person } from '../styles/images/person2.svg';
import { ReactComponent as Launch } from '../styles/images/launch.svg';
import { ReactComponent as Bookmark } from '../styles/images/bookmark.svg';
import { ReactComponent as Heart } from '../styles/images/heart.svg';

const Footer = () => {
  return (
    <footer className='flex justify-center items-center sticky bottom-5 '>
      <Rectangle />
      <HashLink smooth to='#about'>
        <Person className='absolute h-9 w-9 -translate-x-[15.2rem] -translate-y-[1.2rem] fill-slate-200' />
      </HashLink>
      <HashLink smooth to='#what-i-do'>
        <Launch className='absolute h-9 w-9 -translate-x-[11.65rem] -translate-y-[1.2rem] fill-slate-200' />
      </HashLink>
      <HashLink smooth to='#portfolio'>
        <Bookmark className='absolute h-9 w-9 -translate-x-[7.63rem] -translate-y-[1.2rem] fill-slate-200' />
      </HashLink>
      <HashLink smooth to='#lets-talk'>
        <Heart className='absolute h-9 w-9 -translate-x-[3.7rem] -translate-y-[1.2rem] fill-slate-200' />
      </HashLink>
    </footer>
  );
};

export default Footer;
