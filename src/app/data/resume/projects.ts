interface Project {
  id: Number;
  name: String;
  image: String;
  altImage: String;
  stacks: String[];
}

const navBarItems: Project[] = [
  {
    id: 1,
    name: 'Pure Fruit',
    image: '../../assets/me.png',
    altImage: '../../assets/loader.gif',
    stacks: ['React', 'React Native', 'Angular'],
  },
  {
    id: 2,
    name: 'Pure Fruit',
    image: '../../assets/me.png',
    altImage: '../../assets/loader.gif',
    stacks: ['React', 'React Native', 'Angular'],
  },
];

export default navBarItems;
