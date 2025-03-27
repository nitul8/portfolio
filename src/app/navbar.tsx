import Link from "next/link";
import {TiHomeOutline} from "react-icons/ti";
import {TbTools, TbMedal} from "react-icons/tb";

const NavBar = () => {
    const links = [
        {id: 1, link: "/", icon: <TiHomeOutline />, name: "Home"},
        {id: 2, link: "/projects", icon: <TbTools />, name: "Projects"},
        {id: 3, link: "/achievements", icon: <TbMedal />, name: "Achievements"},
    ];
    return (
        <div className="fixed inset-0 flex items-end justify-center z-50 w-full h-fit top-auto">
            <div className="flex text-black dark:text-white justify-center px-4 py-2 mb-8 rounded-full border border-gray-500 backdrop-blur-lg">
                <ul className="flex items-center justify-between space-x-6 hover:space-x-8 px-2 py-1">
                    {links.map(({id, link, icon, name}) => (
                        <li
                            key={id}
                            className="hover:scale-125 duration-300 group"
                        >
                            <Link href={link} className="text-2xl">
                                {icon}
                            </Link>
                            <div className="absolute bottom-10 left-1/2 w-auto min-w-max transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs p-1 rounded-md whitespace-nowrap text-center font-light">
                                {name}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
