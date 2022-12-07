import classes from "../WishlistItem/WishlistItemActions.module.scss";

const WishlistItemActions: React.FC<{
  toggleWishlist: () => void;
  onAddToCart: () => void;
}> = (props) => {
  return (
    <div className={classes["product__actions"]}>
      <button
        onClick={props.toggleWishlist}
        className={`${classes["product__btn"]} ${classes["product__btn--wishlist"]}`}
      >
        Delete
      </button>
      <button
        onClick={props.onAddToCart}
        className={`${classes["product__btn"]} ${classes["product__btn--cart"]}`}
      >
        Add to cart
      </button>
    </div>
  );
};

export default WishlistItemActions;
