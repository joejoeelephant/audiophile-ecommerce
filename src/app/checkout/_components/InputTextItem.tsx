import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from '../_context/useFormContext';
import { FormProps } from '../_lib/chekoutType';

export type InputTextProps = {
    label: string;
    field: keyof FormProps;
    placeholder?: string;
    validator: (value: string) => string | null;
};

export default function InputTextItem({ field, label, validator, placeholder }: InputTextProps) {
    const { state, dispatch } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [touched, setTouched] = useState(false);

    const updateField = (value: string) => {
        dispatch({ type: "UPDATE_FIELD_VALUE", payload: { field, value } });
        setTouched(true);
    };

    useEffect(() => {
        if (!touched || field === "payMethod") return;
        const errorMsg = validator(state[field].value);
        setErrorMessage(errorMsg || '');
        dispatch({ type: "UPDATE_FIELD_VALID", payload: { field, valid: !errorMsg } });
    }, [field, state, touched, validator, dispatch]);

    return (
        <div>
            <div className='flex justify-between text-xs font-bold'>
                <label>{label}</label>
                {errorMessage && <span className="text-red-500">{errorMessage}</span>}
            </div>
            <input
                onChange={(e) => updateField(e.target.value)}
                type="text"
                placeholder={placeholder || label}
                className={`border font-bold ${errorMessage ? 'border-input-alert-color' : 'border-input-default-color'} rounded-md block w-full px-5 py-3 mt-2`}
            />
        </div>
    );
}
