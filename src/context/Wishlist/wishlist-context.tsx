import React from "react";
import Product from "../../models/Product";

export interface WishlistContextObj {
  items: Product[];
  toggleWishlist: (item: Product) => void;
}

export const WishlistContext = React.createContext<WishlistContextObj>({
  items: [],
  toggleWishlist: () => {},
});
