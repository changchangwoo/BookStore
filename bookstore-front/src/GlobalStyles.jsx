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

    }
  `;

  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
