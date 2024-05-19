import { css } from "@emotion/react";
import React from "react";
import { motion } from "framer-motion"
import { messageAnimation } from "../../utils/animation";
import { useDispatch, useSelector } from "react-redux";
import { closeMessage } from "../../reduces/messageSlice";
;


const MessageContainer = css`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
  box-sizing: border-box;
  padding-bottom: 50px;
  justify-content: center;
  z-index: 999;
  pointer-events: none;
`;

const MessageBox = css`
  width: 600px;
  height: 40px;
  border-radius: 8px;
  text-align: center;
  justify-content: space-between; /* 변경된 부분 */
  align-items: center;
  background-color: #79d7f3;
  box-sizing: border-box;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  pointer-events: auto;
  display: flex;
`;

const textBox = css`
  text-align: center;
  flex: 1; /* 추가된 부분 */
`;

const exitBox = css`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px; /* 추가된 부분 */

  span {
    font-size: 25px;
    cursor: pointer;
  }
`;

const Message = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.message.isOpen)
  const message = useSelector((state) => state.message.message)
  const closeMessageBox = () => {
    dispatch(closeMessage())
  }
  return (
    <>
    {isOpen &&
    <motion.div css={MessageContainer}
      initial={messageAnimation.initial}
      animate={messageAnimation.animate}
      transition={messageAnimation.transition}
    >
      <div css={MessageBox}>
        <div css={textBox}>{message}</div>
        <div css={exitBox}>
          <span class="material-symbols-outlined"
          onClick={closeMessageBox}
          >close</span>
        </div>
      </div>
    </motion.div>}
    </>
  );
};

export default Message;
