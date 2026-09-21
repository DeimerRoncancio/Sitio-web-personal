import { MdOutlineWbSunny } from "react-icons/md";
import useChangeTheme from "../hooks/useChangeTheme";
import ThemeMenu from "./theme-menu";

export default function ToggleTheme({ isMobile = false, currentView }) {
  const { theme, menuRef, showToggleTheme, toggleTheme, toggleShowTheme } = useChangeTheme();

  // In the classic view on narrow screens the control sits near the bottom,
  // so the menu opens upwards instead.
  const placement = currentView === 'dashboard'
    ? 'top-full mt-3 origin-top-right'
    : 'bottom-full mb-3 origin-bottom-right xs:top-full xs:mt-3 xs:bottom-auto xs:origin-top-right';

  return (
    <div ref={menuRef} className="relative">
      <button
        title="Cambiar Tema"
        aria-label="Cambiar tema"
        aria-expanded={showToggleTheme}
        className={isMobile ? 'mobile-drawer-action-button' : 'nav-button'}
        onClick={toggleShowTheme}
      >
        <MdOutlineWbSunny className="text-lg" />
      </button>

      {showToggleTheme && (
        <ThemeMenu theme={theme} onSelect={toggleTheme} className={placement} />
      )}
    </div>
  )
}
