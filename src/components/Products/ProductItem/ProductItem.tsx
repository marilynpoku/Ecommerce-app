import { useContext } from "react";
import { CartContext } from "../../../context/Cart/cart-context";
import { WishlistContext } from "../../../context/Wishlist/wishlist-context";
import Product from "../../../models/Product";
import ProductItemActions from "./ProductItemActions";
import { DEFAULT_QUANTITY } from "../../../config/config";
import { DEFAULT_WISHLIST_STATUS } from "../../../config/config";
import classes from "./ProductItem.module.scss";

const ProductItem: React.FC<Product> = (props) => {
  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);

  const addToCartHandler = () => {
    cartCtx.addToCart({
      id: props.id,
      title: props.title,
      image: props.image,
      price: props.price,
      quantity: DEFAULT_QUANTITY,
      isOnWishlist: DEFAULT_WISHLIST_STATUS,
    });
  };

  const addToWishlistHandler = () => {
    wishlistCtx.toggleWishlist({
      id: props.id,
      title: props.title,
      image: props.image,
      price: props.price,
      quantity: DEFAULT_QUANTITY,
      isOnWishlist: DEFAULT_WISHLIST_STATUS,
    });
  };

  // Toggling the wishist btn
  const wishlistItems = wishlistCtx.items.filter(
    (item) => item.isOnWishlist === true
  );

  const wishlistItem = wishlistItems.filter((item) => item.id === props.id);

  const wishlistBtnClass =
    wishlistItem.length === 0 ? "" : "product__btn--wishlist";

  const price = props.price.toFixed(2);

  return (
    <li className={classes["product__card"]}>
      <img
        src={props.image}
        alt={props.title}
        className={classes["product__image"]}
      />
      <div className={classes["product__detail"]}>
        <h4 className={classes["product__title"]}>{props.title}</h4>
        <p className={classes["product__price"]}>£{price}</p>
      </div>
      <ProductItemActions
        onAddToCart={addToCartHandler}
        onAddTwoWishlist={addToWishlistHandler}
        wishlistClass={wishlistBtnClass}
      />
    </li>
  );
};

export default ProductItem;
