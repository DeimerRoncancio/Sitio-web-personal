import { RiDragDropLine } from "react-icons/ri";

export default function DropEmptyBox({ isDropTarget }) {
  return (
    <div className='theme-empty-box w-full h-full text-[#888] p-28 px-4 sm:px-32'>
      <div className={`theme-empty-box-inner w-full h-full flex flex-col justify-center items-center
        outline-2 outline-[#888] outline-offset-2 border-2 border-dashed border-[#888888]
        ${isDropTarget && "outline-cyan-500 outline scale-105 !text-[#dfe1e6] !border-[#dfe1e6]"}
        rounded-2xl transition-all duration-300`
      }>
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00a1cd59] to-[#0080a038]
          ${isDropTarget && "!from-[#00a1cd59] !to-[#0080a038]"}
          flex items-center justify-center mb-4`
        }>
          <RiDragDropLine size={35} className={`text-[#00a2ce] ${isDropTarget && "text-[#00c8ff]"} `} />
        </div>
        <h2 className='theme-text text-xl font-bold mb-2 text-[#eeeeee]'>Suelta los elementos aquí</h2>
        <p className='theme-muted text-center px-4 text-sm text-[#8f8f8f] font-medium sm:w-96'>
          Arrastra o haz click en los elementos desde el panel izquierdo para ver su contenido aquí
        </p>
      </div>
    </div>
  );
}
