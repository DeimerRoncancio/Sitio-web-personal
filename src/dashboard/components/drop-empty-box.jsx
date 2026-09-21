import { RiDragDropLine } from "react-icons/ri";

export default function DropEmptyBox({ isDropTarget }) {
  return (
    <div className="drop-zone">
      <div className={`drop-zone__inner ${isDropTarget ? 'is-target' : ''}`}>
        <div className="drop-zone__icon">
          <RiDragDropLine size={28} />
        </div>
        <p className="drop-zone__eyebrow">Zona de trabajo</p>
        <h2 className="drop-zone__title">Suelta un módulo aquí</h2>
        <p className="drop-zone__description">
          Arrastra una tarjeta desde el panel de navegación, o actívala con click
          para cargar su contenido en este mismo marco.
        </p>
        <span className="drop-zone__hint">
          <kbd>Enter</kbd> o <kbd>Espacio</kbd> también funcionan
        </span>
      </div>
    </div>
  );
}
