import React from 'react'
import Image from 'next/image'
import { ResponsiveImageProps } from '@/lib/type'

export default function ResponsiveImage({mobile, tablet, desktop, alt}: ResponsiveImageProps) {
    return (
        <>
            <Image src={mobile.src} alt={alt} width={mobile.width} height={mobile.height} className='w-full md:hidden'></Image>
            <Image src={tablet.src} alt={alt} width={tablet.width} height={tablet.height} className='w-full hidden md:block lg:hidden'></Image>
            <Image src={desktop.src} alt={alt} width={desktop.width} height={desktop.height}  className='w-full hidden lg:block'></Image>
        </>
    )
}
