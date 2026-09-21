export default function SkillBox({ name, icon }) {
  return (
    <div className="skill-tile">
      {icon}
      <span className="skill-tile__name">{name}</span>
    </div>
  );
}
