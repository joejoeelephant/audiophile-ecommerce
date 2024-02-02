'use client'
import React, { createContext, useReducer, useContext, useState, useMemo } from 'react';
import { CartItem } from '@/lib/type';


type CartData = CartItem[];

type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'PLUS_ITEM_QUANTITY'; payload:number}
    | {type: 'MINUX_ITEM_QUANTITY';payload:number }
    | { type: 'DELETE_ITEM'; payload: number } // assuming payload is productId
    | { type: 'CLEAR_CART' };

const cartReducer = (state: CartData, action: CartAction): CartData => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItem = state.find(item => item.productId === action.payload.productId);
            if (existingItem) {
                return state.map(item =>
                    item.productId === action.payload.productId
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
            } else {
                return [...state, action.payload];
            }
        case 'PLUS_ITEM_QUANTITY':
            return state.map(item =>
                item.productId === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        case 'MINUX_ITEM_QUANTITY':
            return state.map(item =>
                item.productId === action.payload
                    ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                    : item
            );
        case 'DELETE_ITEM':
            return state.filter(item => item.productId !== action.payload);
        case 'CLEAR_CART':
            return [];
        default:
            throw new Error('Unhandled action type');
    }
};

const CartDataContext = createContext<{
    cartData: CartData;
    total: number;
    dispatch: React.Dispatch<CartAction>;
    isCartBoxShow: boolean;
    toggleCartBox: () => void
} | undefined>(undefined);

export const CartDataProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [cartData, dispatch] = useReducer(cartReducer, []);
    const [isCartBoxShow, setIsCartBoxShow] = useState(false)
    const total = useMemo(() => {
        return cartData.reduce((before, item) => {
            return (item.price * item.quantity + before);
        }, 0);
    }, [cartData]);
    return (
        <CartDataContext.Provider value={{ cartData, dispatch, isCartBoxShow, total, toggleCartBox: () => {setIsCartBoxShow(prev => !prev)} }}>
            {children}
        </CartDataContext.Provider>
    );
};

export const useCartData = () => {
    const context = useContext(CartDataContext);
    if (!context) {
        throw new Error('useCartData must be used within a CartDataProvider');
    }
    return context;
};
