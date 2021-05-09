import React from 'react';
import Square from './Square';
import { calculateWinner } from '../Helpers/Helpers';


const Board = ({ squares, onClick }) => {
  let wins = Array(9).fill(null)
  const winningIndex = calculateWinner(squares).index;

  function updateWins(indices){
    for (let i = 0; i<3; i++){
      wins[indices[i]] = 1
    }
  }

  switch (winningIndex) {
    case 0:
      updateWins([0,1,2])      
      break;
    case 1:
      updateWins([3,4,5])      
      break;
    case 2:
      updateWins([6,7,8])      
      break;
    case 3:
      updateWins([0,3,6])      
      break;
    case 4:
      updateWins([1,4,7])      
      break;
    case 5:
      updateWins([2,5,8])      
      break;
    case 6:
      updateWins([0,4,8])      
      break;
    case 7:
      updateWins([2,4,6])      
      break;
    default:
      wins = Array(9).fill(null)
}
  return(
    <div className="board">
      {squares.map((square, i) => {
        console.log("win", wins[i])
        return (
        <Square key={i} win={wins[i]} value={square} onClick={() => onClick(i)} />
      )})}
    </div>
  );
  
};

export default Board;