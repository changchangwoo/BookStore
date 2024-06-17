import { css } from "@emotion/react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { messageAnimation } from "../../utils/animation";
import { useDispatch, useSelector } from "react-redux";
import { closeMessage } from "../../reduces/messageSlice";
import { MessageBox, MessageContainer, exitBox, textBox } from "./Message.styles";

const Message = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.message.isOpen);
  const message = useSelector((state) => state.message.message);
  
  const closeMessageBox = () => {
    dispatch(closeMessage());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          css={MessageContainer}
          key="Message"
          initial={messageAnimation.initial}
          animate={messageAnimation.animate}
          exit={messageAnimation.exit}
          transition={messageAnimation.transition}
        >
          <div css={MessageBox}>
            <div css={textBox}>{message}</div>
            <div css={exitBox}>
              <span
                className="material-symbols-outlined"
                onClick={closeMessageBox}
              >
                close
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Message;
