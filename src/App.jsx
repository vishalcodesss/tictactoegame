import { useState } from 'react';
import Board from './components/Board';
import './style.scss';

function App() {
  // const [counter, setcounter] = useState(0);

  // console.log('hello signore');

  // const onbtnclick = () => {
  //   setcounter(currentcounter => {
  //     return currentcounter + 1;
  //   });
  // };
  // let counter = 1;

  return (
    <div className="app">
      <div>
      <Board/>

        {/* <button onClick={onbtnclick}>click here to increment</button> */}
        {/* <div>{counter}</div> */}

      </div>
    </div>
  );
}

export default App;
