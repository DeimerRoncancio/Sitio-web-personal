import { FiCheck, FiMonitor, FiMoon, FiSun } from "react-icons/fi";

const options = [
  { value: 'dark', label: 'Oscuro', icon: <FiMoon size={15} /> },
  { value: 'light', label: 'Claro', icon: <FiSun size={15} /> },
  { value: 'system', label: 'Sistema', icon: <FiMonitor size={15} /> },
];

/** Shared by the navbar toggle and the welcome page so both stay identical. */
export default function ThemeMenu({ theme, onSelect, className = '' }) {
  return (
    <div className={`theme-menu ${className}`} role="menu">
      {options.map(({ value, label, icon }) => (
        <button
          key={value}
          type="button"
          role="menuitemradio"
          aria-checked={theme === value}
          className={`theme-menu__item ${theme === value ? 'is-active' : ''}`}
          onClick={() => onSelect(value)}
        >
          <span className="theme-menu__label">
            {icon}
            <span>{label}</span>
          </span>
          {theme === value && <FiCheck size={15} />}
        </button>
      ))}
    </div>
  );
}
