'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import { usePathname } from 'next/navigation';

const Carousel = ({
  items = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className = '',
  controlledIndex, // <-- NEW
  onChangeIndex,   // <-- NEW
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathname = usePathname();

  // Sync controlledIndex from parent
  useEffect(() => {
    if (typeof controlledIndex === 'number') {
      setCurrentIndex(controlledIndex);
    }
  }, [controlledIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === items.length - 1 ? 0 : prevIndex + 1;
        onChangeIndex && onChangeIndex(nextIndex); // Notify parent if needed
        return nextIndex;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length, onChangeIndex]);

  const goToPrevious = () => {
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
    onChangeIndex && onChangeIndex(nextIndex);
  };

  const goToNext = () => {
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    onChangeIndex && onChangeIndex(nextIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    onChangeIndex && onChangeIndex(index);
  };

  if (!items.length) return null;

  return (
    <div className={`relative w-full overflow-hidden rounded-lg ${className}`}>
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {typeof item === 'string' ? (
              <img
                src={item}
                alt={`Carousel Image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            ) : (
              item
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
          >
            <ChevronLeftIcon size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
          >
            <ChevronRightIcon size={20} />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 transform space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
