import { FiCheck, FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import useChangeTheme from "../hooks/useChangeTheme";

export default function ToggleTheme({ isMobile = false, currentView }) {
  const { theme, menuRef, showToggleTheme, toggleTheme, toggleShowTheme } = useChangeTheme();
  
  return (
    <div ref={menuRef} className="relative">
      <button title="Cambiar Tema" className={`${isMobile ? 'mobile-drawer-action-button' : 'nav-button'}`} onClick={toggleShowTheme}>
        <MdOutlineWbSunny className='text-xl' />
      </button>

      {showToggleTheme && (
        <div className={`theme-menu-dropdown absolute right-0 w-48 bg-white dark:bg-[#1b2435] border border-gray-100 dark:border-[#2a3852] rounded-xl shadow-2xl p-1.5 flex flex-col gap-1 z-50 transform transition-all ${(currentView === 'dashboard') ? 'top-full mt-6 origin-top-right' : 'bottom-full mb-6 origin-bottom-right xs:mt-6 xs:top-full xs:origin-top-right xs:bottom-auto'}`}>
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
  )
}
