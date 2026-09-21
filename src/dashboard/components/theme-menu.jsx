import { FiCheck } from "react-icons/fi";
import { THEMES } from "../constants/themes";

/** Shared by the navbar toggle and the welcome page so both stay identical. */
export default function ThemeMenu({ theme, onSelect, className = '' }) {
  return (
    <div className={`theme-menu ${className}`} role="menu">
      {THEMES.map(({ value, label, canvas, accent }) => (
        <button
          key={value}
          type="button"
          role="menuitemradio"
          aria-checked={theme === value}
          className={`theme-menu__item ${theme === value ? 'is-active' : ''}`}
          onClick={() => onSelect(value)}
        >
          <span className="theme-menu__label">
            <span
              className="theme-menu__swatch"
              style={{ background: `linear-gradient(135deg, ${canvas} 50%, ${accent} 50%)` }}
              aria-hidden="true"
            />
            <span>{label}</span>
          </span>
          {theme === value && <FiCheck size={15} />}
        </button>
      ))}
    </div>
  );
}
