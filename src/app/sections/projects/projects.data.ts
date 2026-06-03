export interface Project {
  title: string;
  blurb: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

/**
 * NOTE: descriptions below are best-guesses from the project names —
 * edit them to match what your apps actually do.
 */
export const PROJECTS: Project[] = [
  {
    title: 'EnergyGrid',
    blurb: 'Full-stack web app for tracking energy data.',
    description:
      'A full-stack application built with a Spring Boot REST API and an Angular frontend. Handles user input, persists data, and renders it back in a clean responsive UI.',
    stack: ['Java', 'Spring Boot', 'Angular', 'TypeScript'],
    github: 'https://github.com/velan-11/energygrid',
    featured: true,
  },
  {
    title: 'Gym Membership Management System',
    blurb: 'REST API to manage gym members, plans and payments.',
    description:
      'A Spring Boot backend with a MySQL database that handles member sign-ups, membership plans, and payment records. Built to practice clean REST design, JPA relationships, and validation.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'REST'],
    github: 'https://github.com/velan-11/gym-membership-system',
    featured: true,
  },
];
