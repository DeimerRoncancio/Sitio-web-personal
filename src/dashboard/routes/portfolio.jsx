import { useState } from 'react';
import { BsStars } from "react-icons/bs";
import { projects } from '../constants/proyects';
import ProjectCard from '../components/project-card';
import ProjectModal from '../components/project-modal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="droppable-zone-container animation-fadeInUp">
      <div className="max-w-5xl">
        <header className="mb-7">
          <p className="section-eyebrow">
            {String(projects.length).padStart(2, '0')} proyectos
          </p>
          <h1 className="section-title flex items-center gap-2.5">
            <BsStars className="text-yellow-400" size={22} />
            Proyectos Destacados
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onOpen={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
