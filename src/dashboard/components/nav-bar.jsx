import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiBroom } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { FiSun, FiMoon, FiMonitor, FiCheck, FiMenu, FiX } from 'react-icons/fi';
import { useEffect, useRef, useState } from "react";
import ToggleTheme from "./toggle-theme";
import MobileMenu from "./mobile-menu.jsx";

export default function NavBar({ items, currentView, changeView }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const item = items.find((item) => item.path === window.location.pathname);

  const handleCurrentView = () => {
    changeView();
    if (currentView === 'dashboard' && location.pathname === "/dashboard")
      navigate("/dashboard/about");

    setShowMobileMenu(false);
  }

  const closeMobileMenu = () => setShowMobileMenu(false);

  useEffect(() => setShowMobileMenu(false), [location.pathname]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setShowMobileMenu(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="theme-nav-bar mobile-nav-bar grid grid-cols-[max-content_1fr] xl:!grid-cols-3 bg-blue-900 dark:bg-[#171e2c] border-b border-[#2a3852] px-3 xs:px-8 py-[11px]">
      <div className="flex min-w-0">
        <div className='flex justify-center items-center space-x-2 xs:space-x-3'>
          <button className='nav-hover mobile-nav-icon' onClick={() => navigate(-1)} aria-label="Volver">
            <IoMdArrowBack className='text-xl xs:text-2xl' />
          </button>
          <button className='nav-hover mobile-nav-icon' onClick={() => navigate(1)} aria-label="Avanzar">
            <IoMdArrowForward className='text-xl xs:text-2xl' />
          </button>
          <button className='nav-hover mobile-nav-icon' onClick={() => navigate("/")} aria-label="Inicio">
            <RiHomeLine className='text-xl xs:text-2xl' />
          </button>
        </div>
        <div className='theme-nav-title mobile-nav-title bg-[#1e3a8a] dark:bg-[#171e2c] flex items-center text-sm xs:text-base font-medium pl-3 xs:pl-5 min-w-0'>
          <div className='nav-hover flex items-center space-x-2 xs:space-x-3 min-w-0'>
            <div className="mobile-nav-status w-2 h-2 rounded-full bg-cyan-500 animate-pulse shrink-0" />
            <h2 className="max-w-[118px] xs:max-w-none truncate">{item ? item.name : "Dashboard"}</h2>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex items-center justify-center space-x-3">
        <nav
          style={{ display: currentView === 'dashboard' ? 'none' : 'flex' }}
          className="items-center space-x-2">
          <button
            className="text-[#314155] dark:text-[#eaecf1] hover:text-[#14a3ca] dark:hover:text-[#22d3ee]
            px-3 py-1 text-xs xl:text-sm"
            onClick={() => navigate("/dashboard/about")}
          >
            Sobre Mi
          </button>
          <button
            className="text-[#314155] dark:text-[#eaecf1] hover:text-[#14a3ca] dark:hover:text-[#22d3ee]
            px-3 py-1 text-xs xl:text-sm"
            onClick={() => navigate("/dashboard/skills")}
          >
            Skills
          </button>
          <button
            className="text-[#314155] dark:text-[#eaecf1] hover:text-[#14a3ca] dark:hover:text-[#22d3ee]
            px-3 py-1 text-xs xl:text-sm"
            onClick={() => navigate("/dashboard/portfolio")}
          >
            Proyectos
          </button>
          <button
            className="text-[#314155] dark:text-[#eaecf1] hover:text-[#14a3ca] dark:hover:text-[#22d3ee]
            px-3 py-1 text-xs xl:text-sm"
            onClick={() => navigate("/dashboard/formation")}
          >
            Formación
          </button>
          <button
            className="text-[#314155] dark:text-[#eaecf1] hover:text-[#14a3ca] dark:hover:text-[#22d3ee]
            px-3 py-1 text-xs xl:text-sm"
            onClick={() => navigate("/dashboard/contact")}
          >
            Contacto
          </button>
        </nav>
      </div>
      <div className="mobile-nav-actions flex flex-row items-center justify-end space-x-4 pr-[2px]">
        <div className="hidden xs:flex flex-row items-center justify-end space-x-4 pr-[2px]">
          <button type="button" className='nav-button flex space-x-2 items-center'
            onClick={handleCurrentView}>
            <IoEyeOutline className='text-xl' />
            <p className="theme-muted hidden sm:block text-sm text-[#c4c8ce]">Cambiar Vista</p>
          </button>
          {currentView === 'dashboard' && (
            <button title="Limpiar" className='nav-button' onClick={() => navigate("/dashboard")}>
              <PiBroom className='text-xl' />
            </button>
          )}
          <ToggleTheme currentView={currentView} />
        </div>
        <button
          className={`mobile-menu-trigger flex ${currentView === 'dashboard' ? 'xs:hidden' : 'xl:hidden'} nav-button`}
          onClick={() => setShowMobileMenu(true)}
          aria-label="Abrir menú"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>
      {showMobileMenu &&
        <MobileMenu
          items={items}
          item={item}
          closeMenu={closeMobileMenu}
          handleCurrentView={handleCurrentView}
          currentView={currentView}
        />
      }
    </div>
  );
}
