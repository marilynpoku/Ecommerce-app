import React, { useReducer } from "react";
import Product from "../../models/Product";
import { WishlistContext } from "./wishlist-context";
import { WishlistContextObj } from "./wishlist-context";

// Interface for wishlist
interface WishlistState {
  items: Product[];
}

// Type for wishlist actions
type Actions = {
  type: string;
  item: Product;
};

const initialWishlistState = {
  items: [],
};

const wishlistReducer = (
  state: WishlistState,
  action: Actions
): WishlistState => {
  switch (action.type) {
    case "TOGGLE":
      // 1) Find index of item
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      // 2) Will be undefined or the item object if it exists in wishlist
      const existingItem = state.items[itemIndex];

      let updatedWishlist;

      // 3) If the item exists -> update state and toggle wishlist status for the item
      if (existingItem) {
        const newWishlistStatus = !state.items[itemIndex].isOnWishlist;
        const updatedItem = {
          ...existingItem,
          isOnWishlist: newWishlistStatus,
        };
        updatedWishlist = [...state.items];
        updatedWishlist[itemIndex] = updatedItem;
      } else {
        // 4) Update wishlist status for item and add to state
        const newWishlistStatus = !action.item.isOnWishlist;
        const updatedItem = {
          ...action.item,
          isOnWishlist: newWishlistStatus,
        };
        updatedWishlist = state.items.concat(updatedItem);
      }

      return {
        items: updatedWishlist,
      };
  }

  return initialWishlistState;
};

export const WishlistProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [wishlistState, dispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const toggleWishlistHandler = (item: Product) => {
    dispatch({ type: "TOGGLE", item });
  };

  const wishlistContextValue: WishlistContextObj = {
    items: wishlistState.items,
    toggleWishlist: toggleWishlistHandler,
  };

  return (
    <WishlistContext.Provider value={wishlistContextValue}>
      {props.children}
    </WishlistContext.Provider>
  );
};
