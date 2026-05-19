import { FiCheckCircle, FiGlobe, FiMonitor, FiSmartphone } from "react-icons/fi";

export const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electronico completa con carrito, pagos y panel de admin',
    longDescription: 'Plataforma de comercio electrónico completa desarrollada con Next.js y PostgreSQL. Incluye un sistema de carrito de compras intuitivo, procesamiento de pagos seguro a través de Stripe, y un panel de administración robusto para gestionar productos, pedidos y usuarios. Implementada con un enfoque en el rendimiento y la escalabilidad, utilizando Server-Side Rendering (SSR).',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    year: '2024',
    icon: <FiGlobe size={22} />,
    theme: { bg: '#1a415b', border: '#255090', btn: '#2C5675' },
    images: [
      'https://picsum.photos/seed/ecommerce1/800/600',
      'https://picsum.photos/seed/ecommerce2/800/600',
      'https://picsum.photos/seed/ecommerce3/800/600'
    ]
  },
  {
    title: 'Task Management App',
    description: 'Aplicacion de gestion de tareas con colaboracion en tiempo real',
    longDescription: 'Aplicación de gestión de tareas diseñada para aumentar la productividad de equipos. Permite la colaboración en tiempo real utilizando Firebase, sincronizando tableros Kanban, listas de tareas y estados instantáneamente entre todos los usuarios. La interfaz de usuario, construida con React y Tailwind CSS, es completamente responsiva y ofrece soporte para modo oscuro.',
    tags: ['React', 'Firebase', 'Tailwind'],
    year: '2023',
    icon: <FiCheckCircle size={22} />,
    theme: { bg: '#1a4a3d', border: '#137046', btn: '#266954' },
    images: [
      'https://picsum.photos/seed/task1/800/600',
      'https://picsum.photos/seed/task2/800/600'
    ]
  },
  {
    title: 'Analytics Dashboard',
    description: 'Dashboard interactivo con graficos y reportes personalizados',
    longDescription: 'Un dashboard interactivo avanzado para la visualización de datos complejos. Combina la reactividad de Vue.js con la potencia de D3.js para crear gráficos dinámicos, mapas de calor y reportes estadísticos personalizados. El backend en Node.js procesa grandes volúmenes de datos exportables en formatos CSV y PDF, ideal para análisis de inteligencia de negocios (BI).',
    tags: ['Vue.js', 'D3.js', 'Node.js'],
    year: '2022',
    icon: <FiMonitor size={22} />,
    theme: { bg: '#423056', border: '#63378a', btn: '#523775' },
    images: [
      'https://picsum.photos/seed/analytics1/800/600',
      'https://picsum.photos/seed/analytics2/800/600',
      'https://picsum.photos/seed/analytics3/800/600'
    ]
  },
  {
    title: 'Mobile Banking API',
    description: 'API RESTful para aplicacion de banca movil con alta seguridad',
    longDescription: 'Sistema robusto y escalable para una aplicación de banca móvil, diseñado bajo una arquitectura RESTful. Desarrollada con Express y MongoDB, prioriza la seguridad en cada endpoint implementando autenticación JWT, rate limiting, encriptación AES-256 para datos sensibles y auditoría completa de transacciones financieras. Cuenta con documentación interactiva.',
    tags: ['Express', 'MongoDB', 'Redis'],
    year: '2023',
    icon: <FiSmartphone size={22} />,
    theme: { bg: '#4d3a2b', border: '#844a1e', btn: '#724B34' },
    images: [
      'https://picsum.photos/seed/banking1/800/600',
      'https://picsum.photos/seed/banking2/800/600'
    ]
  }
];
