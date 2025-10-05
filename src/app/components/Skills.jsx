"use client";

import Image from "next/image";
import React from "react";

const Skills = ({ data }) => {
    return (
        <div>
            {" "}
            <section
                id="skills"
                className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-900 lg:ps-64 px-4 text-white py-10"
            >
                <div className="">
                    <div className="skills">
                        <div className="pb-10">
                            <h1 className="text-3xl">Skills</h1>
                        </div>

                        <div className="skills-content">
                            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4">
                                {data.map((item) => (
                                    <div
                                        key={item.id}
                                        className="border border-slate-600 shadow-sm shadow-slate-800 rounded-lg h-fit py-3"
                                    >
                                        <div className="flex justify-center">
                                            <div>
                                                <Image
                                                    src={item.img.src}
                                                    alt={item.skill}
                                                    height={item.height}
                                                    width={item.width}
                                                />
                                                <h5 className="text-center pt-2 text-lg">
                                                    {item.skill}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
