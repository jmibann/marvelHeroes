import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

import { StyledModal, Button } from "./styles";

const modalRoot = document.getElementById("modal-root");

const Modal = props => {

  const [fadeType, setFadeType] = useState(null);

  useEffect(() => {
    window.addEventListener("keydown", onEscKeyDown, false);
    setTimeout(() => setFadeType("in"), 0);

    return () => {
      window.removeEventListener("keydown", onEscKeyDown, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFadeType('out');
  }, [props.isOpen]);

  const background = React.createRef();

  const transitionEnd = e => {
    if (e.propertyName !== "opacity" || fadeType === "in") return;
    if (fadeType === "out") {
      props.onClose();
    }
  };

  const onEscKeyDown = e => {
    if (e.key !== "Escape") return;
    setFadeType("out");
    props.onClose();
  };

  const handleClick = e => {
    e.preventDefault();
    setFadeType("out");
    props.onClose();
  };


  return (
    ReactDom.createPortal(
      <StyledModal
        id={props.id}
        className={`wrapper ${props.class}`}
        role="dialog"
        modalSize={props.size}
        onTransitionEnd={transitionEnd}
        fadeType={fadeType}
      >
        <div className="box-dialog">
          <div className="box-header">
            <h4 className="box-title">{props.title}</h4>
            <Button onClick={handleClick} className="close">
              X
              </Button>
          </div>
          <div className="box-content">{props.children}</div>
        </div>
        <div
          className={`background`}
          onMouseDown={handleClick}
          ref={background}
        />
      </StyledModal>,
      modalRoot
    )

  );

}
export default Modal;