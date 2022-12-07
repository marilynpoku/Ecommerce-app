import classes from "./CartItem.module.scss";

const CartItem: React.FC<{
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  onRemove: () => void;
}> = (props) => {
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
        <p className={classes["product__quantity"]}> x {props.quantity}</p>
      </div>

      <div className={classes["product__action"]}>
        <button onClick={props.onRemove} className={classes["product__btn"]}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default CartItem;
