import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

/**
 * Full-screen viewer for a project's screenshots. The index is owned by the
 * caller so the modal and the viewer stay on the same image.
 * Rendered in a portal: the modal animates with a transform, which would
 * otherwise turn `position: fixed` into "fixed to the modal".
 */
export default function ImageViewer({ images, index, onIndexChange, onClose, title, accent }) {
  const thumbsRef = useRef(null);
  const multiple = images.length > 1;

  const go = (delta) => onIndexChange((index + delta + images.length) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (!multiple) return;
      if (e.key === 'ArrowLeft') onIndexChange((index - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onIndexChange((index + 1) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, images.length, multiple, onClose, onIndexChange]);

  useEffect(() => {
    const strip = thumbsRef.current;
    const active = strip?.children[index];
    if (!active) return;
    strip.scrollTo({
      left: active.offsetLeft - (strip.clientWidth - active.offsetWidth) / 2,
      behavior: 'smooth',
    });
  }, [index]);

  return createPortal(
    <div
      className="viewer"
      style={{ '--project-accent': accent }}
      role="dialog"
      aria-modal="true"
      aria-label={`Imágenes de ${title}`}
    >
      <div className="viewer__backdrop" onClick={onClose} />

      <div className="viewer__bar">
        <span className="viewer__counter">
          {index + 1} / {images.length}
        </span>
        <button onClick={onClose} className="viewer__btn" aria-label="Cerrar visor">
          <FiX size={20} />
        </button>
      </div>

      <div className="viewer__stage" onClick={onClose}>
        <img
          key={images[index]}
          src={images[index]}
          alt={`Captura ${index + 1} de ${title}`}
          className="viewer__img"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {multiple && (
        <>
          <button
            onClick={() => go(-1)}
            className="viewer__btn viewer__btn--nav left-3 sm:left-6"
            aria-label="Imagen anterior"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={() => go(1)}
            className="viewer__btn viewer__btn--nav right-3 sm:right-6"
            aria-label="Imagen siguiente"
          >
            <FiChevronRight size={24} />
          </button>

          <div ref={thumbsRef} className="viewer__thumbs no-scrollbar">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onIndexChange(idx)}
                className={`viewer__thumb ${idx === index ? 'is-current' : ''}`}
                aria-label={`Ver imagen ${idx + 1}`}
              >
                <img src={img} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>,
    document.body
  );
}
