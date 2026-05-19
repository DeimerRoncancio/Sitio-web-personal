import '../../../css/style.css';
import { FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa';

export default function Formation() {
  return (
    <div className="dropable-zone-container py-14 animation-fadeInUp">
      <div className="max-w-3xl space-y-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">Trayectoria Educativa</h1>
          <p className="text-[#979fa1] text-lg leading-relaxed">
            A lo largo de mi carrera, el aprendizaje teórico y práctico ha sido un pilar fundamental. Aquí detallo mi formación académica y las certificaciones con las que he validado mis conocimientos.
          </p>
          <hr className="border-[#2a3852] my-6" />
        </div>

        <div className="relative border-l-2 border-[#2a3852] ml-4 md:ml-6 space-y-12 pb-4">
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[25px] top-0 bg-[#151c2c] border-4 border-[#00a4ac] rounded-full p-2">
              <FaGraduationCap size={20} className="text-white" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
              <h2 className="text-2xl font-bold text-white">Título Universitario en [Tu Carrera]</h2>
              <span className="flex items-center gap-2 text-xs font-semibold bg-[#1e273a] text-[#00a4ac] px-3 py-1.5 rounded-full w-max border border-[#2a3852]">
                <FaCalendarAlt /> [Año Inicio] - [Año Fin]
              </span>
            </div>
            <h3 className="text-lg font-medium text-[#00a4ac] mb-4">[Nombre de la Universidad]</h3>
            <div className="text-[#979fa1] space-y-3 leading-relaxed">
              <p>
                Durante mi paso por la universidad desarrollé sólidas bases en áreas fundamentales [Ej: estructuras de datos, algoritmos, arquitectura de software y metodologías ágiles].
              </p>
              <p>
                <strong>Proyecto Destacado:</strong> [Describe brevemente el sistema, aplicación o tesis de grado que creaste, las tecnologías que uniste y qué te enseñó en la práctica].
              </p>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12 pt-4">
            <div className="absolute -left-[11px] top-[24px] bg-[#2a3852] w-5 h-5 rounded-full"></div>
            <h3 className="text-xl font-semibold text-white">Educación Continua & Certificaciones</h3>
            <p className="text-[#979fa1] mt-2">Cursos profesionales que respaldan mis habilidades técnicas.</p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[19px] top-1 bg-[#151c2c] border-2 border-[#00a4ac] rounded-full p-2">
              <FaAward size={16} className="text-[#00a4ac]" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
              <h4 className="text-lg font-bold text-white">[Nombre de Certificación 1]</h4>
              <span className="text-xs font-semibold text-[#979fa1] bg-[#1e273a] px-3 py-1 rounded border border-[#2a3852]">[Año]</span>
            </div>
            <p className="text-sm font-medium text-[#00a4ac] mb-2">[Organización Emisora]</p>
            <p className="text-[#979fa1] text-sm leading-relaxed">
              [Describe en una o dos líneas lo que aprendiste: qué tecnologías aplicaste, qué problema resolvía o qué arquitectura te enseñó a implementar de forma profesional].
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[19px] top-1 bg-[#151c2c] border-2 border-[#00a4ac] rounded-full p-2">
              <FaAward size={16} className="text-[#00a4ac]" />
            </div>
             <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
              <h4 className="text-lg font-bold text-white">[Nombre de Certificación 2]</h4>
              <span className="text-xs font-semibold text-[#979fa1] bg-[#1e273a] px-3 py-1 rounded border border-[#2a3852]">[Año]</span>
            </div>
            <p className="text-sm font-medium text-[#00a4ac] mb-2">[Organización Emisora]</p>
            <p className="text-[#979fa1] text-sm leading-relaxed">
              [Describe brevemente el alcance del curso, cómo lo usaste para fortalecer tus conocimientos de base, o si aplicaste código funcional a un portafolio como resultado].
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[19px] top-1 bg-[#151c2c] border-2 border-[#00a4ac] rounded-full p-2">
              <FaAward size={16} className="text-[#00a4ac]" />
            </div>
             <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
              <h4 className="text-lg font-bold text-white">[Nombre de Certificación 3]</h4>
              <span className="text-xs font-semibold text-[#979fa1] bg-[#1e273a] px-3 py-1 rounded border border-[#2a3852]">[Año]</span>
            </div>
            <p className="text-sm font-medium text-[#00a4ac] mb-2">[Organización Emisora]</p>
            <p className="text-[#979fa1] text-sm leading-relaxed">
              [Añade una descripción final sobre este contenido: si estuvo enfocado a buenas prácticas, despliegue, automatización o construcción de frontends avanzados].
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
