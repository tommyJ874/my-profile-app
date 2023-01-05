import React from 'react';
import Card from '../UI/Card';
import { ReactComponent as Kakao } from '../styles/images/kakaotalk.svg';
import { ReactComponent as Gmail } from '../styles/images/gmail.svg';
import { ReactComponent as Github } from '../styles/images/github.svg';
import MyAvatarLarge from '../UI/MyAvatarLarge';
import myProfile6 from '../styles/images/my-profile6.png';
import linkedinQR from '../styles/images/linkedinQR.png';
import MakePDFButton from '../UI/MakePDFButton';

const LetsTalk = () => {
  return (
    <section id='lets-talk' className='flex justify-center'>
      <Card>
        <div className='p-3 flex flex-col gap-y-10 md:flex-row md:justify-between md:gap-x-10'>
          <div className='flex flex-col gap-y-5'>
            <span className='pb-5 font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-gradient-from via-gradient-via to-gradient-to'>
              Let's talk
            </span>
            <div className='flex flex-col gap-y-3'>
              <a
                href='https://github.com/tommyJ874'
                target='_blank'
                rel='noreferrer'
                className='flex flex-row items-center gap-x-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'
              >
                <Github className='w-[1.1rem] h-[1.1rem] fill-gradient-from' />
                <span className='text-gray-500 text-xs'>/tommyJ874</span>
              </a>
              <a
                href='https://open.kakao.com/o/s3szcbVe'
                target='_blank'
                rel='noreferrer'
                className='flex-1 flex flex-row items-center gap-x-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'
              >
                <Kakao className='w-4 h-4 fill-gradient-from' />
                <span className='text-gray-500 text-xs'>/tommyJ</span>
              </a>
              <a
                href='mailto:tommyJ.dev@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='flex flex-row items-center gap-x-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'
              >
                <Gmail className='w-[1.1rem] h-[1.1rem] fill-gradient-from' />
                <span className='text-gray-500 text-xs underline'>
                  tommyJ.dev@gmail.com
                </span>
              </a>
            </div>

            <div>
              <MakePDFButton>Download this portfolio in PDF</MakePDFButton>
            </div>
            <div className='absolute right-[4.8rem] flex flex-col items-end gap-y-3 md:relative md:right-auto md:flex-row md:items-center md:gap-x-5'>
              <img className='h-20 w-20' src={linkedinQR} alt='Linkedin QR' />
              <span className='text-[0.5rem] text-gray-400'>
                Connect in Linkedin
              </span>
            </div>
          </div>
          <div>
            <MyAvatarLarge src={myProfile6} />
          </div>
        </div>
      </Card>
    </section>
  );
};

export default LetsTalk;
