import React from 'react';
import { discount, robot } from './assets';
import styles from '../style';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-6 px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2 text-white`}>
            <span>20% </span> discount for <span>1 Month</span> Account
          </p>
        </div>
        <div className="flex felx-row justify-between items-center ww-full">
          <h1>
            The Next <br />f
            Payment Method.
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;