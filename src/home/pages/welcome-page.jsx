import { Link, useNavigate } from 'react-router-dom';

import logo from '/public/brand/Logo.webp';
import logoLg from '/public/brand/LogoLg.webp';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { FiArrowRight, FiSun, FiMoon, FiMonitor, FiCheck } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import { use } from 'react';
import useChangeTheme from '../../dashboard/hooks/useChangeTheme';
import { useContext } from 'react';
import { viewContext } from '../../context/viewContext';

export default function WelcomePageComponent() {
  const navigate = useNavigate();
  const { menuRef, theme, showToggleTheme, toggleTheme, toggleShowTheme } = useChangeTheme();
  const { blockPage } = useContext(viewContext);

  return (
    <div className="theme-welcome relative flex w-screen h-screen bg-blue-900 dark:bg-[#171e2c] overflow-hidden selection:bg-cyan-500 selection:text-white font-sans">
      <div className='absolute top-0 left-0 m-6 md:m-8 z-20 animation-fadeInUp'>
        <a href="/" className="inline-block transition-transform hover:scale-105">
          <img className="theme-brand-logo w-[100px]" src={logo} alt="Logo" />
        </a>
      </div>

      <div className='absolute top-0 right-0 m-6 md:m-8 z-20 animation-fadeInUp' ref={menuRef}>
        <button
          aria-label="Cambiar tema"
          className="theme-welcome-theme-button theme-surface theme-muted px-4 py-2 rounded-full text-sm text-white/70 bg-gradient-to-tr from-transparent to-white/2 border border-white/10 hover:bg-white/5 hover:text-white transition-colors shadow-sm backdrop-blur-sm"
          onClick={toggleShowTheme}
        >
          Cambiar Tema
        </button>

        {showToggleTheme && (
          <div className="theme-menu-dropdown absolute right-0 mt-3 w-48 bg-white dark:bg-[#1b2435] border border-gray-100 dark:border-[#2a3852] rounded-xl shadow-2xl p-1.5 flex flex-col gap-1 z-50 transform origin-top-right transition-all">
              <button
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${theme === 'dark' ? 'bg-blue-50 text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-400' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-[#2a3852] dark:hover:text-white'}`}
                onClick={() => toggleTheme('dark')}
              >
                <div className="flex items-center gap-3"><FiMoon size={16} /><span>Oscuro</span></div>
                {theme === 'dark' && <FiCheck size={16} />}
              </button>
              <button
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${theme === 'light' ? 'bg-blue-50 text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-400' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-[#2a3852] dark:hover:text-white'}`}
                onClick={() => toggleTheme('light')}
              >
                <div className="flex items-center gap-3"><FiSun size={16} /><span>Claro</span></div>
                {theme === 'light' && <FiCheck size={16} />}
              </button>
              <button
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${theme === 'system' ? 'bg-blue-50 text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-400' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-[#2a3852] dark:hover:text-white'}`}
                onClick={() => toggleTheme('system')}
              >
                <div className="flex items-center gap-3"><FiMonitor size={16} /><span>Sistema</span></div>
                {theme === 'system' && <FiCheck size={16} />}
              </button>
          </div>
        )}
      </div>

      <div className="theme-social-rail hidden md:flex flex-col absolute left-8 top-1/2 -translate-y-1/2 z-20 animation-fadeInUp gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-gradient-to-b after:from-cyan-500/50 after:to-transparent after:mx-auto after:mt-4">
        {[
          { icon: <AiFillLinkedin />, href: "https://www.linkedin.com/in/deimer-roncancio" },
          { icon: <AiFillGithub />, href: "https://github.com/DeimerRoncancio" },
          { icon: <BsFacebook />, href: "https://www.facebook.com/deison.deiss12/?locale=es_LA" },
          { icon: <BsTwitter />, href: "https://twitter.com/DeimerRoncancio" },
          { icon: <RiInstagramFill />, href: "https://www.instagram.com/deimerroncancio/" },
        ].map((social, index) => (
          <a 
            key={index}
            target="_blank" 
            rel="noreferrer" 
            href={social.href}
            className="theme-social-link theme-muted text-2xl text-white/50 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 relative group"
          >
            {social.icon}
            <span className="absolute left-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 backdrop-blur-md">
              Visitar perfil
            </span>
          </a>
        ))}
      </div>

      <div className='theme-text flex flex-col w-full h-full text-white justify-center items-center z-10 p-4'>
        <div className="mb-6 md:mb-8 animation-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <img 
            className='theme-brand-logo w-[280px]' 
            src={logoLg} 
            alt="Main Logo" 
          />
        </div>

        <div className="text-center animation-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h2 className="theme-text text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 text-white">
            Deimer Roncancio Avila
          </h2>
          <h3 className="text-sm md:text-base text-cyan-400 font-medium tracking-wide mb-8 flex items-center justify-center gap-2">
            Desarrollador de Software
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Fullstack Java
          </h3>
        </div>

        <div className="animation-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <button 
            onClick={() => navigate(`${!blockPage ? "/dashboard" : "/dashboard/about"}`)}
            className="theme-surface theme-welcome-portfolio-button group relative flex items-center gap-3 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 rounded-full px-8 md:px-10 py-4 hover:scale-105 shadow-xl backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="theme-text relative z-10 text-base md:text-lg font-bold text-white tracking-wider">
              Ver Portafolio
            </span>
            <FiArrowRight className="relative z-10 text-cyan-400 group-hover:translate-x-1 transition-transform" size={22} />
          </button>
        </div>

        <div className="theme-muted md:hidden flex gap-6 mt-16 text-white/40 animation-fadeInUp" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: <AiFillLinkedin />, href: "https://www.linkedin.com/in/deimer-roncancio" },
            { icon: <AiFillGithub />, href: "https://github.com/DeimerRoncancio" },
            { icon: <BsFacebook />, href: "https://www.facebook.com/deison.deiss12/?locale=es_LA" },
            { icon: <BsTwitter />, href: "https://twitter.com/DeimerRoncancio" },
            { icon: <RiInstagramFill />, href: "https://www.instagram.com/deimerroncancio/" },
          ].map((social, index) => (
            <a 
              key={index}
              target="_blank" 
              rel="noreferrer" 
              href={social.href}
              className="text-2xl hover:text-white transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
