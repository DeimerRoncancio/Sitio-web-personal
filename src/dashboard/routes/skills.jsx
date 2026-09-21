import { LuBadgeCheck, LuMessagesSquare } from "react-icons/lu";
import { TbLayersSubtract } from "react-icons/tb";
import { skills } from '../constants/skills';
import SkillBox from '../components/SkillBox';

const groups = [
  {
    key: 'principales',
    title: 'Tecnologías Principales',
    icon: <LuBadgeCheck className="text-[#6db33f]" size={20} />,
  },
  {
    key: 'complementarias',
    title: 'Tecnologías Complementarias',
    icon: <TbLayersSubtract className="text-[#00a4ac]" size={20} />,
  },
  {
    key: 'blandas',
    title: 'Habilidades Blandas',
    icon: <LuMessagesSquare className="text-[#a78bfa]" size={20} />,
  },
];

export default function Skills() {
  return (
    <div className="droppable-zone-container animation-fadeInUp">
      <div className="space-y-11">
        {groups.map(({ key, title, icon }) => (
          <section key={key}>
            <header>
              <p className="section-eyebrow">
                {String(skills[key].length).padStart(2, '0')} elementos
              </p>
              <h2 className="section-title flex items-center gap-2.5">
                {icon}
                {title}
              </h2>
            </header>
            <div className="flex flex-wrap gap-3 mt-5">
              {skills[key].map(skill => (
                <SkillBox key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
