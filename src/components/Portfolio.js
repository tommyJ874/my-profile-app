import React, { useEffect, useState } from 'react';
import CardSmall from '../UI/CardSmall';
import PortfolioData from '../services/PortfolioData';
import { ReactComponent as Warning } from '../styles/images/warning.svg';
import doubleDown from '../styles/images/doubleDown.png';
import HashTag from '../UI/HashTag';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [lastKey, setLastKey] = useState('');
  const [nextPortfolios_loading, setNextPortfoliosLoading] = useState(false);

  useEffect(() => {
    // first 5 portfolios
    PortfolioData.portfoliosFirstBatch()
      .then((res) => {
        // setPortfolios(res.portfolios);
        setLastKey(res.lastKey);

        return res.portfolios;
      })
      .then((res) => {
        PortfolioData.getImageURL(res).then((resImageData) => {
          setPortfolios(resImageData);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchMorePosts = () => {
    if (lastKey) {
      setNextPortfoliosLoading(true);
      PortfolioData.portfoliosNextBatch(lastKey)
        .then((res) => {
          if (res.portfolios.length === 5) {
            setLastKey(res.lastKey);
          } else {
            setLastKey('');
          }

          //setPortfolios(portfolios.concat(res.portfolios));
          setNextPortfoliosLoading(false);

          return res.portfolios;
        })
        .then((res) => {
          PortfolioData.getImageURL(res).then((resImageData) => {
            setPortfolios(portfolios.concat(resImageData));
          });
        })
        .catch((err) => {
          console.log(err);
          setNextPortfoliosLoading(false);
        });
    }
  };

  const allPosts = (
    <>
      {portfolios.map((portfolio, idx) => {
        return (
          <CardSmall key={idx}>
            <div className='flex flex-col-reverse items-start gap-y-11 p-8 md:flex-row md:justify-start md:p-10 md:gap-x-10'>
              <div className='md:flex-1'>
                <span className='inline-block font-bold pb-3'>
                  {portfolio.title}
                </span>
                <p className='text-[0.813rem] text-gray-500 pb-7 w-full break-keep'>
                  {portfolio.description?.split('\\n').map((txt, idx) => (
                    <span key={idx} className='w-full'>
                      {txt}
                      <br />
                    </span>
                  ))}
                </p>
                <div className='flex gap-x-2 gap-y-2 flex-wrap max-w-[26.688rem]'>
                  {portfolio.hashtag?.split(' ').map((el) => {
                    return <HashTag>{el}</HashTag>;
                  })}
                </div>
              </div>
              <div className='self-center flex justify-center items-center w-[11.8rem] h-[8.925rem] border rounded-lg p-[0.3rem] bg-white'>
                {portfolio.pageURL ? (
                  <>
                    <div className='absolute w-[6.875rem] h-[5.188rem] rounded-md border-8 border-gray-400 animate-ping -z-10'></div>
                    <a
                      href={portfolio.pageURL}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {portfolio.imageURL ? (
                        <img
                          className='h-full w-full rounded-lg hover:cursor-pointer'
                          src={portfolio.imageURL}
                          alt='project'
                        ></img>
                      ) : (
                        <Warning className='w-10 h-10'></Warning>
                      )}
                    </a>
                  </>
                ) : portfolio.imageURL ? (
                  <img
                    className='h-full w-full rounded-lg'
                    src={portfolio.imageURL}
                    alt='project'
                  ></img>
                ) : (
                  <Warning className='w-10 h-10'></Warning>
                )}
              </div>
            </div>
          </CardSmall>
        );
      })}
    </>
  );

  return (
    <section id='portfolio' className='flex justify-center'>
      <div className='w-full max-w-[50rem] px-16 pb-10 md:px-8 md:pb-8'>
        <span className='inline-block text-white font-bold text-xl pb-7'>
          Portfolio
        </span>
        <div className='flex flex-col gap-y-8'>{allPosts}</div>
        {portfolios.length > 0 && (
          <div className='flex justify-center p-3'>
            {nextPortfolios_loading ? (
              //TODO: 로딩 애니메이션
              <></>
            ) : (
              lastKey && (
                <button
                  className='flex gap-x-1 font-bold text-sm text-white animate-pulse'
                  onClick={fetchMorePosts}
                >
                  더보기
                  <img className='w-6 h-6' src={doubleDown} alt='더보기 버튼' />
                </button>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
