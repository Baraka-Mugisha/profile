import { PersonalInfo, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Jean Pierre Baraka',
  specialization: 'Full-stack engineer',
  location: 'Kigali, Rwanda',
  avatar: '/img/socials/profile.jpg',
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/Baraka-Mugisha' },
  {
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    url: 'https://www.linkedin.com/in/jean-pierre-baraka-uwimana',
  },
  {
    label: 'Upwork',
    icon: 'fa-brands fa-upwork',
    url: 'https://www.upwork.com/freelancers/~01ed73d6aa3a16a838',
  },
  { label: 'Dribbble', icon: 'fa-brands fa-dribbble', url: 'https://dribbble.com/baraka_keem' },
  { label: 'Email', icon: 'fa-solid fa-envelope', url: 'mailto:mugishaje@gmail.com' },
];
