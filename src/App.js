import React from 'react';
import './style.css';
import Typography from '@material-ui/core/Typography';
import { RISL, keycodesEmoji, keycodesText } from './constants';
import DraggableWord from './DragableWord';
import DroppableContainer from './DroppableContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography>键帽</Typography>
        {keycodesEmoji.map((text, i) => (
          <DraggableWord key={i}>{text}</DraggableWord>
        ))}
        <br />
        <Typography>数字</Typography>
        {keycodesText.map((text, i) => (
          <DraggableWord key={i}>{text}</DraggableWord>
        ))}
        <Typography>地区码</Typography>
        {RISL.map((text, i) => (
          <DraggableWord key={i}>{text}</DraggableWord>
        ))}
      </header>
      <DroppableContainer></DroppableContainer>
    </div>
  );
}

export default App;
