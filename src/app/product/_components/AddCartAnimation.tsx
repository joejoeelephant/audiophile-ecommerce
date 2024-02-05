import React, { CSSProperties, useEffect } from 'react'
import ResponsiveImage from '@/components/ResponsiveImage'
import { ResponsiveImageProps } from '@/lib/type'
import { useWindowScrollHeight } from '@/hooks/useWindowScrollHeight'
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
    const windowScrollHeight = useWindowScrollHeight()
    
    return (
        <div className={`product-image-animate-wrapper ${animateTrigger ? 'product-image-animate-active' : ''}`} 
            style={
                {
                    "--top-position": `${windowScrollHeight + top}px`, 
                    "--left-position": `${left}px`, 
                    "--top-end-position": `${windowScrollHeight + 32}px`,
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
