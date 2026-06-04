import { RiDragDropLine } from "react-icons/ri";

export default function DropEmptyBox({ isDropTarget }) {
  return (
    <div className='theme-empty-box w-full h-full p-28 px-4 sm:px-32'>
      <div className={`theme-empty-box-inner ${isDropTarget ? 'theme-empty-box-inner-active' : ''} w-full h-full flex flex-col justify-center items-center
        outline-2 outline-offset-2 border-2 border-dashed
        ${isDropTarget && "outline scale-105"}
        rounded-2xl transition-all duration-300`
      }>
        <div className={`theme-empty-box-icon ${isDropTarget ? 'theme-empty-box-icon-active' : ''} w-16 h-16 rounded-2xl
          flex items-center justify-center mb-4`
        }>
          <RiDragDropLine size={35} />
        </div>
        <h2 className='theme-empty-box-title text-xl font-bold mb-2'>Suelta los elementos aquí</h2>
        <p className='theme-empty-box-description text-center px-4 text-sm font-medium sm:w-96'>
          Arrastra o haz click en los elementos desde el panel izquierdo para ver su contenido aquí
        </p>
      </div>
    </div>
  );
}
