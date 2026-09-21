import { useDraggable } from "@dnd-kit/react";
import { useNavigate, useLocation } from "react-router-dom";
import ItemsDraggables from "./items-draggables";

export default function Draggable({ id, item: { icon, name, path } }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = path === location.pathname;

  const { ref, isDragging, attributes, listeners } = useDraggable({ id });

  const open = () => navigate(path, { state: { fromDashboard: true } });

  const handleKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    open();
  };

  return (
    <div className="w-fit h-fit relative">
      {/* Placeholder that stays in the rail while the module is lifted. */}
      <li className="absolute" aria-hidden="true">
        <ItemsDraggables
          icon={icon}
          name={name}
          isDragging={isDragging}
          isActive={isActive}
          isShadow={true}
        />
      </li>

      <li
        ref={ref}
        className="relative"
        role="button"
        tabIndex={0}
        aria-label={name}
        aria-current={isActive ? "page" : undefined}
        {...attributes}
        {...listeners}
        onClick={open}
        onKeyDown={handleKeyDown}
      >
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
