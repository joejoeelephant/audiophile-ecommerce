import React from 'react'
import ResponsiveImage from '@/components/ResponsiveImage'
import LinkButton from '@/components/LinkButton'
import { useAlsoLikeProducts } from '../_hooks/useAlsoLikeProdudts'
import './AlsoLike.css'

export default function AlsoLike() {
    const products = useAlsoLikeProducts()
    return (
        <div className='my-20 lg:my-36'>
            <div className="container mx-auto p-6 md:px-10">
                <h3 className='text-2xl font-bold text-center uppercase md:text-[32px]'>you may also like</h3>
                <div className='gap-12 md:gap-4 lg:gap-8 mt-14 lg:mt-20 also-like-container'>
                    {
                        products.map((item , index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        {
                                            item.sharedImageData && 
                                            <ResponsiveImage 
                                                alt={item.sharedImageData?.alt} 
                                                mobile={item.sharedImageData?.mobile}
                                                tablet={item.sharedImageData?.tablet}
                                                desktop={item.sharedImageData?.desktop}
                                            />
                                        }
                                    </div>
                                    <div className='flex flex-col items-center gap-6 pt-6'>
                                        <div className='text-2xl font-bold uppercase'>
                                            {`XX 99 Mark I`}
                                        </div>
                                        <LinkButton type='orange' href={`/product/${item.category}/${item.id}`} title='see product' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
