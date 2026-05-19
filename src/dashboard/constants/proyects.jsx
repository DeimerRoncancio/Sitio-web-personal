import { FiCheckCircle, FiGlobe, FiMonitor, FiSmartphone } from "react-icons/fi";

export const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electronico completa con carrito, pagos y panel de admin',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    year: '2024',
    icon: <FiGlobe size={22} />,
    theme: { bg: '#1a415b', border: '#255090', btn: '#2C5675' },
    images: [
      'https://placehold.co/600x300/15293A/FFFFFF/png?text=E-Commerce+Home',
      'https://placehold.co/600x300/1A4960/FFFFFF/png?text=Product+Page',
      'https://placehold.co/600x300/254A66/FFFFFF/png?text=Admin+Panel'
    ]
  },
  {
    title: 'Task Management App',
    description: 'Aplicacion de gestion de tareas con colaboracion en tiempo real',
    tags: ['React', 'Firebase', 'Tailwind'],
    year: '2023',
    icon: <FiCheckCircle size={22} />,
    theme: { bg: '#1a4a3d', border: '#137046', btn: '#266954' },
    images: [
      'https://placehold.co/600x300/0f2e25/FFFFFF/png?text=Kanban+Board',
      'https://placehold.co/600x300/156149/FFFFFF/png?text=Task+Details'
    ]
  },
  {
    title: 'Analytics Dashboard',
    description: 'Dashboard interactivo con graficos y reportes personalizados',
    tags: ['Vue.js', 'D3.js', 'Node.js'],
    year: '2022',
    icon: <FiMonitor size={22} />,
    theme: { bg: '#423056', border: '#63378a', btn: '#523775' },
    images: [
      'https://placehold.co/600x300/271a38/FFFFFF/png?text=Overview',
      'https://placehold.co/600x300/422B60/FFFFFF/png?text=Data+Tables',
      'https://placehold.co/600x300/4C3370/FFFFFF/png?text=Export+Reports'
    ]
  },
  {
    title: 'Mobile Banking API',
    description: 'API RESTful para aplicacion de banca movil con alta seguridad',
    tags: ['Express', 'MongoDB', 'Redis'],
    year: '2023',
    icon: <FiSmartphone size={22} />,
    theme: { bg: '#4d3a2b', border: '#844a1e', btn: '#724B34' },
    images: [
      'https://placehold.co/600x300/362216/FFFFFF/png?text=Swagger+Docs',
      'https://placehold.co/600x300/5C3925/FFFFFF/png?text=Endpoints'
    ]
  }
];
