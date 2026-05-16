import { RxPerson } from 'react-icons/rx';
import { MdOutlineWebAsset } from 'react-icons/md';

import AboutMe from '../routes/about-me';
import Portfolio from '../routes/portfolio';

export const items = [
  {
    id: 0,
    component: <AboutMe />,
    icon: <RxPerson />,
    name: "Sobre mi",
    path: "/main/about"
  },
  {
    id: 1,
    component: <Portfolio />,
    icon: <MdOutlineWebAsset />,
    name: "Portafolio",
    path: "/main/portfolio"
  }
];
