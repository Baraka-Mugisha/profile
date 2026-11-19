export interface CaseStudy {
  title: string;
  org: string;
  period: string;
  summary: string;
  stack: string[];
}

// Source: resume. Shared by the /dark and /swiss pages.
export const caseStudies: CaseStudy[] = [
  {
    title: 'AIB insurance platform',
    org: 'VTG-Hub',
    period: '2025 – 2026',
    summary:
      'USSD services and complex premium-pricing logic, built to secure coding guidelines.',
    stack: ['PostgreSQL', 'USSD', 'Full-stack'],
  },
  {
    title: 'Centurion Group & PLM',
    org: 'VTG-Hub',
    period: '2025 – 2026',
    summary:
      'Client projects delivered with the VTG-Hub team, alongside Shopify storefronts.',
    stack: ['Full-stack', 'Shopify'],
  },
  {
    title: 'Boutique Chalet, v2',
    org: 'RemaTech',
    period: '2023 – 2024',
    summary:
      'Rebuilt the property-rental frontend in Vue.js and integrated it with Symfony APIs.',
    stack: ['Vue.js', 'Symfony'],
  },
  {
    title: 'PingMe',
    org: 'Crowdbotics',
    period: '2022 – 2023',
    summary: 'Mobile features for a link-in-bio app, delivered on contract.',
    stack: ['React Native'],
  },
];
