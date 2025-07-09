'use client';

import { FilterIcon } from '../Icons';

export default function ProductFilters({
  activeCategory,
  setActiveCategory,
  sortBy,
  setSortBy,
  categories = ['women', 'men'],
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 transition hover:bg-gray-700 md:hidden">
          <FilterIcon size={18} />
          <span>Filters</span>
        </button>

        <button
          onClick={() => setActiveCategory('all')}
          className={`font-poppins cursor-pointer rounded-md px-6 py-2 font-medium transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-white text-gray-900'
              : 'border text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
        >
          Todos
        </button>

        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveCategory(tab)}
            className={`font-poppins cursor-pointer rounded-md px-6 py-2 font-medium transition-all duration-200 ${
              activeCategory === tab
                ? 'bg-white text-gray-900'
                : 'border text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {tab === 'women' ? 'Mujeres' : tab === 'men' ? 'Hombres' : tab}
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
  );
}

// Importar el hook en tu componente de página:
// import useFilteredProducts from '@/hooks/useFilteredProducts';
// import productsData from '@/data/products/productsData';

// -------------------------------------------------------------------
// Inicializar el hook:
// const {
//   products,
//   setActiveCategory,
//   setSortBy,
//   // otros setters si deseas
// } = useFilteredProducts(productsData);
// -------------------------------------------------------------------

//  Importar y usar ProductFilters:
// import ProductFilters from '@/components/filters/ProductFilters';
// -------------------------------------------------------------------

// Insertar el componente visual con los filtros
// {
/* <ProductFilters
  activeCategory={activeCategory}
  setActiveCategory={setActiveCategory}
  sortBy={sortBy}
  setSortBy={setSortBy}
  categories={['women', 'men', 'hoodies&jackets']} // o las categorías que quieras mostrar
/> */
// }

// Mostrar productos filtrados
// En tu componente, ya tienes:

// const { products } = useFilteredProducts(productsData);
// ✅ Este products ya contiene todos los productos filtrados y ordenados automáticamente según la categoría y orden elegidos en ProductFilters.

// ✅ Para renderizarlos:

// {products.map(product => (
//   <ProductCard key={product.id} product={product} />
// ))}
