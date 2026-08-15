import { SiKubernetes, SiSpring, SiHtml5, SiCss3, SiJavascript, SiSpringboot, SiHibernate, SiMysql, SiPostgresql, SiGit, SiGithub, SiDocker, SiPostman, SiTailwindcss, SiSpringsecurity, SiInsomnia, SiReactrouter, SiJsonwebtokens, SiBootstrap } from 'react-icons/si';
import { FaJava, FaReact, FaUsers, FaLightbulb, FaBrain, FaComments } from 'react-icons/fa';
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
    { name: 'Spring Cloud', icon: <SiSpring className="text-[#6DB33F]" size={36} /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" size={36} /> },
    { name: 'JWT', icon: <SiJsonwebtokens className="theme-text text-white" size={36} /> },
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" size={36} /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-[#326ce5]" size={36} /> },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" size={36} /> },
    { name: 'Github', icon: <SiGithub className="theme-text text-white" size={36} /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" size={36} /> },
    { name: 'React Router', icon: <SiReactrouter className="text-[#CA4245]" size={36} /> },
    { name: 'Insomnia', icon: <SiInsomnia className="text-[#7d1ef8]" size={36} /> },
    { name: 'React Native', icon: <TbBrandReactNative className="text-[#61DAFB]" size={36} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" size={36} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38B2AC]" size={36} /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" size={36} /> },
    { name: 'HTML', icon: <SiHtml5 className="text-[#E34F26]" size={36} /> },
    { name: 'CSS', icon: <SiCss3 className="text-[#1572B6]" size={36} /> },
  ],
  blandas: [
    { name: 'Trabajo en equipo', icon: <FaUsers className="text-[#34D399]" size={36} /> },
    { name: 'Comunicación', icon: <FaComments className="text-[#A78BFA]" size={36} /> },
    { name: 'Resolución de problemas', icon: <FaLightbulb className="text-[#FBBF24]" size={36} /> },
    { name: 'Adaptabilidad', icon: <FaBrain className="text-[#F472B6]" size={36} /> },
  ]
};
