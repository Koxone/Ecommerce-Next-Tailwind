'use client';

import { useState } from 'react';
import ProductCard from './cards/ProductCard';
import { FilterIcon, GridIcon, ListIcon } from './Icons';

const ProductGrid = ({
  title = 'SHOP DROP 1',
  products = [],
  showTabs = true,
  showFilters = true,
  showViewToggle = true,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState('women');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('featured');

  // Sample products if none provided
  const defaultProducts = [
    {
      id: 1,
      name: 'Sandy Bra',
      description: "Women's Seamless Scrunch Bra",
      color: 'Acai Berry',
      price: 48,
      image: '/Muestra.jpg',
      images: ['/Muestra.jpg', '/Muestra.jpg'],
      colors: ['#8B5CF6', '#1F2937', '#EF4444'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      rating: 4.5,
      reviewCount: 128,
      isNew: false,
      category: 'women',
    },
    {
      id: 2,
      name: 'Pump Short',
      description: "Women's Seamless Short",
      color: 'Acai Berry',
      price: 50,
      image: '/Muestra.jpg',
      images: ['/Muestra.jpg', '/Muestra.jpg'],
      colors: ['#10B981', '#1F2937'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      rating: 4.8,
      reviewCount: 95,
      isNew: true,
      category: 'women',
    },
    {
      id: 3,
      name: 'Push Tank',
      description: "Women's 2 in 1 Seamless Tank",
      color: 'Emerald Green',
      price: 46,
      image: '/Muestra.jpg',
      images: ['/Muestra.jpg', '/Muestra.jpg'],
      colors: ['#059669', '#DC2626', '#1F2937'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      rating: 4.3,
      reviewCount: 67,
      isNew: true,
      category: 'women',
    },
    {
      id: 4,
      name: 'Pump Legging',
      description: "Women's Seamless Legging",
      color: 'Emerald Green',
      price: 70,
      image: '/Muestra.jpg',
      images: ['/Muestra.jpg', '/Muestra.jpg'],
      colors: ['#047857', '#1F2937', '#7C3AED'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      rating: 4.7,
      reviewCount: 203,
      isNew: false,
      category: 'women',
    },
    {
      id: 5,
      name: 'Alpha Tank',
      description: "Men's Performance Tank",
      color: 'Charcoal',
      price: 42,
      image: '/Muestra.jpg',
      images: ['/Muestra.jpg', '/Muestra.jpg'],
      colors: ['#374151', '#1F2937', '#FFFFFF'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 4.4,
      reviewCount: 89,
      isNew: false,
      category: 'men',
    },
    {
      id: 6,
      name: 'Elite Shorts',
      description: "Men's Training Shorts",
      color: 'Navy',
      price: 55,
      image: '/Muestra.jpg',
      images: ['/Muestra.jpg', '/Muestra.jpg'],
      colors: ['#1E3A8A', '#1F2937', '#059669'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      rating: 4.6,
      reviewCount: 156,
      isNew: true,
      category: 'men',
    },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;
  const filteredProducts = showTabs
    ? displayProducts.filter((product) => product.category === activeTab)
    : displayProducts;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.isNew - a.isNew;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  return (
    <section className="animate-fade-in bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4 flex flex-col gap-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="animate-fade-in text-left">
            <h2 className="text-lg font-bold tracking-wider text-neutral-400">
              SHOP
            </h2>
            <h2 className="mb-4 text-2xl font-bold tracking-wider text-white">
              {title}
            </h2>
          </div>

          {/* Tabs */}
          {showTabs && (
            <div className="animate-slide-in-left mb- flex justify-center">
              <div className="inline-flex gap-4 rounded-lg bg-gray-800 p-1">
                <button
                  onClick={() => setActiveTab('women')}
                  className={`font-poppins cursor-pointer rounded-md px-6 py-2 font-medium transition-all duration-200 ${
                    activeTab === 'women'
                      ? 'bg-white text-gray-900'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Mujeres
                </button>
                <button
                  onClick={() => setActiveTab('men')}
                  className={`font-poppins cursor-pointer rounded-md px-6 py-2 font-medium transition-all duration-200 ${
                    activeTab === 'men'
                      ? 'bg-white text-gray-900'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Hombres
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div
          className={`animate-fade-in gap-6 ${
            viewMode === 'grid'
              ? 'flex snap-x snap-mandatory overflow-x-auto sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-4'
              : 'grid grid-cols-1'
          }`}
        >
          {sortedProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in flex items-center justify-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                product={product}
                className={viewMode === 'list' ? 'flex flex-row' : ''}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="animate-fade-in mt-12 text-center">
          <button className="hover-lift focus-ring font-poppins rounded-lg bg-white px-8 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
