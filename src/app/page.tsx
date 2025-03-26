import Link from "next/link";
import {FiGithub, FiChevronRight} from "react-icons/fi";
import {TbBrandLeetcode} from "react-icons/tb";
import {CiLinkedin} from "react-icons/ci";
import {MdOutlineContactPage} from "react-icons/md";
import {technologies} from "../constants/technology";
import {experiences} from "../constants/experience";

const Home = () => {
    return (
        <div className="w-full font-body bg-white dark:bg-black text-black dark:text-[#9ca3af]">
            {/* Home Section */}
            <div className="w-full min-h-screen flex flex-col justify-center items-center px-4">
                <div className="max-w-screen-md w-full flex flex-col items-center md:items-start">
                    <div className="flex items-center justify-start w-full">
                        <div className="w-20 h-20 mb-0 mr-2">
                            <img
                                src="/nitul.jpeg"
                                alt="Profile"
                                className="rounded-full object-cover w-full h-full"
                            />
                        </div>
                        <div className="text-left flex flex-col justify-center items-start">
                            <h1 className="text-2xl font-bold text-black dark:text-white">
                                Nitul Das
                            </h1>
                            <p className="text-lg">Fullstack Developer</p>
                        </div>
                    </div>
                    <div className="text-left md:text-left mt-4 w-full md:w-3/4 text-lg font-medium">
                        <div>
                            Experienced full-stack developer with expertise in
                            various technologies. Thriving on the synergy
                            between creativity and technology in web
                            development.
                        </div>
                        <div>
                            Enthusiastic about web accessibility, design
                            systems, and scalable web design.
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start gap-4 mt-6">
                        <Link
                            href="https://github.com/nitul8"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-black"
                        >
                            <FiGithub className="text-xl" /> GitHub
                        </Link>
                        <Link
                            href="https://leetcode.com/u/ndas6732/"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-black"
                        >
                            <TbBrandLeetcode className="text-xl" /> Leetcode
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/nituldas/"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-black"
                        >
                            <CiLinkedin className="text-xl" /> LinkedIn
                        </Link>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-black"
                        >
                            <MdOutlineContactPage className="text-xl" /> Resume
                        </Link>
                    </div>
                </div>
            </div>

            {/* Technology Section */}
            <div className="w-full flex flex-col items-center px-4">
                <div className="max-w-screen-md w-full">
                    <p className="text-2xl font-bold underline underline-offset-4">
                        Technology
                    </p>
                    <p className="text-lg mt-2">
                        Technologies I have worked with:
                    </p>
                    <div className="flex flex-wrap justify-start gap-6 mt-2">
                        {technologies.map(
                            ({id, icon, nam, exp, style, url}) => (
                                <div key={id} className="relative group">
                                    <Link
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center text-3xl h-10 md:h-16 w-10 md:w-16 rounded-full ${style} transition-transform duration-300 hover:scale-110`}
                                    >
                                        {icon}
                                    </Link>
                                    <div className="absolute bottom-14 left-1/2 w-auto min-w-max transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm p-1 rounded-md whitespace-nowrap text-center">
                                        {nam} - {exp}+ years
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="w-full flex flex-col items-center py-10 pl-4">
                <div className="max-w-screen-md w-full">
                    <p className="text-2xl font-bold pb-2 underline underline-offset-4">
                        Education
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img
                            src="/jec_logo.jpg"
                            alt="JEC Logo"
                            className="h-10 w-10 md:h-16 md:w-16 rounded-full"
                        />
                        <div className="w-full mr-1 md:mr-0">
                            <div className="flex justify-between items-center">
                                <Link
                                    href="https://jecassam.ac.in/"
                                    className="text-md md:text-lg font-bold flex items-center group"
                                >
                                    Jorhat Engineering College
                                    <FiChevronRight className="ml-1 opacity-0 group-hover:opacity-100" />
                                </Link>
                                <p className="text-xs md:text-sm text-gray-500">
                                    2022 - 2026
                                </p>
                            </div>
                            <p className="text-xs md:text-sm">
                                BTech in Computer Science & Engineering
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="w-full flex flex-col items-center py-10 pl-4">
                <div className="max-w-screen-md w-full">
                    <p className="text-2xl font-bold pb-2 underline underline-offset-4">
                        Experience
                    </p>
                    <div className="flex flex-col gap-6 mt-4">
                        {experiences.map(
                            ({
                                id,
                                company,
                                logo,
                                link,
                                role,
                                duration,
                                location,
                                skills,
                            }) => (
                                <div
                                    key={id}
                                    className="flex items-center gap-2"
                                >
                                    <img
                                        src={logo}
                                        alt={company}
                                        className="h-12 md:h-16 w-12 md:w-16 rounded-full"
                                    />
                                    <div className="flex flex-col w-full">
                                        <div className="flex justify-between items-center">
                                            <Link
                                                href={link}
                                                target="_blank"
                                                className="text-md md:text-lg font-semibold flex items-center group"
                                            >
                                                {company}
                                                <FiChevronRight className="ml-1 opacity-0 group-hover:opacity-100" />
                                            </Link>
                                            <p className="text-xs md:text-sm text-gray-500">
                                                {duration}
                                            </p>
                                        </div>
                                        <p className="text-xs md:text-sm">
                                            {role}
                                        </p>
                                        <p className="text-xs md:text-sm text-gray-500">
                                            {location}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs p-1 bg-gray-200 text-black rounded-md"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="w-full flex flex-col items-center pt-10 pl-4 pb-20">
                <div className="max-w-screen-md w-full flex flex-col justify-center items-center">
                    <p className="text-3xl font-extrabold">Let's Connect</p>
                    <div className="mt-2 text-center w-3/4 text-xl">
                        Want to connect? Feel free to drop me a DM on{" "}
                        <Link
                            href="https://x.com/ni_t_ul8"
                            target="_blank"
                            className="font-bold text-blue-600"
                        >
                            X
                        </Link>{" "}
                        or{" "}
                        <Link
                            href="https://www.linkedin.com/in/nituldas/"
                            target="_blank"
                            className="font-bold text-blue-600"
                        >
                            LinkedIn
                        </Link>
                        , and I'll get back to you when I can.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
