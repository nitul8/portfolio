import {FaReact, FaJs, FaCss3Alt, FaHtml5, FaNodeJs} from "react-icons/fa";
import {SiVite, SiExpress, SiMongodb} from "react-icons/si";
import {RiTailwindCssFill} from "react-icons/ri";
export const projects = [
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
        image: "/projects/portfolio.png",
        demoLink: "https://nituldas.vercel.app/",
        codeLink: "https://github.com/nitul8/Portfolio",
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
            {icon: FaHtml5, color: "text-red-400", name: "HTML5"},
            {icon: FaCss3Alt, color: "text-blue-600", name: "CSS3"},
            {icon: FaJs, color: "text-yellow-400", name: "JavaScript"},
        ],
        image: "/projects/weatherapp.png",
        demoLink: "#",
        codeLink: "https://github.com/nitul8/PRODIGY_WD_05",
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
];
