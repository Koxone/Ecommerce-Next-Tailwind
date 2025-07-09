'use client';

import { useState, useEffect } from 'react';
import { HeartIcon, StarIcon } from '../Icons';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProductCard = ({
  showQuickView = true,
  showWishlist = true,
  showRating = true,
  product,
  className = '',
}) => {
  const [localColorIndex, setLocalColorIndex] = useState(0);
  const router = useRouter();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const savedWishlist = localStorage.getItem(`wishlist-${product.id}`);
    setIsWishlisted(savedWishlist === 'true');
  }, [product.id]);

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    const newIsWishlisted = !isWishlisted;
    setIsWishlisted(newIsWishlisted);
    localStorage.setItem(`wishlist-${product.id}`, newIsWishlisted.toString());
  };

  const handleColorSelect = (index) => {
    setLocalColorIndex(index);
  };

  const handleClick = () => {
    router.push(`/product-detail/${product.customId}`);
  };

  const currentColorName = product.colors?.[localColorIndex]?.name;
  const productImages =
    product.images?.[currentColorName] || product.images?.['Default'];
  const displayImage = productImages
    ? isHovered
      ? productImages[1] || productImages[0]
      : productImages[0]
    : product.image;

  const discountedPrice = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div
      className={`group hover-lift relative max-w-[300px] overflow-hidden rounded-lg border border-neutral-300/10 bg-gray-800 transition-all duration-300 ${className}`}
    >
      <div
        className="relative aspect-square w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          onClick={handleClick}
          src={displayImage}
          alt={product.name}
          width={500}
          height={500}
          className="w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 500px"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="animate-scale-in rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900">
              NEW
            </span>
          )}
          {product.discount > 0 && (
            <span className="animate-scale-in rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
              -{product.discount}%
            </span>
          )}
        </div>

        {showWishlist && (
          <button
            onClick={handleWishlistToggle}
            className="bg-opacity-50 hover:bg-opacity-75 focus-ring absolute top-3 right-3 cursor-pointer rounded-full bg-black p-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100 hover:scale-125"
          >
            <HeartIcon
              size={16}
              filled={isWishlisted}
              className={isWishlisted ? 'text-red-500' : 'text-white'}
            />
          </button>
        )}

        {showQuickView && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              onClick={handleClick}
              className="focus-ring w-full cursor-pointer rounded bg-white px-4 py-2 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-300"
            >
              Quick View
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        {product.colors && product.colors.length > 0 && (
          <div className="mb-3 flex gap-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorSelect(index)}
                className={`hover-scale focus-ring h-6 w-6 cursor-pointer rounded-full border-2 transition-all duration-200 ${
                  localColorIndex === index
                    ? 'border-white'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        )}

        <h3 className="font-montserrat mb-1 text-lg font-semibold text-white transition-colors duration-200 group-hover:text-gray-300">
          {product.name}
        </h3>

        {product.description && (
          <p className="font-inter mb-2 max-h-20 overflow-y-auto text-sm text-gray-400">
            {product.cardText}
          </p>
        )}

        {product.colors && product.colors.length > 0 && (
          <p className="font-inter mb-2 text-sm text-gray-500">
            {product.colors[localColorIndex]?.name}
          </p>
        )}

        {showRating && product.rating && (
          <div className="mb-2 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                size={14}
                filled={i < Math.floor(product.rating)}
                className="text-yellow-400"
              />
            ))}
            <span className="font-inter ml-1 text-sm text-gray-400">
              ({product.reviewCount || 0})
            </span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="font-poppins text-lg font-bold text-white">
            ${discountedPrice}
          </span>
          {product.discount > 0 && (
            <span className="font-poppins text-sm text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>

        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-3 flex gap-2">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className="focus-ring border border-gray-600 px-3 py-1 text-sm text-gray-300 transition-colors duration-200 hover:border-white hover:text-white"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
