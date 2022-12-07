import React from "react";
import Product from "../../models/Product";

export interface CartContextObj {
  items: Product[];
  totalPrice: number;
  addToCart: (item: Product) => void;
  removeFromCart: (id: Number) => void;
  clearCart: () => void;
}

export const CartContext = React.createContext<CartContextObj>({
  items: [],
  totalPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});
