export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    tags: string[];
    image: string;
    link?: string;
    github?: string;
    featured?: boolean;
}

export interface Publication {
    id: string;
    title: string;
    authors: string[];
    venue: string;
    year: number;
    type: 'conference' | 'journal' | 'workshop' | 'preprint';
    link?: string;
    award?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string; // Lucide icon name
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}
