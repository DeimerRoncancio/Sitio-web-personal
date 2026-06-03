export default function SkillBox({ name, icon }) {
  return (
    <div className="theme-skill-box flex flex-col items-center justify-center p-3 border
    rounded-xl transition-colors gap-3 w-[80px] h-[80px]
    sm:!w-[100px] sm:!h-[100px] hover:cursor-pointer">
      {icon}
      <span className="theme-muted text-[8px] sm:!text-xs font-medium tracking-wide text-center">{name}</span>
    </div>
  );
}
