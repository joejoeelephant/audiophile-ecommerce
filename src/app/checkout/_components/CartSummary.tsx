'use client'
import React, {useState} from 'react'
import { useCartData } from '@/context/useCartDataContext'
import { useForm } from '../_context/useFormContext'
import { FormProps } from '../_lib/chekoutType'
import Image from 'next/image'
import Message from '@/components/Message'
import FeedBack from './FeedBack';

export default function CartSummary() {
    const {cartData, total} = useCartData();
    const {state, dispatch} = useForm()
    const [messageVisible, setMessageVisible] = useState(false);
    const [feedbackVisible, setFeedbackVisible] = useState(false)
    const shippingPrice = 50

    const checkIfAllValid = () => {
        const excludeFields = state.payMethod.value !== 'eMoney' ? ['eMoneyNumber', 'eMoneyPin'] : [];
        const inValidItems = Object.keys(state).filter((item) => {
            return !excludeFields.includes(item) && !state[item as keyof FormProps].valid;
        });
        setMessageVisible(inValidItems.length > 0)
        return inValidItems.length < 1
    };

    const payCheckout = () => {
        const valid = checkIfAllValid();
        if(!valid) return;
        setFeedbackVisible(true)
    }
    
    return (
       <>
        <div className='bg-white p-6 py-8 rounded-lg lg:self-start'>
            <h3 className='font-bold text-xl uppercase'>Summary</h3>
            <div className='mt-8'>
                <ul>
                    {
                        cartData.length > 0 && cartData.map((item, index) => {
                            return (
                                <li key={index} className='flex gap-4 items-center font-bold mb-4'>
                                    <div className='w-3/12 max-w-16 rounded-lg overflow-clip'>
                                        <Image src={item.cartImage} alt='product' width={150} height={150} className='w-full'></Image>
                                    </div>
                                    <div className='flex-1'>
                                        <div>
                                            {item.name}
                                        </div>
                                        <div className='text-sm text-secondary-color'>
                                            $ {item.price}
                                        </div>
                                    </div>
                                    <div className='text-secondary-color'>
                                        x{item.quantity}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='mt-8 grid gap-3'>
                <div className='flex justify-between items-center'>
                    <div className='text-secondary-color uppercase'>
                        total
                    </div>
                    <div className='font-bold text-xl'>
                        ${total}
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='text-secondary-color uppercase'>
                        shipping
                    </div>
                    <div className='font-bold text-xl'>
                        ${shippingPrice}
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='text-secondary-color uppercase'>
                        VAT(included)
                    </div>
                    <div className='font-bold text-xl'>
                        ${((total + shippingPrice) * 0.2).toFixed(2)}
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-8'>
                <div className='text-secondary-color uppercase'>
                    Grand Total
                </div>
                <div className='font-bold text-xl text-accent-color'>
                    ${total + shippingPrice}
                </div>
            </div>

            <div onClickCapture={payCheckout} className='mt-8 text-center text-xs py-3 px-8 bg-button-orange-color text-white uppercase tracking-wider cursor-pointer hover:bg-button-orange-hover-color'>
                continue & pay
            </div>
        </div>
        <Message isVisible={messageVisible} message='Checkout data invalid' closeMessage={() => {setMessageVisible(false)}}/>
        <FeedBack isVisible={feedbackVisible}/>
       </>
    )
}
