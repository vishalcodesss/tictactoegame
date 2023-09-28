const Square = ({ value, onClick,iswinningsquare }) => {

  const colorclassname = value === 'X' ? 'text-green' : 'text-orange';
  const winningclassname = iswinningsquare ? 'winning' : ''

  return (
    <button type="button" className={`square ${colorclassname} 
    ${winningclassname}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
