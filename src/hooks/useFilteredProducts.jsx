'use client';

import { useState, useEffect } from 'react';
import productsData from '@/data/products/productsData';

export default function useFilteredProducts() {
  const [activeTab, setActiveTab] = useState('women'); // 'women', 'men', 'all'
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', etc.

  const [filteredAndSortedProducts, setFilteredAndSortedProducts] =
    useState(productsData);

  useEffect(() => {
    const filtered = productsData.filter((product) => {
      if (activeTab !== 'all' && product.gender !== activeTab) return false;
      if (showSaleOnly && !product.isSale) return false;
      if (showNewOnly && !product.isNew) return false;
      if (product.price < minPrice || product.price > maxPrice) return false;
      if (product.rating < minRating) return false;
      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return Number(b.isNew) - Number(a.isNew);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredAndSortedProducts(sorted);
  }, [
    activeTab,
    showSaleOnly,
    showNewOnly,
    minPrice,
    maxPrice,
    minRating,
    sortBy,
  ]);

  return {
    filteredAndSortedProducts,

    // Filters & Sorting States
    activeTab,
    setActiveTab,
    showSaleOnly,
    setShowSaleOnly,
    showNewOnly,
    setShowNewOnly,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    minRating,
    setMinRating,
    sortBy,
    setSortBy,
  };
}
