import { useState, useRef, useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink, FiMonitor } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [showLinksMenu, setShowLinksMenu] = useState(false);
  const thumbnailsRef = useRef(null);
  const menuRef = useRef(null);

  const images = project?.images ?? [];

  const step = (delta) => () =>
    setCurrentImg((prev) => (prev + delta + images.length) % images.length);

  const scrollThumbnails = (dir) => {
    thumbnailsRef.current?.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
  };

  useEffect(() => {
    const activeThumb = thumbnailsRef.current?.children[currentImg];
    activeThumb?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [currentImg]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setShowLinksMenu(false);
    };

    if (showLinksMenu) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showLinksMenu]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animation-fadeInUp">
      <div className="modal-backdrop" onClick={onClose} />

      <div className="modal-shell" style={{ '--project-accent': project.theme.border }}>
        <div className="modal-shell__rail" />

        <div className="flex justify-between items-center gap-4 p-4 md:px-7 md:pt-6 md:pb-3">
          <div className="flex items-center gap-4 min-w-0">
            <div className="modal-icon">{project.icon}</div>
            <div className="min-w-0">
              <h3 className="theme-text text-xl md:text-2xl font-bold leading-tight truncate">
                {project.title}
              </h3>
              <span className="meta-chip mt-2">
                <FaRegCalendarAlt size={11} />
                {project.year}
              </span>
            </div>
          </div>
          <button onClick={onClose} className="modal-close" aria-label="Cerrar">
            <FiX size={19} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto w-full flex flex-col pt-2 pb-6 md:pb-8 px-4 md:px-7 no-scrollbar">
          {images.length > 0 && (
            <div className="flex flex-col gap-3">
              <div className="modal-figure group">
                <img
                  src={images[currentImg]}
                  alt={`Captura de ${project.title}`}
                  loading="lazy"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={step(-1)}
                      className="modal-nav absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Imagen anterior"
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button
                      onClick={step(1)}
                      className="modal-nav absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Imagen siguiente"
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="relative group/thumbs">
                  {images.length > 6 && (
                    <button
                      onClick={() => scrollThumbnails('left')}
                      className="modal-nav !w-7 !h-7 absolute left-0 top-1/2 -translate-y-1/2 -ml-2 z-10 opacity-0 group-hover/thumbs:opacity-100 transition-opacity"
                      aria-label="Desplazar miniaturas a la izquierda"
                    >
                      <FiChevronLeft size={15} />
                    </button>
                  )}

                  <div ref={thumbnailsRef} className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar px-1 scroll-smooth">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImg(idx)}
                        className={`modal-thumb ${idx === currentImg ? 'is-current' : ''}`}
                        aria-label={`Ver imagen ${idx + 1}`}
                      >
                        <img src={img} alt="" loading="lazy" />
                      </button>
                    ))}
                  </div>

                  {images.length > 6 && (
                    <button
                      onClick={() => scrollThumbnails('right')}
                      className="modal-nav !w-7 !h-7 absolute right-0 top-1/2 -translate-y-1/2 -mr-2 z-10 opacity-0 group-hover/thumbs:opacity-100 transition-opacity"
                      aria-label="Desplazar miniaturas a la derecha"
                    >
                      <FiChevronRight size={15} />
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="w-full flex flex-col mt-7">
            <div className="theme-border flex flex-col sm:flex-row gap-3 border-b pb-7 mb-8">
              <div className="relative flex-1" ref={menuRef}>
                <button
                  onClick={() => setShowLinksMenu(!showLinksMenu)}
                  aria-expanded={showLinksMenu}
                  className="modal-action"
                >
                  <FiGithub size={17} /> Ver Código Fuente
                </button>

                {showLinksMenu && (
                  <div className="modal-menu animation-fadeInUp">
                    <a href={project.frontendRepo || '#'} target="_blank" rel="noreferrer">
                      <span className="p-2 rounded-lg bg-[#61DAFB]/10 text-[#61DAFB]">
                        <FiMonitor size={15} />
                      </span>
                      Repositorio Frontend
                    </a>
                    {project.backendRepo && (
                      <a href={project.backendRepo} target="_blank" rel="noreferrer">
                        <span className="p-2 rounded-lg bg-[#6DB33F]/10 text-[#6DB33F]">
                          <FiExternalLink size={15} />
                        </span>
                        Repositorio Backend
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            <h4 className="modal-heading mb-3">Resumen del Proyecto</h4>
            <div className="modal-panel">
              <p className="theme-muted text-[14.5px] leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            <h4 className="modal-heading mt-8 mb-3.5">Tecnologías Utilizadas</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="tech-tag !text-[11.5px] !px-3 !py-1.5">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
