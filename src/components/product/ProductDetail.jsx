import Carousel from '../carousels/Carousel';
import {
  HeartIcon,
  StarIcon,
  ShareIcon,
  PlusIcon,
  MinusIcon,
} from '../../components/Icons';
import { useMainContext } from '../../context/MainContext';

function ProductDetail() {
  const {
    // relatedProducts,
    product,
    carouselItems,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    quantity,
    // setQuantity,
    activeTab,
    setActiveTab,
    isWishlisted,
    handleQuantityChange,
    setIsWishlisted,
  } = useMainContext();
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      {/* Product Images */}
      <div className="animate-slide-in-left">
        <Carousel
          items={carouselItems}
          autoPlay={false}
          showDots={true}
          showArrows={true}
          className="mb-6"
        />
        {/* Miniatures */}
        <div className="grid grid-cols-4 gap-3">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`aspect-square overflow-hidden rounded-lg border-2 bg-gray-800 transition-all duration-200 hover:scale-105 ${
                selectedColor === index
                  ? 'border-white'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <img
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="animate-slide-in-right">
        {product.isNew && (
          <span className="mb-4 inline-block rounded bg-white px-3 py-1 text-xs font-semibold text-gray-900">
            NEW
          </span>
        )}
        <h1 className="font-montserrat mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
          {product.name}
        </h1>
        <p className="font-inter mb-4 text-base text-gray-300 md:text-lg">
          {product.description}
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
            Color: {product.colors[selectedColor]?.name}
          </h3>
          <div className="flex gap-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`h-10 w-10 rounded-full border-2 transition duration-200 hover:scale-110 ${
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
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition duration-200 ${
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
              className="rounded bg-gray-700 p-2 hover:bg-gray-600"
            >
              <MinusIcon size={14} />
            </button>
            <span className="px-3 font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="rounded bg-gray-700 p-2 hover:bg-gray-600"
            >
              <PlusIcon size={14} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <button className="flex-1 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 md:text-base">
            Add to Cart
          </button>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`rounded-lg border p-3 transition ${
              isWishlisted
                ? 'border-red-500 bg-red-500 text-white'
                : 'border-gray-600 text-gray-300 hover:border-white hover:text-white'
            }`}
          >
            <HeartIcon size={18} filled={isWishlisted} />
          </button>
          <button className="rounded-lg border border-gray-600 p-3 text-gray-300 transition hover:border-white hover:text-white">
            <ShareIcon size={18} />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-700 pt-6">
          <div className="mb-4 flex gap-4">
            {['description', 'features', 'care'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium capitalize transition ${
                  activeTab === tab
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-300">
            {activeTab === 'description' && <p>{product.fullDescription}</p>}
            {activeTab === 'features' && (
              <ul className="list-disc space-y-1 pl-5">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
            {activeTab === 'care' && <p>{product.care}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
