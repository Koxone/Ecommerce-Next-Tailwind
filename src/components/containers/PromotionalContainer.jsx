import { useMainContext } from '@/context/MainContext';
import React from 'react';

function PromotionalContainer({ title }) {
  const {
    activeTab,
    heroItems,
    isRevealed,
    promoSections,
    categoryItems,
    setIsRevealed,
    carouselItems,
    currentPage,
    handleQuantityChange,
    headerButtons,
    isCartOpen,
    isMenuOpen,
    isWishlisted,
    product,
    quantity,
    relatedProducts,
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
  return (
    <section className="bg-gray-900 px-8 pb-16">
      <div className="animate-fade-in text-left">
        <h2 className="text-lg uppercase font-bold tracking-wider text-neutral-400">
          explora
        </h2>
        <h2 className="mb-4 text-2xl font-bold tracking-wider text-white">
          {title}
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {promoSections.map((section, index) => (
            <div
              key={index}
              className="group animate-scale-in hover-lift relative overflow-hidden rounded-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="relative flex h-96 cursor-pointer items-center justify-center border border-neutral-600/40 bg-cover bg-center text-center transition-all duration-500 ease-in-out hover:scale-110"
                style={{ backgroundImage: `url(${section.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/50"></div>
                <div className="relative z-10 p-8">
                  <h3 className="font-montserrat mb-4 text-5xl font-bold tracking-wider text-white md:text-3xl">
                    {section.title}
                  </h3>
                  <p className="font-inter mb-6 text-base text-white md:text-lg">
                    {section.subtitle}
                  </p>
                  <button className="hover-scale focus-ring font-poppins cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100">
                    {section.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromotionalContainer;
