import styled from "styled-components";

const Scoreboard = ({score, bestScore}) => {
  return(
    <ScoreContainer>
      <Score>Score: {score}</Score>
      <Divider />
      <BestScore>Best: {bestScore}</BestScore>
    </ScoreContainer>
  );
}



const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Score = styled.p`
  font-size: 3.2rem;
`
const BestScore = styled.p`
  font-size: 3.2rem;
`
const Divider = styled.div`
  background-color: #fff;
  width: 0.2rem;
  margin: 0 1.6rem;
  height: 2.6rem;
`

export default Scoreboard;