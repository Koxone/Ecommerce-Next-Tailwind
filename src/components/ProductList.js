'use client';

import { useEffect, useState } from 'react';
import ProductCard from './cards/ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();

        const colorMap = {
          black: '#000000',
          white: '#FFFFFF',
          blue: '#0000FF',
          red: '#FF0000',
          green: '#008000',
          navy: '#000080',
          purple: '#800080',
          dessert: '#C2B280',
        };

        const adaptedProducts = data.map((product, index) => {
          const variant = product.variants.edges[0].node;
          const price = parseFloat(variant.price.amount);
          const compareAtPrice = variant.compareAtPrice?.amount
            ? parseFloat(variant.compareAtPrice.amount)
            : null;

          const discount =
            compareAtPrice && compareAtPrice > price
              ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
              : 0;

          const isSale = compareAtPrice && compareAtPrice > price;

          const cardText = product.description
            ? product.description.substring(0, 120) + '...'
            : '';

          const colorsOption = product.options.find(
            (opt) => opt.name.toLowerCase() === 'color'
          );

          const colors = colorsOption
            ? colorsOption.values.map((value) => ({
                name: value,
                value: colorMap[value.toLowerCase()] || '#CCCCCC',
              }))
            : [];

          const sizesOption = product.options.find(
            (opt) =>
              opt.name.toLowerCase() === 'size' ||
              opt.name.toLowerCase() === 'talla'
          );

          const sizes = sizesOption ? sizesOption.values : [];

          const images = {};
          if (colors.length > 0) {
            colors.forEach((color, idx) => {
              images[color.name] = product.images.edges[idx]
                ? [product.images.edges[idx].node.url]
                : [product.images.edges[0].node.url];
            });
          } else {
            images['Default'] = product.images.edges.map((img) => img.node.url);
          }

          const gender = product.gender2?.value
            ? JSON.parse(product.gender2.value)[0]?.toLowerCase() || ''
            : '';

          const categories = product.categories?.value
            ? JSON.parse(product.categories.value)
            : [];

          return {
            id: index + 1, // 🔹 ID consecutivo: 1, 2, 3, 4...
            name: product.title,
            cardText,
            description: product.description,
            about: product.about?.value || '',
            color: colors[0]?.name || '',
            price,
            images,
            colors,
            sizes,
            rating: 4.5,
            reviewCount: 128,
            isNew: product.is_new?.value === 'true',
            isSale: isSale || product.is_sale?.value === 'true',
            discount,
            gender,
            category: categories,
          };
        });

        setProducts(adaptedProducts);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  if (products.length === 0) {
    return <p className="text-center text-white">Cargando productos...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{ ...product, customId: index + 1 }}
        />
      ))}
    </div>
  );
}
