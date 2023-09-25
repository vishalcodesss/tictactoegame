import { useState } from 'react';
import Board from './components/Board';
import './style.scss';
import { calculateWinner } from './winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext ] = useState(true);
  // const [state variable, state function]  --> syntax for creating a usestate hook

  const winner = calculateWinner(squares)
  const nextplayer = isXNext?"X" : "0"
  const statusMessage = winner? `winner is ${winner}`: `nextplayer is ${nextplayer}`

  // console.log(winner)

   const handlesquareclick = clickedposition => {
    if(squares[clickedposition] || winner){       // this block checks whether the square is already clicked or not
    return;
    }
    setsquares(currentsquares =>{
      return currentsquares.map((squarevalue, position)=>{
        if(clickedposition === position){     // set squares function is used to assign x or 0 in the 
        return isXNext? "X" : "0";
        }
      return squarevalue;
      })
    })
    setisXNext((currentisXNext) => !currentisXNext)     // this is used to toggle the boolean value or used to change the player uniformly
  };
  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} 
      handlesquareclick={handlesquareclick}/>

        {/* <button onClick={onbtnclick}>click here to increment</button> */}
        {/* <div>{counter}</div> */}

  
    </div>
  );
}

export default App;
