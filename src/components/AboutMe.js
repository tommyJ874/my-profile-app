import React from 'react';
import Card from '../UI/Card';
import Header from './Header';
import BorderGradientButton from '../UI/BorderGradientButton';
import { HashLink } from 'react-router-hash-link';
import BGGradientButton from '../UI/BGGradientButton';
import myProfile5 from '../styles/images/my-profile5.png';
import { ReactComponent as Kakao } from '../styles/images/kakaotalk.svg';
import { ReactComponent as Gmail } from '../styles/images/gmail.svg';
import { ReactComponent as Github } from '../styles/images/github.svg';
import MyAvatar from '../UI/MyAvatar';

const AboutMe = () => {
  return (
    <section id='about' className='flex justify-center'>
      <Card>
        <Header></Header>
        <div className='p8 flex flex-col-reverse justify-end gap-y-11 md:flex-row md:justify-between md:px-10 md:py-20 md:gap-x-32'>
          <div>
            <div className='flex flex-col gap-y-3 break-keep'>
              <span className='text-2xl font-bold'>
                안녕하세요! 주진호입니다.
              </span>
              <span className='text-sm text-gray-500'>
                웹 개발자로 3년째 일하고 있습니다. 사용자 경험과 개발자 경험을
                중요하게 생각하고 확장성을 고려하는 코드 작성을 좋아합니다.
              </span>
              {/* <span className='text-sm'>금융 회사에서 프리랜서로 근무중 </span> */}
              <div className='flex gap-x-5 items-center'>
                <a
                  href='https://github.com/tommyJ874'
                  target='_blank'
                  rel='noreferrer'
                  className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'
                >
                  <Github className='w-[1.1rem] h-[1.1rem] fill-gradient-from' />
                </a>
                <a
                  href='https://open.kakao.com/o/s3szcbVe'
                  target='_blank'
                  rel='noreferrer'
                  className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'
                >
                  <Kakao className='w-4 h-4 fill-gradient-from' />
                </a>
                <a
                  href='mailto:tommyJ.dev@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110'
                >
                  <Gmail className='w-[1.1rem] h-[1.1rem] fill-gradient-from' />
                </a>
              </div>
              <div className='flex pt-6 gap-x-5 justify-center md:justify-start'>
                <BorderGradientButton>
                  <HashLink smooth to='#portfolio' className=''>
                    Portfolio
                  </HashLink>
                </BorderGradientButton>
                <BGGradientButton height='h-8' width='w-24'>
                  <HashLink smooth to='#lets-talk'>
                    Let's Talk
                  </HashLink>
                </BGGradientButton>
              </div>
            </div>
          </div>
          <MyAvatar src={myProfile5} />
        </div>
      </Card>
    </section>
  );
};

export default AboutMe;
