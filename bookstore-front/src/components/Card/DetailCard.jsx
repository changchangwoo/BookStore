import { css } from "@emotion/react";
import Button from "../Button/Button";
import { useCallback, useState } from "react";

const sectionContainer = css`
  width: 611px;
  height: 526px;
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  padding: 50px 0px 50px 0px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 26px;
    margin: 0;
    font-weight: bold;
  }

  h2 {
    font-size: 20px;
    margin-top: 10px;
    font-weight: 600;
    color: #8f8d8d;
  }

  h3 {
    width: 400px;
    height: 103px;
    font-size: 13px;
    font-weight: 300;
    margin-top: 45px;
    margin-bottom: 45px;
  }
`;

const quantitiyBox = css`
  width: 100%;
  height: 90px;
  background-color: white;
  border: 1px solid #e1e1e1;
  border-left: none;
  border-right: none;
  display: flex;
  padding: 20px 20px 20px 50px;
  box-sizing: border-box;
`;
const buttonContainer = css`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-top: 20px;
`;
const quantitiyController = css`
  flex: 0.5;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;
const price = css`
  flex: 0.5;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: right;
`;
const calculButton = css`
  margin: 20px;
  &:hover {
    scale: 1.2;
  }
`;

function DetailCard() {
  const totalprice = 13000
  const [count, setCount] = useState(1)
  const upCount = useCallback(()=>{
    setCount(count+1)
  })
  const downCount = useCallback(()=>{
    if(totalprice === 0) return
    setCount(count-1)
  })
  return (
    <>
      <div css={sectionContainer}>
        <h1>위대한 개츠비</h1>
        <h2>F. 스콧 피츠 제럴드 </h2>
        <h3>
          "위대한 개츠비"는 F.스콧 피츠제럴드가 1925년에 출판한 소설로, 1920년대
          뉴욕의 부유층과 미국 사회를 배경으로 한다. 이 소설은 주인공 닉
          카라웨이의 시선을 통해 이야기가 전개되는데, 그의 이웃인 대부자
          개츠비의 이야기를 중심으로 한다. 개츠비는 부자가 되기 위해 노력하며
          자신의 정체성을 감추고, 자신이 사랑하는 여인인 데이지를 되찾기 위해
          애를 쓴다. 하지만 그의 노력은 비참하게 끝나며, 소설은 재벌의 비극과
          고귀한 로맨스를 다루며 미국 사회의 어두운 면을 드러낸다.
        </h3>
        <div css={quantitiyBox}>
          <div css={quantitiyController}>
            <span css={calculButton} onClick={downCount}> - </span>
            <span> {count} </span>
            <span css={calculButton} onClick={upCount}> + </span>
          </div>
          <div css={price}>{totalprice * count} 원 </div>
        </div>
        <div css={buttonContainer}>
          <Button title="♡" width="90px" marginRight="20px" />
          <Button title="장바구니 담기" width="150px" marginRight="20px" />
        </div>
      </div>
    </>
  );
}

export default DetailCard;
