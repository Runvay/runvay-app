'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function CartIcon() {
  const { cart } = useCart(); // Assuming 'cart' is the correct state holding the cart items
  const [hasMounted, setHasMounted] = useState(false);

  // Set the component as mounted after the first render to prevent SSR mismatch
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Prevent mismatch during SSR

  // Calculate the total quantity of items in the cart
  const totalQuantity = cart.reduce(
    (total: number, item: { quantity: number }) => total + item.quantity, 
    0
  );

  return (
    <Link href="/cart" className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}
