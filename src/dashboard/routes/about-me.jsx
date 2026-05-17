import '../../../css/style.css'

export default function AboutMe() {
  return (
    <div className="dropable-zone-container max-w-5xl mx-auto p-12 h-full z-0">
      <div className="flex flex-col lg:flex-col gap-12">
        {/* Columna Izquierda - Perfil */}
        <div className="w-full lg:w-1/3 flex flex-col items-center auto-rows-max">
          <div className="relative group">
            <div className="w-56 h-56 rounded-full bg-[#171e2c] border-4 border-[#2a3852] flex items-center justify-center overflow-hidden mb-6 shadow-2xl transition-all duration-300 group-hover:border-cyan-500/50">
              <svg className="w-24 h-24 text-[#535a6b]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#eaecf1] mb-2">Renato Roncal</h1>
          <h2 className="text-cyan-400 font-medium tracking-wide mb-6">Full Stack Developer</h2>

          <div className="w-full bg-[#171e2c] rounded-xl border border-[#2a3852] p-5 space-y-4">
            <div className="flex items-center space-x-3 text-[#c6cad4]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span className="text-sm">Lima, Perú</span>
            </div>
            <div className="flex items-center space-x-3 text-[#c6cad4]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="text-sm">usuario@ejemplo.com</span>
            </div>
            <div className="flex items-center space-x-3 text-[#c6cad4]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
              <span className="text-sm cursor-pointer hover:text-cyan-400">linkedin.com/in/usuario</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha - Contenido */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">

          <div className="bg-[#171e2c] border border-[#2a3852] rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#eaecf1] border-b border-[#2a3852] pb-3 mb-5 flex items-center">
              <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3"></span>
              Perfil Profesional
            </h3>
            <p className="text-[#c6cad4] leading-relaxed">
              Soy un desarrollador de software con una gran pasión por crear interfaces interactivas y escalables.
              Con experiencia en el ecosistema de JavaScript moderno, disfruto resolver problemas complejos a
              través del código y mejorar constantemente la experiencia del usuario. Mi enfoque está en
              construir soluciones limpias, mantenibles y de alto rendimiento.
            </p>
          </div>
        </div>
        <div className="bg-[#171e2c] border border-[#2a3852] rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#eaecf1] border-b border-[#2a3852] pb-3 mb-5 flex items-center">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3"></span>
            Mi Filosofía
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3 mt-1">▹</span>
              <p className="text-[#c6cad4] text-sm md:text-base">
                <strong className="text-[#eaecf1] font-medium">Aprendizaje Continuo:</strong> La tecnología avanza rápido, por lo que siempre estoy explorando nuevas herramientas y conceptos para no quedarme atrás.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3 mt-1">▹</span>
              <p className="text-[#c6cad4] text-sm md:text-base">
                <strong className="text-[#eaecf1] font-medium">Código Limpio:</strong> Creo fervientemente que el código se escribe para que otros desarrolladores (y mi yo del futuro) puedan leerlo y mantenerlo con facilidad.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3 mt-1">▹</span>
              <p className="text-[#c6cad4] text-sm md:text-base">
                <strong className="text-[#eaecf1] font-medium">Atención al Detalle:</strong> Un buen diseño no solo tiene que funcionar, sino sentirse natural, accesible y sin fricciones para el usuario final.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-[#171e2c] border border-[#2a3852] rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#eaecf1] border-b border-[#2a3852] pb-3 mb-5 flex items-center">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3"></span>
            Fuera del Código
          </h3>
          <p className="text-[#c6cad4] mb-6">
            Cuando no estoy escribiendo código o frente al ordenador, disfruto de diferentes actividades que me ayudan a desconectar y encontrar nueva inspiración:
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-[#202a3e] p-4 rounded-lg border border-[#2a3852] flex items-center gap-4 hover:border-[#535a6b] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#171e2c] flex items-center justify-center text-xl">🎮</div>
              <div>
                <h4 className="text-[#eaecf1] font-medium text-sm">Videojuegos</h4>
              </div>
            </div>
            <div className="bg-[#202a3e] p-4 rounded-lg border border-[#2a3852] flex items-center gap-4 hover:border-[#535a6b] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#171e2c] flex items-center justify-center text-xl">📚</div>
              <div>
                <h4 className="text-[#eaecf1] font-medium text-sm">Lectura</h4>
              </div>
            </div>
            <div className="bg-[#202a3e] p-4 rounded-lg border border-[#2a3852] flex items-center gap-4 hover:border-[#535a6b] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#171e2c] flex items-center justify-center text-xl">☕</div>
              <div>
                <h4 className="text-[#eaecf1] font-medium text-sm">Amante del Café</h4>
              </div>
            </div>
            <div className="bg-[#202a3e] p-4 rounded-lg border border-[#2a3852] flex items-center gap-4 hover:border-[#535a6b] transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#171e2c] flex items-center justify-center text-xl">✈️</div>
              <div>
                <h4 className="text-[#eaecf1] font-medium text-sm">Viajar</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
