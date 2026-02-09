import { Project, Publication, SocialLink } from '@/types';

export const projects: Project[] = [
    {
        id: '1',
        title: 'Machine Learning Research Platform',
        description: 'A scalable platform for conducting and sharing ML experiments with reproducible results',
        longDescription: 'Built with Python, TensorFlow, and React. Supports distributed training and experiment tracking.',
        tags: ['Python', 'TensorFlow', 'React', 'Docker'],
        image: '/projects/ml-platform.jpg',
        github: 'https://github.com',
        featured: true,
    },
    {
        id: '2',
        title: 'Data Visualization Dashboard',
        description: 'Interactive dashboard for analyzing complex datasets with real-time updates',
        longDescription: 'Created using D3.js and Next.js for seamless data exploration and insights.',
        tags: ['Next.js', 'D3.js', 'TypeScript', 'PostgreSQL'],
        image: '/projects/dashboard.jpg',
        link: 'https://example.com',
        featured: true,
    },
    {
        id: '3',
        title: 'Academic Paper Recommender',
        description: 'AI-powered system to recommend relevant research papers based on user interests',
        tags: ['NLP', 'Python', 'Flask', 'MongoDB'],
        image: '/projects/recommender.jpg',
        github: 'https://github.com',
    },
    {
        id: '4',
        title: 'Climate Data Analysis Tool',
        description: 'Tool for analyzing and visualizing climate change data patterns',
        tags: ['R', 'Shiny', 'Data Science'],
        image: '/projects/climate.jpg',
    },
    {
        id: '5',
        title: 'Automated Lab Assistant',
        description: 'Robotic system for automating routine laboratory tasks',
        tags: ['ROS', 'Python', 'Computer Vision'],
        image: '/projects/lab-assistant.jpg',
        featured: true,
    },
    {
        id: '6',
        title: 'Educational Platform',
        description: 'Online learning platform with interactive coding exercises',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: '/projects/education.jpg',
        link: 'https://example.com',
    },
];

export const publications: Publication[] = [
    {
        id: '1',
        title: 'Deep Learning Approaches for Time Series Forecasting in Climate Science',
        authors: ['Your Name', 'Dr. Jane Smith', 'Dr. John Doe'],
        venue: 'International Conference on Machine Learning (ICML)',
        year: 2024,
        type: 'conference',
        link: 'https://arxiv.org',
        award: 'Best Paper Award',
    },
    {
        id: '2',
        title: 'Improving Model Interpretability through Attention Mechanisms',
        authors: ['Your Name', 'Dr. Sarah Johnson'],
        venue: 'Journal of Artificial Intelligence Research',
        year: 2023,
        type: 'journal',
        link: 'https://arxiv.org',
    },
    {
        id: '3',
        title: 'Efficient Data Augmentation Strategies for Small Datasets',
        authors: ['Your Name', 'Research Team'],
        venue: 'NeurIPS Workshop on Data-Centric AI',
        year: 2023,
        type: 'workshop',
        link: 'https://arxiv.org',
    },
    {
        id: '4',
        title: 'Novel Architectures for Graph Neural Networks',
        authors: ['Your Name', 'Dr. Michael Chen', 'Dr. Emily Brown'],
        venue: 'arXiv preprint',
        year: 2024,
        type: 'preprint',
        link: 'https://arxiv.org',
    },
];

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com',
        icon: 'Github',
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: 'Linkedin',
    },
    {
        name: 'Google Scholar',
        url: 'https://scholar.google.com',
        icon: 'GraduationCap',
    },
    {
        name: 'Email',
        url: 'mailto:your.email@example.com',
        icon: 'Mail',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: 'Twitter',
    },
];

export const aboutText = {
    short: "I'm a passionate student-researcher exploring the intersection of artificial intelligence and real-world applications. Currently pursuing my degree while conducting cutting-edge research in machine learning.",
    long: "My research focuses on developing interpretable machine learning models that can solve complex real-world problems. I'm particularly interested in deep learning, computer vision, and natural language processing. When I'm not coding or reading papers, you can find me mentoring students or contributing to open-source projects.",
};
