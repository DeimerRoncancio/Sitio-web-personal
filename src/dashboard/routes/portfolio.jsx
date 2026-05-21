import { useState } from 'react';
import '../../../css/style.css';
import { BsStars } from "react-icons/bs";
import { projects } from '../constants/proyects';
import ProjectCard from '../components/project-card';
import ProjectModal from '../components/project-modal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="dropable-zone-container py-14 animation-fadeInUp">
      <div className="max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <BsStars className="text-yellow-400" size={26} />
            Proyectos Destacados
          </h1>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
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
