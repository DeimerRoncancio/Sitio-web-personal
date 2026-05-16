import { useDroppable } from "@dnd-kit/react";
import { RiDragDropLine } from "react-icons/ri";
import DropEmptyBox from "./drop-empty-box";
import { useEffect } from "react";

export default function Droppable({ children, parent, items }) {
  const { isDropTarget, ref } = useDroppable({ id: "droppable" });
  const item = items.find((item) => item.path === window.location.pathname);

  return (
    <div ref={ref} className={`w-full h-full after:shadow-[inset_0px_0px_75px_10px] text-white
      overflow-y-auto after:shadow-cyan-800/50 after:inset-0 after:absolute after:transition-all}
      ease-in after:duration-200
      ${isDropTarget
        ? "after:shadow-[inset_0px_0px_75px_20px] after:opacity-100 after:visible"
        : "after:opacity-0 after:invisible after:duration-75"}`
    }>
      {parent === "droppable"
        ? (<>
            <div className="w-full flex bg-[#111621] p-5 border-b border-[#2a3852]">
              <div className="bg-[#1d5771] text-3xl p-2 rounded-xl mr-5 text-[#0fc6f8]">
                {item?.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{item?.name}</h2>
                <p className="text-gray-400 text-sm">{item?.description}</p>
              </div>
            </div>
            {children}
          </>)
       : <DropEmptyBox isDropTarget={isDropTarget} />}
    </div>
  );
}
