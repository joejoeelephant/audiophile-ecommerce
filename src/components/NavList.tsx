import React from 'react'
import './NavBox.css'
import Image from 'next/image'
import Link from 'next/link'
import { navList } from '@/lib/navList'

export default function NavList() {
  return (
    <div className='py-6'>
      <div className='p-6 md:px-10 bg-white container mx-auto nav-box'>
        {
            navList.map((item, index) => {
                return (
                    <div className='navBox-item ' key={index}>
                        <div className="navBox-item-content p-6 bg-content-color min-h-44 flex flex-col justify-end items-center gap-3 tracking-wider rounded-md">
                            <div className='font-bold uppercase'>
                                {item.title}
                            </div>
                            <div className='uppercase text-secondary-color text-sm font-bold flex gap-2 items-center hover:text-accent-color'>
                                <Link href={item.href}>shop</Link>
                                <div className='border-t-2 border-r-2 border-input-focus-color rotate-45 w-2 h-2'></div>
                            </div>
                        </div>
                        <div className="navBox-item-icon">
                            <div className='w-20 mx-auto'>
                                <Image src={item.icon} alt='headphone' width={80} height={104} className='w-full'></Image>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}
