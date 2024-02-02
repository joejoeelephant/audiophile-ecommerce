import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navList } from '@/lib/navList'
import './NavBox.css'

export default function NavBox({isVisible, closeNavBox}: {isVisible: boolean, closeNavBox: () => void}) {
    return (
        <nav className={`bg-[rgba(0,0,0,0.3)] flex-1 ${isVisible ? '' : 'hidden'}`}>
            <div className='p-6 pt-8 bg-white max-h-[80vh] overflow-y-scroll md:overflow-y-auto nav-box'>
                {
                    navList.map((item, index) => {
                        return (
                            <div className='navBox-item ' key={index}>
                                <div className="navBox-item-content p-6 bg-content-color min-h-44 flex flex-col justify-end items-center gap-3 tracking-wider rounded-md">
                                    <div className='font-bold uppercase'>
                                        {item.title}
                                    </div>
                                    <div className='uppercase text-secondary-color text-sm font-bold flex gap-2 items-center'>
                                        <Link href={item.href} onClickCapture={closeNavBox}>shop</Link>
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
        </nav>
    )
}
