import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import CloseButton from "../UI/CloseButton/CloseButton";
import { WishlistContext } from "../../context/Wishlist/wishlist-context";
import WishlistItem from "./WishlistItem/WishlistItem";
import classes from "./Wishlist.module.scss";

const Wishlist: React.FC<{ onClose: () => void }> = (props) => {
  const wishlistCtx = useContext(WishlistContext);

  const wishlistItems = wishlistCtx.items.filter(
    (item) => item.isOnWishlist === true
  );

  const wishlistItem = wishlistItems.map((item) => (
    <WishlistItem key={item.id} item={item} />
  ));

  const numOfItemsInWishlist = wishlistItems.length;

  return (
    <Modal onClick={props.onClose}>
      <CloseButton onClick={props.onClose} />
      <h2 className={classes["wishlist__heading"]}>
        Your Wishlist ({numOfItemsInWishlist})
      </h2>
      {numOfItemsInWishlist === 0 ? (
        <div className={classes["wishlist__empty"]}>
          <p>Your wishlist is empty </p>
          <button onClick={props.onClose}>Continue shopping</button>
        </div>
      ) : (
        <ul>{wishlistItem}</ul>
      )}
    </Modal>
  );
};

export default Wishlist;
