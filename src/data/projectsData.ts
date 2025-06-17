import guidon from '@/assets/projects/guidon.png';
import geography from '@/assets/projects/geography.png';
import crisis from '@/assets/projects/crisis.png';
import shipwreck from '@/assets/projects/shipwreck.jpg';
import goodtech from '@/assets/projects/goodtech.png';
import pokemon from '@/assets/projects/pokemon.png';
import portfolio from '@/assets/projects/portfolio.png';
import { StaticImageData } from 'next/image';

export interface Project {
  name: string;
  description: string;
  year: number;
  skills: string[];
  image: StaticImageData;
  link?: string;
  github?: string;
}

export const projectImages = {
  guidon,
  geography,
  crisis,
  shipwreck,
  goodtech,
  pokemon,
  portfolio,
};

export const projects: Project[] = [
  {
    name: 'The GUIDON Official Website',
    description:
      'The GUIDON is the official publication of the Ateneo de Manila University. I was part of the development team for the revamp of their website, as well as one of the leads for the project when I was the Digital Development Editor for the organization.',
    year: 2022,
    skills: ['Wordpress', 'VueJS', 'SaSS'],
    image: projectImages.guidon,
    link: 'https://theguidon.com/',
  },
  {
    name: 'A Geography of Goodbyes',
    description:
      "This interactive was a commemoration for the restaurants and locations near Katipunan that were closed due to the pandemic. It is a simple geography map with articles about each location in the area. This was developed in Vanilla HTML/CSS/JS",
    year: 2021,
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: projectImages.geography,
    link: 'https://interactive.theguidon.com/2021/05/katipunan-casualties/',
  },
  {
    name: 'Year in Visual Stories',
    description:
      'This interactive is a showcase of the various creative releases of The GUIDON in the SY 2020-2021.',
    year: 2021,
    skills: ['VueJS', 'SaSS'],
    image: projectImages.crisis,
    link: 'https://interactive.theguidon.com/2021/10/year-in-visual-stories/',
  },
  {
    name: 'Shipwreck Adventure Game',
    description:
      "This was a game that includes web apps that I created and integrated into Storyline Articulate as an internship for Coca Cola. The game was created as a learning and bonding experience for the employees and staffs within the company. The game featured various functionalities that I developed including messaging amongst teammates, puzzles, Azure uploads, backend troubleshooting, and more.",
    year: 2022,
    skills: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Azure'],
    image: projectImages.shipwreck,
  },
  {
    name: 'GoodTech PH Official Website',
    description:
      'This is the official website of GoodTech that I built with Wordpress. It features a modern design and a user-friendly interface, showcasing the company\'s services and projects.',
    year: 2023,
    skills: ['Wordpress', 'Elementor'],
    image: projectImages.goodtech,
    link: 'https://goodtech.com.ph/',
  },
  {
    name: 'Pokedex API',
    description:
      "This is a personal project that I made in practicing NextJS that fetches the data from an API containing various information about all Pokemon. It also makes use of local storage for keeping track of a user's captured Pokemon.",
    year: 2024,
    skills: ['NextJS', 'Tailwind', 'TypeScript', 'API Integration'],
    image: projectImages.pokemon,
    link: 'https://pokedex-app-psi-steel.vercel.app/',
    github: 'https://github.com/JohnnyTalbot/pokedex-app',
  },
  {
    name: 'Personal Portfolio Website',
    description:
      "This is the current site that you are on which I made with the purpose of being able to properly display who I am as a developer as well as what I am capable of creating. I both designed and developed this site myself as a challenge to myself for someone who usually only develops.",
    year: 2025,
    skills: ['NextJS', 'Tailwind', 'TypeScript', 'Figma'],
    image: projectImages.portfolio,
    link: 'https://portfolio-site-rouge-chi.vercel.app/',
    github: 'https://github.com/JohnnyTalbot/portfolio-site',
  },
];



