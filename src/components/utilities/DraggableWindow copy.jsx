import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableWindow = ({ children, id, bounds }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 }); // initial position
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  // Clamp position to bounds
  const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
  const style = {
    position: "absolute",
    left: clamp(position.x + (transform?.x || 0), bounds.left, bounds.right),
    top: clamp(position.y + (transform?.y || 0), bounds.top, bounds.bottom),
    zIndex: 30,
    touchAction: "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export default DraggableWindow;
