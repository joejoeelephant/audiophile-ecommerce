'use client'
import React, { useEffect } from 'react'
import InputTextItem, {InputTextProps} from './InputTextItem'
import {validateRequired } from '@/utils/FormValidate.utils';
import InputRadioGroup, {InputRadioGroupProps} from './InputRadioGroup';
import Image from 'next/image';
import { useForm } from '../_context/useFormContext';
export default function PaymentDetail() {
    const {state} = useForm()
    const payMethodsProp: InputRadioGroupProps = {
        label: "Payment Method",
        field: 'payMethod',
        options: [
            {
                label: "e-Money",
                value: 'eMoney'
            },
            {
                label: "Cash on Delivery",
                value: 'cash'
            }
        ]
    }

    const eMoneyNumberProp: InputTextProps = {
        label: 'e-Money Number',
        field: "eMoneyNumber",
        validator: validateRequired
    }

    const eMoneyPinProp: InputTextProps = {
        label: 'e-Money Pin',
        field: "eMoneyPin",
        validator: validateRequired
    }
    return (
        <div>
            <p className='text-xs text-accent-color font-bold tracking-widest uppercase'>payment details</p>
            <div>
                <InputRadioGroup field={payMethodsProp.field} label={payMethodsProp.label} options={payMethodsProp.options}/>
            </div>
            <div className={`${state.payMethod.value === 'eMoney' ? "" : "hidden"} mt-6 grid gap-6 md:grid-cols-2`}>
                <InputTextItem field={eMoneyNumberProp.field} validator={eMoneyNumberProp.validator} label={eMoneyNumberProp.label}/>
                <InputTextItem field={eMoneyPinProp.field} validator={eMoneyPinProp.validator} label={eMoneyPinProp.label}/>
            </div>
            <div className={`flex md:items-center gap-6 mt-6 ${state.payMethod.value === 'eMoney' ? "hidden" : ""}`}>
                <div className='w-12 flex-shrink-0'>
                    <Image src={'/images/checkout/icon-cash-on-delivery.svg'} alt='delivery' width={48} height={48} className='w-full'></Image>
                </div>
                <div className={`text-secondary-color `}>
                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. 
                    Just make sure your address is correct so that your order will not be cancelled.
                </div>
            </div>
        </div>
    )
}
