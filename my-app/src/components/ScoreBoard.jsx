import { useState } from 'react';

function ScoreBoard() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  function handlePlayer1() {
    setScore1(score1 + 1);
  }
  function handlePlayer2() {
    setScore2(score2 + 1);
  }

  function handleReset() {
    setScore1(0);
    setScore2(0);
  }

  return (
    <>
      <h1>Player 1: {score1}</h1>
      <h1>Player 2: {score2}</h1>
      <button className="player1Score" onClick={handlePlayer1}>
        Player 1 Increment
      </button>
      <button className="player2Score" onClick={handlePlayer2}>
        Player 2 Increment
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
export default ScoreBoard;
