export default function SkillBox({ name, icon }) {
  return (
    <div className="theme-surface-soft flex flex-col items-center justify-center p-3 bg-[#1e273a] hover:bg-[#2a3852] border
    border-[#2a3852] rounded-xl transition-colors gap-3 w-[80px] h-[80px]
    sm:!w-[100px] sm:!h-[100px] hover:cursor-pointer">
      {icon}
      <span className="theme-muted text-[8px] sm:!text-xs text-[#979fa1] font-medium tracking-wide text-center">{name}</span>
    </div>
  );
}
