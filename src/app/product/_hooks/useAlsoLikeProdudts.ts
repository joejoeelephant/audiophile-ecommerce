import React from 'react'
import { products } from '../_lib/productsData';
import { Product } from '@/lib/type';

function pickThreeUnique(arr: Product[]) {
    let result = [];
    let shuffled = arr.slice(); // Create a copy of the array
  
    // Fisher-Yates (Durstenfeld) shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  
    // Pick first three elements
    result = shuffled.slice(0, 3);
    return result;
  }

export function useAlsoLikeProducts(): Product[] {
    const arrData = products.filter(item => item.sharedImageData)
    return pickThreeUnique(arrData)
}
