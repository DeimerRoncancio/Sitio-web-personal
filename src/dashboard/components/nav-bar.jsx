import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import { PiBroom } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { FiMenu } from 'react-icons/fi';
import { useEffect, useState } from "react";
import ToggleTheme from "./toggle-theme";
import MobileMenu from "./mobile-menu.jsx";

export default function NavBar({ items, currentView, changeView }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const item = items.find((navItem) => navItem.path === location.pathname);

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
    <div className="theme-nav-bar mobile-nav-bar grid grid-cols-[max-content_1fr] xl:!grid-cols-3 border-b px-3 xs:px-5 py-[9px]">
      <div className="flex items-center min-w-0 gap-3 xs:gap-4">
        <div className="nav-cluster">
          <button className="nav-icon-button" onClick={() => navigate(-1)} aria-label="Volver">
            <IoMdArrowBack className="text-lg" />
          </button>
          <button className="nav-icon-button" onClick={() => navigate(1)} aria-label="Avanzar">
            <IoMdArrowForward className="text-lg" />
          </button>
          <button className="nav-icon-button" onClick={() => navigate("/")} aria-label="Inicio">
            <RiHomeLine className="text-lg" />
          </button>
        </div>

        <div className="flex items-center gap-2.5 min-w-0">
          <span className="nav-pulse w-1.5 h-1.5 rounded-full animate-pulse shrink-0" />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="nav-crumb hidden xs:block">Dashboard</span>
            <span className="nav-current truncate max-w-[130px] xs:max-w-none">
              {item ? item.name : "Inicio"}
            </span>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex items-center justify-center">
        <nav
          style={{ display: currentView === 'dashboard' ? 'none' : 'inline-flex' }}
          className="nav-segment"
        >
          {items.map((navItem) => (
            <button
              key={navItem.id}
              className={`nav-segment__item ${navItem.path === location.pathname ? 'is-active' : ''}`}
              aria-current={navItem.path === location.pathname ? 'page' : undefined}
              onClick={() => navigate(navItem.path)}
            >
              {navItem.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="mobile-nav-actions flex flex-row items-center justify-end gap-1.5">
        <div className="hidden xs:flex flex-row items-center justify-end gap-1.5">
          <button type="button" className="nav-button" onClick={handleCurrentView}>
            <IoEyeOutline className="text-lg" />
            <p className="hidden sm:block text-[13px] font-medium">Cambiar Vista</p>
          </button>
          {currentView === 'dashboard' && (
            <button title="Limpiar" className="nav-button" onClick={() => navigate("/dashboard")}>
              <PiBroom className="text-lg" />
            </button>
          )}
          <ToggleTheme currentView={currentView} />
        </div>
        <button
          className={`mobile-menu-trigger flex ${currentView === 'dashboard' ? 'xs:!hidden' : 'xl:hidden'} nav-button`}
          onClick={() => setShowMobileMenu(true)}
          aria-label="Abrir menú"
        >
          <FiMenu className="w-5 h-5" />
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
