import { useContext } from "react";
import { CartContext } from "../../context/Cart/cart-context";
import Modal from "../UI/Modal/Modal";
import CloseButton from "../UI/CloseButton/CloseButton";
import CartItem from "./CartItem/CartItem";
import classes from "./Cart.module.scss";

const Cart: React.FC<{ onClose: () => void }> = (props) => {
  const cartCtx = useContext(CartContext);

  const removeFromCartHandler = (id: number) => {
    cartCtx.removeFromCart(id);
  };

  const total = cartCtx.totalPrice.toFixed(2);

  const numOfItemsInCart = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.quantity;
  }, 0);

  const itemsInCart = cartCtx.items.length;

  //* Cart JSX Content

  const CartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      quantity={item.quantity}
      onRemove={removeFromCartHandler.bind(null, item.id)}
    />
  ));

  const cartHasItemsContent = (
    <>
      <ul>{CartItems}</ul>
      <h3 className={classes["cart__total"]}>
        Total <span>£{total}</span>
      </h3>
      <div className={classes["cart__action"]}>
        <button onClick={cartCtx.clearCart} className={classes["cart__btn"]}>
          Clear Cart
        </button>
      </div>
    </>
  );

  const cartIsEmptyContent = (
    <div className={classes["cart__empty"]}>
      <p>Your cart is empty </p>
      <button onClick={props.onClose}>Continue shopping</button>
    </div>
  );

  return (
    <Modal onClick={props.onClose}>
      <CloseButton onClick={props.onClose} />
      <h2 className={classes["cart__heading"]}>
        Your Cart ({numOfItemsInCart})
      </h2>
      <>{itemsInCart !== 0 ? cartHasItemsContent : cartIsEmptyContent}</>
    </Modal>
  );
};

export default Cart;
