'use client'
import React from 'react'
import ToolBar from '@/components/ToolBar';
import ProductionHighlight from "@/components/ProductionHighlight";
import ProductItem from '../_components/ProductItem';
import NavList from '@/components/NavList';
import ErrorPage from 'next/error';
import { navList } from '@/lib/navList';
import { useCategoryProducts } from '../_hooks/useCategoryProducts';
export default function Page({ params }: { params: { slug: string }}) {
    const {slug} = params;
    const productsList = useCategoryProducts(slug)
    return (
        <main>
        <ToolBar />
        <div className='contaienr p-6 md:px-10 md:py-16 mx-auto bg-black'>
            <h1 className='text-3xl md:text-5xl font-bold text-center text-white uppercase '>
                {slug}
            </h1>
        </div>
        <div className='container p-6 py-16 md:px-10 md:py-24 lg:py-40 mx-auto grid gap-32'>
            {
                productsList.map((item, index) => {
                    return (
                        <ProductItem key={index} itemData={item}  even={(index + 1) % 2 === 0}/>
                    )
                })
            }
        </div>
        <NavList />
        <ProductionHighlight />
        <div className='h-20'></div>
        </main>
    )
}
