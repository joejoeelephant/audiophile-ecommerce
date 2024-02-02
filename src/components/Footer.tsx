import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navList } from '@/lib/navList'
import './Footer.css'
export default function Footer() {
  const shareLinks = [
    {
      icon: '/images/shared/desktop/icon-facebook.svg',
      title: 'facebook',
      href: '#'
    },
    {
      icon: '/images/shared/desktop/icon-instagram.svg',
      title: 'instagram',
      href: '#'
    },
    {
      icon: '/images/shared/desktop/icon-twitter.svg',
      title: 'twitter',
      href: '#'
    }
  ]
  return (
    <footer className=' bg-footer-color'>
        <div className="container relative mx-auto p-10 md:px-10  text-center md:text-left text-secondary-color  gap-8 footer-container">
            <div className='w-28 h-1 bg-orange-color absolute top-0 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0'></div>
            <div className="footer-logo flex justify-center md:justify-start">
              <Link href={'/'} className='block w-1/2 md:w-3/12'>
                <Image src={'/images/logo.svg'} alt='logo' width={143} height={25} className='w-full'></Image>
              </Link>
            </div>
            <div className="footer-nav text-white">
              <ul className='uppercase text-xs flex flex-col md:flex-row gap-4 md:gap-8 tracking-widest font-bold items-center lg:justify-end'>
                <li>
                    <Link href={'/'} className='hover:text-accent-color active:text-accent-color'>
                      home
                    </Link>
                </li>
                {
                  navList.map((item, index) => {
                    return (
                      <li key={index} className='hover:text-accent-color active:text-accent-color'>
                          <Link href={item.href}>
                            {item.title}
                          </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="footer-description ">
                <p className='lg:w-3/4'>
                  Audiophile is an all in one stop to fulfill your audio needs. We&lsquo;re a small team of music lovers 
                  and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                  visit our demo facility - we’re open 7 days a week.
                </p>
            </div>
            <div className="footer-copyright">
                <p className='font-bold'>
                  Copyright 2021. All Rights Reserved
                </p>
            </div>
            <div className="footer-shareLinks">
                <ul className='flex gap-6 justify-center md:justify-end items-center'>
                  {
                    shareLinks.map((item, index) => {
                      return (
                        <li key={index}>
                            <Link href={item.href} className='w-6 h-6 block hover:bg-orange-color active:bg-orange-color footer-share-icon' style={{"--mask-image-url": `url(${item.icon})`} as React.CSSProperties}>
                              <span className='hidden'>{item.title}</span>
                            </Link>
                        </li>
                      )
                    })
                  }
                </ul>
            </div>
        </div>
    </footer>
  )
}
