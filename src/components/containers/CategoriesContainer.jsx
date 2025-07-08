// CategoriesContainer.jsx
// Sin librerías externas, React + Tailwind, listo para Vite
'use client';

import React from 'react';

const categories = [
  {
    title: 'Shirts',
    href: '/collections/mens-shirts',
    img: '//alphaleteathletics.com/cdn/shop/files/shirts_3042a37b-e9cd-42fc-8393-418253a68a40.jpg?crop=center&v=1750870312&width=2000',
  },
  {
    title: 'Shorts',
    href: '/collections/mens-shorts',
    img: '//alphaleteathletics.com/cdn/shop/files/shorts_dd6e174b-eff9-4b14-9453-b3a7c14da9ba.jpg?crop=center&v=1750870312&width=2000',
  },
  {
    title: 'Pants',
    href: '/collections/mens-joggers',
    img: '//alphaleteathletics.com/cdn/shop/files/pants_fe80ca86-aa8c-4654-b06f-6559d0f41c57.jpg?crop=center&v=1750870312&width=2000',
  },
];

export default function CategoriesContainer({ title }) {
  return (
    <section className="w-full md:px-8 py-4">
      <div className="animate-fade-in mb-4 text-left">
        <h2 className="text-lg font-bold tracking-wider text-neutral-400 uppercase">
          explora
        </h2>
        <h2 className="text-2xl font-bold tracking-wider text-white uppercase">
          {title}
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group relative h-[400px] min-w-[80%] snap-center overflow-hidden rounded-lg border border-neutral-600/40 sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%]"
          >
            <a href={cat.href} className="absolute inset-0">
              <img
                src={cat.img}
                alt={cat.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </a>
            <div className="absolute bottom-0 left-0 flex flex-col gap-4 p-6">
              <h3 className="text-2xl font-bold text-white uppercase">
                {cat.title}
              </h3>
              <a
                href={cat.href}
                className="rounded-full bg-white px-10 py-2 text-center font-semibold text-black uppercase transition-all duration-300 ease-in-out hover:bg-neutral-300"
              >
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
