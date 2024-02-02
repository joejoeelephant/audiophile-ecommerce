'use client'
import React from 'react'
import Image from 'next/image'
import { useCartData } from '@/context/useCartDataContext'
import Link from 'next/link'
export default function FeedBack({isVisible}: {isVisible: boolean}) {
    const {cartData, total, dispatch} = useCartData()
    return (
        <div className={`fixed z-30 top-0 left-0 w-full h-svh flex justify-center items-center bg-[rgba(0,0,0,0.5)] ${isVisible ? '' : 'hidden'}`}>
            <div className='bg-white p-6 md:p-10 w-10/12 md:w-8/12 lg:w-4/12 grid grid-cols-1 gap-6 rounded-lg'>
                <div className='w-16'>
                    <Image src={'/images/checkout/icon-order-confirmation.svg'} alt='confirm-icon' width={64} height={64} className='w-full'></Image>
                </div>
                <div className='text-2xl font-bold'>
                    <div>
                        THANK YOU 
                    </div>
                    <div>
                        FOR YOUR ORDER
                    </div>
                </div>
                <div className='text-secondary-color'>
                    You will receive an email confirmation shortly.
                </div>
                <div className='flex flex-col md:flex-row rounded-lg overflow-hidden'>
                    <div className='bg-content-color p-6 flex-1'>
                        {
                            cartData.length > 0 &&
                            <div className='flex gap-4 items-center font-bold border-b-2 pb-3'>
                                <div className='w-3/12 max-w-16 rounded-lg overflow-clip'>
                                    <Image src={cartData[0].cartImage} alt='product' width={150} height={150} className='w-full'></Image>
                                </div>
                                <div className='flex-1'>
                                    <div>
                                        {cartData[0].name}
                                    </div>
                                    <div className='text-sm text-secondary-color'>
                                        $ {cartData[0].price}
                                    </div>
                                </div>
                                <div className='text-secondary-color'>
                                    x{cartData[0].quantity}
                                </div>
                            </div>
                        }
                        {
                                cartData.length > 1 &&
                                (
                                    <div className='pt-2 text-secondary-color text-[12px] text-center font-bold'>
                                        and {cartData.length - 1} other item(s)
                                    </div>
                                )
                        }
                    </div>
                    <div className='bg-black py-4 px-6 md:w-5/12 flex flex-col gap-3 md:gap-4 md:justify-center'>
                        <div className='text-secondary-color uppercase'>
                            Grant total
                        </div>
                        <div className='text-lg font-bold text-white'>
                            ${total + 50}
                        </div>
                    </div>
                </div>
                <div>
                    <Link onClickCapture={() => {dispatch({type: "CLEAR_CART"})}} href={'/'} className='block text-center text-xs py-3 px-8 bg-button-orange-color text-white uppercase tracking-wider cursor-pointer hover:bg-button-orange-hover-color'>
                        back to home
                    </Link>
                </div>
            </div>
        </div>
    )
}
