import { Project } from '../types';

// Portfolio content, stored locally. Originally exported from Contentful (projects);
// images live in public/img/projects.
export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'huza',
    name: 'Huza',
    image: '/img/projects/huza.jpg',
    tags: ['web', 'backend', 'mobile'],
    stacks: ['Next.js', 'React Native'],
    about:
      "Huza is designed for Rwandans living across Europe and the people who understand that serious chemistry feels better when culture, intention, and conversation style already fit.\n\nMembers can signal how they naturally speak in daily life, travel, and emotionally important moments.",
  },
  {
    id: 'cyviq',
    name: 'Cyviq',
    image: '/img/projects/cyviq.jpg',
    tags: ['web'],
    summary:
      'Cyviq delivers new builds, codebase rescue, QA guardrails, and embedded teams that turn software into a reliable business asset.',
    stacks: ['Next.js'],
    website: 'https://www.cyviq.rw/',
    about:
      'Cyviq fixes AI-generated software before it fails your business. CYVIQ acts as the review and cleanup crew for teams stuck with unstable, unmaintainable, or insecure AI-assisted codebases.',
  },
  {
    id: 'quest-africa',
    name: 'Quest Africa',
    image: '/img/projects/quest-africa.jpg',
    tags: ['web'],
    summary:
      'A leading design and construction consultancy founded in March 2009, specialising in planning, design, and management for a growing Africa.',
    stacks: ['Next.js'],
    website: 'https://questafricalimited.com/',
    about:
      'QuestAfrica Limited is a design and construction consultancy founded in March 2009, specializing in planning, design and management of architectural, engineering and interior design projects in Kigali, Rwanda.\n\nThe firm has a skilled team of architects, engineers, quantity surveyors, technicians, designers, and specialist consultants delivering quality consultancy services across diverse construction and development assignments.',
  },
  {
    id: 'kitech',
    name: 'Kitech',
    image: '/img/projects/kitech.jpg',
    tags: ['web', 'backend'],
    summary:
      'Kitech offers IT services like software development, consultancy, and maintenance. They provide other branding packages including domain names, emails, and SSL certificates to enhance business identities',
    stacks: ['React', 'Node.js'],
    website: 'https://kitech.rw',
    about:
      'Kitech is a software engineering firm founded with the primary goal of providing digital solutions to various institutions, driven by a mission to enhance, simplify, and foster interactions among professionals within different entities.\n\nWe specialise in crafting and launching business identities, offering guidance on developing content that promotes products and services to potential clients through the latest digital marketing trends.',
  },
  {
    id: 'boutiqchalets-v2',
    name: 'BoutiqChalets v2',
    image: '/img/projects/boutiqchalets-v2.jpg',
    tags: ['web'],
    summary:
      'Boutiq Chalets offers luxury chalet and apartment rentals in Megève, France, along with comprehensive property management and personalized concierge services to ensure an exceptional stay.',
    stacks: ['Vue', 'Ionic'],
    website: 'https://www.boutiqchalets.com/',
    about:
      'Boutiq Chalets specializes in luxury chalet and apartment rentals in Megève, France. The company offers a curated selection of high-end properties and provides comprehensive property management, personalized concierge services, and top-tier hospitality, including gourmet dining experiences with Michelin-star chefs.\n\nTheir services aim to ensure an unforgettable stay by handling every detail from luxury transfers to wellness treatments and bespoke experiences, all managed by a team of local experts committed to excellence.',
  },
  {
    id: 'sellit',
    name: 'SellIt',
    image: '/img/projects/sellit.jpg',
    tags: ['mobile', 'backend'],
    summary:
      "A mobile app for a marketplace for selling the stuff you don't need anymore. Designed in React native and connected to a backend Nodejs server",
    stacks: ['React Native', 'Node.js'],
    website: 'https://expo.dev/@baraka_keem/sellit',
    github: 'https://github.com/Baraka-Mugisha/DoneWIthIt',
    about:
      "The React Native full stack app I developed is an online marketplace where users can sell items they don't need anymore. It allows users to create an account, post their items for sale, and communicate with potential buyers.\n\nThe app features a search functionality, filtering options, and a user-friendly interface to make the buying and selling experience easy and enjoyable.\n\nIt provides a simple and convenient platform for users to declutter their lives and earn some extra cash in the process.",
  },
  {
    id: 'fleetcon',
    name: 'Fleetcon',
    image: '/img/projects/fleetcon.jpg',
    tags: ['web'],
    summary:
      'Fleet Management System that provides real-time tracking, remote diagnostics, and maintenance scheduling for a fleet of vehicles.',
    stacks: ['React', 'Redux'],
    website: 'https://app.fleetcon.africa/',
    about:
      "Developed the frontend of a Fleet Management System that provides real-time tracking, remote diagnostics, and maintenance scheduling for a fleet of vehicles.\n\nUtilized ReactJS to build an intuitive and user-friendly interface, while ensuring the system's responsiveness and accessibility across various devices. Collaborated with the backend team to integrate the system's functionality and data visualization features.\n\nThe project involved developing dynamic dashboards, data tables, and forms that allow fleet managers to monitor and manage their fleet's performance and optimize their operations.",
  },
  {
    id: 'sisonke',
    name: 'Sisonke',
    image: '/img/projects/sisonke.jpg',
    tags: ['web'],
    summary:
      'Sisonke Marketplace enables small businesses to source products at lower prices and access other needed services and offerings.',
    stacks: ['React', 'Redux'],
    website: 'https://www.sisonke.africa/',
    about:
      'Sisonke Marketplace enables small businesses to source products at lower prices and access other needed services and offerings.\n\nThe marketplace operates on an order management and fulfillment platform that consolidates orders so that goods are bought in bulk at lower prices. The platform also enables goods to be transported in bulk quantities to optimize logistics costs and reduce the cost of delivery to small businesses.',
  },
  {
    id: 'ruffi',
    name: 'Ruffi',
    image: '/img/projects/ruffi.jpg',
    tags: ['mobile', 'web'],
    summary: 'Workout tracker for home and gym: routines, set logs, and session history.',
    about:
      'Build routines, log every set and track progress over time. Sessions stay recoverable through network drops and sync when the connection returns. Health data exports to Apple Health and Health Connect.',
    stacks: ['React Native', 'Expo', 'Convex', 'Clerk', 'RevenueCat', 'Next.js'],
    website: 'https://www.ruffi.app/',
  },
  {
    id: 'nupta',
    name: 'Nupta',
    image: '/img/projects/nupta.jpg',
    tags: ['mobile', 'web', 'backend'],
    summary: 'Wedding planner for Rwandan couples, with a vendor discovery side.',
    about:
      'Plans multi-ceremony weddings in Rwanda: ceremonies, tasks, budgets, guests, styling and a wedding website. Partners plan together in one shared workspace, and local vendors reach couples who are ready to hire.',
    stacks: ['Expo', 'React Native', 'Next.js', 'NestJS', 'Prisma', 'Supabase', 'TanStack Query'],
    website: 'https://www.nupta.rw/',
  },
];

// Portfolio display order. Projects not listed here keep their order after these.
const PROJECT_ORDER = [
  'BoutiqChalets v2',
  'Quest Africa',
  'Kitech',
  'Cyviq',
  'Nupta',
  'Ruffi',
  'Fleetcon',
  'Huza',
  'Sisonke',
  'SellIt',
];

export function orderProjects(items: Project[]): Project[] {
  const rank = (p: Project) => {
    const i = PROJECT_ORDER.indexOf(p.name);
    return i === -1 ? PROJECT_ORDER.length : i;
  };
  return [...items].sort((a, b) => rank(a) - rank(b));
}
