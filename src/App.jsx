import { useState } from 'react';
import Board from './components/Board';
import './style.scss';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import { calculateWinner } from './winner';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: true },]

function App() {
  const [history, sethistory] = useState(NEW_GAME);
  const [currentmove, setcurrentmove] = useState(0);

  const gamingBoard = history[currentmove];

  const {winner, winningsquares} = calculateWinner(gamingBoard.squares);



  const handlesquareclick = clickedposition => {
    if (gamingBoard.squares[clickedposition] || winner) {
      // this block checks whether the square is already clicked or not
      return;
    }
    sethistory(currenthistory => {
      const IsTraversing = currentmove + 1 !==currenthistory.length

      const lastgamingstate = IsTraversing ? currenthistory[currentmove] : history[history.length -1];

      const nextsquarestate = lastgamingstate.squares.map(
        (squarevalue, position) => {
          if (clickedposition === position) {
            return lastgamingstate.isXNext ? 'X' : '0';
          }
          return squarevalue;
        }
      );

      const base = IsTraversing? currenthistory.slice(0, currenthistory.indexOf(lastgamingstate) + 1) : currenthistory;


      return base.concat({
        squares: nextsquarestate,
        isXNext: !lastgamingstate.isXNext,
      });
    });
    setcurrentmove(move => move + 1);
  };
  const moveto = move => {
    setcurrentmove(move);
  };
  const onnewgamestart = () =>{
    sethistory(NEW_GAME);
    setcurrentmove(0);
  }

  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />

      <Board
        squares={gamingBoard.squares}
        handlesquareclick={handlesquareclick}
        winningsquares={winningsquares}
      />

      <button type='button' onClick={onnewgamestart}
       className={`btn-reset ${winner?'active':' '}`}>Start New Game </button>
      <h4><u>Current Game History</u></h4>
      <History history={history} moveto={moveto} currentmove={currentmove} />
    </div>
  );
}

export default App;
