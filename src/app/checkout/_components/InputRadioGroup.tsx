import React from 'react'
import { FormProps } from '../_lib/chekoutType';
import './InputRadioGroup.css'
import { useForm } from '../_context/useFormContext';

export type InputRadioGroupProps = {
    label: string;
    field: keyof FormProps;
    options: {label: string; value: FormProps['payMethod']['value']}[]
}

export default function InputRadioGroup({label, field, options} : InputRadioGroupProps) {
    const {state, dispatch} = useForm()
    const updateFieldValue = (value: string) => {
        dispatch({type: "UPDATE_FIELD_VALUE", payload: {field, value}})
    }
    return (
        <div className='mt-3 grid gap-6 md:grid-cols-2'>
            <div className='text-xs font-bold'>
                {label}
            </div>
            <div className='flow'>
                {
                    options.map((item, index) => {
                        return (
                            <label key={index} className='block input-radio-option cursor-pointer'>
                                <input type="radio" name={field} value={item.value} className='hidden' defaultChecked={state[field].value === item.value} onChangeCapture={(e) => {updateFieldValue(e.currentTarget.value)}}/>
                                <div className='flex items-center p-4 gap-4 border border-input-default-color input-radio-option-content rounded-lg font-bold'>
                                    <div className='border rounded-full border-input-default-color flex justify-center items-center w-6 h-6'>
                                        <div className='w-3 h-3 rounded-full bg-transparent input-radio-option-icon'></div>
                                    </div>
                                    <div>
                                        {item.label}
                                    </div>
                                </div>
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}
