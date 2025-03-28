import {FaHtml5, FaCss3Alt, FaJs, FaReact} from "react-icons/fa";
import {FaNodeJs, FaNpm, FaPython} from "react-icons/fa";
import {RiTailwindCssFill, RiNextjsFill} from "react-icons/ri";
import {SiTypescript, SiExpress, SiMongodb, SiCplusplus} from "react-icons/si";

export const technologies = [
    {
        id: 1,
        icon: <FaHtml5 className="text-orange-500" />,
        nam: "HTML",
        exp: 2,
        style: "shadow-orange-500",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        id: 2,
        icon: <FaCss3Alt className="text-blue-600" />,
        nam: "CSS",
        exp: 2,
        style: "shadow-indigo-400",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        id: 3,
        icon: <FaJs className="text-yellow-400" />,
        nam: "JavaScript",
        exp: 2,
        style: "shadow-yellow-600",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        id: 4,
        icon: <FaReact className="text-blue-400" />,
        nam: "React JS",
        exp: 1.5,
        style: "shadow-blue-600",
        url: "https://react.dev/",
    },
    {
        id: 5,
        icon: <RiTailwindCssFill className="text-teal-400" />,
        nam: "Tailwind CSS",
        exp: 1.5,
        style: "shadow-blue-400",
        url: "https://tailwindcss.com/",
    },
    {
        id: 6,
        icon: <RiNextjsFill className="text-black dark:text-white" />,
        nam: "Next JS",
        exp: 0.5,
        style: "shadow-black dark:shadow-white",
        url: "https://nextjs.org/",
    },
    {
        id: 7,
        icon: <SiTypescript className="text-blue-400" />,
        nam: "TypeScript",
        exp: 0.5,
        style: "shadow-blue-600",
        url: "https://www.typescriptlang.org/",
    },
    {
        id: 8,
        icon: <FaNodeJs className="text-green-500" />,
        nam: "Node.js",
        exp: 0.5,
        style: "shadow-green-500",
        url: "https://nodejs.org/en",
    },
    {
        id: 9,
        icon: <SiExpress className="text-black dark:text-white" />,
        nam: "Express.js",
        exp: 0.5,
        style: "shadow-black dark:shadow-white",
        url: "https://expressjs.com/",
    },
    {
        id: 10,
        icon: <SiMongodb className="text-green-600" />,
        nam: "MongoDB",
        exp: 0.5,
        style: "shadow-green-600",
        url: "https://www.mongodb.com/",
    },
    {
        id: 11,
        icon: <FaNpm className="text-red-500" />,
        nam: "NPM",
        exp: 1.5,
        style: "shadow-red-500",
        url: "https://www.npmjs.com/",
    },
    {
        id: 12,
        icon: <FaPython className="text-yellow-400" />,
        nam: "Python",
        exp: 3,
        style: "shadow-yellow-400",
        url: "https://www.python.org/",
    },
    {
        id: 13,
        icon: <SiCplusplus className="text-blue-600" />,
        nam: "C/C++",
        exp: 3,
        style: "shadow-indigo-600",
        url: "https://isocpp.org/",
    },
];
