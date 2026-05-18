export default function SkillBox({ name, icon }) {
  return (
    <div className="flex flex-col items-center justify-center p-3 bg-[#1e273a] hover:bg-[#2a3852] border border-[#2a3852] rounded-xl transition-colors gap-3 w-[100px] h-[100px] hover:cursor-pointer">
      {icon}
      <span className="text-xs text-[#979fa1] font-medium tracking-wide text-center">{name}</span>
    </div>
  );
}
