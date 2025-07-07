'use client';

import { useMainContext } from '@/context/MainContext';
import React, { useEffect } from 'react';

const MobileMenu = () => {
  const closeMenu = () => setIsMenuOpen(false);
  const {
    isRevealed,
    setIsRevealed,
    headerButtons,
    isMenuOpen,
    setCurrentPage,
    setIsMenuOpen,
  } = useMainContext();

  return (
    <div className="pointer-events-none fixed top-0 z-50 flex h-full w-full lg:hidden">
      <div
        className={`pointer-events-auto flex h-full w-full transform flex-col border-l border-neutral-700 bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between border-b border-gray-700 p-4">
          <button className="flex max-w-[120px] cursor-pointer items-center md:h-[37px] md:w-[154px]">
            <p className="flex items-center text-[30px] font-extrabold md:text-5xl">
              <span className="bg-red-500 px-1 text-gray-900">FWS</span>
              <span className="-ml-1.5 font-bold text-white">HOP</span>
            </p>
          </button>
          <button
            onClick={closeMenu}
            className="cursor-pointer text-gray-400 hover:text-white"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-1 flex-col space-y-2 overflow-hidden p-4">
          {headerButtons.map(({ text, value }, index) => (
            <div
              key={value}
              onClick={() => {
                setIsRevealed((prev) => ({
                  ...prev,
                  [value]: !prev[value],
                }));
                setCurrentPage(value);
              }}
              className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded bg-gray-800 p-10 text-2xl text-white transition duration-300 hover:bg-gray-700"
            >
              {/* Front side */}
              <div
                className={`absolute inset-0 z-10 flex items-center justify-center p-4 transition-transform duration-500 ${
                  isRevealed?.[value]
                    ? '-translate-x-full'
                    : 'group-hover:-translate-x-full'
                }`}
              >
                <h2 className="text-center text-2xl font-bold text-white">
                  {text}
                </h2>
              </div>

              {/* Back side with image */}
              <div
                onClick={() => {
                  closeMenu();
                }}
                className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
                  isRevealed?.[value]
                    ? 'translate-x-0'
                    : 'translate-x-full group-hover:translate-x-0'
                }`}
              >
                <img
                  src={`/MenuButton${index + 1}.png`}
                  alt={text}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <h2 className="absolute z-10 text-center text-2xl font-bold text-white">
                  {text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
