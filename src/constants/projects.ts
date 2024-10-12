import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
    {
        title: 'Green Diary',
        imgSrc: 'images/textlight.png',
        technologies: [ 'Django', 'Python', 'PostgreSQL', 'Bootstrap', 'HTML', 'CSS', 'API', 'Authentication'],
        shortDescription: '_a CO2 tracking web application',
        longDescription: `Green Diary is an eco-awareness platform that tracks automotive emissions, calculating each journey's carbon footprint and the equivalent number of trees needed to offset it. It provides users with insights into their environmental impact and links to tree-planting charities, enabling direct action to mitigate their CO2 footprint and contribute to global reforestation efforts.`,
        githubLink: 'https://github.com/elliesolhjou/Green-Diary',
        liveLink: 'https://green-diary-app-2098e92803f3.herokuapp.com/'
    },
    {
        title: 'ChatGPT Sports Clone',
        imgSrc:  'images/chatgpt-clone.png',
        technologies: [ 'React',  'OpenAI', 'Node.js', 'MongoDB', 'JavaScript', 'Tailwind', 'HTML', 'CSS',  ],
        shortDescription: '_a ChatGPT clone web application',
        longDescription: `The ChatGPT Clone is a streamlined AI chat app that replicates the experience of interacting with OpenAI's ChatGPT. It allows users to engage in sport-related conversations with an AI model, providing responsive answers. \nPerfect for exploring AI-driven interactions, this clone offers a straightforward way to experience and test AI sports capabilities in real time.`,
        githubLink: 'https://github.com/CarterN2000/Project-3',
        liveLink: 'https://allstarai.netlify.app/'
    },

    {
        title: 'Pawzbe',
        imgSrc: 'images/news-blog.png',
        technologies: ['Node.js', 'JavaScript', 'MongoDB',  'Bootstrap', 'HTML', 'CSS', 'API', 'Authentication', ],
        shortDescription: '_A pet social media community',
        longDescription: `Pawzbe is a pet social media platform. User can create accounts using either Google or Github logins, and share photos and updates about their pets with their friends.`,
        githubLink: 'https://github.com/SamPatt/pawzbe',
        liveLink: 'https://pawzbe.com/'
    }
]