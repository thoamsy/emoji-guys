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

  return (
    <div
      className="dropzone"
      onDrop={e => {
        const data = e.dataTransfer.getData('text/plain');
        const isSequence = data.includes(',');

        e.preventDefault();
        setCodes(prevCode => {
          const codes = prevCode.concat(
            Array.of(isSequence ? data.split(',') : data),
          );
          localStorage.setItem(KEY, JSON.stringify(codes));
          return codes;
        });
      }}
      onDragEnter={e => e.preventDefault()}
      onDragOver={e => {
        const isText = e.dataTransfer.types.includes('text/plain');
        e.dataTransfer.dropEffect = 'copy';
        if (isText) {
          e.preventDefault();
        }
      }}
      style={{
        height: 300,
        width: 300,
        border: '1px dashed #e5e5e5',
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
