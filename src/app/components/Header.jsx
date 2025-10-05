
"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import avatarImg from "../assets/images/avatar.avif";
import Image from "next/image";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Header with Toggle Button */}
            <div className="bg-slate-950 text-white flex justify-between items-center p-4 lg:hidden fixed w-full top-0 z-50">
                <h1 className="text-xl font-semibold">Portfolio</h1>
                <button onClick={() => setIsOpen(true)} className="text-2xl">
                    <FaBars />
                </button>
            </div>

            {/* Sidebar for Large Screens */}
            <div className="bg-slate-950 border-r-4 w-60 h-[100vh] text-white hidden lg:block lg:fixed">
                <SidebarContent />
            </div>

            {/* Sidebar for Mobile */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? "block" : "hidden"}`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    className="bg-slate-950 w-60 h-full text-white fixed left-0 top-0 p-5"
                    onClick={(e) => e.stopPropagation()} // Prevent click from closing sidebar
                >
                    <button
                        className="text-2xl absolute top-4 right-4"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* <FaTimes /> */}
                        <h1>x</h1>
                    </button>
                    <SidebarContent />
                </div>
            </div>
        </>
    );
};

export const SidebarContent = () => (
    <>
        <div className="profile pt-14 text-center font-semibold text-2xl">
            <Image
                src={avatarImg}
                width="100"
                alt=""
                className="rounded-full  mx-auto border-4 my-5"
            />
            <h1>Kaveri Patil</h1>
        </div>

        <div className="social-icons flex gap-5 justify-center pt-5">
            <Link
                href="https://www.linkedin.com/in/kaveri-patil-5231221ab/"
                target="_blank"
                className="bg-gray-700 p-3 rounded-full"
            >
                <FaLinkedin className="text-xl" />
            </Link>
            <Link
                href="https://github.com/KaveriPatil03"
                target="_blank"
                className="bg-gray-700 p-3 rounded-full"
            >
                <FaGithub className="text-xl" />
            </Link>
            <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=krpatil3012@gmail.com"
                target="_blank"
                className="bg-gray-700 p-3 rounded-full"
            >
                <FaEnvelope className="text-xl" />
            </Link>
        </div>

        <ul className="p-3 lg:px-9 py-3 font-semibold text-lg">
            {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
                <li key={item} className="leading-10">
                    <Link href={`#${item}`} className="block w-full" >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                </li>
            ))}
        </ul>
    </>
);

export default Header;
