'use client';

import { useState, useEffect } from 'react';
import { useMainContext } from '@/context/MainContext';
import { usePurchase } from '@/context/PurchaseContext';
import Carousel from '@/components/carousels/Carousel';
import ProductGrid from '@/components/ProductGrid';
import PromoSectionContainer from '@/components/containers/PromoSectionContainer';
import ExpandableText from '@/components/text/ExpandableText';
import { HeartIcon, ShareIcon, PlusIcon, MinusIcon } from '@/components/Icons';

export default function ProductDetailClient({ product }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState(0); // <-- ADD THIS

  const {
    quantity,
    handleQuantityChange,
    activeTabProduct,
    setActiveTabProduct,
    isWishlisted,
    setIsWishlisted,
  } = useMainContext();

  const { addToCart, setIsCartOpen } = usePurchase();

  useEffect(() => {
    const defaultColor =
      product.variants.edges[0].node.selectedOptions.find(
        (opt) => opt.name === 'Color'
      )?.value || '';
    setSelectedColor(defaultColor);
    setActiveImageIndex(0); // Reset carousel index when product loads
  }, [product]);

  const colorOptions = product.variants.edges.map((variant) => ({
    id: variant.node.id,
    color: variant.node.selectedOptions.find((opt) => opt.name === 'Color')
      ?.value,
    image: variant.node.image?.url,
  }));

  const filteredImages = product.images.edges.filter((img) =>
    img.node.url.toLowerCase().includes(selectedColor.toLowerCase())
  );

  const carouselImages =
    filteredImages.length > 0 ? filteredImages : product.images.edges;

  const carouselItems = carouselImages.map((img) => (
    <img
      key={img.node.url}
      src={img.node.url}
      alt={product.title}
      className="h-full w-full object-cover"
    />
  ));

  const price = parseFloat(product.variants.edges[0].node.price.amount).toFixed(
    2
  );

  return (
    <div className="grid w-full max-w-[1200px] grid-cols-1 gap-12 self-center p-8 md:grid-cols-[1fr_1fr] md:p-10">
      {/* Carousel */}
      <div className="animate-slide-in-left flex h-full max-h-[750px] max-w-[550px] flex-col items-center justify-between">
        <Carousel
          items={carouselItems}
          autoPlay={false}
          showDots={true}
          showArrows={true}
          className="mb-6"
          controlledIndex={activeImageIndex}
          onChangeIndex={setActiveImageIndex}
        />

        {/* Miniatures */}
        <div className="grid grid-cols-4 gap-3 lg:flex lg:w-full lg:overflow-x-auto">
          {carouselItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`aspect-square overflow-hidden rounded-lg border-2 ${
                activeImageIndex === idx ? 'border-white' : 'border-transparent'
              } bg-gray-800 transition-all duration-200 hover:border-gray-400 lg:min-w-[100px]`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="animate-slide-in-right max-w-[500px] rounded-lg text-white">
        <h1 className="font-montserrat mb-5 text-3xl font-bold md:text-4xl lg:text-5xl">
          {product.title}
        </h1>

        <p className="font-inter mb-4 max-h-[200px] overflow-auto text-base text-gray-300 md:text-lg">
          <ExpandableText text={product.description} />
        </p>

        {/* Price */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-2xl font-bold text-white md:text-3xl">
            ${price} USD
          </span>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-semibold md:text-base">
            Color: {selectedColor}
          </h3>
          <div className="flex gap-2">
            {colorOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setSelectedColor(option.color);
                  setActiveImageIndex(0); // reset to first image of new color
                }}
                className={`h-10 w-10 cursor-pointer rounded-full border-2 transition duration-200 hover:scale-110 ${
                  selectedColor === option.color
                    ? 'border-white'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{
                  backgroundImage: `url(${option.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>
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

        {/* Actions */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.title,
                description: product.description,
                price: parseFloat(price),
                quantity,
                image: carouselImages[activeImageIndex]?.node.url,
                selectedColor,
              });
              setIsCartOpen(true);
            }}
            className="flex-1 cursor-pointer rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-300 md:text-base"
          >
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
            {activeTabProduct === 'description' && <p>{product.description}</p>}
            {activeTabProduct === 'features' && <p>Features coming soon.</p>}
            {activeTabProduct === 'care' && (
              <p>Care instructions coming soon.</p>
            )}
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="col-span-1 flex flex-col gap-10 md:col-span-2">
        <ProductGrid title="BUSCAS ALGO MÁS?" />
        <PromoSectionContainer type="categories" />
      </div>
    </div>
  );
}
