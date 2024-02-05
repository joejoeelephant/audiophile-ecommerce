'use client'
import React from 'react'
import ToolBar from '@/components/ToolBar';
import ProductionHighlight from "@/components/ProductionHighlight";
import NavList from '@/components/NavList';
import GoBack from '../_components/GoBack';
import ProductHeader from '../_components/ProductHeader';
import ProductFeatures from '../_components/ProductFeatures';
import ProductGallery from '../_components/ProductGallery';
import AlsoLike from '../_components/AlsoLike';
import { useProduct } from '../_hooks/useProduct';
import { useRouter } from 'next/navigation';
import LoadingScreen from '../_components/LoadingScreen';
import ErrorScreen from '../_components/ErrorScreen';
export default function Page({ params }: { params: { slug: string[] } }) {
    const [category, id] = params.slug
    const router = useRouter()
    const {data: productData, error, loading} = useProduct(category, Number(id));
    if(loading) {
        return (
            <LoadingScreen />
        )
    }
    if(!productData) {
        return (
            <ErrorScreen />
        )
    }
    const headerData = {
        id: productData.id,
        name: productData.name,
        isNew: productData.new,
        description: productData.description,
        price: productData.price,
        productImageData: productData.productImageData,
        cartImage: productData.cartImage
    }
    return (
        <main>
            <ToolBar />
            <GoBack />
            <ProductHeader headerData={headerData}/>
            <ProductFeatures features={productData.features} boxItems={productData.boxItems}/>
            <ProductGallery images={productData.galleries}/>
            <AlsoLike />
            <NavList />
            <ProductionHighlight />
            <div className='h-20'></div>
        </main>
    )
}
