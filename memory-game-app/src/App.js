import { useEffect, useState } from 'react';
import theme from './theme/theme';
import { useScore } from './hooks/useScore'
import { useCards } from './hooks/useCards';

import { useCardsClicked } from './hooks/useCardsClicked';
import Gameboard from "./components/Gameboard/Gameboard";
import GameHeader from "./components/GameHeader/Header";

function App() {
  const [
    score,
    bestScore,
    resetScore,
    updateScore] = useScore();

  const [
    checkCardsClicked,
    updateCardsClicked,
    resetCardsClicked] = useCardsClicked();

  const [cards, updateCards] = useCards();
  useEffect(() => {
    updateCards(theme)
  }, [cards]) // eslint-disable-line react-hooks/exhaustive-deps




  const handleCardClicked = (id) => {
    if (checkCardsClicked(id)) {
      resetCardsClicked();
      return resetScore();
    }
    updateScore(1);
    console.log(score);
    return updateCardsClicked(id);
  }
  return (
    <>
      <GameHeader score={score} bestScore={bestScore} />
      <Gameboard
        handleCardClickedProp={handleCardClicked}
      />
    </>

  );
}


export default App;
