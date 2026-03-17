export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink: string;
    githubLink: string;
    stats: string;
}

export interface Skill {
    name: string;
    icon: string;
    description: string;
    level: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
    icon: string;
}

export interface NavLink {
    name: string;
    href: string;
}