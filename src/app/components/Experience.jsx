import React from "react";

const Experience = ({ data }) => {
    return (
        <div>
            <section id="experience" className="bg-gradient-to-r from-slate-950 to-slate-900 ps:0 lg:ps-64 py-5 px-4 text-white">
                <div className="py-4 text-3xl">
                    <h1>Experience</h1>
                </div>

                {/* Experience Section */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute top-2 left-4 lg:left-20 w-[1.5px] bg-gray-600 h-full"></div>
                    {data.map((data) => (
                        <div className="relative px-7 lg:px-28 my-5" key={data.id}>
                            {/* Dot */}
                            <div className="absolute left-[0.6rem] lg:left-[4.6rem] top-2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white"></div>
                            <div className="p-1">
                                <h6 className="text-xl font-semibold leading-8">{data.company}</h6>
                                <h6 className="text-md font-semibold text-gray-300">{data.role}</h6>
                                <h5 className="text-md pb-2 text-gray-400">{data.year}</h5>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* </div> */}
            </section>
        </div>

    );
};

export default Experience;
