'use client';

import { createContext, useContext, useState } from 'react';

// Crear el contexto
const MainContext = createContext();

export function MainContextProvider({ children }) {
  // Page Handlers
  const [currentPage, setCurrentPage] = useState('home');

  // Header Handlers
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const headerButtons = [
    { text: 'MUJER', value: 'women' },
    { text: 'HOMBRE', value: 'men' },
    { text: 'ACCESORIOS', value: 'accessories' },
    { text: 'NOVEDADES', value: 'new' },
    { text: 'OFERTAS', value: 'sale' },
  ];

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: 1,
    name: 'Pump Legging',
    description: "Women's Seamless Legging",
    fullDescription:
      'Engineered over two years. Glute-lifting technology that sets a new standard. These leggings feature our revolutionary seamless construction with targeted compression zones for optimal performance and comfort.',
    color: 'Emerald Green',
    price: 70,
    originalPrice: 85,
    images: [
      '/MainBanner.jpg',
      '/MainBanner2.jpg',
      '/MainBanner3.webp',
      '/Muestra.jpg',
    ],
    colors: [
      { name: 'Emerald Green', value: '#047857' },
      { name: 'Charcoal', value: '#1F2937' },
      { name: 'Purple', value: '#7C3AED' },
      { name: 'Navy', value: '#1E3A8A' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviewCount: 203,
    isNew: true,
    features: [
      'Seamless construction',
      'Glute-lifting technology',
      'Moisture-wicking fabric',
      'Four-way stretch',
      'High-waisted design',
    ],
    materials: '78% Nylon, 22% Spandex',
    care: 'Machine wash cold, hang dry',
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Sandy Bra',
      description: "Women's Seamless Scrunch Bra",
      color: 'Acai Berry',
      price: 48,
      image: '/promo1.jpg',
      colors: ['#8B5CF6', '#1F2937'],
      rating: 4.5,
      reviewCount: 128,
      category: 'women',
    },
    {
      id: 3,
      name: 'Pump Short',
      description: "Women's Seamless Short",
      color: 'Emerald Green',
      price: 50,
      image: '/promo2.webp',
      colors: ['#10B981', '#1F2937'],
      rating: 4.8,
      reviewCount: 95,
      isNew: true,
      category: 'women',
    },
    {
      id: 4,
      name: 'Push Tank',
      description: "Women's 2 in 1 Seamless Tank",
      color: 'Emerald Green',
      price: 46,
      image: '/promo3.webp',
      colors: ['#059669', '#DC2626'],
      rating: 4.3,
      reviewCount: 67,
      category: 'women',
    },
  ];

  const carouselItems = product.images.map((image, index) => (
    <div
      key={index}
      className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-800"
    >
      <img
        src={image}
        alt={`${product.name} view ${index + 1}`}
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  ));

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <MainContext.Provider
      value={{
        activeTab,
        isRevealed,
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
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = () => useContext(MainContext);
