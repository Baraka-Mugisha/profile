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
  design?: String;
}

const navBarItems: Project[] = [
  {
    id: 1,
    name: 'Pure Fruit',
    summary: 'A collection of deliverables',
    about:
      'A collection of fruit deliverables available at youe doorstep anytime you want',
    image: '../../assets/me.png',
    stacks: ['React', 'React Native', 'Angular'],
    tags: ['all', 'design', 'mobile'],
    website: 'www.webly.web',
    github: 'github/keem',
    design: 'www.design.com',
  },
  {
    id: 2,
    name: 'Pure Fruit',
    summary: 'A collection of deliverables',
    about:
      'A collection of fruit deliverables available at youe doorstep anytime you want',
    image: '../../../assets/phone.jpg',
    demo: '../../../assets/phone.gif',
    stacks: ['React', 'React Native', 'Angular'],
    tags: ['all', 'web'],
    website: 'www.webly.web',
    github: 'github/keem',
  },
  {
    id: 3,
    name: 'Pure Fruit',
    summary: 'A collection of deliverables',
    about:
      'A collection of fruit deliverables available at youe doorstep anytime you want',
    image: '../../../assets/phone.jpg',
    demo: '../../../assets/phone.gif',
    stacks: ['React', 'React Native', 'Angular'],
    tags: ['all', 'web', 'design'],
    website: 'www.webly.web',
    github: 'github/keem',
  },
];

export default navBarItems;
