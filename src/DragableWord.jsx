import React, { useState } from 'react';

const DraggableWord = ({ children }) => {
  const [isDragging, setDrag] = useState(false);
  return (
    <span
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
        width: 24,
        height: 24,
        margin: 4,
      }}
      draggable="true"
      onDragEnd={() => {
        setDrag(false);
      }}
      onDragStart={event => {
        setDrag(true);
        event.dataTransfer.setData(
          'text/plain',
          [...children].map(a => a.codePointAt(0)),
        );
      }}
      onDrag={e => {}}
    >
      {children}
    </span>
  );
};
export default DraggableWord;
