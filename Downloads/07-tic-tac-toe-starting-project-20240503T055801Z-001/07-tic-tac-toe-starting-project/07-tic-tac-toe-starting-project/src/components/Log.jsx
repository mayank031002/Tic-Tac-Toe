function Log({ turns }) {
  return (
    <ol id="log">
      {/* was getting Uncaught TypeError: Cannot read properties of undefined (reading 'map') error
      which i corrected by checking is array exists or not */}
      {turns?.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
