export type ProjectCategory = 'web' | 'data' | 'modulo' | 'auth'

export interface Metric {
  /** Headline value, e.g. "20+" */
  v: string
  /** Caption, e.g. "integrated apps" */
  k: string
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
  },
  {
    id: 'cambio',
    category: 'modulo',
    img: '/assets/img/cambio.PNG',
    alt: 'Change Request module screenshot',
    objectPosition: 'center 20%',
    tag: 'APOLO Module · Change Management',
    title: 'Change Request',
    description:
      'Change management for the DTI: classification by type (Standard / Emergency) with automatic priority adjustment, technical impact section, multilevel approval flow (DTI Review → Management), and email notification.',
    metrics: [
      { v: 'Multilevel', k: 'approval workflow' },
      { v: 'Auto', k: 'email notification' },
    ],
    tags: ['Laravel', 'Mail', 'Workflow', 'MySQL'],
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
  },
  {
    id: 'dashboard',
    category: 'data',
    img: '/assets/img/dashboard.PNG',
    alt: 'Operations Dashboard screenshot',
    objectPosition: 'center 55%',
    tag: 'Analytics · Highcharts + Map',
    title: 'Operations Dashboard',
    description:
      'Real-time analytical panel for field operations: KPIs by gender, action time series, interactive choropleth map of Panama by province, and nationality breakdown with Highcharts.',
    metrics: [
      { v: '10,210', k: 'registered records' },
      { v: 'Map', k: 'interactive choropleth' },
    ],
    tags: ['Laravel', 'Highcharts', 'GeoJSON', 'MySQL'],
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
  },
]
