'use client'
import React from 'react'
import InputTextItem, {InputTextProps} from './InputTextItem'
import {validateRequired } from '@/utils/FormValidate.utils';

export default function ShippingInfo() {
    const addressProp: InputTextProps = {
        label: "Your Address",
        field: 'address',
        validator: validateRequired
    }

    const zipCodeProp: InputTextProps = {
        label: "Zip Code",
        field: 'zipCode',
        validator: validateRequired
    }

    const cityProp: InputTextProps = {
        label: "City",
        field: 'city',
        validator: validateRequired
    }

    const countryProp: InputTextProps = {
        label: "Country",
        field: 'country',
        validator: validateRequired
    }
    return (
        <div>
            <p className='text-xs text-accent-color font-bold tracking-widest uppercase'>Shipping Info</p>
            <div className='mt-3'>
                <InputTextItem field={addressProp.field} validator={addressProp.validator} label={addressProp.label}/>
            </div>
            <div className='mt-3 grid gap-6 md:grid-cols-2'>
                <InputTextItem field={zipCodeProp.field} validator={zipCodeProp.validator} label={zipCodeProp.label}/>
                <InputTextItem field={cityProp.field} validator={cityProp.validator} label={cityProp.label}/>
                <InputTextItem field={countryProp.field} validator={countryProp.validator} label={countryProp.label}/>
            </div>

        </div>
    )
}
