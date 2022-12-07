import classes from "../ProductItem/ProductItemActions.module.scss";

const ProductItemActions: React.FC<{
  onAddToCart: () => void;
  onAddTwoWishlist: () => void;
  wishlistClass: string;
}> = (props) => {
  return (
    <div className={classes["product__actions"]}>
      <button
        onClick={props.onAddToCart}
        className={`${classes["product__btn"]} ${classes["product__btn--cart"]}`}
      >
        Add To Cart
      </button>
      <button
        onClick={props.onAddTwoWishlist}
        className={`${classes["product__btn"]} ${classes[props.wishlistClass]}`}
      >
        Wishlist
      </button>
    </div>
  );
};

export default ProductItemActions;
