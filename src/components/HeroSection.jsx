import React from 'react'
import Slider from './Slider'

const HeroSection = () => {
  return (
    <section className='bg-[#1c2437]' id='home'>
        <div className='max-w-7xl px-6 mx-auto'>
          <div className='w-full h-full'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='flex justify-center items-center lg:col-span-6 col-span-12 lg:min-h-screen h-96'>
                <Slider/>
                </div>
                <div className='flex lg:col-span-6 col-span-12'>
                  <div className='lg:w-3/4 m-auto lg:ml-10'>
                    <img className='h-auto lg:h-screen w-full object-cover' src="https://duno.asia/static/media/finalDuno.2a4474ccadb8b81832d0.gif" alt="" />
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection