import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiEye } from "react-icons/fi";

export default function ProjectCard({ project, onOpen }) {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = (e) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = (e) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <div
      className="theme-project-card group relative rounded-2xl flex flex-col p-6 overflow-hidden border-2 shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{
        backgroundColor: project.theme.bg,
        borderColor: project.theme.border,
        '--project-bg': project.theme.bg,
        '--project-border': project.theme.border,
        '--project-light-bg': project.theme.lightBg,
        '--project-light-border': project.theme.lightBorder,
      }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-[100px] transition-all
        duration-500 ease-out transform origin-top-right group-hover:scale-[1.5] group-hover:bg-white/10
        pointer-events-none"
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <div className="theme-chip bg-black/20 p-2.5 rounded-2xl border border-white/10 text-white/90">
            {project.icon}
          </div>
          <div className="theme-text-soft flex items-center gap-1.5 text-white/70 font-medium text-sm">
            <FaRegCalendarAlt />
            <span>{project.year}</span>
          </div>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden group/carousel bg-black/20 border border-white/5 shadow-inner">
            <img
              src={project.images[currentImg]}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover transition-opacity duration-300"
            />

            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
              <button onClick={prevImg} className="bg-black/50 hover:bg-black/80 text-white p-1 rounded-full backdrop-blur-sm transition-colors">
                <FiChevronLeft size={16} />
              </button>
              <button onClick={nextImg} className="bg-black/50 hover:bg-black/80 text-white p-1 rounded-full backdrop-blur-sm transition-colors">
                <FiChevronRight size={16} />
              </button>
            </div>

            <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
              {project.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImg ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        )}

        <h4 className="theme-text text-white text-lg font-bold mb-1">{project.title}</h4>
        <p className="theme-text-soft text-white/70 text-sm mb-4 min-h-[40px] leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="theme-chip bg-black/30 text-white/80 text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex mt-auto">
          <button
            onClick={onOpen}
            className="theme-project-action flex-1 flex items-center justify-center gap-2 bg-[#10151f] hover:bg-black/60 text-white/90 text-sm font-semibold py-2 rounded-xl transition-colors border border-transparent hover:border-white/10"
          >
            <FiEye size={16} /> Ver Proyecto
          </button>
        </div>
      </div>
    </div>
  );
};
