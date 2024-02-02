'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function GoBack() {
    const router = useRouter();
    return (
        <div className='container p-6 md:px-10 mx-auto'>
            <span className='text-secondary-color uppercase cursor-pointer' onClickCapture={() => {router.back()}}>go back</span>
        </div>
    )
}
