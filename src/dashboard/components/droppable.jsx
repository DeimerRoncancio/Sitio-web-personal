import { useDroppable } from "@dnd-kit/react";
import { RiDragDropLine } from "react-icons/ri";
import DropEmptyBox from "./drop-empty-box";
import { useEffect, useRef, useState } from "react";

export default function Droppable({ children, parent, items }) {
  const { isDropTarget, ref } = useDroppable({ id: "droppable" });
  const scrollRef = useRef(null);
  const dragRef = useRef({ startY: 0, startTop: 0 });
  const [scrollbar, setScrollbar] = useState({ visible: false, height: 0, top: 0 });
  const item = items.find((item) => item.path === window.location.pathname);

  const setScrollFromThumbTop = (thumbTop) => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const maxThumbTop = scrollElement.clientHeight - scrollbar.height;
    const maxScrollTop = scrollElement.scrollHeight - scrollElement.clientHeight;
    const nextThumbTop = Math.min(Math.max(thumbTop, 0), maxThumbTop);

    scrollElement.scrollTop = maxThumbTop > 0 ? (nextThumbTop / maxThumbTop) * maxScrollTop : 0;
  };

  const handleScrollbarDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dragRef.current = { startY: event.clientY, startTop: scrollbar.top };

    const onMove = (moveEvent) => {
      const deltaY = moveEvent.clientY - dragRef.current.startY;
      setScrollFromThumbTop(dragRef.current.startTop + deltaY);
    };

    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const handleScrollbarTrackClick = (event) => {
    if (event.target !== event.currentTarget) return;
    const trackTop = event.currentTarget.getBoundingClientRect().top;
    setScrollFromThumbTop(event.clientY - trackTop - scrollbar.height / 2);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement || parent !== "droppable") return;

    const updateScrollbar = () => {
      const { clientHeight, scrollHeight, scrollTop } = scrollElement;
      const visible = scrollHeight > clientHeight;

      if (!visible) {
        setScrollbar((current) => current.visible ? { visible: false, height: 0, top: 0 } : current);
        return;
      }

      const height = Math.max((clientHeight / scrollHeight) * clientHeight, 48);
      const maxTop = clientHeight - height;
      const top = (scrollTop / (scrollHeight - clientHeight)) * maxTop;

      setScrollbar({ visible, height, top });
    };

    updateScrollbar();
    scrollElement.addEventListener("scroll", updateScrollbar, { passive: true });
    window.addEventListener("resize", updateScrollbar);

    const resizeObserver = new ResizeObserver(updateScrollbar);
    resizeObserver.observe(scrollElement);

    return () => {
      scrollElement.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
      resizeObserver.disconnect();
    };
  }, [parent, item?.path, children]);

  return (
    <div ref={ref} className={`theme-text w-full h-full after:shadow-cyan-800/50 after:inset-0
      after:absolute after:transition-all ease-in after:duration-200 after:z-40
      ${isDropTarget
        ? "after:shadow-[inset_0px_0px_75px_20px] after:opacity-100 after:visible"
        : "after:opacity-0 after:invisible after:duration-75"}`
    }>
      {parent === "droppable"
        ? (<div className="relative h-full w-full">
          <div ref={scrollRef} className="dashboard-scroll h-full w-full overflow-y-auto pb-20 sm:pb-0">
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
          {scrollbar.visible && (
            <div className="dashboard-scrollbar-track" aria-hidden="true" onMouseDown={handleScrollbarTrackClick}>
              <div
                className="dashboard-scrollbar-thumb"
                onMouseDown={handleScrollbarDrag}
                style={{ height: `${scrollbar.height}px`, transform: `translateY(${scrollbar.top}px)` }}
              />
            </div>
          )}
        </div>)
       : <DropEmptyBox isDropTarget={isDropTarget} />}
    </div>
  );
}
