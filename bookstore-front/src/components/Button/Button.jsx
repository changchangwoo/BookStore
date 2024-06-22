import { css } from "@emotion/react";

function Button({width, marginRight, color, marginTop, onClick, active, title}) {
  return (
    <>
      {active ? (
        <div css={buttonContainer(width, marginRight, color, marginTop)} onClick={onClick}>
          {title}
        </div>
      ) : (
        <div css={buttonInactiveContainer(width, marginRight, marginTop)}>
          {title}
        </div>
      )}
    </>
  );
}


const getBackgroundColor = (color) => {
  switch (color) {
    case 'red':
      return '#EF6BAA';
    case 'blue':
      return '#79D7F3';
    case 'hover':
      return '#0882F3';
    default:
      return '#79D7F3'; // 기본 색상
  }
};

const getHoverBackgroundColor = (color) => {
  switch (color) {
    case 'red':
      return '#EA0573';
    case 'hover':
      return '#0882F3';
    default:
      return '#0882F3';
  }
};


const buttonContainer = (width, marginRight, color, marginTop) => css`
  width: ${width};
  height: 50px;
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  color: var(--reverseFontColor);
  background-color: ${getBackgroundColor(color)};
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
  margin-right: ${marginRight};
  margin-top: ${marginTop};
  cursor: pointer;
  &:hover {
    background-color: ${getHoverBackgroundColor(color)};
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


export default Button;
