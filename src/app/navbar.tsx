"use client";
import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {id: "1", link: "/", name: "Home"},
        {id: "2", link: "/projects", name: "Projects"},
        {id: "3", link: "/achievements", name: "Achievements"},
    ];

    return (
        <div className="z-50 flex justify-between items-center w-full h-12 md:h-20 fixed bg-white dark:bg-black text-black dark:text-white px-4 md:px-8">
            {/* Logo */}
            <Link href="/" className="font-logo">
                <Image
                    src="/nitul.png"
                    alt="LOGO"
                    width={96}
                    height={40}
                    className="w-18 h-8 md:w-24 md:h-10"
                    priority={true}
                />
            </Link>

            {/* Desktop Navbar */}
            <ul className="hidden md:flex items-center space-x-10">
                {links.map(({id, link, name}) => (
                    <li
                        key={id}
                        className="text-gray-500 hover:scale-110 hover:underline duration-300"
                    >
                        <Link href={link}>{name}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer z-50 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <ul className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-black flex flex-col justify-center items-center z-50 mobile-menu">
                    {links.map(({id, link, name}) => (
                        <li key={id} className="text-xl my-6">
                            <Link href={link} onClick={() => setNav(false)}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
