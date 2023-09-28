const History = ({ history, moveto, currentmove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${currentmove === index ? 'active' : ""}`}
              onClick={() => moveto(index)}
            >
              {index === 0 ? 'Go to game start' : `Go to move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
