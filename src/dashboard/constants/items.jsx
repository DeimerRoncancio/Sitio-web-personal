import { FiUser } from "react-icons/fi";
import { CgScreen } from "react-icons/cg";
import { LuCheckSquare, LuLayers } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

import AboutMe from '../routes/about-me';
import Portfolio from '../routes/portfolio';
import Skills from "../routes/skills";
import Contact from "../routes/contact";
import Formation from "../routes/formation";

export const items = [
  {
    id: 0,
    name: "Sobre mi",
    description: "Información basica sobre mi perfil profesional",
    path: "/dashboard/about",
    component: <AboutMe />,
    icon: <FiUser />,
  },
  {
    id: 1,
    name: "Skills",
    description: "Habilidades técnicas y herramientas que domino",
    path: "/dashboard/skills",
    component: <Skills />,
    icon: <LuLayers />,
  },
  {
    id: 2,
    name: "Proyectos",
    description: "Proyectos personales y colaborativos que he desarrollado",
    path: "/dashboard/portfolio",
    component: <Portfolio />,
    icon: <CgScreen />,
  },
  {
    id: 3,
    name: "Formación",
    description: "Mi formación académica y certificaciones relevantes",
    path: "/dashboard/formation",
    component: <Formation />,
    icon: <LuCheckSquare />,
  },
    {
    id: 4,
    name: "Contacto",
    description: "Información de contacto para conectar conmigo",
    path: "/dashboard/contact",
    component: <Contact />,
    icon: <MdOutlineEmail />,
  },
];
