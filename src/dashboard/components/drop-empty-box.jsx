import { RiDragDropLine } from "react-icons/ri";

export default function DropEmptyBox({ isDropTarget }) {
  return (
    <div className='w-full h-full text-[#888] p-28 px-32'>
      <div className={`w-full h-full flex flex-col bg-[#2a3344] justify-center items-center
        outline-2 outline-[#888] outline-offset-2 border-2 border-dashed border-[#888888]
        ${isDropTarget && "outline-cyan-500 outline !bg-[#2f3b52] scale-105 text-[#bec1c7]"}
        rounded-2xl transition-all duration-300`
      }>
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00a1cd59] to-[#0080a038]
          ${isDropTarget && "!from-[#00a1cd59] !to-[#0080a038]"}
          flex items-center justify-center mb-4`
        }>
          <RiDragDropLine size={35} className={`text-[#00a2ce] ${isDropTarget && "text-[#00c8ff]"} `} />
        </div>
        <p className='text-center text-lg w-96'>
          Arrastra o haz click en los elementos desde el panel izquierdo para ver su contenido aquí
        </p>
      </div>
    </div>
  );
}
