'use client';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="mx-auto lg:ps-64  bg-slate-950 text-white footer py-10">
            <div className="social-icons flex gap-5 text-center justify-center pt-5">
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
            <p className='pt-4 text-center'>&copy; 2022</p>
        </footer>
    )
}

export default Footer