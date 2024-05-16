import { css } from "@emotion/react";

const buttonContainer = (width, marginRight, color) => css`
  width: ${width};
  height: 50px;
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  color: white;
  background-color: ${color === "red" ? "#EF6BAA" : "#79D7F3"};
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.4s;
  margin-right: ${marginRight};
  cursor: pointer;
  &:hover {
    background-color: ${color === "red" ? "#EA0573" : "#0882F3"};
  }
`;

const buttonInactiveContainer = (width, marginRight, color) => css`
  width: ${width};
  height: 50px;
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  color: white;
  background-color: #8F8D8D;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.4s;
  margin-right: ${marginRight};
`;

function Button(props) {
  return (
    <>
      {props.active ? (
        <div css={buttonContainer(props.width, props.marginRight, props.color)} onClick={props.onClick}>
          {props.title}
        </div>
      ) : (
        <div css={buttonInactiveContainer(props.width, props.marginRight)}>
          {props.title}
        </div>
      )}
    </>
  );
}

export default Button;
