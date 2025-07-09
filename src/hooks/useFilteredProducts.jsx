// useFilteredProducts.js
import { useState, useMemo } from 'react';

export default function useFilteredProducts(productsData) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      if (activeCategory !== 'all' && product.categorie !== activeCategory)
        return false;
      if (showSaleOnly && !product.isSale) return false;
      if (showNewOnly && !product.isNew) return false;
      if (product.price < minPrice || product.price > maxPrice) return false;
      if (product.rating < minRating) return false;
      return true;
    });
  }, [
    productsData,
    activeCategory,
    showSaleOnly,
    showNewOnly,
    minPrice,
    maxPrice,
    minRating,
  ]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
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
  }, [filteredProducts, sortBy]);

  return {
    products: sortedProducts,
    setActiveCategory,
    setShowSaleOnly,
    setShowNewOnly,
    setMinPrice,
    setMaxPrice,
    setMinRating,
    setSortBy,
  };
}
