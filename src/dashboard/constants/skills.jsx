import { SiHtml5, SiCss3, SiJavascript, SiSpringboot, SiApachemaven, SiHibernate, SiMysql, SiPostgresql, SiMongodb, SiJunit5, SiApachekafka, SiRedis, SiGit, SiGithub, SiDocker, SiPostman, SiGithubactions, SiTailwindcss, SiSpringsecurity } from 'react-icons/si';
import { FaJava, FaReact, FaUsers, FaLightbulb, FaRegClock, FaComments } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';

export const skills = {
  principales: [
    { name: 'Java', icon: <FaJava className="text-[#007396]" size={36} /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" size={36} /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" size={36} /> },
    { name: 'TypeScript', icon: <SiJavascript className="text-[#3178C6]" size={36} /> },
  ],
  complementarias: [
    { name: 'Hibernate', icon: <SiHibernate className="text-[#59666C]" size={36} /> },
    { name: 'Spring Security', icon: <SiSpringsecurity className="text-[#6DB33F]" size={36} /> },
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" size={36} /> },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" size={36} /> },
    { name: 'Github', icon: <SiGithub className="text-white" size={36} /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" size={36} /> },
    { name: 'Javascript', icon: <SiJavascript className="text-[#F7DF1E]" size={36} /> },
    { name: 'Maven', icon: <SiApachemaven className="text-[#C71A22]" size={36} /> },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" size={36} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" size={36} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38B2AC]" size={36} /> },
    { name: 'Kafka', icon: <SiApachekafka className="white text-white" size={36} /> },
    { name: 'React Native', icon: <TbBrandReactNative className="text-[#61DAFB]" size={36} /> },
    { name: 'HTML', icon: <SiHtml5 className="text-[#E34F26]" size={36} /> },
    { name: 'CSS', icon: <SiCss3 className="text-[#1572B6]" size={36} /> },
  ],
  blandas: [
    { name: 'Trabajo en equipo', icon: <FaUsers className="text-[#34D399]" size={36} /> },
    { name: 'Resolución de problemas', icon: <FaLightbulb className="text-[#FBBF24]" size={36} /> },
    { name: 'Comunicación', icon: <FaComments className="text-[#A78BFA]" size={36} /> },
    { name: 'Gestión del tiempo', icon: <FaRegClock className="text-[#60A5FA]" size={36} /> },
  ]
};