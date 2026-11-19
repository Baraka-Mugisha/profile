import { Project } from '../types';
import { caseStudies } from './case-studies';

// Shown when Contentful returns no projects. Built from the resume; add real
// screenshots in Contentful (or set `image`) to replace the typographic tiles.
export const FALLBACK_PROJECTS: Project[] = caseStudies.map((c) => ({
  id: c.title,
  name: c.title,
  image: '',
  tags: c.stack,
  summary: `${c.org} · ${c.period}`,
  about: c.summary,
  stacks: c.stack,
}));

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

// Created by Jean Pierre Baraka; not yet in Contentful. Appended to CMS results.
export const EXTRA_PROJECTS: Project[] = [
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
