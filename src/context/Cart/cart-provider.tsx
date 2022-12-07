import { useReducer } from "react";
import { CartContextObj } from "./cart-context";
import { CartContext } from "./cart-context";
import Product from "../../models/Product";

// Interface for cart state
interface CartState {
  items: Product[];
  totalPrice: number;
}

// Type for cart Actions
type Actions =
  | { type: "ADD"; item: Product }
  | { type: "REMOVE"; id: Number }
  | { type: "CLEAR" };

const initialCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state: CartState, action: Actions): CartState => {
  switch (action.type) {
    case "ADD":
      // 1) Update total price of the cart
      const cartTotalPrice = state.totalPrice + action.item.price;

      // 2) Find index of item added to cart
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      // 3) Will be undefined or the item object if it exists in the cart
      const existingCartItem = state.items[itemIndex];
      let updatedCartItems;

      // 4) If items exists - set to a new object and update the quantity
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity++,
        };

        // 5) Update the cart and override existing item with new quatity
        updatedCartItems = [...state.items];
        updatedCartItems[itemIndex] = updatedItem;
      } else {
        updatedCartItems = state.items.concat(action.item);
      }
      return {
        items: updatedCartItems,
        totalPrice: cartTotalPrice,
      };
    case "REMOVE": {
      // 1) Find index of item removed from cart
      const itemIndex = state.items.findIndex((item) => item.id === action.id);

      // 2) Get cart item
      const cartItem = state.items[itemIndex];

      // 3) Update total price of cart
      const cartTotalPrice =
        state.totalPrice - cartItem.quantity * cartItem.price;

      // 4) Remove the item from the cart
      let updatedCartItems;
      updatedCartItems = state.items.filter((item) => item.id !== action.id);

      return {
        items: updatedCartItems,
        totalPrice: cartTotalPrice,
      };
    }

    case "CLEAR":
      return initialCartState;
  }
};

const CartProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const addToCartHandler = (item: Product) => {
    cartDispatch({ type: "ADD", item });
  };

  const removeFromCartHandler = (id: Number) => {
    cartDispatch({ type: "REMOVE", id });
  };

  const clearCartHandler = () => {
    cartDispatch({ type: "CLEAR" });
  };

  const cartContextValue: CartContextObj = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
