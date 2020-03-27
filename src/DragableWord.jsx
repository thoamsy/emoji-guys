import React, { useState } from 'react';

const DraggableWord = ({ children }) => {
  const [isDragging, setDrag] = useState(false);
  return (
    <span
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      draggable="true"
      onDragEnd={() => {
        setDrag(false);
      }}
      onDragStart={event => {
        setDrag(true);
        event.dataTransfer.effectAllowed = 'link';
        event.dataTransfer.dropEffect = 'link';
        event.dataTransfer.setData('text/plain', children.codePointAt(0));
      }}
      onDrag={e => {}}
    >
      {children}
    </span>
  );
};
export default DraggableWord;
