import React, { useEffect, useState } from 'react';
import CardSmall from '../UI/CardSmall';
import PortfolioData from '../services/PortfolioData';
import BorderGradientButton from '../UI/BorderGradientButton';
import { ReactComponent as Warning } from '../styles/images/warning.svg';
import doubledown from '../styles/images/doubledown.png';
import Loading from './Loading';

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
                <p className='text-xs text-gray-500 pb-7 w-full break-keep'>
                  {portfolio.description?.split('\\n').map((txt, idx) => (
                    <span key={idx} className='w-full'>
                      {txt}
                      <br />
                    </span>
                  ))}
                </p>
                <BorderGradientButton>
                  <a href='#!'>Look</a>
                </BorderGradientButton>
              </div>

              <div className='self-center flex justify-center items-center w-[11.8rem] h-[8.925rem] border rounded-lg p-[0.3rem]'>
                {portfolio.imageURL ? (
                  <img
                    className='h-full w-full rounded-lg'
                    src={portfolio.imageURL}
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
              // <Loading />
              <></>
            ) : (
              lastKey && (
                <button
                  className='flex gap-x-1 font-bold text-sm text-white animate-pulse'
                  onClick={fetchMorePosts}
                >
                  더보기
                  <img className='w-6 h-6' src={doubledown} />
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
