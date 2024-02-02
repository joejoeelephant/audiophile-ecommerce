import React from 'react'
import ToolBar from '@/components/ToolBar';
import ProductionHighlight from "@/components/ProductionHighlight";
import ProductItem from './_components/ProductItem';
import { productListData } from './_lib/productListData';
import NavList from '@/components/NavList';
export default function page() {
  const headphonesList = productListData.headphones;
  return (
    <main>
      <ToolBar />
      <div className='contaienr p-6 md:px-10 md:py-16 mx-auto bg-black'>
        <h1 className='text-3xl md:text-5xl font-bold text-center text-white uppercase '>
          Headphones
        </h1>
      </div>
      <div className='container p-6 py-16 md:px-10 md:py-24 lg:py-40 mx-auto grid gap-32'>
        {
          headphonesList.map((item, index) => {
            return (
              <ProductItem key={index} itemData={item} even={(index + 1) % 2 === 0}/>
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
