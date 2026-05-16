import { FiUser } from "react-icons/fi";
import { CgScreen } from "react-icons/cg";

import AboutMe from '../routes/about-me';
import Portfolio from '../routes/portfolio';

export const items = [
  {
    id: 0,
    name: "Sobre mi",
    description: "Información personal, habilidades y experiencia laboral",
    path: "/main/about",
    component: <AboutMe />,
    icon: <FiUser />,
  },
  {
    id: 1,
    name: "Portafolio",
    description: "Proyectos personales y colaborativos que he desarrollado",
    path: "/main/portfolio",
    component: <Portfolio />,
    icon: <CgScreen />,
  }
];
