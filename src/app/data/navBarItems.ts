interface Item {
  id: Number;
  name: String;
  to: String;
  icon: String;
}

const navBarItems: Item[] = [
  {
    id: 1,
    name: 'about',
    to: '/about',
    icon: '../../assets/favicon.png',
  },
  {
    id: 2,
    name: 'projects',
    to: '/projects',
    icon: '../../assets/favicon.png',
  },
  {
    id: 3,
    name: 'experience',
    to: '/experience',
    icon: '../../assets/favicon.png',
  },
  {
    id: 4,
    name: 'skills',
    to: '/skills',
    icon: '../../assets/favicon.png',
  },
  {
    id: 5,
    name: 'licenses',
    to: '/licenses',
    icon: '../../assets/favicon.png',
  },
  {
    id: 6,
    name: 'education',
    to: '/education',
    icon: '../../assets/favicon.png',
  },
  {
    id: 7,
    name: 'contact',
    to: '/contact',
    icon: '../../assets/favicon.png',
  },
];

export default navBarItems;
