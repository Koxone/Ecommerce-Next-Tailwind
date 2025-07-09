'use client';

import { useState } from 'react';
import ProductCard from './cards/ProductCard';
import { useMainContext } from '@/context/MainContext';
import productsData from '@/data/products/productsData';
import { usePathname, useRouter } from 'next/navigation';

const ProductGrid = ({
  title = 'SHOP DROP 1',
  products = [],
  showTabs = true,
  showFilters = true,
  showViewToggle = true,
  className = '',
}) => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');

  const pathname = usePathname();

  const router = useRouter();

  const handleClick = () => {
    router.push('/product-view');
  };

  const {
    activeTab,
    heroItems,
    isRevealed,
    setIsRevealed,
    carouselItems,
    currentPage,
    handleQuantityChange,
    headerButtons,
    isCartOpen,
    isMenuOpen,
    isWishlisted,
    quantity,
    selectedColor,
    selectedSize,
    setActiveTab,
    setCurrentPage,
    setIsCartOpen,
    setIsMenuOpen,
    setIsWishlisted,
    setQuantity,
    setSelectedColor,
    setSelectedSize,
  } = useMainContext();

  const defaultProducts = productsData;

  const displayProducts = products.length > 0 ? products : defaultProducts;
  const filteredProducts = showTabs
    ? displayProducts.filter((product) => product.gender === activeTab)
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
    <section
      className={`animate-fade-in border border-white bg-gray-900 ${
        pathname === '/' ? 'pt-16' : 'py-1'
      }`}
    >
      <div className="mx-auto flex w-full flex-col gap-5 px-4 sm:px-0">
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
          <div className="animate-slide-in-left flex justify-center">
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
        </div>

        {/* Products Grid */}
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
