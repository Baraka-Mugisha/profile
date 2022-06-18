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
    icon: '../../assets/nav/information-6270.svg',
  },
  {
    id: 2,
    name: 'skills',
    to: '/skills',
    icon: '../../assets/nav/skill-8809.svg',
  },
  {
    id: 3,
    name: 'experience',
    to: '/experience',
    icon: '../../assets/nav/briefcase-862.svg',
  },
  {
    id: 4,
    name: 'projects',
    to: '/projects',
    icon: '../../assets/nav/rocket-3426.svg',
  },

  {
    id: 5,
    name: 'licenses',
    to: '/licenses',
    icon: '../../assets/nav/bookmark-7799.svg',
  },
  {
    id: 6,
    name: 'education',
    to: '/education',
    icon: '../../assets/nav/graduation-cap-5404.svg',
  },
  {
    id: 7,
    name: 'contact',
    to: '/contact',
    icon: '../../assets/nav/phone-1.svg',
  },
];

export default navBarItems;
