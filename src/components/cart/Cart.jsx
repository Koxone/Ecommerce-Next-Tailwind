'use client';

import React, { useState } from 'react';

// Iconos internos de emergencia
const CloseIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
  >
    <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const PlusIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
  >
    <path strokeWidth="2" d="M12 5v14m-7-7h14" />
  </svg>
);
const MinusIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
  >
    <path strokeWidth="2" d="M5 12h14" />
  </svg>
);
const TrashIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
  >
    <path strokeWidth="2" d="M3 6h18M8 6v12m8-12v12M5 6l1 14h12l1-14" />
  </svg>
);

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Pump Legging',
      description: "Women's Seamless Legging",
      price: 70,
      quantity: 1,
      image: '/promo1.jpg',
      selectedSize: 'M',
      selectedColor: '#047857',
    },
    {
      id: 2,
      name: 'Sandy Bra',
      description: "Women's Seamless Bra",
      price: 48,
      quantity: 2,
      image: '/promo1.jpg',
      selectedSize: 'S',
      selectedColor: '#8B5CF6',
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) removeItem(id);
    else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);
  const closeCart = () => setIsCartOpen(false);
  const proceedToCheckout = () => alert('Proceeding to checkout (mock)');

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!isCartOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex justify-end">
      <div className="flex h-full w-full max-w-md flex-col border-l border-neutral-700 bg-gray-900 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-700 p-4">
          <h2 className="text-lg font-bold text-white">
            Shopping Cart ({cartItems.length})
          </h2>
          <button
            onClick={closeCart}
            className="cursor-pointer text-gray-400 hover:text-white"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400">
              <p>Your cart is empty.</p>
              <button
                onClick={closeCart}
                className="mt-4 cursor-pointer rounded bg-white px-4 py-2 text-gray-900 hover:bg-gray-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex space-x-3 rounded bg-gray-800 p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400">{item.description}</p>
                    <div className="mt-1 flex items-center space-x-2">
                      <div
                        className="h-4 w-4 rounded-full border"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                      <span className="rounded bg-gray-700 px-2 py-0.5 text-xs text-white">
                        {item.selectedSize}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="cursor-pointer text-gray-400 hover:text-white"
                      >
                        <MinusIcon size={16} />
                      </button>
                      <span className="w-6 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="cursor-pointer text-gray-400 hover:text-white"
                      >
                        <PlusIcon size={16} />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="cursor-pointer text-red-400 hover:text-red-300"
                      >
                        <TrashIcon size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="space-y-3 border-t border-gray-700 p-4">
            <div className="flex justify-between text-white">
              <span className="font-semibold">Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-400">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              onClick={proceedToCheckout}
              className="w-full cursor-pointer rounded bg-white px-4 py-2 font-semibold text-gray-900 hover:bg-gray-200"
            >
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full cursor-pointer rounded border border-gray-600 px-4 py-2 text-gray-300 hover:border-white hover:text-white"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
