'use client';

import { useState } from 'react';
import ProductCard from './cards/ProductCard';
import productsData from '@/data/products/productsData';
import { usePathname, useRouter } from 'next/navigation';
import ProductFilters from '@/components/filters/ProductFilters';
import { useMainContext } from '@/context/MainContext';

const ProductGrid = ({ title = 'SHOP DROP 1', showTabs = true }) => {
  const [viewMode, setViewMode] = useState('grid');
  const pathname = usePathname();
  const router = useRouter();
  const { activeTab, setActiveTab, sortBy, setSortBy } = useMainContext();

  const handleClick = () => {
    router.push('/product-view');
  };

  // Siempre usa productsData
  const filteredProducts = showTabs
    ? activeTab === 'all'
      ? productsData
      : productsData.filter((product) => product.gender === activeTab)
    : productsData;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return Number(b.isNew) - Number(a.isNew);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  return (
    <section
      className={`animate-fade-in bg-gray-900 ${
        pathname === '/' ? 'pt-16' : 'py-1'
      }`}
    >
      <div className="mx-auto flex w-full flex-col gap-5 px-4 sm:px-0">
        {/* Header */}
        <div className="flex flex-col items-start">
          <div className="animate-fade-in text-left">
            <h2 className="text-lg font-bold tracking-wider text-neutral-400">
              SHOP
            </h2>
            <h2 className="mb-4 text-2xl font-bold tracking-wider text-white">
              {title}
            </h2>
          </div>

          {/* Filters */}
          <div className="animate-slide-in-left w-full">
            <ProductFilters
              activeCategory={activeTab}
              setActiveCategory={setActiveTab}
              sortBy={sortBy}
              setSortBy={setSortBy}
              categories={['women', 'men']}
            />
          </div>
        </div>

        {/* Product Cards */}
        <div
          className={`animate-fade-in gap-6 ${
            viewMode === 'grid'
              ? 'flex w-full snap-x snap-mandatory overflow-x-auto'
              : 'grid grid-cols-1'
          }`}
        >
          {sortedProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in flex items-center justify-center"
              style={{ animationDelay: `${index * 0.05}s` }}
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
          <button
            onClick={handleClick}
            className="hover-lift focus-ring font-poppins cursor-pointer rounded-lg bg-white px-8 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-400"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
