'use client';
import React from 'react'
import expenseImg from '../assets/images/expense_tracker.png';
import jewlImg from '../assets//images/jewellery_store.png';
import foodImg from '../assets//images/food_donation.png';
import tastyImg from '../assets//images/tasty_eats.png';
import Image from 'next/image';
import Link from 'next/link';

const Projects = ({ data }) => {
    return (
        <div>
            <section id="projects" className="ps:0 lg:ps-64 py-5 px-4 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-900  text-white">
                <div className="py-4 text-3xl">
                    <h1>Projects</h1>
                </div>

                <div className="pt-3 px-3 pb-2">
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                        {data.map((data) => (
                            <div key={data.id} className="border border-slate-700 shadow-sm shadow-slate-800 rounded-md">
                                <Image src={data.img.src} alt={data.title} width={500} height={300} className="rounded-t-md" />
                                <div className="px-5 pb-4 border-t">
                                    <h4 className='text-xl py-3'>{data.title}</h4>
                                    <p className=''>{data.description}</p>
                                    <p className='text-sm text-gray-300'>Tools: {data.tools}</p>


                                    <div className="pt-4">
                                        <Link href={data.sourceLink} target="_blank">
                                            <button className=" bg-cyan-800 px-2 py-1 rounded-md">View Source</button>
                                        </Link>
                                        <Link href={data.liveLink} target="_blank">
                                            <button className=" bg-cyan-800 px-2 py-1 rounded-md ms-3">Try it Live</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects