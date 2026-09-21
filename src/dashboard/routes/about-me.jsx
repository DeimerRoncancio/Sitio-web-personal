import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiZap } from "react-icons/fi";

const actions = [
  {
    label: 'Email',
    href: 'mailto:deimerroncancio@gmail.com',
    icon: <FiMail size={15} />,
    primary: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deimer-roncancio/',
    icon: <FiLinkedin size={15} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/DeimerRoncancio',
    icon: <FiGithub size={15} />,
  },
];

export default function AboutMe() {
  return (
    <div className="droppable-zone-container animation-fadeInUp">
      <div className="flex flex-col gap-9">
        <div className="card p-6 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative shrink-0">
            <div className="theme-about-avatar w-24 h-24 rounded-2xl border flex items-center justify-center">
              <svg className="w-11 h-11 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div className="theme-about-status absolute -bottom-1 -right-1 rounded-full p-1.5 border-4">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full items-center sm:items-start">
            <h1 className="theme-text text-2xl font-bold tracking-tight">Deimer Roncancio</h1>

            <p className="theme-accent-text flex items-center gap-2 text-sm font-semibold">
              <FiZap size={15} />
              Desarrollador Fullstack Java
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-1">
              <span className="meta-chip">
                <FiMapPin size={11} />
                Villavicencio, Colombia
              </span>
              <span className="meta-chip meta-chip--ok">
                <span className="theme-availability-dot w-1.5 h-1.5 rounded-full" />
                Disponible
              </span>
            </div>
          </div>
        </div>

        <section>
          <header>
            <p className="section-eyebrow">Perfil</p>
            <h2 className="section-title">Sobre mí</h2>
          </header>
          <p className="theme-muted leading-relaxed text-sm sm:text-[15px] mt-4">
            Desarrollador Fullstack especializado en Backend con
            <span className="theme-accent-text font-semibold"> Java </span>
            y <span className="theme-accent-text font-semibold">Spring Boot</span>, y sólida
            experiencia en Frontend con <span className="theme-accent-text font-semibold">React</span>.
            Me enfoco en construir soluciones robustas y seguras, aplicando Spring Security para el
            control de accesos y autenticación. Mi stack técnico se complementa con la gestión avanzada
            de datos mediante Hibernate, JPA y bases de datos SQL, además de la optimización de entornos
            con Docker y Git.
          </p>
        </section>

        <div className="flex gap-2.5 flex-wrap">
          {actions.map(({ label, href, icon, primary }) => (
            <a
              key={label}
              className={`${primary ? 'theme-about-action-primary' : 'theme-about-action-secondary'} inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors`}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
