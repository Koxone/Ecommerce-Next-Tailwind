'use client';

import Carousel from '@/components/carousels/Carousel';
import PromotionalContainer from '@/components/containers/PromotionalContainer';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
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
      {/* Header Component */}
      <ScrollReveal>
        <Header />
      </ScrollReveal>

      {/* Carousel Component */}
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

      {/* Promotional Sections */}
      <ScrollReveal>
        <PromotionalContainer />
      </ScrollReveal>

      {/* Footer Component */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
