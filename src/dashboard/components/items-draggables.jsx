export default function ItemsDraggables({ icon, name, isDragging, isShadow = false, isActive }) {
  const state = [
    isActive && !isShadow ? 'is-active' : '',
    isDragging && !isShadow ? 'is-dragging' : '',
    isDragging && isShadow ? 'is-ghost' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={`nav-module ${state}`}>
      <span className="nav-module__grip" aria-hidden="true">
        <span /><span /><span /><span /><span /><span />
      </span>
      {icon}
      <h3 className="nav-module__name">{name}</h3>
    </div>
  )
}
