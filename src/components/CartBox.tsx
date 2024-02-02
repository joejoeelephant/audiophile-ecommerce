'use client'
import React, {useEffect, useMemo, useState} from 'react'
import ToolBar from './ToolBar'
import Link from 'next/link'
import { useCartData } from '@/context/useCartDataContext'
import CartElement from './CartElement'
import './CartBox.css'
export default function CartBox() {
    const {isCartBoxShow, cartData, total, dispatch, toggleCartBox} = useCartData()
    const clearCart = () => {
        dispatch({type: "CLEAR_CART"})
    }
    return (
        <div className={`min-h-svh w-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] ${isCartBoxShow ? '' : 'hidden'}`}>
            <ToolBar />
            <div className="container p-6 md:px-10 mx-auto relative md:flex md:justify-end">
                <div className='bg-white p-6 rounded-lg w-full max-w-96'>
                    <div className='flex justify-between'>
                        <div className='uppercase text-xl font-bold'>
                            Cart({cartData.length})
                        </div>
                        <div className=' underline text-secondary-color cursor-pointer' onClickCapture={clearCart}>
                            Remove all
                        </div>
                    </div>
                    <div className='mt-8 max-h-[40vh] overflow-y-auto cart-list-container'>
                        <ul className='grid gap-8'>
                            {cartData.map((item, index) => {
                                return (
                                    <CartElement key={index} itemData={item}/>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='mt-8'>
                        <div className='flex justify-between'>
                            <div className='uppercase text-secondary-color'>
                                total
                            </div>
                            <div className='font-bold text-xl'>
                                ${total}
                            </div>
                        </div>
                        <div className='mt-6'>
                            <Link href={'/checkout'} onClickCapture={toggleCartBox} className={`${cartData.length > 0 ? '' : 'hidden'} text-center block text-xs py-3 px-8 bg-button-orange-color text-white uppercase tracking-wider cursor-pointer hover:bg-button-orange-hover-color`}>
                                checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
