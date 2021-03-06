import styled from "styled-components";
import Scoreboard from "./Scoreboard";
import { useState, useEffect } from "react";
import { deviceMaxWidth } from "../device";

const GameHeader = ({ score, bestScore }) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 30) setShowHeader(true);
      if (window.pageYOffset < 30) setShowHeader(false);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      console.log("remove scroll");
      document.removeEventListener("scroll", handleScroll);
    };
  }, [showHeader]);

  return (
    <HeaderSection showHeader={showHeader}>
      <h1>Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
    </HeaderSection>
  );
};
export default GameHeader;

const HeaderSection = styled.header`
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 8rem;
  max-height: 16rem;
  padding: 1.6rem 2.4rem;

  background: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.lightFont};
  box-shadow: 0px 1px 10px #333;
  border-radius: 2px;
  transition: 0.4s;
  opacity: ${({ showHeader }) => (showHeader ? 0.75 : 1)};

  h1 {
    font-size: 4rem;
  }


  @media screen and ${deviceMaxWidth.mobileL} {
    h1 {
      font-size: 3.2rem;
    }
  }
`;
