'use client'
import React, { createContext, useContext, useReducer } from 'react';
import { FormProps } from '../_lib/chekoutType';

type FormState = FormProps; // Your FormProps here
type FormAction = 
  | { type: 'UPDATE_FIELD_VALUE'; payload: { field: keyof FormState; value: string } }
  | { type: 'UPDATE_FIELD_VALID'; payload: { field: keyof FormState; valid: boolean } }
  | { type: 'RESET_FORM' };


const initialState: FormProps = { 
  name: {value: "", valid: false}, 
  email: {value: "", valid: false}, 
  phone: {value: "", valid: false}, 
  address: {value: "", valid: false}, 
  zipCode: {value: "", valid: false}, 
  country: {value: "", valid: false}, 
  city: {value: "", valid: false},
  payMethod: {value: 'eMoney', valid: true},
  eMoneyNumber: {value: "", valid: false},
  eMoneyPin: {value: "", valid: false}
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'UPDATE_FIELD_VALUE':
      return {
        ...state,
        [action.payload.field]: { 
          ...state[action.payload.field], 
          value: action.payload.value 
        }
      };
    case 'UPDATE_FIELD_VALID':
      if (state[action.payload.field].valid !== action.payload.valid) {
        return {
          ...state,
          [action.payload.field]: { ...state[action.payload.field], valid: action.payload.valid }
        };
      }
      return state;
    case 'RESET_FORM':
      return initialState;
    default:
      throw new Error('Unhandled action type');
  }
}
  
  
const FormContext = createContext<{ state: FormState; dispatch: React.Dispatch<FormAction> } | undefined>(undefined);



export const FormProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
};

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
      throw new Error('useForm must be used within a FormProvider');
    }
    return context;
};
