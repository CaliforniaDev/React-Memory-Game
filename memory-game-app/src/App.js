import { useEffect } from "react";
import { useGame } from "./useGame/useGame";
import Gameboard from "./components/Gameboard/Gameboard";
import GameHeader from "./components/GameHeader/Header";
// import { useScore } from "./hooks/useScore";
// import { useCards } from "./hooks/useCards";
// import { useCardsClicked } from "./hooks/useCardsClicked";
// import { useLevel } from "./hooks/useLevel";

function App() {
  const [
    isLoading,
    cards,
    score,
    bestScore,
    level,
    startLevel,
    handleCardsClicked
  ] = useGame();

  useEffect(() => {
    startLevel();
  }, [level]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <GameHeader score={score} bestScore={bestScore} />
      <Gameboard cards={cards} handleCardClickedProp={handleCardsClicked} />
    </>
  );
}

export default App;


  // const [score, bestScore, resetScore, updateScore] = useScore();

  // const [
  //   checkCardsClicked,
  //   updateCardsClicked,
  //   isAllCardsClicked,
  //   resetCardsClicked,
  // ] = useCardsClicked();

  // const [cards, updateCards, shuffleCards] = useCards();

  // const [level, nextLevel, resetLevel] = useLevel();

  // const [isLoading] = useGame();
  // console.log(isLoading);

  // const startLevel = async () => {
  //   await updateCards(level.cardCount, theme);
  // };
  // const handleCardClicked = (id) => {
  //   if (!checkCardsClicked(id)) {
  //     updateCardsClicked(id);
  //     updateScore(1);

  //     if (isAllCardsClicked(level.cardCount)) {
  //       nextLevel();
  //       resetCardsClicked();
  //     } else {
  //       shuffleCards();
  //     }
  //   } else {
  //     resetScore();
  //     resetCardsClicked();
  //     resetLevel();
  //     shuffleCards();
  //   }
  // };