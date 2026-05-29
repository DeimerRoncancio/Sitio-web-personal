import { IoEyeOutline } from "react-icons/io5";
import { PiBroom } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "./toggle-theme";
import { FiX } from "react-icons/fi";
import { RiHomeLine } from "react-icons/ri";

export default function MobileMenu({ items, item, currentView, closeMenu, handleCurrentView }) {
  const navigate = useNavigate();

  const onLinkClick = (path) => {
    navigate(path);
    closeMenu();
  }

  return (
    <div className="mobile-drawer-shell fixed inset-0 z-50 flex">
      <div className="mobile-drawer-backdrop absolute inset-0 bg-black/40" onClick={closeMenu} />
      <aside className={`theme-mobile-drawer mobile-drawer-panel ${currentView === 'dashboard' ? 'mobile-drawer-dashboard-mode' : ''} relative ml-auto flex h-full w-72 max-w-full flex-col bg-white dark:bg-[#0f1724] border-l border-gray-100 dark:border-[#172034] p-4 shadow-2xl`}>
        <div className="mobile-drawer-header flex items-center justify-between mb-5 pb-4 border-b border-gray-100 dark:border-[#172034]">
          <div>
            <p className="theme-muted text-xs font-semibold uppercase tracking-[0.22em]">Panel</p>
            <h3 className="theme-text text-lg font-semibold leading-tight">{item ? item.name : "Dashboard"}</h3>
          </div>
          <button className="nav-button mobile-drawer-close" onClick={closeMenu} aria-label="Cerrar menú">
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <nav className={`mobile-drawer-nav flex flex-col gap-2 ${currentView === 'dashboard' ? 'hidden' : 'flex'}`}>
          {items.map((navItem) => {
            const isActive = navItem.path === location.pathname;

            return (
              <button
                key={navItem.id}
                className={`mobile-drawer-link ${isActive ? 'mobile-drawer-link-active' : ''}`}
                onClick={() => onLinkClick(navItem.path)}
              >
                <span className="mobile-drawer-link-icon">{navItem.icon}</span>
                <span className="mobile-drawer-link-text">
                  <span>{navItem.name}</span>
                  <small>{navItem.description}</small>
                </span>
              </button>
            )
          })}
        </nav>
        <div className="mobile-drawer-actions mt-auto pt-4 border-t border-gray-100 dark:border-[#172034] flex xs:hidden flex-row items-center justify-between gap-2">
          <button type="button" title="Cambiar Vista" className='mobile-drawer-action-button'
            onClick={handleCurrentView}>
            <IoEyeOutline className='text-xl' />
          </button>
          <button title="Limpiar" className='mobile-drawer-action-button' onClick={() => onLinkClick("/dashboard")}>
            {currentView === 'dashboard' ? <PiBroom  className='text-xl' /> : <RiHomeLine className='text-xl' />}
          </button>
          <ToggleTheme isMobile={true} currentView={currentView} />
        </div>
      </aside>
    </div>
  )
}
