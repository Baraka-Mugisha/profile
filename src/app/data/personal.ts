import { PersonalInfo, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Jean Pierre Baraka',
  specialization: 'Software engineer',
  location: 'Kigali, Rwanda',
  avatar: '/img/socials/profile.jpg',
};

export const socialLinks: SocialLink[] = [
  { icon: 'fa-brands fa-github', url: 'https://github.com/Baraka-Mugisha' },
  {
    icon: 'fa-brands fa-linkedin',
    url: 'https://www.linkedin.com/in/jean-pierre-baraka-uwimana',
  },
  {
    icon: 'fa-brands fa-whatsapp',
    url: 'https://api.whatsapp.com/send/?phone=250785459575&text=Hi+Bakeem%2C+I+want+you+to+help+me+with&app_absent=0',
  },
  { icon: 'fa-brands fa-upwork', url: 'https://www.upwork.com/freelancers/~01ed73d6aa3a16a838' },
  { icon: 'fa-brands fa-dribbble', url: 'https://dribbble.com/baraka_keem' },
  { icon: 'fa-solid fa-envelope', url: 'mailto:mugishaje@gmail.com' },
];
