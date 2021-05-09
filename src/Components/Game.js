import React, { useState } from "react";
import { calculateWinner } from "../Helpers/Helpers";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]).winner;
  const xO = xIsNext ? "X" : "O";
  
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext); //opposite
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      console.log(history[stepNumber])
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

    const resetGame = () => {
      //Reset arrays
      setHistory([Array(9).fill(null)]);
      setStepNumber(0);
      setXisNext(true);
    }  

  return (
    <div>      
      <Board squares={history[stepNumber]} onClick={handleClick} />   
      <button className="reset-button" onClick={resetGame}>RESET</button>           
      <div className="info-wrapper">
        <div>
          <h3>The Game's History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>        
      </div>
    </div>
  );
};

export default Game;