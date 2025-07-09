'use client';

import Carousel from '@/components/carousels/Carousel';
import PromoSectionContainer from '@/components/containers/PromoSectionContainer';
import NewsLetter from '@/components/newsletter/NewsLetter';
import ProductGrid from '@/components/ProductGrid';
import { useMainContext } from '@/context/MainContext';
import ScrollReveal from '@/utils/ScrollReveal';

export default function HomePage() {
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
    <div className="min-h-screen bg-gray-900">
      {/* Hero Carousel Component */}
      <ScrollReveal>
        <Carousel
          items={heroItems}
          autoPlay={true}
          autoPlayInterval={6000}
          showDots={true}
          showArrows={true}
        />
      </ScrollReveal>

      <div className="flex w-full max-w-7xl flex-col gap-6 justify-self-center md:px-10">
        {/* ProductGrid - SHOP DROP 3 */}
        <ScrollReveal>
          <ProductGrid />
        </ScrollReveal>
        {/* Categories Sections */}
        <ScrollReveal>
          <PromoSectionContainer type="categories" />
        </ScrollReveal>

        {/* Promotional Sections */}
        <ScrollReveal>
          <PromoSectionContainer type="promos" />
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <NewsLetter />
      </ScrollReveal>
    </div>
  );
}
