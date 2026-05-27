import { useState, useRef, useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink, FiMonitor } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [currentImg, setCurrentImg] = useState(0);
  const [showLinksMenu, setShowLinksMenu] = useState(false);
  const thumbnailsRef = useRef(null);
  const menuRef = useRef(null);

  const nextImg = () => {
    setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };
  
  const scrollThumbnails = (dir) => {
    if (thumbnailsRef.current) {
      const scrollAmount = dir === 'left' ? -200 : 200;
      thumbnailsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentImg];

      if (activeThumb)
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentImg]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setShowLinksMenu(false);
    };

    if (showLinksMenu) document.addEventListener("mousedown", handleClickOutside);
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showLinksMenu]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animation-fadeInUp">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="theme-modal relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-white/5"
        style={{ backgroundColor: '#10151f' }}
      >
        <div className="h-2 w-full" style={{ backgroundColor: project.theme.bg }} />

        <div className="theme-modal-section flex justify-between items-center p-4 md:px-8 md:pt-6 pb-2 relative z-10 bg-[#10151f]">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl" style={{ backgroundColor: project.theme.bg }}>
              <div className="text-white">
                {project.icon}
              </div>
            </div>
            <div>
              <h3 className="theme-text text-2xl font-bold text-white leading-tight">{project.title}</h3>
              <div className="theme-muted flex items-center gap-1.5 text-white/50 text-sm mt-1">
                <FaRegCalendarAlt size={12} />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="theme-project-action p-2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors flex-shrink-0"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="theme-modal-section flex-1 overflow-y-auto w-full flex flex-col pt-0 pb-6 md:pb-8 px-4 md:px-8 no-scrollbar bg-[#10151f]">
          {project.images && project.images.length > 0 && (
            <div className="flex flex-col gap-4 mt-4">
              <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden group border border-white/10 shadow-lg">
                <img
                  src={project.images[currentImg]}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                {project.images.length > 1 && (
                  <>
                    <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/10">
                      <FiChevronLeft size={24} />
                    </button>
                    <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/10">
                      <FiChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {project.images.length > 1 && (
                <div className="relative group/thumbs">
                  {project.images.length > 6 && (
                    <button 
                      onClick={() => scrollThumbnails('left')}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 z-10 bg-black/60 hover:bg-black text-white p-1.5 rounded-full backdrop-blur-md transition-all opacity-0 group-hover/thumbs:opacity-100 shadow-xl border border-white/10"
                    >
                      <FiChevronLeft size={18} />
                    </button>
                  )}
                  
                  <div ref={thumbnailsRef} className="flex gap-3 overflow-x-auto pb-2 no-scrollbar px-1 scroll-smooth">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImg(idx)}
                        className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden transition-all duration-300 border-2 ${idx === currentImg ? 'border-white brightness-100' : 'border-transparent brightness-50 hover:brightness-75'
                          }`}
                      >
                        <img src={img} alt={`thumbnail ${idx}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>

                  {project.images.length > 6 && (
                    <button 
                      onClick={() => scrollThumbnails('right')}
                      className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 z-10 bg-black/60 hover:bg-black text-white p-1.5 rounded-full backdrop-blur-md transition-all opacity-0 group-hover/thumbs:opacity-100 shadow-xl border border-white/10"
                    >
                      <FiChevronRight size={18} />
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="w-full flex flex-col mt-8">
            <div className="theme-border mb-10 flex flex-col sm:flex-row gap-4 border-b border-white/10 pb-8">
              {/* <button
                className="flex-1 flex justify-center items-center gap-2 py-3.5 md:py-4 rounded-xl font-bold transition-all text-white hover:brightness-110 shadow-lg text-sm md:text-base"
                style={{ backgroundColor: project.theme.btn }}
              >
                <FiExternalLink size={18} /> Ver Proyecto
              </button> */}
              <div className="relative flex-1" ref={menuRef}>
                <button 
                  onClick={() => setShowLinksMenu(!showLinksMenu)}
                  className="theme-project-action w-full h-full flex justify-center items-center gap-2 bg-[#161c27] hover:bg-[#1a212e] border border-white/5 text-white/90 py-3.5 md:py-4 rounded-xl font-bold transition-all shadow-sm text-sm md:text-base"
                >
                  <FiGithub size={18} /> Ver Código Fuente
                </button>
                
                {showLinksMenu && (
                  <div className="theme-modal-soft absolute top-full left-0 right-0 mt-3 p-2 bg-[#161c27] rounded-xl border border-white/10 shadow-2xl flex flex-col gap-2 z-20 animation-fadeInUp">
                    <a
                      href={project.frontendRepo || '#'} 
                      target="_blank" 
                      rel="noreferrer"
                      className="theme-text flex items-center gap-3 w-full p-3 rounded-lg hover:bg-white/5 transition-colors text-white/90 text-sm font-semibold"
                    >
                      <span className="p-2 rounded-lg bg-[#61DAFB]/10 text-[#61DAFB]"><FiMonitor size={16} /></span>
                      Repositorio Frontend
                    </a>
                    {project.backendRepo && (
                      <a 
                        href={project.backendRepo || '#'} 
                        target="_blank" 
                        rel="noreferrer"
                        className="theme-text flex items-center gap-3 w-full p-3 rounded-lg hover:bg-white/5 transition-colors text-white/90 text-sm font-semibold"
                      >
                        <span className="p-2 rounded-lg bg-[#6DB33F]/10 text-[#6DB33F]"><FiExternalLink size={16} /></span>
                        Repositorio Backend
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            <h4 className="theme-text text-xl font-bold text-white mb-3">Resumen del Proyecto</h4>
            <div className="theme-modal-soft p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner">
              <p className="theme-muted text-white/70 text-[15px] md:text-base leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            <h4 className="theme-text text-xl font-bold text-white mt-8 mb-4">Tecnologías Utilizadas</h4>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="theme-chip bg-[#161c27] text-white/80 text-sm font-semibold px-4 py-2 rounded-xl border border-white/5 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

