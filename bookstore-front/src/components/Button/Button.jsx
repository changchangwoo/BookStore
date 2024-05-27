import { css } from "@emotion/react";

const buttonContainer = (width, marginRight, color, marginTop) => css`
  width: ${width};
  height: 50px;
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  color: var(--reverseFontColor);
  background-color: ${color === "red" ? "#EF6BAA" : "#79D7F3"};
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
  margin-right: ${marginRight};
  margin-top: ${marginTop};
  cursor: pointer;
  &:hover {
    background-color: ${color === "red" ? "#EA0573" : "#0882F3"};
  }
`;

const buttonInactiveContainer = (width, marginRight, marginTop) => css`
  width: ${width};
  height: 50px;
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  color : var(--reverseFontColor);
  background-color: #8F8D8D;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.4s;
  margin-right: ${marginRight};
  margin-top: ${marginTop};

`;

function Button(props) {
  return (
    <>
      {props.active ? (
        <div css={buttonContainer(props.width, props.marginRight, props.color, props.marginTop)} onClick={props.onClick}>
          {props.title}
        </div>
      ) : (
        <div css={buttonInactiveContainer(props.width, props.marginRight, props.marginTop)}>
          {props.title}
        </div>
      )}
    </>
  );
}

export default Button;
