'use client';

import Carousel from '@/components/carousels/Carousel';
import PromoSectionContainer from '@/components/containers/PromoSectionContainer';
import NewsLetter from '@/components/newsletter/NewsLetter';
import ProductGrid from '@/components/ProductGrid';
import ProductGridShopify from '@/components/ProductGridShopify';
import ProductList from '@/components/ProductList';
import { useMainContext } from '@/context/MainContext';

export default function HomePage() {
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
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Carousel Component */}
      {/* <ProductList /> */}
      <div>
        <Carousel
          items={heroItems}
          autoPlay={true}
          autoPlayInterval={6000}
          showDots={true}
          showArrows={true}
        />
      </div>

      <div className="flex w-full max-w-7xl flex-col gap-6 justify-self-center md:px-10">
        {/* ProductGrid - SHOP DROP 3 */}
        <div>
          <ProductGridShopify />
          {/* <ProductGrid /> */}
        </div>
        {/* Categories Sections */}
        <div>
          <PromoSectionContainer
            title="Categorias"
            subtitle="podria interesarte"
            type="categories"
          />
        </div>

        {/* Promotional Sections */}
        <div>
          <PromoSectionContainer
            title="Buscas algo mas?"
            subtitle="podria interesarte"
            type="promos"
          />
        </div>
      </div>

      <div>
        <NewsLetter />
      </div>
    </div>
  );
}
