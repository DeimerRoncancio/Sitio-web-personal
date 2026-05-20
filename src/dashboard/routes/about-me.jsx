import '../../../css/style.css'

export default function AboutMe() {
  return (
    <div className="dropable-zone-container flex sm:h-[calc(100%-77px)] items-center">
      <div className="flex flex-col gap-7 animation-fadeInUp">
        <div className="w-full bg-[#1b2435] border border-[#2a3852] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-lg">
          <div className="relative">
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-tl from-[#283755] to-[#0f1826] border-4 border-[#2a3852] flex items-center
            justify-center">
              <svg className="w-12 h-12 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#10b981] rounded-full p-1.5 border-4 border-[#2a3852]">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full items-center sm:items-start">
            <h1 className="text-2xl font-bold text-[#eaecf1]">Deimer Roncancio</h1>
            <div className="flex items-center text-cyan-400 font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Desarrollador Full Stack
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#9aa3b2]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Villavicencio, Colombia
              </div>
              <div className="flex items-center gap-2 bg-[#0b2a22] text-[#34d399] px-3 py-1 rounded-full border border-[#124b3c]">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                Disponible
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h3 className="text-lg font-semibold text-[#eaecf1] flex items-center gap-2 mb-3">
            <span className="text-[#ff6467] text-3xl">♡</span>
            About Me
          </h3>
          <p className="text-[#9aa3b2] leading-relaxed">
            Desarrollador Fullstack especializado en Backend con <span className="text-cyan-400 font-medium">Java </span> 
            y <span className="text-cyan-400 font-medium">Spring Boot</span>, y sólida experiencia 
            en Frontend con <span className="text-cyan-400 font-medium"> React</span>. Me enfoco en 
            construir soluciones robustas y seguras, aplicando Spring Security para el control de accesos 
            y autenticación. Mi stack técnico se complementa con la gestión avanzada de datos mediante 
            Hibernate, JPA y bases de datos SQL, además de la optimización de entornos con Docker y Git.
          </p>
        </div>

        <div className="flex gap-3 text-xs xs:text-sm xs:font-medium">
          <a
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/60 bg-[#162233] px-4 py-2 font-medium text-cyan-200 transition-colors duration-200 hover:bg-[#1b2b41]"
            href="mailto:deimerroncancio@email.com"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-xl border border-[#2a3852] bg-[#171e2c] px-4 py-2 font-medium text-[#e6ebf2] transition-colors duration-200 hover:bg-[#1b2435]"
            href="https://www.linkedin.com/in/deimer-roncancio/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.369-1.85 3.6 0 4.267 2.369 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.928-2.063-2.072 0-1.144.92-2.072 2.063-2.072 1.144 0 2.064.928 2.064 2.072 0 1.144-.92 2.072-2.064 2.072zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-xl border border-[#2a3852] bg-[#171e2c] px-4 py-2 font-medium text-[#e6ebf2] transition-colors duration-200 hover:bg-[#1b2435]"
            href="https://github.com/DeimerRoncancio"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.911 1.23 3.221 0 4.61-2.805 5.625-5.475 5.92.429.369.81 1.096.81 2.213 0 1.596-.015 2.879-.015 3.269 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
