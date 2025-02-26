import { useState, useEffect } from "react";
import { CartItem } from "../types/CartItem";

const CART_STORAGE_KEY = "shoppingCart";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: CartItem) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  function removeFromCart(productId: number) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  function updateQuantity(productId: number, quantity: number) {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };
  

  return { cart, addToCart, removeFromCart, updateQuantity };
};
