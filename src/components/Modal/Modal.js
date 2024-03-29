import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.scss";

let openned = 0;

const Modal = (props) => {
  const {
    closeModal,
    position,
    children,
    show,
    width,
    animation,
    ratio,
    contentClassname,
    zindex,
  } = props;

  useEffect(() => {
    if (openned === 0) {
      document.body.style.overflow = show ? "hidden" : "auto";
    }
    if (show) {
      openned++;
    }
    return () => {
      if (show) {
        openned--;
      }
    };
  }, [show]);

  return createPortal(
    <div
      ref={el => {
        if (el) {
          if (show) {
            setTimeout(() => {
              el.style.overflowY = "auto";
            }, 250);
          } else {
            el.style.overflowY = "hidden";
          }
        }
      }}
      id="modal-overlay"
      style={{
        display: !show ? "none" : "flex",
        zIndex: zindex,
      }}
      aria-hidden="true"
      role="button"
      className={`
        ${style.overlay}
        ${style[`${position}`]}
        ${style["fadeOverlay"]}
      `}
      onMouseDown={() => closeModal()}
      onTouchStart={e => e.stopPropagation()}
    >
      <div
        id="modal-children"
        aria-hidden="true"
        className={`
          ${style.children}
          ${style[`${animation}`]}
          ${contentClassname}
        `}
        onMouseDown={e => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: width === "screen" ? window.innerWidth + "px" : width,
          maxHeight: `calc(${window.innerHeight}px / var(--scale-y))`,
          aspectRatio: ratio,
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById("root")
  );
};

Modal.defaultProps = {
  position: "center",
  width: "",
  ratio: "",
  closeModal: () => {
    return;
  },
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  position: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
};

export default Modal;
