'use client';

import productsData from '@/data/products/productsData';
import { createContext, useContext, useState } from 'react';

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

  // Auth Handlers
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Filter Handler
  const [activeTab, setActiveTab] = useState('women'); 
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false); 
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured'); 
  const filteredProducts = productsData.filter((product) => {
    if (activeTab !== 'all' && product.gender !== activeTab) return false;
    if (showSaleOnly && !product.isSale) return false;
    if (showNewOnly && !product.isNew) return false;
    if (product.price < minPrice || product.price > maxPrice) return false;
    if (product.rating < minRating) return false;
    return true;
  });
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return Number(b.isNew) - Number(a.isNew);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTabProduct, setActiveTabProduct] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  // Hero Section Handler
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
    images: [
      '/MainBanner.jpg',
      '/MainBanner2.jpg',
      '/MainBanner3.webp',
      '/Muestra.jpg',
    ],
  };
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

  // Promo Section Handler
  const shopData = {
    categories: [
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
    ],
    promos: [
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
    ],
  };

  return (
    <MainContext.Provider
      value={{
        // Page & Header
        currentPage,
        setCurrentPage,
        isMenuOpen,
        setIsMenuOpen,
        isCartOpen,
        setIsCartOpen,
        isRevealed,
        setIsRevealed,
        headerButtons,

        // Auth
        isLoggedIn,
        setIsLoggedIn,

        // Filters & Sorting
        activeTab,
        setActiveTab,
        showSaleOnly,
        setShowSaleOnly,
        showNewOnly,
        setShowNewOnly,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        minRating,
        setMinRating,
        sortBy,
        setSortBy,

        // Products
        filteredProducts,
        sortedProducts,

        // Product Details
        selectedSize,
        setSelectedSize,
        selectedColor,
        setSelectedColor,
        selectedColorIndex,
        setSelectedColorIndex,
        quantity,
        setQuantity,
        handleQuantityChange,
        activeTabProduct,
        setActiveTabProduct,
        isWishlisted,
        setIsWishlisted,

        // UI Data
        heroItems,
        carouselItems,
        shopData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = () => useContext(MainContext);
