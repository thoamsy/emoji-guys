import React from 'react';
import Typography from '@material-ui/core/Typography';
import { RISL, keycodesEmoji, keycodesText } from './constants';

console.log(RISL, keycodesEmoji, keycodesText);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography>键帽</Typography>
        {keycodesEmoji.map((text, i) => (
          <Typography variant="span" key={i}>
            {text}
          </Typography>
        ))}
        <br />
        <Typography>数字</Typography>
        {keycodesText.map((text, i) => (
          <Typography variant="span" key={i}>
            {text}
          </Typography>
        ))}
      </header>
    </div>
  );
}

export default App;
