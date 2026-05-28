import { FiCheckCircle, FiGlobe, FiMonitor, FiSmartphone } from "react-icons/fi";
import { IoBagOutline, IoCartOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

export const projects = [
  {
    title: 'Multi Shop E-commerce',
    description: 'Plataforma de comercio electronico completa con carrito, sesión de usuario y pagos',
    longDescription: 'Plataforma de comercio electrónico completa desarrollada con React, Spring Boot y MySQL. Incluye un sistema de carrito de compras intuitivo, lista de deseos, sesión de usuario por medio de Spring Security y JWT, y procesamiento de pagos seguro a través de Stripe. Implementada con un enfoque en el rendimiento y la escalabilidad, utilizando Server-Side Rendering (SSR) de React Router Framework.',
    tags: ['Spring Boot', 'Java', 'React', 'Stripe', 'MySQL', 'Hibernate', 'JWT', 'Spring Security'],
    year: 'Nov 2024 - Sep 2025',
    icon: <IoCartOutline size={22} />,
    theme: { bg: '#1a415b', border: '#3f86d5', btn: '#2C5675', lightBg: '#b8dcf6', lightBorder: '#3f86d5' },
    images: [
      '/proyects/multi-shop/multi-shop-1.webp',
      '/proyects/multi-shop/multi-shop-2.webp',
      '/proyects/multi-shop/multi-shop-3.webp',
      '/proyects/multi-shop/multi-shop-4.webp',
      '/proyects/multi-shop/multi-shop-5.webp',
      '/proyects/multi-shop/multi-shop-6.webp',
      '/proyects/multi-shop/multi-shop-7.webp',
    ],
    frontendRepo: 'https://github.com/DeimerRoncancio/ecommerce-multi-shop',
    backendRepo: 'https://github.com/DeimerRoncancio/multi-shop-api'
  },
  {
    title: 'Drop Shipping App',
    description: 'Plataforma de dropshipping con integración de pagos',
    longDescription: 'Aplicación de dropshipping (React, Spring Boot, MySQL) enfocada en la venta de productos con pagos integrados vía ePayco. Destaca por su arquitectura segura (Spring Security y JWT) y su excelente rendimiento, ofreciendo una experiencia fluida y escalable mediante diseño responsivo y SSR con React Router Framework.',
    tags: ['Spring Boot', 'Java', 'React', 'ePayco', 'MySQL', 'JWT', 'Spring Security'],
    year: 'Nov - 2025 - Feb 2026',
    icon: <IoBagOutline size={22} />,
    theme: { bg: '#1a4a3d', border: '#27956b', btn: '#266954', lightBg: '#b8eadc', lightBorder: '#27956b' },
    images: [
      '/proyects/drop-shipping/drop-shipping-1.webp',
      '/proyects/drop-shipping/drop-shipping-2.webp',
      '/proyects/drop-shipping/drop-shipping-3.webp',
      '/proyects/drop-shipping/drop-shipping-4.webp',
      '/proyects/drop-shipping/drop-shipping-5.webp',
      '/proyects/drop-shipping/drop-shipping-6.webp',
      '/proyects/drop-shipping/drop-shipping-7.webp',
      '/proyects/drop-shipping/drop-shipping-8.webp',
    ],
    frontendRepo: 'https://github.com/Siwina-tech/drop-shipping-app',
    backendRepo: 'https://github.com/Siwina-tech/drop-shipping-api'
  },
  {
    title: 'Panel Administrativo para Comercio Electronico',
    description: 'Panel administrativo completo para gestionar productos, pedidos y usuarios en una plataforma de comercio electrónico',
    longDescription: 'Panel administrativo completo desarrollado con React, Spring Boot y MySQL para gestionar productos, pedidos y usuarios en una plataforma de comercio electrónico. Incluye funcionalidades avanzadas como control de acceso basado en roles (RBAC). Implementado con un enfoque en la seguridad y el rendimiento, utilizando JWT y optimizaciones de rendimiento en el frontend.',
    tags: ['Spring Boot', 'Java', 'React', 'MySQL'],
    year: 'Mar 2025 - Mar 2026',
    icon: <FiMonitor size={22} />,
    theme: { bg: '#423056', border: '#7a52bd', btn: '#523775', lightBg: '#d5c2f0', lightBorder: '#7a52bd' },
    images: [
      '/proyects/admin-panel/admin-panel-1.webp',
      '/proyects/admin-panel/admin-panel-2.webp',
      '/proyects/admin-panel/admin-panel-3.webp',
      '/proyects/admin-panel/admin-panel-4.webp',
      '/proyects/admin-panel/admin-panel-5.webp',
      '/proyects/admin-panel/admin-panel-6.webp',
    ],
    frontendRepo: 'https://github.com/DeimerRoncancio/control-panel-multi-shop',
    backendRepo: 'https://github.com/DeimerRoncancio/multi-shop-api'
  },
  {
    title: 'Portafolio Personal',
    description: 'Sitio web personal para mostrar proyectos, habilidades y experiencia profesional',
    longDescription: 'Sitio web personal desarrollado con React y Tailwind CSS para mostrar proyectos, habilidades y experiencia profesional. El diseño es moderno y responsivo, con una navegación intuitiva y un enfoque en la presentación visual de los proyectos. Implementado con React Router para una experiencia de usuario fluida.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'React Router'],
    year: 'Oct 2023 - Presente',
    icon: <MdWorkOutline size={22} />,
    theme: { bg: '#4d3a2b', border: '#cf7830', btn: '#724B34', lightBg: '#f3c99f', lightBorder: '#cf7830' },
    images: [
      '/proyects/portfolio/portfolio-1.webp',
      '/proyects/portfolio/portfolio-2.webp',
      '/proyects/portfolio/portfolio-3.webp',
      '/proyects/portfolio/portfolio-4.webp',
      '/proyects/portfolio/portfolio-5.webp',
      '/proyects/portfolio/portfolio-6.webp',
      '/proyects/portfolio/portfolio-7.webp',
    ],
    frontendRepo: 'https://github.com/DeimerRoncancio/Sitio-web-personal',
  }
];
