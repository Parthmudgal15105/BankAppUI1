import React from 'react';
import { discount, robot } from './assets';
import styles from '../style';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Discount information */}
        <div className="flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-[5px] mb-2">
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2 text-white`}>
            <span>20% </span> discount for <span>1 Month</span> Account
          </p>
        </div>
        {/* Title */}
        <div className="flex flex-row justify-between items-center ww-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden "/>
            <span className='text-gradient'>
                Generation
            </span>{" "} <br />
          </h1>
          {/* GetStarted component */}
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
      </div>
      {/* Subtitle */}
      <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ml-12 ">
        Payment Method.
      </h1>
      {/* Description */}
      <p className={`${styles.paragraph} max-w-[470px] mt-10 ml-12`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-[100%] relative z-[5]" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full  bottom-40  white__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue  __gradient"></div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
);

export default Hero;
