import classes from "./CloseButton.module.scss";

const CloseButton: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <button className={classes["btn__close"]} onClick={props.onClick}>
      X
    </button>
  );
};

export default CloseButton;
