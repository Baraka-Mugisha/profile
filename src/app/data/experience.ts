export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  contractType: string;
  timestamp: string;
  duties: string[];
  isActive: boolean;
  stacks?: string[];
  companySite?: string;
}

// Source of truth: the resume. Newest first.
export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Full stack developer',
    company: 'VTG-Hub',
    location: 'Kigali, Rw',
    contractType: 'Full time',
    timestamp: 'January 2025 - March 2026',
    isActive: false,
    duties: [
      'Delivered client projects including AIB, PLM, Centurion Group and Shopify storefronts.',
      'Implemented insurance platform features, including USSD services and premium-pricing logic for AIB, following secure coding guidelines.',
      'Built internal dashboards and back-office tools, and optimized PostgreSQL schemas for high-volume client operations.',
    ],
    stacks: ['PostgreSQL', 'Shopify'],
  },
  {
    id: 2,
    role: 'Team lead',
    company: 'Kitech',
    location: 'Kigali, Rw',
    contractType: 'Part time',
    timestamp: 'May 2024 - January 2026',
    isActive: false,
    duties: [
      'Led a small engineering team delivering client web applications.',
      'Implemented automated CI/CD pipelines, server monitoring and strict peer code reviews to catch regressions early.',
      'Maintained production infrastructure and reduced service downtime.',
      'Mentored and trained junior developers and interns.',
    ],
  },
  {
    id: 3,
    role: 'Frontend engineer',
    company: 'RemaTech',
    location: 'Kigali, Rw',
    contractType: 'Full time',
    timestamp: 'July 2023 - April 2024',
    isActive: false,
    duties: [
      'Developed Version 2 of the Boutique Chalet property rental platform using Vue.js.',
      'Integrated frontend features with Symfony APIs.',
      'Improved UI performance and maintainability.',
    ],
    stacks: ['Vue.js', 'Symfony'],
  },
  {
    id: 4,
    role: 'Frontend / mobile developer',
    company: 'Crowdbotics',
    location: 'Berkeley, US',
    contractType: 'Contract',
    timestamp: 'September 2022 - March 2023',
    isActive: false,
    duties: ['Built mobile features for PingMe, a link-in-bio tool, using React Native.'],
    stacks: ['React Native'],
  },
  {
    id: 5,
    role: 'Software engineer',
    company: 'Consumatech',
    location: 'Pretoria, SA',
    contractType: 'Full time',
    timestamp: 'January 2021 - March 2022',
    isActive: false,
    duties: [
      'Designed, developed and implemented software applications that satisfy complex and core business requirements.',
      'Converted mockups and designs and no-code apps into sleek responsive frontend pages using ReactJs/Redux.',
      'Coordinated with backend developers and assisted in implementation to the NodeJs backend.',
      'Lead daily standups and ensure deliverable timelines.',
      'Coordinated closely with the UI/UX designer and QA.',
      'Reviewed peers’ deliverables for best practices and app optimization.',
    ],
    stacks: ['ReactJs', 'Redux', 'NodeJs'],
  },
  {
    id: 6,
    role: 'Frontend developer',
    company: 'Sketchish',
    location: 'IN',
    contractType: 'Contract',
    timestamp: 'November 2020 - January 2021',
    isActive: false,
    duties: [
      'Developed React.js dashboard features and real-time chat functionality.',
      'Implemented UI components from design specifications.',
      'Improved frontend performance and code maintainability.',
    ],
    stacks: ['React', 'Redux', 'MaterialUI', 'Antd'],
  },
  {
    id: 7,
    role: 'Software engineer',
    company: 'Andela',
    location: 'Kigali, Rw',
    contractType: 'Full time',
    timestamp: 'January 2020 - June 2020',
    isActive: false,
    duties: [
      'Wrote RESTful APIs in NodeJs using Express and PostgreSQL.',
      'Tested features with Jasmine, Mocha and Chai.',
      'Executed React/Redux frontend in ES6, with Babel, Webpack and Node.',
      'Coordinated closely with the UI/UX designer.',
      'Reviewed code for quality and adherence to standards.',
      'Documented features using SwaggerJs and Storybook.',
    ],
    stacks: ['NodeJs', 'Express', 'PostgreSQL', 'React', 'Redux'],
  },
];
