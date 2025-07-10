'use client';

import { FilterIcon } from '../../components/Icons';
import ProductCard from '../../components/cards/ProductCard';
import FiltersSidebar from '@/components/nav/FiltersSidebar';
import { useMainContext } from '@/context/MainContext';

export default function ProductsView() {
  const { sortedProducts, activeTab, setActiveTab, sortBy, setSortBy } =
    useMainContext();

  return (
    <div className="grid min-h-screen overflow-x-hidden grid-cols-[auto_1fr] gap-4 bg-gray-900 px-4 py-8 text-white sm:px-6 lg:px-8">
      <FiltersSidebar />
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="font-montserrat mb-2 text-3xl font-bold">
          All Products
        </h1>
        <p className="font-inter mb-6 text-gray-400">
          Discover our complete collection of premium athletic wear.
        </p>

        {/* Filters and controls */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 transition hover:bg-gray-700 md:hidden">
              <FilterIcon size={18} />
              <span>Filters</span>
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`font-poppins cursor-pointer rounded-md px-6 py-2 font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-white text-gray-900'
                  : 'text-gray-300 border hover:bg-gray-700 hover:text-white'
              }`}
            >
              Todos
            </button>
            {['women', 'men'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-poppins cursor-pointer rounded-md px-6 py-2 font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white text-gray-900'
                    : 'text-gray-300 border hover:bg-gray-700 hover:text-white'
                }`}
              >
                {tab === 'women' ? 'Mujeres' : 'Hombres'}
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
          </div>
        </div>

        <p className="font-inter mb-4 text-gray-400">
          Showing {sortedProducts.length} products
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
