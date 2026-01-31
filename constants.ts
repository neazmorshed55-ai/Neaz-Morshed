
import { Project, Experience, Skill } from './types';

export const COLORS = {
  primary: '#2ecc71', // Vibrant Green
  background: '#0f172a', // Slate 900
  surface: '#1e293b', // Slate 800
  text: '#f8fafc',
  textSecondary: '#94a3b8',
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'B2B Lead Generation',
    category: 'Lead Gen',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    description: 'High-quality lead identification and outreach strategy for tech startups.'
  },
  {
    id: 2,
    title: 'E-commerce Management',
    category: 'Virtual Assistant',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Full-cycle management of Amazon and Shopify stores for global clients.'
  },
  {
    id: 3,
    title: 'Data Entry & Mining',
    category: 'Outsourcing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Accurate data processing and competitive analysis through web mining.'
  },
  {
    id: 4,
    title: 'SEO Content Strategy',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?auto=format&fit=crop&q=80&w=800',
    description: 'Organic growth strategy through keyword optimization and content planning.'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    year: '2022 - Present',
    company: 'Upwork Top Rated',
    role: 'Virtual Assistant & Lead Generator',
    description: 'Providing premium administrative support and targeted lead lists to clients worldwide.'
  },
  {
    id: 2,
    year: '2020 - 2022',
    company: 'Outsource Global Solutions',
    role: 'Lead Project Coordinator',
    description: 'Managed a team of data entry specialists ensuring 99% accuracy in large scale database projects.'
  },
  {
    id: 3,
    year: '2018 - 2020',
    company: 'Digital Nexus Hub',
    role: 'SEO & Marketing Intern',
    description: 'Assisted in technical SEO audits and social media management for local businesses.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Lead Generation', level: 98 },
  { name: 'Virtual Assistant', level: 95 },
  { name: 'Data Entry & Mining', level: 90 },
  { name: 'SEO & Digital Marketing', level: 85 },
  { name: 'Email Marketing', level: 92 }
];
