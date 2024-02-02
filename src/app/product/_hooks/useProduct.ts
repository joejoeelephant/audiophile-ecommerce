import React, { useState, useEffect, useCallback } from 'react';
import { products } from '../_lib/productsData';
import { Product } from '@/lib/type';

export function useProduct(category: string, id: number): { data: Product | null, error: string, loading: boolean } {
  const [data, setData] = useState<Product | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true)

  const mockFetch = useCallback((): Promise<Product | undefined> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = products.find(item => ((item.id === id) && (item.category === category)));
          return resolve(result)
        }, 300)
      })
  },[category, id])

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await mockFetch()
      setLoading(false)
      result ? setData(result) : setError('Product not existed');
    }
    fetchProduct()
  }, [category, id, mockFetch]); // Dependencies array to re-run effect when category or id changes

  return { data, error, loading };
}
