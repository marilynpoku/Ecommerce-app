import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

const Backdrop: React.FC<{ onClick: () => void }> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays")! as HTMLElement;

const Modal: React.FC<{ children: React.ReactNode; onClick: () => void }> = (
  props
) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
