'use client';

import { useMainContext } from '@/context/MainContext';
import React from 'react';

function PromoSectionContainer({ title, subtitle, type }) {
  const { shopData } = useMainContext();

  return (
    <section className="flex w-full flex-col items-start justify-center">
      <div className="animate-fade-in mb-4 pl-5 text-left md:pl-0">
        <h2 className="text-lg font-bold tracking-wider text-neutral-400 uppercase">
          {subtitle}
        </h2>
        <h2 className="text-2xl font-bold tracking-wider text-white uppercase">
          {title}
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex w-full snap-x snap-mandatory justify-between gap-4 overflow-x-auto px-5 pb-4 md:px-0">
        {shopData[type]?.map((section, idx) => (
          <div
            key={idx}
            className="group relative h-[400px] min-w-[80%] snap-center overflow-hidden rounded-lg border border-neutral-600/40 sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%]"
          >
            <a href={section.href || '#'} className="absolute inset-0">
              <img
                src={section.image || section.img}
                alt={section.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </a>
            <div className="absolute bottom-0 left-0 flex flex-col gap-4 p-6">
              <h3 className="text-2xl font-bold text-white uppercase">
                {section.title}
              </h3>
              <a
                href={section.href || '#'}
                className="rounded-full bg-white px-10 py-2 text-center font-semibold text-black uppercase transition-all duration-300 ease-in-out hover:bg-neutral-300"
              >
                {section.buttonText || 'Shop Now'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromoSectionContainer;
