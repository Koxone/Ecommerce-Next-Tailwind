'use client';

import { usePurchase } from '@/context/PurchaseContext';
import { useRouter } from 'next/navigation';

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

const Cart = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
  } = usePurchase();

  const closeCart = () => setIsCartOpen(false);
  const proceedToCheckout = () => alert('Proceeding to checkout (mock)');
  const router = useRouter();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // If cart is not open, render nothing
  if (!isCartOpen) return null;

  return (
    // Overlay background that closes the cart on click
    <div
      onClick={closeCart}
      className="fixed inset-0 z-50 flex justify-end bg-black/50"
    >
      {/* Cart drawer container, stops propagation to avoid closing when clicking inside */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-md flex-col border-l border-neutral-800 bg-gray-900 shadow-2xl"
      >
        {/* HEADER: cart title and close button */}
        <div className="flex items-center justify-between border-b border-neutral-800 p-4">
          <h2 className="text-lg font-semibold tracking-wide text-white">
            Shopping Cart ({cartItems.length})
          </h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeCart();
            }}
            className="cursor-pointer rounded p-1 text-gray-400 transition hover:bg-gray-700 hover:text-white"
          >
            <CloseIcon size={22} />
          </button>
        </div>

        {/* CONTENT: cart items or empty state */}
        <div className="flex-1 space-y-4 overflow-y-auto p-3">
          {cartItems.length === 0 ? (
            // EMPTY STATE UI
            <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400">
              <p>Your cart is empty.</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeCart();
                }}
                className="mt-4 flex-1 cursor-pointer rounded-lg bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-300 md:text-base"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            // RENDER EACH ITEM IN THE CART
            cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex cursor-pointer gap-3 rounded bg-gray-800 p-3 transition hover:bg-gray-700"
                onClick={() => {
                  closeCart();
                  router.push(`/product-detail/${item.id}`);
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded object-cover"
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {item.description.split(' ').slice(0, 20).join(' ')}...
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <div
                        className="h-4 w-4 rounded-full border border-neutral-600"
                        style={{ backgroundColor: item.selectedColor }}
                      />
                      <span className="rounded bg-gray-700 px-2 py-0.5 text-xs text-white">
                        {item.selectedSize}
                      </span>
                    </div>
                  </div>

                  {/* QUANTITY AND REMOVE CONTROLS */}
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity - 1
                          );
                        }}
                        className="rounded p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        <MinusIcon />
                      </button>
                      <span className="w-6 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity + 1
                          );
                        }}
                        className="rounded p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        <PlusIcon />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeItem(
                            item.id,
                            item.selectedSize,
                            item.selectedColor
                          );
                        }}
                        className="rounded p-1 text-red-400 hover:bg-red-500/20 hover:text-red-300"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER: subtotal, checkout, clear cart */}
        {cartItems.length > 0 && (
          <div className="space-y-3 border-t border-neutral-800 p-4">
            <div className="flex justify-between text-white">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-400">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                proceedToCheckout();
              }}
              className="w-full rounded bg-white px-4 py-2 font-semibold text-gray-900 hover:bg-gray-200"
            >
              Checkout
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearCart();
              }}
              className="w-full rounded border border-gray-600 px-4 py-2 text-gray-300 hover:border-white hover:text-white"
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
