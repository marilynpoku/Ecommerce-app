import { useContext } from "react";
import Product from "../../../models/Product";
import { WishlistContext } from "../../../context/Wishlist/wishlist-context";
import { CartContext } from "../../../context/Cart/cart-context";
import WishlistItemActions from "./WishlistItemActions";
import classes from "./WishlistItem.module.scss";

const WishlistItem: React.FC<{ item: Product }> = (props) => {
  const wishlistCtx = useContext(WishlistContext);
  const cartCtx = useContext(CartContext);

  const toggleWishlistHandler = () => {
    wishlistCtx.toggleWishlist({
      id: props.item.id,
      title: props.item.title,
      image: props.item.image,
      price: props.item.price,
      quantity: props.item.quantity,
      isOnWishlist: props.item.isOnWishlist,
    });
  };

  const addToCartHandler = () => {
    cartCtx.addToCart({
      id: props.item.id,
      title: props.item.title,
      image: props.item.image,
      price: props.item.price,
      quantity: props.item.quantity,
      isOnWishlist: props.item.isOnWishlist,
    });
  };

  const price = props.item.price.toFixed(2);

  return (
    <li className={classes["product__card"]}>
      <img
        src={props.item.image}
        alt={props.item.title}
        className={classes["product__image"]}
      />
      <div className={classes["product__detail"]}>
        <h4 className={classes["product__title"]}>{props.item.title}</h4>
        <p className={classes["product__price"]}>£{price}</p>
        <WishlistItemActions
          toggleWishlist={toggleWishlistHandler}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};
export default WishlistItem;
