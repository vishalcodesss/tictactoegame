import React from 'react'

const StatusMessage = ({winner,isXNext,squares})=>{

  const nomovesleft = squares.every((squarevalue) =>
    squarevalue !== null);
  

    const nextplayer = isXNext?"X" : "0"

  const renderstatusmessage = () =>{
    if(winner){
    return <>
      Winner is {' '} 
      <span className={winner === 'X'? 'text-green' : 'text-orange'}>{winner}</span>
      </>;
  }

  if(!winner && nomovesleft){
    return <>
      <span className="text-orange">0</span> and{' '}
      <span className="text-green">X</span> tied
      </>;
  }

  if(!winner && !nomovesleft){
    return <>
      Next player is {' '}
      <span className={isXNext? 'text-green' : 'text-orange'}>{nextplayer}</span>
      </>
  }

  return null
  };
  return ( 
  <div className="status-message">
    {renderstatusmessage()}
  </div>
  );
};


export default StatusMessage