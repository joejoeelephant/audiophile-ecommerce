import React, { CSSProperties } from 'react'
import ResponsiveImage from '@/components/ResponsiveImage'
import { ResponsiveImageProps } from '@/lib/type'
import './AddCartAnimation.css'

export type CartAnimationProps = {
    productImageData: ResponsiveImageProps,
    top: number;
    left: number;
    height: number;
    width: number,
}

export default function AddCartAnimation({cartAnimationData, animateTrigger}: {cartAnimationData: CartAnimationProps, animateTrigger: boolean}) {
    const {productImageData, top, left, width, height} = cartAnimationData
    console.log(animateTrigger)
    return (
        <div className={`product-image-animate-wrapper ${animateTrigger ? 'product-image-animate-active' : ''}`} 
            style={
                {
                    "--top-position": `${top}px`, 
                    "--left-position": `${left}px`, 
                    "width": `${width / 2}px`,
                    "height": `${height / 2}px`
                } as CSSProperties}>
            <ResponsiveImage 
                alt={productImageData.alt} 
                mobile={productImageData.mobile} 
                tablet={productImageData.tablet} 
                desktop={productImageData.desktop}
            />
        </div>
    )
}
