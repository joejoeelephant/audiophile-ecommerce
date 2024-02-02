'use client'
import React, {useState, useRef, useEffect} from 'react'
import ResponsiveImage from '@/components/ResponsiveImage'
import { ResponsiveImageProps } from '@/lib/type'
import { useCartData } from '@/context/useCartDataContext'
import AddCartAnimation from './AddCartAnimation'
import { CartAnimationProps } from './AddCartAnimation'

type ProductHeaderProps = {
    id: number;
    name: string;
    isNew: boolean;
    description: string;
    price: number;
    productImageData: ResponsiveImageProps;
    cartImage: string
}

export default function ProductHeader({headerData}:{headerData:  ProductHeaderProps}) {
    const { name, description, price , productImageData, isNew, id, cartImage } = headerData
    const {dispatch} = useCartData()
    const [quantity, setQuantity] = useState(1)
    const productImageRef = useRef<HTMLDivElement | null>(null)
    const [cartAnimationData, setCartAnimationData] = useState<CartAnimationProps>({top:0, left:0, width:0, height:0, productImageData})
    const [animateTrigger, setAnimateTrigger] = useState(false)
    useEffect(() => {
        if(!productImageRef.current) return;
        const {top, left,width, height} = productImageRef.current.getBoundingClientRect();
        setCartAnimationData({top, left, width, height, productImageData})
        console.log(top, left, width, height)
    }, [setCartAnimationData, productImageData])

    const addquantity = () => {
        setQuantity(prev => prev + 1)
    }
    const minusquantity = () => {
        if(quantity < 2) return
        setQuantity(prev => prev - 1)
    }

    const animateActivate = () => {
        setAnimateTrigger(true)
        setTimeout(() => {
            setAnimateTrigger(false)
        }, 1000)
    }

    const throttle = (func: () => void, limit: number): (() => void) => {
        let inThrottle: boolean;
        return function(): void {
          if (!inThrottle) {
            func();
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
          }
        };
    };

    const addtoCart = throttle(() => {
        dispatch({type: "ADD_ITEM", payload: {
            productId: id,
            cartImage,
            price,
            quantity,
            name
        }})
        animateActivate()
    },1000)
    return (
        <div>
            <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-36">
                <div ref={productImageRef}>
                    <ResponsiveImage 
                        alt={productImageData.alt} 
                        mobile={productImageData.mobile} 
                        tablet={productImageData.tablet} 
                        desktop={productImageData.desktop}
                    />
                    <AddCartAnimation cartAnimationData={cartAnimationData} animateTrigger={animateTrigger}/>
                </div>
                <div className='grid gap-6 self-center md:items-center  lg:gap-8'>
                    <p className={`text-overline-size text-accent-color uppercase ${isNew ? '' : 'hidden'}`}>
                        new product  
                    </p>
                    <h1 className='text-3xl lg:text-5xl font-bold lg:w-8/12'>
                        {name}
                    </h1>
                    <p className='text-secondary-color lg:w-10/12'>
                        {description}
                    </p>
                    <div className='text-xl font-bold'>
                        $ {price.toLocaleString()}
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex w-5/12 bg-content-color font-bold'>
                            <div className='flex-1 flex justify-center items-center text-secondary-color cursor-pointer hover:text-accent-color' onClickCapture={minusquantity}>-</div>
                            <div className='flex-1 flex justify-center items-center'>{quantity}</div>
                            <div className='flex-1 flex justify-center items-center text-secondary-color cursor-pointer hover:text-accent-color' onClickCapture={addquantity}>+</div>
                        </div>
                        <div className='block text-xs py-3 px-8 bg-button-orange-color text-white uppercase tracking-wider cursor-pointer hover:bg-button-orange-hover-color' onClickCapture={addtoCart}>
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
