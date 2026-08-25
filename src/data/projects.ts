export type ProjectCategory = 'web' | 'data' | 'modulo' | 'auth' | 'academic'

export interface Metric {
  /** Headline value, e.g. "20+" */
  v: string
  /** Caption, e.g. "integrated apps" */
  k: string
}

export interface ProjectEs {
  tag: string
  title: string
  /** May contain inline HTML (e.g. <code>); content is static and trusted. */
  description: string
  /** Same order/length as `metrics` — only the caption (`k`) is translated. */
  metrics: { k: string }[]
}

export interface Project {
  id: string
  category: ProjectCategory
  /** Path under /public */
  img: string
  alt: string
  tag: string
  title: string
  /** May contain inline HTML (e.g. <code>); content is static and trusted. */
  description: string
  /** Optional object-position override for screenshots that crop poorly. */
  objectPosition?: string
  metrics: Metric[]
  tags: string[]
  es: ProjectEs
}

export const projects: Project[] = [
  {
    id: 'portal',
    category: 'web',
    img: '/assets/img/portal.PNG',
    alt: 'SNM Internal Portal screenshot',
    tag: 'Web Application · Intranet',
    title: 'SNM Internal Portal',
    description:
      'Centralized access point to more than 20 institutional applications: filterable search, direct email, real-time visit counter, and emerging security alerts (Anti-Phishing campaign "Plan Firmeza").',
    metrics: [
      { v: '20+', k: 'integrated apps' },
      { v: '10,000+', k: 'registered visits' },
    ],
    tags: ['Laravel', 'Bootstrap', 'MySQL', 'Active Directory'],
    es: {
      tag: 'Aplicación Web · Intranet',
      title: 'Portal Interno SNM',
      description:
        'Punto de acceso centralizado a más de 20 aplicaciones institucionales: búsqueda filtrable, correo directo, contador de visitas en tiempo real y alertas de seguridad emergentes (campaña Anti-Phishing "Plan Firmeza").',
      metrics: [
        { k: 'aplicaciones integradas' },
        { k: 'visitas registradas' },
      ],
    },
  },
  {
    id: 'apolo-login',
    category: 'auth',
    img: '/assets/img/apolo-login.PNG',
    alt: 'APOLO login screen screenshot',
    tag: 'Authentication · Active Directory',
    title: 'APOLO — Login',
    description:
      'Access screen for the institutional system with Active Directory authentication (domain <code>migracion.gob.pa</code>), support for external users with independent credentials, and dynamic validation per profile.',
    metrics: [
      { v: 'Multi-profile', k: 'adaptive access' },
      { v: 'AD', k: 'LDAP integration' },
    ],
    tags: ['Laravel', 'LDAP / AD', 'Sessions', 'Security'],
    es: {
      tag: 'Autenticación · Active Directory',
      title: 'APOLO — Inicio de sesión',
      description:
        'Pantalla de acceso al sistema institucional con autenticación contra Active Directory (dominio <code>migracion.gob.pa</code>), soporte para usuarios externos con credenciales independientes, y validación dinámica por perfil.',
      metrics: [
        { k: 'acceso adaptativo' },
        { k: 'integración LDAP' },
      ],
    },
  },
  {
    id: 'copiado',
    category: 'modulo',
    img: '/assets/img/copiado.PNG',
    alt: 'Copy Center POS screenshot',
    tag: 'APOLO Module · Point of Sale',
    title: 'Copy Center',
    description:
      'Digitalization of the institutional Copy Center with an internal POS: cart with automatic quoting, shift closing, service catalog, day/week/month statistics, and real-time monitoring of active operators.',
    metrics: [
      { v: 'POS', k: 'live quoting' },
      { v: 'PDF', k: 'order reports' },
    ],
    tags: ['Laravel', 'JavaScript', 'MySQL', 'PDF Reports'],
    es: {
      tag: 'Módulo APOLO · Punto de Venta',
      title: 'Centro de Copiado',
      description:
        'Digitalización del Centro de Copiado institucional con un POS interno: carrito con cotización automática, cierre de turno, catálogo de servicios, estadísticas por día/semana/mes y monitoreo en tiempo real de operadores activos.',
      metrics: [
        { k: 'cotización en vivo' },
        { k: 'reportes de pedidos' },
      ],
    },
  },
  {
    id: 'transporte',
    category: 'modulo',
    img: '/assets/img/transporte.PNG',
    alt: 'Transport Control screenshot',
    tag: 'APOLO Module · Fleet Management',
    title: 'Transport Control',
    description:
      'Tracking of the institutional vehicle fleet: registration with technical specs, accessories catalog, 20-point inspection history with file attachments, and PDF fleet report generation.',
    metrics: [
      { v: '20', k: 'inspection checkpoints' },
      { v: 'Dashboard', k: 'fleet statistics' },
    ],
    tags: ['Laravel', 'Eloquent', 'MySQL', 'Uploads'],
    es: {
      tag: 'Módulo APOLO · Gestión de Flota',
      title: 'Control de Transporte',
      description:
        'Seguimiento de la flota vehicular institucional: registro con ficha técnica, catálogo de accesorios, historial de inspección de 20 puntos con archivos adjuntos, y generación de reportes de flota en PDF.',
      metrics: [
        { k: 'puntos de inspección' },
        { k: 'estadísticas de flota' },
      ],
    },
  },
  {
    id: 'cambio',
    category: 'modulo',
    img: '/assets/img/cambio.PNG',
    alt: 'Change Request module screenshot',
    objectPosition: 'center 0%',
    tag: 'APOLO Module · Change Management',
    title: 'Change Request',
    description:
      'Change management for the DTI: classification by type (Standard / Emergency) with automatic priority adjustment, technical impact section, multilevel approval flow (DTI Review → Management), and email notification.',
    metrics: [
      { v: 'Multilevel', k: 'approval workflow' },
      { v: 'Auto', k: 'email notification' },
    ],
    tags: ['Laravel', 'Mail', 'Workflow', 'MySQL'],
    es: {
      tag: 'Módulo APOLO · Gestión de Cambios',
      title: 'Solicitud de Cambios',
      description:
        'Gestión de cambios para la DTI: clasificación por tipo (Estándar / Emergencia) con ajuste automático de prioridad, sección de impacto técnico, flujo de aprobación multinivel (Revisión DTI → Gerencia) y notificación por correo.',
      metrics: [
        { k: 'flujo de aprobación' },
        { k: 'notificación automática' },
      ],
    },
  },
  {
    id: 'estadisticas',
    category: 'data',
    img: '/assets/img/estadisticas.PNG',
    alt: 'Portal Statistics dashboard screenshot',
    tag: 'Analytics · Traffic',
    title: 'Portal Statistics',
    description:
      'Administrative visits panel: real-time KPIs (day/week/month), unique IPs by period, last 30-day chart, and detailed access history with IP, browser/OS, and timestamp.',
    metrics: [
      { v: '30 days', k: 'historical series' },
      { v: 'Real-time', k: 'live KPIs' },
    ],
    tags: ['Laravel', 'JavaScript', 'Charts', 'MySQL'],
    es: {
      tag: 'Analítica · Tráfico',
      title: 'Estadísticas del Portal',
      description:
        'Panel administrativo de visitas: KPIs en tiempo real (día/semana/mes), IPs únicas por periodo, gráfico de últimos 30 días, e historial detallado de accesos con IP, navegador/SO y fecha/hora.',
      metrics: [
        { k: 'serie histórica' },
        { k: 'KPIs en vivo' },
      ],
    },
  },
  {
    id: 'dashboard',
    category: 'data',
    img: '/assets/img/dashboard.PNG',
    alt: 'Operations Dashboard screenshot',
    objectPosition: 'center 0%',
    tag: 'Analytics · Highcharts + Map',
    title: 'Operations Dashboard',
    description:
      'Real-time analytical panel for field operations: KPIs by gender, action time series, interactive choropleth map of Panama by province, and nationality breakdown with Highcharts.',
    metrics: [
      { v: '10,235', k: 'registered records' },
      { v: 'Map', k: 'interactive choropleth' },
    ],
    tags: ['Laravel', 'Highcharts', 'GeoJSON', 'MySQL'],
    es: {
      tag: 'Analítica · Highcharts + Mapa',
      title: 'Dashboard de Operaciones',
      description:
        'Panel analítico en tiempo real para operaciones de campo: KPIs por género, serie temporal de acciones, mapa coroplético interactivo de Panamá por provincia, y desglose por nacionalidad con Highcharts.',
      metrics: [
        { k: 'registros analizados' },
        { k: 'mapa coroplético interactivo' },
      ],
    },
  },
  {
    id: 'rbac',
    category: 'auth',
    img: '/assets/img/rbac.PNG',
    alt: 'Modules, Roles and Permissions screenshot',
    tag: 'Security · Access Control (RBAC)',
    title: 'Modules, Roles & Permissions',
    description:
      'Granular access control system governing the entire APOLO platform: module structure, roles by institutional function, CRUD permissions per module, and SNM department catalog.',
    metrics: [
      { v: '140+', k: 'granular permissions' },
      { v: '40+', k: 'institutional roles' },
    ],
    tags: ['Laravel', 'RBAC', 'Middleware', 'MySQL'],
    es: {
      tag: 'Seguridad · Control de Acceso (RBAC)',
      title: 'Módulos, Roles y Permisos',
      description:
        'Sistema de control de acceso granular que gobierna toda la plataforma APOLO: estructura de módulos, roles por función institucional, permisos CRUD por módulo, y catálogo de departamentos del SNM.',
      metrics: [
        { k: 'permisos granulares' },
        { k: 'roles institucionales' },
      ],
    },
  },
  {
    id: 'reclutamiento',
    category: 'modulo',
    img: '/assets/img/reclutamiento.png',
    alt: 'SNM Academy Recruitment system screenshot',
    objectPosition: 'center 15%',
    tag: 'APOLO Module · Recruitment',
    title: 'Recruitment — SNM Academy',
    description:
      'System for managing applicants to the National Migration Service Academy: candidate registration, document control, selection process tracking, and administrative panel for evaluators.',
    metrics: [
      { v: 'End-to-end', k: 'selection process' },
      { v: 'Docs', k: 'document control' },
    ],
    tags: ['Laravel', 'MySQL', 'Blade', 'JavaScript'],
    es: {
      tag: 'Módulo APOLO · Reclutamiento',
      title: 'Reclutamiento — Academia SNM',
      description:
        'Sistema de gestión de aspirantes a la Academia del Servicio Nacional de Migración: registro de candidatos, control documental, seguimiento del proceso de selección, y panel administrativo para evaluadores.',
      metrics: [
        { k: 'proceso de selección' },
        { k: 'control documental' },
      ],
    },
  },
  {
    id: 'noticias',
    category: 'modulo',
    img: '/assets/img/noticias.PNG',
    alt: 'News Management CMS screenshot',
    tag: 'APOLO Module · Institutional CMS',
    title: 'News Management',
    description:
      'Institutional communication within APOLO: public grid view with featured image and "Read more", personalized welcome per user, and admin panel with CRUD, status control (Published / Draft), and search.',
    metrics: [{ v: 'CRUD', k: 'editorial panel' }],
    tags: ['Laravel', 'Blade', 'JavaScript', 'MySQL'],
    es: {
      tag: 'Módulo APOLO · CMS Institucional',
      title: 'Gestión de Noticias',
      description:
        'Comunicación institucional dentro de APOLO: vista pública en cuadrícula con imagen destacada y "Leer más", bienvenida personalizada por usuario, y panel de administración con CRUD, control de estado (Publicado / Borrador) y búsqueda.',
      metrics: [{ k: 'panel editorial' }],
    },
  },
  {
    id: 'proyecto-final',
    category: 'academic',
    img: '/assets/img/proyecto-final-architecture.svg',
    alt: 'Clean Architecture diagram of the Marketplace project',
    tag: 'Team Project · Domain & Use Cases',
    title: 'Tech Marketplace',
    description:
      'Group project (3 students, University of Panama) for a tech-product marketplace: REST API and Django frontend over MySQL, run with Docker Compose. <strong>My scope: Domain layer, Use Cases, and SQL</strong> — the API\'s presentation/infra layers and the Django frontend were built by teammates.',
    metrics: [
      { v: 'Clean Arch.', k: 'domain-driven layers' },
      { v: '3', k: 'team members' },
    ],
    tags: ['Node.js', 'TypeScript', 'Express', 'Django', 'MySQL', 'Docker'],
    es: {
      tag: 'Proyecto en Equipo · Domain & Use Cases',
      title: 'Marketplace de Tecnología',
      description:
        'Proyecto grupal (3 estudiantes, Universidad de Panamá) para un marketplace de productos tech: API REST y frontend en Django sobre MySQL, orquestado con Docker Compose. <strong>Mi alcance: capa de Domain, Use Cases y SQL</strong> — las capas de presentación/infra de la API y el frontend en Django los construyeron mis compañeros.',
      metrics: [
        { k: 'capas domain-driven' },
        { k: 'integrantes del equipo' },
      ],
    },
  },
]
