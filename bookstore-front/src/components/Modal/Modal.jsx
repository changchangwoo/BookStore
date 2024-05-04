import { forwardRef } from "react";
import { ModalContainer, ModalBox } from "./Modal.styles";
import { motion } from "framer-motion";
import { modalAnimation } from "../../utils/animation";

const Modal = forwardRef((props, ref) => {
  return (
    <>
      <div css={ModalContainer} ref={ref}>
        <motion.form
          css={ModalBox}
          initial={modalAnimation.initial}
          animate={modalAnimation.animate}
          transition={modalAnimation.transition}
        >
          {props.children}
        </motion.form>
      </div>
    </>
  );
});

export default Modal;
