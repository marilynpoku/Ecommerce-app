import Nav from "../Nav/Nav";
import classes from "./Header.module.scss";

const Header: React.FC<{ onOpen: () => void; onOpenWishlist: () => void }> = (
  props
) => {
  return (
    <header className={classes.header}>
      <h1 className={classes["header__primary-heading"]}>Blueprint</h1>
      <Nav onOpen={props.onOpen} onOpenWishlist={props.onOpenWishlist} />
    </header>
  );
};

export default Header;
