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
  const [activeTab, setActiveTab] = useState('women');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const heroItems = [
    <div
      key="hero1"
      className="relative flex h-[60vh] items-center justify-center bg-cover bg-center text-center md:h-[70vh]"
      style={{ backgroundImage: "url('/MainBanner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          10% DE DESCUENTO
        </h1>
        <p className="font-inter mb-6 text-lg text-white md:text-xl lg:text-2xl">
          ¡Nuestra nueva línea de ropa ha llegado! ¡Descuentos en toda la
          tienda!
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="hover-lift focus-ring font-poppins cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
            MUJERES
          </button>
          <button className="hover-lift focus-ring font-poppins cursor-pointer rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-gray-900 md:px-8 md:py-4">
            HOMBRES
          </button>
        </div>
      </div>
    </div>,
    <div
      key="hero2"
      className="relative flex h-[60vh] items-center justify-center bg-cover bg-center text-center md:h-[70vh]"
      style={{ backgroundImage: "url('/MainBanner2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          PRESENTAMOS PUMP
        </h1>
        <p className="font-inter mb-6 text-lg text-white md:text-xl lg:text-2xl">
          Desarrollado durante dos años. Tecnología realzadora de glúteos que
          marca un nuevo estándar.
        </p>
        <button className="hover-lift focus-ring font-poppins cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
          MUJERES
        </button>
      </div>
    </div>,
    <div
      key="hero3"
      className="relative flex h-[60vh] items-center justify-center bg-cover bg-center text-center md:h-[70vh]"
      style={{ backgroundImage: "url('/MainBanner3.webp')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          ESENCIALES DE VERANO
        </h1>
        <p className="font-inter mb-6 text-lg text-white md:text-xl lg:text-2xl">
          Esenciales básicos hechos para acompañarte en cada temporada.
        </p>
        <button className="hover-lift focus-ring font-poppins cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
          COMPRA AHORA
        </button>
      </div>
    </div>,
  ];

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

  const promoSections = [
    {
      title: 'PARA ELLA',
      subtitle: 'Ropa que no solo es comoda, se ve bien!',
      image: '/promo1.jpg',
      buttonText: 'COMPRA YA',
    },
    {
      title: 'PARA EL',
      subtitle: 'Sientete seguro en cualquier momento',
      image: '/promo4.jpg',
      buttonText: 'COMPRA YA',
    },
    {
      title: 'ACCESORIOS',
      subtitle: 'No importa la ocasion, lo tenemos!',
      image: '/promo5.jpg',
      buttonText: 'COMPRA YA',
    },
  ];

  const categoryItems = [
    <div
      key="cat1"
      className="relative flex h-[50vh] items-center justify-center bg-gradient-to-r from-pink-400 to-pink-600 text-center md:h-[60vh]"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 px-4">
        <h2 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          FOR HER
        </h2>
        <button className="hover-lift focus-ring font-poppins cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
          SHOP WOMEN
        </button>
      </div>
    </div>,
    <div
      key="cat2"
      className="relative flex h-[50vh] items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-center md:h-[60vh]"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 px-4">
        <h2 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          FOR HIM
        </h2>
        <button className="hover-lift focus-ring font-poppins cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
          SHOP MEN
        </button>
      </div>
    </div>,
    <div
      key="cat3"
      className="relative flex h-[50vh] items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-center md:h-[60vh]"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 px-4">
        <h2 className="font-montserrat mb-4 text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-8xl">
          ACCESSORIES
        </h2>
        <button className="hover-lift focus-ring font-poppins cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 md:px-8 md:py-4">
          SHOP ACCESSORIES
        </button>
      </div>
    </div>,
  ];

  return (
    <MainContext.Provider
      value={{
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
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = () => useContext(MainContext);
