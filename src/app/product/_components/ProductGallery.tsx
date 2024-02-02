import React from 'react'
import ResponsiveImage from '@/components/ResponsiveImage'
import { ResponsiveImageProps } from '@/lib/type'
import './ProductGallery.css'
type GalleryProps = {
    images: ResponsiveImageProps[]
}
export default function ProductGallery({images}: GalleryProps) {
    return (
        <div className='mt-20'>
            <div className="container mx-auto p-6 md:px-10 product-gallery-container gap-6">
                <div className='rounded-lg overflow-hidden product-gallery-first '>
                    <ResponsiveImage alt={images[0].alt} mobile={images[0].mobile} tablet={images[0].mobile} desktop={images[0].desktop}/>
                </div>
                <div className='rounded-lg overflow-hidden product-gallery-second'>
                    <ResponsiveImage alt={images[1].alt} mobile={images[1].mobile} tablet={images[1].mobile} desktop={images[1].desktop}/>
                </div>
                <div className='rounded-lg overflow-hidden product-gallery-third'>
                    <ResponsiveImage alt={images[2].alt} mobile={images[2].mobile} tablet={images[2].mobile} desktop={images[2].desktop}/>
                </div>
            </div>
        </div>
    )
}
