import React from 'react'
import Image from 'next/image'
import './Banner.css'
import LinkButton from '../LinkButton'
export default function Banner() {
  return (
    <div className='bg-[#181818]'>
        <div className='container mx-auto banner-container'>
          <div className="banner-img">
            <Image src={'/images/home/mobile/image-header.jpg'} alt='header' width={750} height={1200} className='w-full md:hidden'></Image>
            <Image src={'/images/home/tablet/image-header.jpg'} alt='header' width={1536} height={1458} className='w-full hidden md:block lg:hidden'></Image>
            <Image src={'/images/home/desktop/image-hero.jpg'} alt='header' width={2880} height={1458} className='w-full hidden lg:block'></Image>
          </div>
          <div className='banner-info pt-16'>
            <div className='h-full text-secondary-color flex flex-col gap-6 justify-center items-center md:w-1/2 lg:w-8/12 lg:items-start px-6 text-center lg:text-left mx-auto lg:mx-0'>
              <p className='text-sm tracking-overline-spacing uppercase'>
                new product
              </p>
              <h1 className='text-white font-bold text-4xl md:text-6xl uppercase'>
                XX99 Mark II HeadphoneS
              </h1>
              <p className='font-semibold lg:w-9/12'>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
              </p>
              <LinkButton title='see product' href='/product/headphones/1' type='orange'/>
            </div>
          </div>
        </div>
    </div>
  )
}
