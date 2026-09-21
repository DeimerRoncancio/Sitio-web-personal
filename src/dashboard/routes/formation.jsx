import { FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa';

const certifications = [
  {
    title: 'Spring Framework 6 & Spring Boot 3 desde cero a experto 2024',
    org: 'Udemy',
    year: '2024',
    description: 'Especialización en desarrollo backend con Spring Framework 6 y Spring Boot 3. Consolidé habilidades técnicas para diseñar aplicaciones seguras y escalables, dominando principios de diseño y buenas prácticas para asegurar un desarrollo eficiente y código limpio.',
  },
  {
    title: 'Diseñando páginas web con Bootstrap 4',
    org: 'Coursera - Universidad Austral',
    year: '2023',
    description: 'Aprendí a diseñar interfaces de usuario responsivas y atractivas utilizando Bootstrap 4, implementando componentes y patrones de diseño para crear experiencias de usuario coherentes y funcionales.',
  },
  {
    title: 'Programación Básica',
    org: 'Platzi',
    year: '2023',
    description: 'Curso introductorio a la programación, donde reaprendí conceptos fundamentales y mejoré mis habilidades en lógica de programación y resolución de problemas.',
  },
];

export default function Formation() {
  return (
    <div className="droppable-zone-container animation-fadeInUp">
      <div className="max-w-3xl">
        <header className="mb-9">
          <p className="section-eyebrow">Trayectoria</p>
          <h1 className="section-title !text-2xl sm:!text-[26px]">Trayectoria Educativa</h1>
          <p className="section-lead">
            A lo largo de mi carrera, el aprendizaje teórico y práctico ha sido un pilar
            fundamental. Aquí detallo mi formación académica y las certificaciones con las
            que he validado mis conocimientos.
          </p>
        </header>

        <div className="timeline ml-5 md:ml-6 space-y-11 pb-4">
          <section className="relative pl-8 md:pl-11">
            <div
              className="timeline__marker timeline__marker--lg top-0"
              style={{ '--marker-accent': '#a78bfa' }}
            >
              <FaGraduationCap size={18} />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
              <h2 className="theme-text text-lg sm:text-xl font-bold">
                Tecnólogo en Desarrollo de Software
              </h2>
              <span className="meta-chip">
                <FaCalendarAlt /> 2021 — 2023
              </span>
            </div>
            <p className="timeline__org mb-4">Corporación Universitaria el Minuto de Dios</p>
            <div className="theme-muted space-y-3 text-sm leading-relaxed">
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
                <strong className="theme-text font-semibold">Proyecto Destacado:</strong> Desarrollo de
                una plataforma web para la gestión y visualización de registros multimedia capturados por
                cámaras trampa de fauna silvestre.
              </p>
            </div>
          </section>

          <section className="relative pl-8 md:pl-11 pt-2">
            <div className="timeline__dot top-[18px]" />
            <h2 className="theme-text text-lg font-semibold">
              Educación Continua & Certificaciones
            </h2>
            <p className="theme-muted text-sm mt-1.5">
              Cursos profesionales que respaldan mis habilidades técnicas.
            </p>
          </section>

          {certifications.map((cert) => (
            <section key={cert.title} className="relative pl-8 md:pl-11">
              <div
                className="timeline__marker timeline__marker--sm top-0"
                style={{ '--marker-accent': '#6db33f' }}
              >
                <FaAward size={14} />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-1.5 gap-2">
                <h3 className="theme-text text-base font-bold">{cert.title}</h3>
                <span className="meta-chip">{cert.year}</span>
              </div>
              <p className="timeline__org mb-2">{cert.org}</p>
              <p className="theme-muted text-sm leading-relaxed">{cert.description}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
