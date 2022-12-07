import BookmarkIcon from "../../Wishlist/BoomarkIcon";
import CartIcon from "../../Cart/CartIcon";
import { useContext } from "react";
import { CartContext } from "../../../context/Cart/cart-context";
import { WishlistContext } from "../../../context/Wishlist/wishlist-context";
import classes from "./Nav.module.scss";

const Nav: React.FC<{
  onOpen: () => void;
  onOpenWishlist: () => void;
}> = (props) => {
  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);

  const numOfItemsInCart = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.quantity;
  }, 0);

  const numOfItemsInWishlist = wishlistCtx.items.filter(
    (item) => item.isOnWishlist === true
  ).length;

  // Classes for wishlist and cart counters
  const cartCounterClass = numOfItemsInCart === 0 ? "disappear" : "default";
  const wishlistCounterClass =
    numOfItemsInWishlist === 0 ? "disappear" : "default";

  return (
    <nav className={classes.nav} aria-label="Main">
      <ul className={classes["nav__list"]}>
        <li className={classes["nav__item"]}>
          <span className={classes[wishlistCounterClass]}>
            {numOfItemsInWishlist}
          </span>
          <BookmarkIcon
            onClick={props.onOpenWishlist}
            itemsInWishlistNum={numOfItemsInWishlist}
          />
        </li>
        <li className={classes["nav__item"]}>
          <span className={classes[cartCounterClass]}>{numOfItemsInCart}</span>
          <CartIcon onClick={props.onOpen} itemsInCartNum={numOfItemsInCart} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
