import React, { useState } from 'react';

const DroppableContainer = () => {
  const [codes, setCodes] = useState([]);

  return (
    <div
      className="dropzone"
      onDrop={e => {
        const data = e.dataTransfer.getData('text/plain');
        e.preventDefault();
        setCodes(prevCode => {
          console.log(prevCode);
          return prevCode.concat(data);
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
      {String.fromCodePoint(...codes)}
    </div>
  );
};

export default DroppableContainer;
