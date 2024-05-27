import { Global, css } from "@emotion/react";
import { useSelector } from "react-redux";

const GlobalStyles = () => {
  const isDark = useSelector((state) => state.user.isDark);
  const globalStyles = css`
    :root {
      --mainBG: ${isDark ? "#23272b" : "#ffffff"};
      --subBG: ${isDark ? "#282C30" : "#f9f9f9"};
      --fontColor : ${isDark ? "#ffffff" : "#000000"};
      --outLine: ${isDark ? "#35393d" : "#e1e1e1"};
      --reverseFontColor : ${isDark ? "#000000" : "#ffffff"};
      --reverseMainBG : ${isDark ? "#f9f9f9" : "#282C30"}; 
      // var(--MainBG);
      // var(--SubBG);
      // var(--fontColor);
      // var(--outline);



      --negative: ${isDark ? "#0000ff" : "green"};
      --negative2: ${isDark ? "#586672" : "#f1f2f3"};
      --disabled: ${isDark ? "#ced3d7" : "#ffffff"};
      --positive: ${isDark ? "#ffffff" : "#23272b"};
      --positive1: ${isDark ? "#f1f2f3" : "#23272b"};
      --background: ${isDark ? "#23272b" : "#f8f9fa"};
      --primary: ${isDark ? "#ff8a05" : "#ffffff"};
      --primarylight: ${isDark ? "#ffeeda" : "#23272b"};
      --primarylight2: ${isDark ? "#fff8f1" : "#23272b"};
    }
  `;

  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
