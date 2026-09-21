import { useNavigate } from 'react-router-dom';

import logo from '/public/brand/Logo.webp';
import logoLg from '/public/brand/LogoLg.webp';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { FiArrowRight } from 'react-icons/fi';
import { useContext } from 'react';
import useChangeTheme from '../../dashboard/hooks/useChangeTheme';
import ThemeMenu from '../../dashboard/components/theme-menu';
import { viewContext } from '../../context/viewContext';

const socials = [
  { label: 'LinkedIn', icon: <AiFillLinkedin />, href: "https://www.linkedin.com/in/deimer-roncancio" },
  { label: 'GitHub', icon: <AiFillGithub />, href: "https://github.com/DeimerRoncancio" },
  { label: 'Facebook', icon: <BsFacebook />, href: "https://www.facebook.com/deison.deiss12/?locale=es_LA" },
  { label: 'Twitter', icon: <BsTwitter />, href: "https://twitter.com/DeimerRoncancio" },
  { label: 'Instagram', icon: <RiInstagramFill />, href: "https://www.instagram.com/deimerroncancio/" },
];

export default function WelcomePageComponent() {
  const navigate = useNavigate();
  const { menuRef, theme, showToggleTheme, toggleTheme, toggleShowTheme } = useChangeTheme();
  const { blockPage } = useContext(viewContext);

  return (
    <div className="welcome selection:bg-cyan-500 selection:text-white">
      <div className="absolute top-0 left-0 m-6 md:m-8 z-20 animation-fadeInUp">
        <a href="/" className="inline-block transition-transform hover:scale-105">
          <img className="theme-brand-logo w-[92px]" src={logo} alt="Logo" />
        </a>
      </div>

      <div className="absolute top-0 right-0 m-6 md:m-8 z-20 animation-fadeInUp" ref={menuRef}>
        <button
          aria-label="Cambiar tema"
          aria-expanded={showToggleTheme}
          className="welcome__theme-button"
          onClick={toggleShowTheme}
        >
          Cambiar Tema
        </button>

        {showToggleTheme && (
          <ThemeMenu theme={theme} onSelect={toggleTheme} className="mt-3 origin-top-right" />
        )}
      </div>

      <div className="welcome__rail hidden md:flex flex-col absolute left-8 top-1/2 -translate-y-1/2 z-20 animation-fadeInUp gap-6">
        {socials.map((social) => (
          <a
            key={social.label}
            target="_blank"
            rel="noreferrer"
            href={social.href}
            aria-label={social.label}
            className="welcome__social relative group"
          >
            {social.icon}
            <span className="meta-chip absolute left-9 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {social.label}
            </span>
          </a>
        ))}
      </div>

      <div className="relative flex flex-col w-full h-full justify-center items-center z-10 p-4 text-center">
        <div className="mb-7 md:mb-9 animation-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <img className="theme-brand-logo w-[260px]" src={logoLg} alt="DevDeimer" />
        </div>

        <div className="animation-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <p className="welcome__eyebrow">
            <span className="welcome__status-dot" />
            Disponible para proyectos
          </p>

          <h1 className="welcome__name">Deimer Roncancio Avila</h1>

          <p className="welcome__role">
            <span>Desarrollador de Software</span>
            <span className="welcome__role-sep" />
            <span>Fullstack Java</span>
          </p>
        </div>

        <div className="animation-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => navigate(blockPage ? "/dashboard/about" : "/dashboard")}
            className="welcome__cta"
          >
            Ver Portafolio
            <FiArrowRight size={20} />
          </button>
        </div>

        <div className="md:hidden flex gap-7 mt-14 animation-fadeInUp" style={{ animationDelay: '0.4s' }}>
          {socials.map((social) => (
            <a
              key={social.label}
              target="_blank"
              rel="noreferrer"
              href={social.href}
              aria-label={social.label}
              className="welcome__social"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
