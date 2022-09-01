interface Project {
  id: Number;
  name: String;
  summary: String;
  about: String;
  image: String;
  demo?: String;
  stacks: String[];
  tags: String[];
  website?: String;
  github?: String;
  dribbble?: String;
  figma?: String;
}

const navBarItems: Project[] = [
  {
    id: 1,
    name: 'Pure Dribbble',
    summary:
      'A collection of fruit deliverables available at youe doorstep anytime you want',
    about:
      'A collection of fruit deliverables available at youe j \n\n A collection of fruit deliverables available at youe doorstep anytime you want.       . A collection of fruit deliverables available at youe doorstep anytime you want. A collection of fruit deliverables available at youe doorstep anytime you want sA collection of fruit deliverables available at youe doorstep anytime you want',
    image: '../../assets/me.png',
    stacks: ['React', 'React Native', 'Angular'],
    tags: ['all', 'design', 'mobile'],
    website: 'https://www.webly.web',
    github: 'https://www.github/keem',
    dribbble: 'https://www.design.com',
  },
  {
    id: 2,
    name: 'Pure Fruit',
    summary:
      'A collection of fruit deliverables available at youe doorstep anytime you want',
    about:
      'A collection of fruit deliverables available at youe doorstep anytime you want',
    image: '../../../assets/phone.jpg',
    demo: '../../../assets/phone.gif',
    stacks: ['React', 'React Native', 'Angular'],
    tags: ['all', 'web'],
    website: 'https://www.webly.web',
    github: 'https://www.github/keem',
  },
  {
    id: 3,
    name: 'Pure Figma',
    summary:
      'A collection of fruit deliverables available at youe doorstep anytime you want',
    about:
      'A collection of fruit deliverables available at youe doorstep anytime you want',
    image: '../../../assets/phone.jpg',
    demo: '../../../assets/phone.gif',
    stacks: ['React', 'React Native', 'Angular'],
    tags: ['all', 'web'],
    website: 'https://www.webly.web',
    github: 'https://www.github/keem',
    figma: 'https://www.figma/keem',
  },
];

export default navBarItems;
