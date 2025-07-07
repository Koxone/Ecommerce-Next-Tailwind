'use client';

import { useState } from 'react';
import generalTextData from '@/data/general-text/generalTextData.js';
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuIcon,
  CloseIcon,
} from '../Icons';
import HeaderButton from '../buttons/HeaderButton';
import Cart from '../cart/Cart';
import { useMainContext } from '@/context/MainContext';
import MobileMenu from '../nav/MobileMenu';

const Header = () => {
  const {
    activeTab,
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
    <>
      {/* Top Banner */}
      <div className="bg-gray-800 py-2 text-center text-xs text-gray-300 md:py-2 md:text-sm">
        {generalTextData.header.banner}
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-gray-700 bg-gray-900">
        <div className="grid h-16 w-full grid-cols-[auto_1fr_auto] items-center justify-between pl-5">
          {/* Logo */}
          <button className="flex max-w-[120px] cursor-pointer items-center md:h-[37px] md:w-[154px]">
            <p className="flex items-center text-[30px] font-extrabold md:text-5xl">
              <span className="bg-red-500 px-1 text-gray-900">FWS</span>
              <span className="-ml-1.5 font-bold text-white">HOP</span>
            </p>
          </button>

          {/* Desktop Navigation Buttons */}
          <nav className="hidden justify-center space-x-8 lg:flex">
            {headerButtons.map(({ text, value }) => (
              <HeaderButton
                key={value}
                text={text}
                onClick={() => setCurrentPage(value)}
              />
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center justify-end space-x-4">
            <button className="cursor-pointer p-2 text-gray-300 hover:text-white">
              <SearchIcon size={20} />
            </button>
            <button className="cursor-pointer p-2 text-gray-300 hover:text-white">
              <UserIcon size={20} />
            </button>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative cursor-pointer p-2 text-gray-300 hover:text-white"
            >
              <ShoppingBagIcon size={20} />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-gray-900">
                0
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-white lg:hidden"
            >
              {isMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>

        {/* Cart Component */}
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

        {/* Mobile Navegation */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          headerButtons={headerButtons}
          setCurrentPage={setCurrentPage}
        />
      </header>
    </>
  );
};

export default Header;
