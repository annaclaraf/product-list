import { createContext, useContext, ReactNode } from "react";
import { useCart } from "../hooks/useCart";
import { CartItem } from "../types/CartItem";

type CartContextType = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cartFunctions = useCart();

  return (
    <CartContext.Provider value={cartFunctions}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};