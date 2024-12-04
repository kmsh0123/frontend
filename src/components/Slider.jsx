import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay} from 'swiper/modules';

const text = [
    `“Your success is our priority. We take the time to understand your goals, challenges, and vision.”`,
    `"Elevate your brand with our expert marketing agency.Let's get started. Contact us now!"`,
    `“Ready to discuss your marketing goals in detail? Schedule a consultation with our experts.”`
]

const Slider = () => {
  return (
    <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000, // Time between slide transitions in milliseconds (2000ms = 2 seconds)
        disableOnInteraction: false, // Continue autoplay even if the user interacts with the Swiper
      }}
      modules={[Autoplay]}
      style={{ height: '128px' }}
      className='text-2xl text-[#dccfb0]' // Ensuring full-screen height
    >
      {
        text.map((item,index)=>(
            <SwiperSlide key={index}>{item}</SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default Slider;
