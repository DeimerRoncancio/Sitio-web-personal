import { useDraggable } from "@dnd-kit/react";
import { useNavigate } from "react-router-dom";
import ItemsDraggables from "./items-draggables";

export default function Draggable({ id, item: { icon, name, path } }, changePage) {
  const navigate = useNavigate();
  const isActive = path === window.location.pathname;

  const { ref, isDragging, attributes, listeners, setNodeRef } = useDraggable({ id });

  const handleClick = (event) => navigate(path);

  return (
    <div className="w-full h-fit relative">
      <li className={`absolute ${isDragging ? "opacity-50" : ""}`}>
        <ItemsDraggables
          icon={icon}
          name={name}
          isDragging={isDragging}
          isActive={isActive}
          isShadow={true}
        />
      </li>

      <li ref={ref} className={`relative`} {...attributes} {...listeners} onClick={handleClick}>
        <ItemsDraggables
          icon={icon}
          name={name}
          isDragging={isDragging}
          isActive={isActive}
        />
      </li>
    </div>
  );
}