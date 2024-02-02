'use client'
import React from 'react'
import ToolBar from '@/components/ToolBar';
import GoBack from '../product/_components/GoBack';
import BillingDetail from './_components/BillingDetail';
import ShippingInfo from './_components/ShippingInfo';
import PaymentDetail from './_components/PaymentDetail';
import { FormProvider, useForm } from './_context/useFormContext'
import CartSummary from './_components/CartSummary';
import { useCartData } from '@/context/useCartDataContext';
import ErrorScreen from './_components/ErrorScreen';
export default function Page() {
  const {cartData} = useCartData()
  if(cartData.length < 1) {
    return ( <ErrorScreen />  )
  }
  return (
    <main className='bg-content-color'>
        <ToolBar />
        <GoBack />
        <FormProvider>
          <div className='container p-6 pt-0 md:px-10 mx-auto bg-content-color grid grid-cols-1 lg:grid-cols-4 gap-6'>
              <div className='grid gap-6 lg:col-span-3 bg-white p-6 lg:p-10 rounded-lg'>
                  <h1 className='font-bold text-3xl uppercase'>checkout</h1>
                    <BillingDetail />
                    <ShippingInfo />
                    <PaymentDetail />
              </div>
              <CartSummary />
          </div>
        </FormProvider>
        <div className='h-20'></div>
    </main>
  )
}
