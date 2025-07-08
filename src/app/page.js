'use client';

import Carousel from '@/components/carousels/Carousel';
import CategoriesContainer from '@/components/containers/CategoriesContainer';
import PromotionalContainer from '@/components/containers/PromotionalContainer';
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

      {/* ProductGrid - SHOP DROP 3 */}
      <ScrollReveal>
        <ProductGrid />
      </ScrollReveal>

      <div className="flex w-full max-w-7xl flex-col justify-self-center md:px-10 gap-6">
        {/* Categories Sections */}
        <ScrollReveal>
          <CategoriesContainer title="CATEGORIAS" />
        </ScrollReveal>

        {/* Promotional Sections */}
        <ScrollReveal>
          <PromotionalContainer title="NOVEDADES" />
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <NewsLetter />
      </ScrollReveal>
    </div>
  );
}
