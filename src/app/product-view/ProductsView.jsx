import { useState } from 'react';
import { FilterIcon, GridIcon, ListIcon } from '../../components/Icons';
import ProductCard from '../../components/cards/ProductCard';

const ProductsView = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const allProducts = [
    {
      id: 1,
      name: 'Sandy Bra',
      description: "Women's Seamless Scrunch Bra",
      price: 48,
      image: '/promo1.jpg',
      category: 'women',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Pump Short',
      description: "Women's Seamless Short",
      price: 50,
      image: '/promo1.jpg',
      category: 'women',
      rating: 4.6,
    },
    {
      id: 3,
      name: 'Push Tank',
      description: "Women's 2 in 1 Seamless Tank",
      price: 46,
      image: '/promo1.jpg',
      category: 'women',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Pump Legging',
      description: "Women's Seamless Legging",
      price: 70,
      image: '/promo1.jpg',
      category: 'women',
      rating: 4.9,
    },
    {
      id: 5,
      name: 'Alpha Tank',
      description: "Men's Performance Tank",
      price: 42,
      image: '/promo1.jpg',
      category: 'men',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Elite Shorts',
      description: "Men's Training Shorts",
      price: 55,
      image: '/promo1.jpg',
      category: 'men',
      rating: 4.4,
    },
    {
      id: 7,
      name: 'Power Hoodie',
      description: "Men's Performance Hoodie",
      price: 85,
      image: '/promo1.jpg',
      category: 'men',
      rating: 4.8,
    },
    {
      id: 8,
      name: 'Flex Joggers',
      description: "Men's Training Joggers",
      price: 65,
      image: '/promo1.jpg',
      category: 'men',
      rating: 4.6,
    },
  ];

  const filteredProducts = allProducts.filter((product) => {
    if (categoryFilter === 'all') return true;
    return product.category === categoryFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id - a.id;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-montserrat mb-2 text-3xl font-bold">
          All Products
        </h1>
        <p className="font-inter mb-6 text-gray-400">
          Discover our complete collection of premium athletic wear.
        </p>

        {/* Filters and controls */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 transition hover:bg-gray-700"
            >
              <FilterIcon size={18} />
              <span>Filters</span>
            </button>
            {['all', 'women', 'men'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`font-poppins rounded-lg px-4 py-2 transition ${
                  categoryFilter === cat
                    ? 'bg-white text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:ring-2 focus:ring-white focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            <div className="flex rounded-lg bg-gray-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`rounded p-2 ${
                  viewMode === 'grid'
                    ? 'bg-white text-gray-900'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <GridIcon size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`rounded p-2 ${
                  viewMode === 'list'
                    ? 'bg-white text-gray-900'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <ListIcon size={18} />
              </button>
            </div>
          </div>
        </div>

        <p className="font-inter mb-4 text-gray-400">
          Showing {sortedProducts.length} products
        </p>

        {/* Products grid */}
        <div
          className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}
        >
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewMode={viewMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
