'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavBox from './NavBox'
import { navList } from '@/lib/navList'
import { useCartData } from '@/context/useCartDataContext'
import { usePathname } from 'next/navigation'
export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const {toggleCartBox, cartData} = useCartData()
  const pathname = usePathname()
  
  return (
    <header className={`fixed z-20 w-full top-0 left-0 flex flex-col ${isNavVisible ? 'h-screen' : ''}  ${pathname === '/' ? 'bg-[#181818]' : 'md:bg-black'}`}>
        <div className={`container mx-auto flex justify-between items-center px-6 py-8 border-b border-gray-800  ${pathname === '/' ? 'bg-[#181818]' : 'bg-black'}`}>
            <div className='w-4 lg:hidden' onClickCapture={() => {setIsNavVisible(prev => !prev); console.log(123)}}>
              <Image src={'/images/hamburger.svg'} alt='menue' width={16} height={15} className='w-full'></Image>
            </div>
            <div className='flex-1 flex justify-center md:justify-start md:pl-8 lg:pl-0 lg:flex-initial'>
              <Link href={'/'}>
                <Image src={'/images/logo.svg'} alt='logo' width={143} height={25} className='w-full'></Image>
              </Link>
            </div>
            <ul className='hidden pr-28 gap-16 text-white uppercase font-bold text-xs lg:flex'>
              <li >
                <Link href='/' className='hover:text-accent-color'>
                  home
                </Link>
              </li>
              {
                navList.map((item, index) => {
                  return (
                    <li key={index} >
                      <Link href={item.href} className='hover:text-accent-color'>
                        {item.title}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
            <div className='w-6 cursor-pointer relative' onClickCapture={toggleCartBox}>
              <Image src={'/images/cart.svg'} alt='cart' width={23} height={20} className='w-full'></Image>
              <div className={`w-2 h-2 bg-orange-color rounded-full absolute -right-1 top-0 ${cartData.length > 0 ? '' : 'hidden'}`}></div>
            </div>
        </div>
        <NavBox isVisible={isNavVisible} closeNavBox={() => {setIsNavVisible(false)}}></NavBox>
    </header>
  )
}
