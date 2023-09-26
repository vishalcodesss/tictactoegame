import { useState } from 'react';
import Board from './components/Board';
import './style.scss';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext ] = useState(true);
  // const [state variable, state function]  --> syntax for creating a usestate hook

  const winner = calculateWinner(squares)
  

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
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
      
      <Board squares={squares} 
      handlesquareclick={handlesquareclick}/>

        {/* <button onClick={onbtnclick}>click here to increment</button> */}
        {/* <div>{counter}</div> */}

  
    </div>
  );
}

export default App;
