import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiEye } from "react-icons/fi";

export default function ProjectCard({ project, onOpen }) {
  const [currentImg, setCurrentImg] = useState(0);
  const hasImages = project.images && project.images.length > 0;

  const step = (delta) => (e) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev + delta + project.images.length) % project.images.length);
  };

  return (
    <div
      className="project-card group"
      style={{ '--project-accent': project.theme.border }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="project-card__icon">{project.icon}</div>
        <span className="meta-chip">
          <FaRegCalendarAlt />
          {project.year}
        </span>
      </div>

      {hasImages && (
        <div className="project-card__media group/carousel">
          <img
            src={project.images[currentImg]}
            alt={`Captura de ${project.title}`}
            loading="lazy"
          />

          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
            <button onClick={step(-1)} className="project-card__nav" aria-label="Imagen anterior">
              <FiChevronLeft size={14} />
            </button>
            <button onClick={step(1)} className="project-card__nav" aria-label="Imagen siguiente">
              <FiChevronRight size={14} />
            </button>
          </div>

          <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5">
            {project.images.map((_, idx) => (
              <div
                key={idx}
                className={`project-card__dot ${idx === currentImg ? 'is-current' : ''}`}
              />
            ))}
          </div>
        </div>
      )}

      <h4 className="project-card__title">{project.title}</h4>
      <p className="project-card__desc">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>

      <button onClick={onOpen} className="project-card__action">
        <FiEye size={15} /> Ver Proyecto
      </button>
    </div>
  );
}
