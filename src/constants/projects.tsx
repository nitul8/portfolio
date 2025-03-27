import {FaHtml5, FaCss3Alt, FaJs, FaReact} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import {RiTailwindCssFill, RiNextjsFill} from "react-icons/ri";
import {
    SiTypescript,
    SiExpress,
    SiMongodb,
    SiCplusplus,
    SiVite,
} from "react-icons/si";
import {IconType} from "react-icons";

interface Technology {
    icon: IconType;
    color: string;
    name: string;
}

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    technologies: Technology[];
    image: string;
    demoLink: string;
    codeLink: string;
}

export const projects: ProjectProps[] = [
    {
        id: 1,
        title: "Astitva Foundation Website",
        description:
            "A website for an NGO to help the underprivileged and needy people.",
        technologies: [
            {icon: FaReact, color: "text-blue-400", name: "React"},
            {icon: SiVite, color: "text-yellow-300", name: "Vite"},
            {
                icon: RiTailwindCssFill,
                color: "text-teal-400",
                name: "Tailwind CSS",
            },
            {icon: FaNodeJs, color: "text-green-600", name: "NodeJS"},
            {
                icon: SiExpress,
                color: "text-black dark:text-white",
                name: "ExpressJS",
            },
            {icon: SiMongodb, color: "text-green-500", name: "MongoDB"},
            {icon: FaJs, color: "text-yellow-400", name: "JavaScript"},
        ],
        image: "/projects/astitva.png",
        demoLink: "https://astitvafoundation.vercel.app/",
        codeLink: "#",
    },
    {
        id: 2,
        title: "Logic Chain: Daily Quiz App",
        description:
            "A webpage where you are served one question and one word daily.",
        technologies: [
            {icon: FaReact, color: "text-blue-400", name: "React"},
            {icon: SiVite, color: "text-yellow-300", name: "Vite"},
            {
                icon: RiTailwindCssFill,
                color: "inline mr-1 text-teal-400",
                name: "Tailwind CSS",
            },
            {icon: FaHtml5, color: "text-red-400", name: "HTML5"},
            {icon: FaCss3Alt, color: "text-blue-600", name: "CSS3"},
            {icon: FaJs, color: "text-yellow-400", name: "JavaScript"},
        ],
        image: "/projects/logicchain.png",
        demoLink: "https://logicchain.vercel.app/",
        codeLink: "#",
    },
    {
        id: 3,
        title: "Portfolio",
        description:
            "Personal portfolio showcasing skills, projects, and experience.",
        technologies: [
            {icon: RiNextjsFill, color: "text-black", name: "Next.js"},
            {icon: FaReact, color: "text-blue-400", name: "React.js"},
            {icon: SiTypescript, color: "text-blue-500", name: "TypeScript"},
            {
                icon: RiTailwindCssFill,
                color: "inline mr-1 text-teal-400",
                name: "Tailwind CSS",
            },
            {icon: FaJs, color: "text-yellow-400", name: "JavaScript"},
        ],
        image: "/projects/portfolio.png",
        demoLink: "https://nituldas.vercel.app/",
        codeLink: "https://github.com/nitul8/portfolio",
    },
    {
        id: 4,
        title: "Stopwatch",
        description:
            "A simple and interactive stopwatch web application to check time.",
        technologies: [
            {icon: FaHtml5, color: "text-red-400", name: "HTML5"},
            {icon: FaCss3Alt, color: "text-blue-600", name: "CSS3"},
            {icon: FaJs, color: "text-yellow-400", name: "JavaScript"},
        ],
        image: "/projects/stopwatch.png",
        demoLink: "https://nitul8.github.io/PRODIGY_WD_02/",
        codeLink: "https://github.com/nitul8/PRODIGY_WD_02",
    },
    {
        id: 5,
        title: "Tic Tac Toe",
        description:
            "Classic Tic Tac Toe game with a clean UI and two-player mode.",
        technologies: [
            {icon: FaReact, color: "text-blue-400", name: "React"},
            {
                icon: RiTailwindCssFill,
                color: "inline mr-1 text-teal-400",
                name: "Tailwind CSS",
            },
            {icon: FaJs, color: "text-yellow-400", name: "JavaScript"},
            {icon: FaHtml5, color: "text-red-400", name: "HTML5"},
            {icon: FaCss3Alt, color: "text-blue-600", name: "CSS3"},
        ],
        image: "/projects/tictactoe.png",
        demoLink: "https://tic-tac-toe-nitul.vercel.app/",
        codeLink: "https://github.com/nitul8/Tic-Tac-Toe",
    },
    {
        id: 6,
        title: "Weather App",
        description:
            "Displays real-time weather data for various cities using weather API.",
        technologies: [
            {icon: RiNextjsFill, color: "text-black", name: "Next.js"},
            {icon: FaReact, color: "text-blue-400", name: "React.js"},
            {icon: SiTypescript, color: "text-blue-500", name: "TypeScript"},
            {
                icon: RiTailwindCssFill,
                color: "inline mr-1 text-teal-400",
                name: "Tailwind CSS",
            },
            {icon: FaJs, color: "text-yellow-400", name: "JavaScript"},
        ],
        image: "/projects/weatherapp.png",
        demoLink:
            "https://redesigned-lamp-vxxqwrxrqrv2q94-3000.app.github.dev/weatherapp",
        codeLink:
            "https://github.com/nitul8/Projectfolio/tree/main/app/weatherapp",
    },
    {
        id: 7,
        title: "Facebook Clone",
        description:
            "Clone of Facebook’s main page with basic social features.",
        technologies: [
            {icon: FaReact, color: "text-blue-400", name: "React"},
            {icon: FaCss3Alt, color: "text-blue-600", name: "CSS3"},
            {icon: FaJs, color: "text-yellow-400", name: "JavaScript"},
        ],
        image: "/projects/facebook.png",
        demoLink: "#",
        codeLink: "https://github.com/nitul8/FaceBook_Clone",
    },
    {
        id: 8,
        title: "ProjectFolio",
        description: "A pleace to find all my mini projects.",
        technologies: [
            {icon: RiNextjsFill, color: "text-black", name: "Next.js"},
            {icon: FaReact, color: "text-blue-400", name: "React.js"},
            {icon: SiTypescript, color: "text-blue-500", name: "TypeScript"},
            {
                icon: RiTailwindCssFill,
                color: "inline mr-1 text-teal-400",
                name: "Tailwind CSS",
            },
            {icon: FaJs, color: "text-yellow-400", name: "JavaScript"},
        ],
        image: "/projects/projectfolio.png",
        demoLink:
            "https://redesigned-lamp-vxxqwrxrqrv2q94-3000.app.github.dev/",
        codeLink: "https://github.com/nitul8/Projectfolio/",
    },
];
