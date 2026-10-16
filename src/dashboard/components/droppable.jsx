import { useDroppable } from "@dnd-kit/react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import DropEmptyBox from "./drop-empty-box";

export default function Droppable({ children, parent, items }) {
  const { isDropTarget, ref } = useDroppable({ id: "droppable" });
  const item = items.find((item) => item.path === window.location.pathname);
  const { pathname } = useLocation();
  const scrollRef = useRef(null);

  // The scroll container outlives route changes, so it keeps the previous
  // page's offset unless it is reset on every navigation.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div ref={ref} className={`theme-text droppable-glow w-full h-full ${isDropTarget ? 'is-target' : ''}`}>
      {parent === "droppable"
        ? (<div className="relative h-full w-full">
          <div ref={scrollRef} className="dashboard-native-scroll h-full w-full overflow-y-auto">
            <div className="theme-drop-header w-full flex p-4 border-b sticky top-0 z-20 items-center">
              <div className="theme-drop-icon text-2xl p-2 rounded-xl mr-5">
                {item?.icon}
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold">{item?.name}</h2>
                <p className="theme-muted text-gray-400 text-xs">{item?.description}</p>
              </div>
            </div>
            {children}
          </div>
        </div>)
       : <DropEmptyBox isDropTarget={isDropTarget} />}
    </div>
  );
}
