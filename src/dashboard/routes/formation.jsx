import '../../../css/style.css';
import { FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa';

export default function Formation() {
  return (
    <div className="dropable-zone-container py-14 animation-fadeInUp">
      <div className="max-w-3xl space-y-10">
        <div>
          <h1 className="theme-text text-2xl sm:text-3xl font-bold text-white mb-4">Trayectoria Educativa</h1>
          <p className="theme-muted text-[#979fa1] text-sm sm:text-lg leading-relaxed">
            A lo largo de mi carrera, el aprendizaje teórico y práctico ha sido un pilar fundamental. 
            Aquí detallo mi formación académica y las certificaciones con las que he validado 
            mis conocimientos.
          </p>
          <hr className="theme-border border-[#2a3852] my-6" />
        </div>

        <div className="theme-border relative border-l-2 border-[#2a3852] ml-4 md:ml-6 space-y-12 pb-4">
          <div className="relative pl-8 md:pl-12">
            <div className="theme-timeline-marker theme-surface-soft absolute -left-[25px] top-0 bg-[#151c2c] border-4 border-[#7d1ef8] rounded-full p-2">
              <FaGraduationCap size={20} className="theme-timeline-icon text-white" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
              <h2 className="theme-text text-xl sm:text-2xl font-bold text-white">Tecnólogo en Desarrollo de Software</h2>
              <span className="theme-surface-soft theme-accent-text flex items-center gap-2 text-xs font-semibold bg-[#1e273a] text-[#00a4ac] px-3 py-1.5 rounded-full w-max border border-[#2a3852]">
                <FaCalendarAlt /> 2021 - 2023
              </span>
            </div>
            <h3 className="theme-accent-text text-sm sm:text-lg font-medium text-[#00a4ac] mb-4">
              Corporación Universitaría el Minuto de Dios
            </h3>
            <div className="theme-muted text-[#979fa1] space-y-3 leading-relaxed">
              <p>
                Durante mi formación universitaria adquirí sólidas bases en POO, estructuras de datos, 
                algoritmos, bases de datos y desarrollo web. Como proyecto de grado, participé en el
                desarrollo de una plataforma web en WordPress para la conservación ambiental del corredor 
                ecológico de Villavicencio. Esta experiencia me permitió coordinar con entidades clave 
                como la Alcaldía, Cormacarena y la Gobernación del Meta, fortaleciendo mis habilidades en 
                gestión de proyectos con múltiples partes interesadas y la aplicación de tecnología en 
                entornos reales.
              </p>
              <p>
                <strong>Proyecto Destacado:</strong> Desarrollo de una plataforma web para la gestión y 
                visualización de registros multimedia capturados por cámaras trampa de fauna silvestre.
              </p>
            </div>
          </div>

          <div className="relative pl-8 md:pl-12 pt-4">
            <div className="theme-surface-soft absolute -left-[11px] top-[24px] bg-[#2a3852] w-5 h-5 rounded-full"></div>
            <h3 className="theme-text text-xl font-semibold text-white">
              Educación Continua & Certificaciones
            </h3>
            <p className="theme-muted text-[#979fa1] mt-2">
              Cursos profesionales que respaldan mis habilidades técnicas.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="theme-surface-soft absolute -left-[19px] top-1 bg-[#151c2c] border-2 border-[#6DB33F] rounded-full p-2">
              <FaAward size={16} className="text-[#6DB33F]" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
                <h4 className="theme-text text-lg font-bold text-white">
                Spring Framework 6 & Spring Boot 3 desde cero a experto 2024
              </h4>
              <span className="theme-surface-soft theme-muted text-xs w-fit font-semibold text-[#979fa1] bg-[#1e273a] px-3 py-1 rounded border border-[#2a3852]">2024</span>
            </div>
            <p className="theme-accent-text text-sm font-medium text-[#00a4ac] mb-2">Udemy</p>
            <p className="theme-muted text-[#979fa1] text-sm leading-relaxed">
              Especialización en desarrollo backend con Spring Framework 6 y Spring Boot 3. Consolidé 
              habilidades técnicas para diseñar aplicaciones seguras y escalables, dominando principios de 
              diseño y buenas prácticas para asegurar un desarrollo eficiente y código limpio.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="theme-surface-soft absolute -left-[19px] top-1 bg-[#151c2c] border-2 border-[#6DB33F] rounded-full p-2">
              <FaAward size={16} className="text-[#6DB33F]" />
            </div>
             <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
              <h4 className="theme-text text-lg font-bold text-white">Diseñando páginas web con Bootstrap 4</h4>
              <span className="theme-surface-soft theme-muted text-xs w-fit font-semibold text-[#979fa1] bg-[#1e273a] px-3 py-1 rounded border border-[#2a3852]">2023</span>
            </div>
            <p className="theme-accent-text text-sm font-medium text-[#00a4ac] mb-2">Coursera - Universidad Austral</p>
            <p className="theme-muted text-[#979fa1] text-sm leading-relaxed">
              Aprendí a diseñar interfaces de usuario responsivas y atractivas utilizando Bootstrap 4, 
              implementando componentes y patrones de diseño para crear experiencias de usuario coherentes 
              y funcionales.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="theme-surface-soft absolute -left-[19px] top-1 bg-[#151c2c] border-2 border-[#6DB33F] rounded-full p-2">
              <FaAward size={16} className="text-[#6DB33F]" />
            </div>
             <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
              <h4 className="theme-text text-lg font-bold text-white">Programación Básica</h4>
              <span className="theme-surface-soft theme-muted text-xs w-fit font-semibold text-[#979fa1] bg-[#1e273a] px-3 py-1 rounded border border-[#2a3852]">2023</span>
            </div>
            <p className="theme-accent-text text-sm font-medium text-[#00a4ac] mb-2">Platzi</p>
            <p className="theme-muted text-[#979fa1] text-sm leading-relaxed">
              Curso introductorio a la programación, donde reaprendí conceptos fundamentales y mejoré 
              mis habilidades en lógica de programación y resolución de problemas.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
