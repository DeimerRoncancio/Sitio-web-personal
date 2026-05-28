import '../../../css/style.css'

export default function ItemsDraggables({ icon, name, isDragging, isShadow = false, isActive }) {
  const isHighlighted = isActive || (isDragging && !isShadow);

  const tailwindClasses = [
    isHighlighted ? 'theme-draggable-active !border-cyan-500 !from-[#3b4355] !to-[#00586e] !opacity-100' : 'opacity-50 hover:opacity-100 hover:border-[#acacac]',
    (isDragging && isShadow) ? 'scale-95' : '',
    (isDragging && !isShadow) ? 'scale-110 !h-[95px]' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={`theme-draggable draggable ${tailwindClasses} flex w-[55px] h-[50px] xxs:!w-[75px] xxs:!h-[60px] 
      sm:w-[95px] sm:h-[80px] flex-col justify-center transition-all duration-300 rounded-xl items-center 
      p-1 text-lg sm:text-4xl border-2 border-[#888] shadow-lg shadow-[#aaaaaa34] hover:scale-105
      bg-gradient-to-tl from-[#424c5c] to-[#171e2c]`
    }>
      {icon}
      <h3 className="text-[10px] leading-normal sm:text-sm text-white">{name}</h3>
    </div>
  )
}
