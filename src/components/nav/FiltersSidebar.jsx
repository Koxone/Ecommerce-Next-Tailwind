'use client';

import React, { useState } from 'react';

export default function FiltersSidebar() {
  const [activeTab, setActiveTab] = useState('MUJERES');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const tabs = ['MUJERES', 'HOMBRES'];
  const sortOptions = [
    'Destacados',
    'Más vendidos',
    'Novedades',
    'Precio: Menor a mayor',
    'Precio: Mayor a menor',
  ];
  const genders = ['Hombres (6)', 'Unisex (6)'];
  const colors = [
    '#000000',
    '#5FB7FF',
    '#B06D6D',
    '#A3FF9E',
    '#B1B1B1',
    '#FF9D47',
    '#FFB4CF',
    '#DCBFFF',
    '#F4F4F4',
    '#FFF05C',
  ];
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL'];

  return (
    <div className="hidden md:flex">
      <aside className="sticky top-24 flex max-h-[calc(100vh-6rem)] w-full max-w-[190px] flex-col overflow-hidden xl:max-w-[300px]">
        {/* Tabs */}
        <div className="mb-4 flex overflow-hidden rounded-full border border-neutral-700/40">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full cursor-pointer py-2 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-neutral-700 text-white'
                  : 'text-neutral-400 hover:bg-neutral-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Buscar productos en esta página..."
            className="w-full rounded border border-neutral-700 bg-transparent p-2 text-sm text-neutral-300 placeholder:text-neutral-500 focus:outline-none"
          />
        </div>

        {/* Sort By */}
        <div className="mb-4 border-b border-neutral-700 pb-2">
          <h3 className="mb-2 text-sm font-semibold text-neutral-300">
            Ordenar por
          </h3>
          <div className="flex flex-col gap-1">
            {sortOptions.map((option) => (
              <button
                key={option}
                className="cursor-pointer text-left text-sm text-neutral-400 hover:text-neutral-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4 border-b border-neutral-700 pb-2">
          <h3 className="mb-2 text-sm font-semibold text-neutral-300">
            Género
          </h3>
          <div className="flex flex-col gap-1">
            {genders.map((gender) => (
              <button
                key={gender}
                className="cursor-pointer text-left text-sm text-neutral-400 capitalize hover:text-neutral-200"
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mb-4 border-b border-neutral-700 pb-2">
          <h3 className="mb-2 text-sm font-semibold text-neutral-300">
            Colores
          </h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedColor(idx)}
                className={`h-8 w-8 rounded border transition-colors ${
                  selectedColor === idx
                    ? 'border-white ring-2 ring-white'
                    : 'border-neutral-600'
                }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-4 border-b border-neutral-700 pb-2">
          <h3 className="mb-2 text-sm font-semibold text-neutral-300">
            Tallas
          </h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`min-w-[3rem] cursor-pointer rounded border border-neutral-600 px-2 py-1 text-xs text-neutral-300 uppercase transition-colors ${
                  selectedSize === size
                    ? 'bg-neutral-700'
                    : 'hover:bg-neutral-700'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
