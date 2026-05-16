import { useEffect } from 'react'
import '../../css/style.css'

export default function ItemsDraggables({ icon, name, isDragging, isShadow = false, isActive = false }) {
  return (
    <div className={`draggable flex flex-col justify-center transition-all duration-300 rounded-xl
    items-center p-1 text-center text-5xl border-2 border-[#888] shadow-lg shadow-[#aaaaaa34]
    w-[95px] h-[80px] hover:scale-105
    bg-gradient-to-tl from-[#424c5c] to-[#171e2c]
    ${isDragging && isShadow ? 'scale-95' : ''}
    ${isDragging && !isShadow ? 'scale-110 !h-[95px] !border-[#d4d4d4] opacity-100 from-[#4c5461] to-[#2a3449]' : ''}
    ${isActive
      ? '!border-white [#4c5461] from-[#4c5461] to-[#2a3449]'
      : 'opacity-50 hover:opacity-100 hover:border-[#d4d4d4]'}`}
    >
      {icon}
      <h3 className="text-sm text-white">{name}</h3>
    </div>
  )
}
