import Image from "next/image";
import {FaPlay, FaCode} from "react-icons/fa";
import {projects} from "@/constants/projects";

const Projects = () => {
    return (
        <div className="w-full min-h-screen bg-white dark:bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {projects.map(
                        ({
                            id,
                            title,
                            description,
                            technologies,
                            image,
                            demoLink,
                            codeLink,
                        }) => (
                            <div
                                key={id}
                                className="p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 dark:shadow-gray-400"
                            >
                                <Image
                                    src={image}
                                    alt={title}
                                    width={300}
                                    height={200}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {technologies.map((tech, index) => {
                                        const IconComponent = tech.icon;
                                        return (
                                            <span
                                                key={index}
                                                className="bg-gray-100 px-2 py-1 text-xs rounded-md text-black flex items-center"
                                            >
                                                <IconComponent
                                                    className={`inline mr-1 ${tech.color}`}
                                                />{" "}
                                                {tech.name}
                                            </span>
                                        );
                                    })}
                                </div>
                                <div className="flex gap-8 justify-center bottom-0">
                                    {demoLink && (
                                        <a
                                            href={demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-red-400 text-lg"
                                        >
                                            <FaPlay />
                                        </a>
                                    )}
                                    <a
                                        href={codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-400 text-lg"
                                    >
                                        <FaCode />
                                    </a>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;
