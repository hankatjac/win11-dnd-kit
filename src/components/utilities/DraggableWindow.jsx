import { useState, useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableWindow = ({ children, id, bounds }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

  const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

  useEffect(() => {
    if (!isDragging && transform) {
      setPosition((prev) => ({
        x: clamp(prev.x + transform.x, bounds.left, bounds.right),
        y: clamp(prev.y + transform.y, bounds.top, bounds.bottom),
      }));
    }
  }, [isDragging, transform, bounds]);

  const style = {
    position: "absolute",
    left: position.x,
    top: position.y,
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