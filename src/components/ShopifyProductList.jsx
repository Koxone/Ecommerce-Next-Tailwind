'use client';

import { useEffect, useState } from 'react';
import { getAllProducts } from '@/lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export default function ShopifyProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const shopifyProducts = await getAllProducts();
      console.log('Fetched Products:', shopifyProducts);
      setProducts(shopifyProducts);
    }
    loadProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.handle}`}
          className="group relative overflow-hidden rounded-lg border border-neutral-300/10 bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Product Image */}
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

          {/* Product Info */}
          <div className="p-4">
            {/* Title */}
            <h3 className="font-montserrat mb-1 text-lg font-semibold text-white transition-colors duration-200 group-hover:text-gray-300">
              {product.title}
            </h3>

            {/* Description */}
            <p className="font-inter mb-2 line-clamp-2 text-sm text-gray-400">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="font-poppins text-lg font-bold text-white">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
