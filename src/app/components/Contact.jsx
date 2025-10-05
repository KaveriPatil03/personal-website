import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


const Contact = () => {
    return (
        <section id="contact" className="lg:ps-72 px-4 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-900 text-white">
            <div className="py-4 text-3xl">
                <h1>Contact</h1>
            </div>
            <div className="social-icons p-5">
                <div className="flex text-xl">
                    <div className="bg-gray-700 p-3 rounded-full">
                        <FaEnvelope className="text-3xl" />
                    </div>
                    <p className='p-3'>krpatil3012@gmail.com</p>
                </div>
                <div className="flex py-5 text-xl">
                    <div className="bg-gray-700 p-3 rounded-full">
                        <IoCall className="text-3xl" />
                    </div>
                    <p className='p-3'>+91 6360653132</p>
                </div>
            </div>
        </section>
    )
}

export default Contact