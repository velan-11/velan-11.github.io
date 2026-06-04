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
    blurb: 'An asset and work-order management system.',
    description:
      'Tracks assets and work orders with full CRUD, JWT login, and role-based access. Technicians get assigned jobs and upload evidence files, each verified with a SHA-256 hash. Runs as Spring Boot microservices behind a Spring Cloud Gateway, with Eureka for service discovery and Resilience4j for fault tolerance.',
    stack: ['Angular', 'Spring Boot', 'Microservices', 'MySQL', 'JWT', 'Spring Cloud'],
    github: 'https://github.com/velan-11/energygrid',
    featured: true,
  },
  {
    title: 'Gym Membership System',
    blurb: 'An API for running a gym’s memberships.',
    description:
      'Handles member sign-ups, membership plans, and payments. A Spring Boot service keeps everything in a MySQL database behind clean REST endpoints.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'REST'],
    github: 'https://github.com/velan-11/gym-membership-system',
    featured: true,
  },
];
