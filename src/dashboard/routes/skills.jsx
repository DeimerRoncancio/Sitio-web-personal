import '../../../css/style.css';
import { LuBadgeCheck, LuMessagesSquare } from "react-icons/lu";
import { TbLayersSubtract } from "react-icons/tb";
import { skills } from '../constants/skills';
import SkillBox from '../components/SkillBox';

export default function Skills() {
  return (
    <div className="dropable-zone-container animation-fadeInUp py-14 font-sans">
      <div className="space-y-10">
        <div className="space-y-4">
          <h2 className="theme-text text-lg sm:text-xl font-semibold text-white">
            <LuBadgeCheck className="inline-block text-[#6db33f] mr-2" size={24} />
            Tecnologías Principales
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.principales.map(skill => (
              <SkillBox key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="theme-text text-lg sm:text-xl font-semibold text-white">
            <TbLayersSubtract className="inline-block text-[#00a4ac] mr-2" size={24} />
            Tecnologías Complementarias
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.complementarias.map(skill => (
              <SkillBox key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="theme-text text-lg sm:text-xl font-semibold text-white">
            <LuMessagesSquare className="inline-block text-[#a78bfa] mr-2" size={24} />
            Habilidades Blandas
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.blandas.map(skill => (
              <SkillBox key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
