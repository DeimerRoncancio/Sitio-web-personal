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
  const item = items.find((item) => item.path === window.location.pathname);

  const handleCurrentView = () => {
    changeView();
    if (currentView === 'dashboard' && location.pathname === "/dashboard")
      navigate("/dashboard/about");
  }

  return (
    <div className="flex justify-between bg-blue-900 dark:bg-[#171e2c] border-b border-[#2a3852] px-8 py-[11px]">
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
      <div className="flex items-center space-x-3">
        <nav
        style={{ display: currentView === 'dashboard' ? 'none' : 'flex' }}
        className="items-center space-x-2">
          <button className="nav-button px-3 py-1 text-sm" onClick={() => navigate("/dashboard/about")}>
            Sobre Mi
          </button>
          <button className="nav-button px-3 py-1 text-sm" onClick={() => navigate("/dashboard/skills")}>
            Skills
          </button>
          <button className="nav-button px-3 py-1 text-sm" onClick={() => navigate("/dashboard/portfolio")}>
            Proyectos
          </button>
          <button className="nav-button px-3 py-1 text-sm" onClick={() => navigate("/dashboard/formation")}>
            Formación
          </button>
          <button className="nav-button px-3 py-1 text-sm" onClick={() => navigate("/dashboard/contact")}>
            Contacto
          </button>
        </nav>
      </div>
      <div className="hidden xs:flex flex-row items-center space-x-4 pr-[2px]">
        <button type="button" className='nav-button flex space-x-2 items-center'
        onClick={handleCurrentView}>
          <IoEyeOutline className='text-xl' />
          <p className="text-sm text-[#c4c8ce]">Cambiar Vista</p>
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
    </div>
  );
}
