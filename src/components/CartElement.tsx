'use client'
import React, {useEffect} from 'react'
import Image from 'next/image'
import { CartItem } from '@/lib/type'
import { useCartData } from '@/context/useCartDataContext'
export default function CartElement({itemData}: {itemData:CartItem}) {
    const {dispatch} = useCartData()
    
    useEffect(() => {
      if(itemData.quantity < 1) {
        dispatch({type: "DELETE_ITEM", payload: itemData.productId})
      }
    },[itemData.quantity, itemData.productId, dispatch])

    const plusQuantity = () => {
      dispatch({type: "PLUS_ITEM_QUANTITY", payload: itemData.productId})
    }
    const minusQuantity = () => {
      dispatch({type: "MINUX_ITEM_QUANTITY", payload: itemData.productId})
    }
    return (
      <li className='flex gap-3 items-center'>
          <div className='max-w-16 rounded-md overflow-hidden'>
              <Image src={itemData.cartImage} alt='asd' width={150} height={150} className='w-full'></Image>
          </div>
          <div className='flex-1'>
              <div className='font-bold'>
                  {itemData.name}
              </div>
              <div className='font-bold text-secondary-color'>
                  $ {(itemData.price).toLocaleString()}
              </div>
          </div>
          <div className='flex-1 grid grid-cols-3 justify-items-center items-center bg-content-color py-1 font-bold'>
              <div className='text-secondary-color cursor-pointer hover:text-accent-color' onClickCapture={plusQuantity}>+</div>
              <div>{itemData.quantity}</div>
              <div className='text-secondary-color cursor-pointer hover:text-accent-color' onClick={minusQuantity}>-</div>
          </div>
      </li>
    )
  }
