'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function ToolBar() {
  return (
    <div className='opacity-0'>
        <div className='container mx-auto flex justify-between items-center px-6 py-8 bg-black'>
            <div className='w-4 lg:hidden' >
              <Image src={'/images/hamburger.svg'} alt='menue' width={16} height={15} className='w-full'></Image>
            </div>
            <div className='flex-1 flex justify-center md:justify-start md:pl-8 lg:pl-0 lg:flex-initial'>
              <Link href={'#'}>
                <Image src={'/images/logo.svg'} alt='logo' width={143} height={25} className='w-full'></Image>
              </Link>
            </div>
            <div className='w-6 cursor-pointer'>
              <Image src={'/images/cart.svg'} alt='cart' width={23} height={20} className='w-full'></Image>
            </div>
        </div>
    </div>
  )
}
