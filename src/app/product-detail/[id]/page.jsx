'use client';

import ProductGrid from '@/components/ProductGrid';
import Carousel from '../../../components/carousels/Carousel';
import {
  HeartIcon,
  StarIcon,
  ShareIcon,
  PlusIcon,
  MinusIcon,
} from '../../../components/Icons';
import { useMainContext } from '../../../context/MainContext';
import productsData from '@/data/products/productsData';
import ExpandableText from '@/components/text/ExpandableText';
import PromoSectionContainer from '@/components/containers/PromoSectionContainer';

function ProductDetail({ params }) {
  const { id } = params;
  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-10 text-white">Producto no encontrado</div>;
  }

  const {
    activeTabProduct,
    setActiveTabProduct,
    selectedColorIndex,
    setSelectedColorIndex,
    isLoggedIn,
    setIsLoggedIn,
    heroItems,
    isRevealed,
    promoSections,
    categoryItems,
    setIsRevealed,
    currentPage,
    handleQuantityChange,
    headerButtons,
    isCartOpen,
    isMenuOpen,
    isWishlisted,
    quantity,
    relatedProducts,
    selectedColor,
    selectedSize,
    setCurrentPage,
    setIsCartOpen,
    setIsMenuOpen,
    setIsWishlisted,
    setQuantity,
    setSelectedColor,
    setSelectedSize,
  } = useMainContext();

  const currentColorName = product.colors[selectedColor]?.name;
  const carouselImages = product.images[currentColorName] || [];

  const carouselItems = carouselImages.map((src, i) => (
    <img
      key={i}
      src={src}
      alt={`${product.name} ${currentColorName} ${i + 1}`}
      className="h-full w-full object-cover"
    />
  ));

  const thumbnails = product.images[currentColorName] || [];

  return (
    <div className="grid w-full max-w-[1200px] grid-cols-1 gap-12 self-center p-8 md:grid-cols-[1fr_1fr] md:p-10">
      {/* Product Images */}
      <div className="animate-slide-in-left flex h-full max-h-[750px] max-w-[550px] flex-col items-center justify-between">
        <Carousel
          items={carouselItems}
          autoPlay={false}
          showDots={true}
          showArrows={true}
          className="mb-6"
        />

        {/* Miniatures */}
        <div className="grid grid-cols-4 gap-3 lg:flex lg:w-full lg:overflow-x-auto">
          {thumbnails.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg border-gray-600 bg-gray-800 transition-all duration-200 hover:border-gray-400 lg:min-w-[190px]"
            >
              <img
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="animate-slide-in-right max-w-[500px] rounded-lg text-white">
        {product.isNew && (
          <span className="mb-4 inline-block rounded bg-white px-3 py-1 text-xs font-semibold text-gray-900">
            NEW
          </span>
        )}
        <h1 className="font-montserrat mb-5 text-3xl font-bold md:text-4xl lg:text-5xl">
          {product.name}
        </h1>

        <p className="font-inter mb-4 max-h-[200px] overflow-auto text-base text-gray-300 md:text-lg">
          <ExpandableText text={`${product.description}`} />
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                size={16}
                filled={i < Math.floor(product.rating)}
                className="text-yellow-400"
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-2xl font-bold text-white md:text-3xl">
            ${product.price}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
              <span className="rounded bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                Save ${product.originalPrice - product.price}
              </span>
            </>
          )}
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-semibold md:text-base">
            Color: {currentColorName}
          </h3>
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`h-10 w-10 cursor-pointer rounded-full border-2 transition duration-200 hover:scale-110 ${
                  selectedColor === index
                    ? 'border-white'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-semibold md:text-base">Size</h3>
          <div className="grid grid-cols-5 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`cursor-pointer rounded-lg border px-3 py-2 text-sm font-medium transition duration-200 ${
                  selectedSize === size
                    ? 'border-white bg-white text-gray-900'
                    : 'border-gray-600 text-gray-300 hover:border-white hover:text-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <button className="mt-2 text-xs text-gray-400 underline hover:text-white">
            Size Guide
          </button>
        </div>

        {/* Quantity */}
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-semibold md:text-base">Quantity</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="cursor-pointer rounded bg-gray-700 p-2 hover:bg-gray-600"
            >
              <MinusIcon size={14} />
            </button>
            <span className="px-3 font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="cursor-pointer rounded bg-gray-700 p-2 hover:bg-gray-600"
            >
              <PlusIcon size={14} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <button className="flex-1 cursor-pointer rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-300 md:text-base">
            Add to Cart
          </button>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`cursor-pointer rounded-lg border p-3 transition ${
              isWishlisted
                ? 'border-red-500 bg-red-500 text-white'
                : 'border-gray-600 text-gray-300 hover:border-white hover:text-white'
            }`}
          >
            <HeartIcon size={18} filled={isWishlisted} />
          </button>
          <button className="cursor-pointer rounded-lg border border-gray-600 p-3 text-gray-300 transition hover:border-white hover:text-white">
            <ShareIcon size={18} />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-700 pt-6">
          <div className="mb-4 flex gap-4">
            {['description', 'features', 'care'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTabProduct(tab)}
                className={`cursor-pointer text-sm font-medium capitalize transition ${
                  activeTabProduct === tab
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-300">
            {activeTabProduct === 'description' && <p>{product.about}</p>}
            {activeTabProduct === 'features' && <p>Features coming soon.</p>}
            {activeTabProduct === 'care' && (
              <p>Care instructions coming soon.</p>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="col-span-1 flex flex-col gap-10 md:col-span-2">
        <ProductGrid title="BUSCAS ALGO MAS?" />
        <PromoSectionContainer type="categories" />
      </div>
    </div>
  );
}

export default ProductDetail;
