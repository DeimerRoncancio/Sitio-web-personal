import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiBroom } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { FiSun, FiMoon, FiMonitor, FiCheck } from 'react-icons/fi';
import { useEffect, useRef, useState } from "react";
import useChangeTheme from "../hooks/useChangeTheme";

export default function NavBar({ items, currentView, changeView }) {
  const { theme, menuRef, showToggleTheme, toggleTheme, toggleShowTheme } = useChangeTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const item = items.find((item) => item.path === window.location.pathname);

  const handleCurrentView = () => {
    changeView();
    if (currentView === 'dashboard' && location.pathname === "/dashboard")
      navigate("/dashboard/about");
  }

  useEffect(() => setShowMobileMenu(false), [location.pathname]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setShowMobileMenu(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="grid grid-cols-[max-content_1fr] xl:!grid-cols-3 bg-blue-900 dark:bg-[#171e2c] border-b border-[#2a3852] px-3 xs:px-8 py-[11px]">
      <div className="flex">
        <div className='flex justify-center items-center space-x-3'>
          <button className='nav-hover' onClick={() => navigate(-1)}>
            <IoMdArrowBack className='text-2xl' />
          </button>
          <button className='nav-hover' onClick={() => navigate(1)}>
            <IoMdArrowForward className='text-2xl' />
          </button>
          <button className='nav-hover' onClick={() => navigate("/")}>
            <RiHomeLine className='text-2xl' />
          </button>
        </div>
        <div className='bg-[#1e3a8a] dark:bg-[#171e2c] flex items-center text-base font-medium pl-5'>
          <div className='nav-hover flex items-center space-x-3'>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <h2>{item ? item.name : "Dashboard"}</h2>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex items-center justify-center space-x-3">
        <nav
          style={{ display: currentView === 'dashboard' ? 'none' : 'flex' }}
          className="items-center space-x-2">
          <button className="nav-button px-3 py-1 text-xs xl:text-sm" onClick={() => navigate("/dashboard/about")}>
            Sobre Mi
          </button>
          <button className="nav-button px-3 py-1 text-xs xl:text-sm" onClick={() => navigate("/dashboard/skills")}>
            Skills
          </button>
          <button className="nav-button px-3 py-1 text-xs xl:text-sm" onClick={() => navigate("/dashboard/portfolio")}>
            Proyectos
          </button>
          <button className="nav-button px-3 py-1 text-xs xl:text-sm" onClick={() => navigate("/dashboard/formation")}>
            Formación
          </button>
          <button className="nav-button px-3 py-1 text-xs xl:text-sm" onClick={() => navigate("/dashboard/contact")}>
            Contacto
          </button>
        </nav>
      </div>
      <div className="flex flex-row items-center justify-end space-x-4 pr-[2px]">
        <div className="hidden xs:flex flex-row items-center justify-end space-x-4 pr-[2px]">
          <button type="button" className='nav-button flex space-x-2 items-center'
            onClick={handleCurrentView}>
            <IoEyeOutline className='text-xl' />
            <p className="hidden sm:block text-sm text-[#c4c8ce]">Cambiar Vista</p>
          </button>
          <button title="Limpiar" className='nav-button' onClick={() => navigate("/dashboard")}>
            <PiBroom className='text-xl' />
          </button>
          <div ref={menuRef}>
            <button title="Cambiar Tema" className='nav-button' onClick={toggleShowTheme}>
              <MdOutlineWbSunny className='text-xl' />
            </button>

            {showToggleTheme && (
              <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-[#1b2435] border border-gray-100 dark:border-[#2a3852] rounded-xl shadow-2xl p-1.5 flex flex-col gap-1 z-50 transform origin-top-right transition-all">
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
        </div>
        <button
          className={`flex ${currentView === 'dashboard' ? 'xs:hidden' : 'xl:hidden'} nav-button`}
          onClick={() => setShowMobileMenu(true)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
        </button>
      </div>
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowMobileMenu(false)} />
          <aside className="relative ml-auto w-72 max-w-full bg-white dark:bg-[#0f1724] border-l border-gray-100 dark:border-[#172034] p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Navegación</h3>
              <button className="nav-button" onClick={() => setShowMobileMenu(false)} aria-label="Cerrar menú">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className={`flex flex-col gap-2 ${currentView === 'dashboard' ? 'hidden' : 'flex'}`}>
              <button className="nav-button text-left px-3 py-2" onClick={() => { navigate('/dashboard/about'); setShowMobileMenu(false); }}>Sobre Mi</button>
              <button className="nav-button text-left px-3 py-2" onClick={() => { navigate('/dashboard/skills'); setShowMobileMenu(false); }}>Skills</button>
              <button className="nav-button text-left px-3 py-2" onClick={() => { navigate('/dashboard/portfolio'); setShowMobileMenu(false); }}>Proyectos</button>
              <button className="nav-button text-left px-3 py-2" onClick={() => { navigate('/dashboard/formation'); setShowMobileMenu(false); }}>Formación</button>
              <button className="nav-button text-left px-3 py-2" onClick={() => { navigate('/dashboard/contact'); setShowMobileMenu(false); }}>Contacto</button>
            </nav>
            <div className="flex xs:hidden flex-row items-center justify-end space-x-4 pr-[2px]">
              <button type="button" className='nav-button flex space-x-2 items-center'
                onClick={handleCurrentView}>
                <IoEyeOutline className='text-xl' />
                <p className="hidden sm:block text-sm text-[#c4c8ce]">Cambiar Vista</p>
              </button>
              <button title="Limpiar" className='nav-button' onClick={() => navigate("/dashboard")}>
                <PiBroom className='text-xl' />
              </button>
              <div ref={menuRef}>
                <button title="Cambiar Tema" className='nav-button' onClick={toggleShowTheme}>
                  <MdOutlineWbSunny className='text-xl' />
                </button>

                {showToggleTheme && (
                  <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-[#1b2435] border border-gray-100 dark:border-[#2a3852] rounded-xl shadow-2xl p-1.5 flex flex-col gap-1 z-50 transform origin-top-right transition-all">
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
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
