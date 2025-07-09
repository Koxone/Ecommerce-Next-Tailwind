'use client';
import { useEffect, useState } from 'react';
import ProductGrid from './ProductGrid';
import adaptShopifyProducts from '@/utils/adaptShopifyProducts';

export default function ProductGridShopify({ title = 'SHOP DROP' }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        const adapted = adaptShopifyProducts(data);
        setProducts(adapted);
      } catch (error) {
        console.error('Error loading Shopify products:', error);
      }
    };
    fetchProducts();
  }, []);

  return <ProductGrid title={title} products={products} />;
}
