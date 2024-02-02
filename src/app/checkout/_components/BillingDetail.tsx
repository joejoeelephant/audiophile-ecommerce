'use client'
import React from 'react'
import InputTextItem, {InputTextProps} from './InputTextItem'
import { validateEmail, validateName, validatePhone, validateRequired } from '@/utils/FormValidate.utils';

export default function BillingDetail() {
    const nameProp: InputTextProps = {
        label: "Name",
        field: 'name',
        validator: validateName
    }

    const emailProp: InputTextProps = {
        label: "Email Address",
        field: 'email',
        validator: validateEmail
    }

    const phoneProp: InputTextProps = {
        label: "Phone Number",
        field: 'phone',
        validator: validatePhone
    }

    return (
        <div>
            <p className='text-xs text-accent-color font-bold tracking-widest uppercase'>Billing details</p>
            <div className='mt-3 grid gap-6 md:grid-cols-2'>
                <InputTextItem field={nameProp.field} validator={nameProp.validator} label={nameProp.label}/>
                <InputTextItem field={emailProp.field} validator={emailProp.validator} label={emailProp.label}/>
                <InputTextItem field={phoneProp.field} validator={phoneProp.validator} label={phoneProp.label}/>
            </div>
        </div>
    )
}
