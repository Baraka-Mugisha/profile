export const SECTION_IDS = ['home', 'portfolio', 'about', 'resume', 'contact'] as const;

export const PERSONAL_INFO = {
  name: 'Jean Pierre Baraka',
  email: 'mugishaje@gmail.com',
  phone: '+250785459575',
  phoneFormatted: '+250 785 459 575',
  location: 'Kigali, Rwanda',
  locationLink: 'https://maps.app.goo.gl/Kigali',
  specialization: 'Software Engineer',
  title: 'Software Developer',
  avatar: '/img/avatars/1024x1024_a01.webp',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/Baraka-Mugisha',
  linkedin: 'https://www.linkedin.com/in/jean-pierre-baraka-uwimana',
  whatsapp:
    'https://api.whatsapp.com/send/?phone=250785459575&text=Hi+Bakeem%2C+I+want+you+to+help+me+with&app_absent=0',
  upwork: 'https://www.upwork.com/freelancers/~01ed73d6aa3a16a838',
  dribbble: 'https://dribbble.com/baraka_keem',
  email: `mailto:${PERSONAL_INFO.email}?subject=Message%20from%20your%20site`,
};

export const SOCIAL_ICONS = {
  github: '/img/socials/github.svg',
  linkedin: '/img/socials/linkedin.svg',
  whatsapp: '/img/socials/whatsapp.svg',
  upwork: '/img/socials/upwork.svg',
  dribbble: '/img/socials/dribbble.svg',
  mail: '/img/socials/mail.svg',
};
