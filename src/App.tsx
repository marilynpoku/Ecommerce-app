import { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Products from "./components/Products/Products";
import CartProvider from "./context/Cart/cart-provider";
import { WishlistProvider } from "./context/Wishlist/wishlist-provider";

const App = () => {
  // Handling modal states for cart and wishlist modals

  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const openWishlistHandler = () => {
    setShowWishlist(true);
  };

  const closeWishlistHandler = () => {
    setShowWishlist(false);
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <Header onOpen={openCartHandler} onOpenWishlist={openWishlistHandler} />
        <main>
          {showCart && <Cart onClose={closeCartHandler} />}
          {showWishlist && <Wishlist onClose={closeWishlistHandler} />}
          <Products />
        </main>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
