import React, { useState } from 'react';
import DragableWord from './DragableWord';

const KEY = 'EMOJIS';
const DroppableContainer = () => {
  const [codes, setCodes] = useState(() => {
    const saved = localStorage.getItem(KEY);
    if (!saved) {
      return [];
    }
    return JSON.parse(saved);
  });
  const [isEntering, setEntering] = useState(false);

  return (
    <div
      className="dropzone"
      onDrop={e => {
        const data = e.dataTransfer.getData('text/plain');
        const isSequence = data.includes(',');

        e.preventDefault();
        setEntering(false);
        setCodes(prevCode => {
          const codes = prevCode.concat(
            Array.of(isSequence ? data.split(',') : data),
          );
          localStorage.setItem(KEY, JSON.stringify(codes));
          return codes;
        });
      }}
      onDragLeave={() => {
        setEntering(false);
      }}
      onDragEnter={e => {
        e.dataTransfer.dropEffect = 'copy';
        setEntering(true);
        e.preventDefault();
      }}
      onDragOver={e => {
        const isText = e.dataTransfer.types.includes('text/plain');
        e.dataTransfer.dropEffect = 'copy';
        if (isText) {
          e.preventDefault();
        }
      }}
      style={{
        height: 300,
        width: 600,
        border: `4px dashed ${isEntering ? '#a0a0a0' : '#e5e5e5'}`,
        background: isEntering ? '#fafafa' : '',
      }}
    >
      {codes.map((code, index) => {
        return (
          <DragableWord key={index}>
            {Array.isArray(code)
              ? String.fromCodePoint(...code)
              : String.fromCodePoint(code)}
          </DragableWord>
        );
      })}
    </div>
  );
};

export default DroppableContainer;
