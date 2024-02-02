import React from 'react'
import { Category } from '@/lib/type'
import { products } from '../_lib/productsData'
import { ProductCategoryItem } from '../_lib/type'
export function useCategoryProducts(category:string): ProductCategoryItem[] {
    return products
            .filter(item => item.category === category)
            .map(item => {
                return {
                    id: item.id, 
                    new: item.new,
                    name: item.name,
                    category: item.category,
                    previewImageData: item.previewImageData, 
                    description: item.description
                }
            })
            .sort((obj1, obj2) =>  Number(obj2.new) - Number(obj1.new))
}
