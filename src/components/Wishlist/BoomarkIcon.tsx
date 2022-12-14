import classes from "./BookmarkIcon.module.scss";

const BookmarkIcon: React.FC<{
  onClick: () => void;
  itemsInWishlistNum: Number;
}> = (props) => {
  const bookmarkIconPath =
    props.itemsInWishlistNum === 0
      ? "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
      : "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z";

  return (
    <svg
      className={classes.icon}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      onClick={props.onClick}
    >
      <path d={bookmarkIconPath} />
    </svg>
  );
};

export default BookmarkIcon;
