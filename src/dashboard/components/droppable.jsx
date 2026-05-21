import { useDroppable } from "@dnd-kit/react";
import { RiDragDropLine } from "react-icons/ri";
import DropEmptyBox from "./drop-empty-box";
import { useEffect } from "react";

export default function Droppable({ children, parent, items }) {
  const { isDropTarget, ref } = useDroppable({ id: "droppable" });
  const item = items.find((item) => item.path === window.location.pathname);

  return (
    <div ref={ref} className={`w-full h-full text-white after:shadow-cyan-800/50 after:inset-0
      after:absolute after:transition-all ease-in after:duration-200 after:z-40
      ${isDropTarget
        ? "after:shadow-[inset_0px_0px_75px_20px] after:opacity-100 after:visible"
        : "after:opacity-0 after:invisible after:duration-75"}`
    }>
      {parent === "droppable"
        ? (<div className="h-full w-full overflow-y-auto">
            <div className="w-full flex bg-[#111621] p-4 border-b border-[#2a3852] sticky top-0 z-20 items-center">
              <div className="bg-[#1d5771] text-2xl p-2 rounded-xl mr-5 text-[#0fc6f8]">
                {item?.icon}
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold">{item?.name}</h2>
                <p className="text-gray-400 text-xs">{item?.description}</p>
              </div>
            </div>
            {children}
          </div>)
       : <DropEmptyBox isDropTarget={isDropTarget} />}
    </div>
  );
}
