interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  contractType: string;
  timestamp: string;
  duties: string[];
  isActive: boolean;
  // stacks: String[];
}

const navBarItems: Experience[] = [
  {
    id: 1,
    role: 'Software engineer',
    company: 'Consumatech',
    location: 'Pretoria, SA',
    contractType: 'Full time',
    timestamp: 'January 2021 - January 2022',
    isActive: true,
    duties: [
      'Designed, developed and implemented software applications that satisfy complex and core business requirements.',
      'Converted mockups and designs and no-code apps into sleek responsive frontend pages using ReactJs/Redux.',
      'Coordinated with backend developers and assisted in implementation to the NodeJs backend.',
      'Lead daily standups and ensure deliverable timelines.',
      'Coordinated closely with the UI/UX designer and QA',
      'Reviewed my peers deliverables with respect to the best practices and app optimization',
    ],
  },
  {
    id: 2,
    role: 'Frontend developer',
    company: 'Sketchish',
    location: 'India',
    contractType: 'Full time',
    timestamp: 'November 2020 - January 2021',
    isActive: false,
    duties: [
      'Converted designs into responsive frontend pages using MaterialUI and Antd. Programmed with Javascript / GIT and used React/Redux',
      'Maintained the existing project',
      'Refactored an existing codebase to improve efficiency and ease-of-use.',
      'Improved a real-time chat system, and other complex features',
    ],
  },
  {
    id: 3,
    role: 'Full stack engineer',
    company: 'Andela',
    location: 'Kigali, Rw',
    contractType: 'Full time',
    timestamp: 'January 2020 - June 2020',
    isActive: false,
    duties: [
      'Written RESTful API in NodeJs using Express, PostgreSQL.',
      'Tested features with Jasmine, Mocha and Chai',
      'Executed React/Redux frontend in ES6, with Babel, Webpack and Node',
      'Coordinated closely with UI/UX designer',
      'Reviewed code for quality, finding weakness and ensuring adherence to standards',
      'Worked as part of a team involved in high complexity source code development',
      'Documented features according to standards using SwaggerJs and Storybook',
    ],
  },
];

export default navBarItems;
