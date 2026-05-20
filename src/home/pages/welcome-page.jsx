import { Link } from 'react-router-dom';

import logo from '/public/brand/Logo.svg';
import logoLg from '/public/brand/LogoLg.svg';

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { FiArrowRight } from 'react-icons/fi';

export default function WelcomePageComponent() {
  return (
    <div className="relative flex w-screen h-screen bg-[#171e2c] overflow-hidden selection:bg-cyan-500 selection:text-white font-sans">
      
      {/* Logo superior izquierdo */}
      <div className='absolute top-0 left-0 m-6 md:m-8 z-20 animation-fadeInUp'>
        <a href="/" className="inline-block transition-transform hover:scale-105">
          <img className="w-[100px] md:w-[130px]" src={logo} alt="Logo" />
        </a>
      </div>

      {/* Redes Sociales - Barra lateral izquierda */}
      <div className="hidden md:flex flex-col absolute left-8 top-1/2 -translate-y-1/2 z-20 animation-fadeInUp gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-gradient-to-b after:from-cyan-500/50 after:to-transparent after:mx-auto after:mt-4">
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
            className="text-2xl text-white/50 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 relative group"
          >
            {social.icon}
            <span className="absolute left-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 backdrop-blur-md">
              Visitar perfil
            </span>
          </a>
        ))}
      </div>

      {/* Contenido Central */}
      <div className='flex flex-col w-full h-full text-white justify-center items-center z-10 p-4'>
        
        <div className="mb-6 md:mb-8 animation-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <img 
            className='w-[150px] md:w-[220px] lg:w-[250px]' 
            src={logoLg} 
            alt="Main Logo" 
          />
        </div>

        <div className="text-center animation-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 text-white">
            Deimer Roncancio Avila
          </h2>
          <h3 className="text-sm md:text-base text-cyan-400 font-medium tracking-wide mb-8 flex items-center justify-center gap-2">
            Desarrollador de Software
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Fullstack
          </h3>
        </div>

        <div className="animation-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <Link to='/dashboard'>
            <button className="group relative flex items-center gap-3 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 rounded-full px-8 md:px-10 py-4 hover:scale-105 shadow-xl backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 text-base md:text-lg font-bold text-white tracking-wider">
                Ver Portafolio
              </span>
              <FiArrowRight className="relative z-10 text-cyan-400 group-hover:translate-x-1 transition-transform" size={22} />
            </button>
          </Link>
        </div>
        
        {/* Redes para móviles */}
        <div className="md:hidden flex gap-6 mt-16 text-white/40 animation-fadeInUp" style={{ animationDelay: '0.4s' }}>
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
