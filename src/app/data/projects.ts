import { Project } from '../types';

export const DUMMY_PROJECTS: Project[] = [
  {
    id: 'dummy-1',
    name: 'Portfolio Website',
    image: 'https://picsum.photos/seed/portfolio/1200/800',
    tags: ['Angular', 'Tailwind'],
    summary: 'A modern, responsive personal portfolio site.',
  },
  {
    id: 'dummy-2',
    name: 'E-commerce UI',
    image: 'https://picsum.photos/seed/shop/1200/800',
    tags: ['UI/UX', 'Frontend'],
    summary: 'Clean shopping experience with product grid and cart.',
  },
  {
    id: 'dummy-3',
    name: 'Dashboard Analytics',
    image: 'https://picsum.photos/seed/analytics/1200/800',
    tags: ['Charts', 'SaaS'],
    summary: 'KPIs, charts, and filters for business insights.',
  },
];
