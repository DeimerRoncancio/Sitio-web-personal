import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  const [currentImg, setCurrentImg] = useState(0);

  if (!project) return null;

  const nextImg = () => {
    setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animation-fadeInUp">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-white/5"
        style={{ backgroundColor: '#10151f' }}
      >
        <div className="h-2 w-full" style={{ backgroundColor: project.theme.bg }} />

        <div className="flex justify-between items-center p-4 md:px-8 md:pt-6 pb-2 relative z-10 bg-[#10151f]">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl" style={{ backgroundColor: project.theme.bg }}>
              <div className="text-white">
                {project.icon}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
              <div className="flex items-center gap-1.5 text-white/50 text-sm mt-1">
                <FaRegCalendarAlt size={12} />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors flex-shrink-0"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto w-full flex flex-col pt-0 pb-6 md:pb-8 px-4 md:px-8 no-scrollbar bg-[#10151f]">
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
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar px-1">
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
              )}
            </div>
          )}

          <div className="w-full flex flex-col mt-8">
            <div className="mb-10 flex flex-col sm:flex-row gap-4 border-b border-white/10 pb-8">
              <button
                className="flex-1 flex justify-center items-center gap-2 py-3.5 md:py-4 rounded-xl font-bold transition-all text-white hover:brightness-110 shadow-lg text-sm md:text-base"
                style={{ backgroundColor: project.theme.btn }}
              >
                <FiExternalLink size={18} /> Ver Proyecto en Vivo
              </button>
              <button className="flex-1 flex justify-center items-center gap-2 bg-[#161c27] hover:bg-[#1a212e] border border-white/5 text-white/90 py-3.5 md:py-4 rounded-xl font-bold transition-all shadow-sm text-sm md:text-base">
                <FiGithub size={18} /> Ver Código Fuente
              </button>
            </div>

            <h4 className="text-xl font-bold text-white mb-3">Resumen del Proyecto</h4>
            <div className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner">
              <p className="text-white/70 text-[15px] md:text-base leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            <h4 className="text-xl font-bold text-white mt-8 mb-4">Tecnologías Utilizadas</h4>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-[#161c27] text-white/80 text-sm font-semibold px-4 py-2 rounded-xl border border-white/5 shadow-sm"
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

