import React from "react";

const Experience = ({ data }) => {
    return (
        <div>
            <section id="education" className="bg-gradient-to-r from-slate-950 to-slate-900 ps:0 lg:ps-64 py-5 px-4 text-white">
                <div className="py-4 text-3xl">
                    <h1>Education</h1>
                </div>
                {/* <div className="flex gap-2"> */}
                {/* Education Section */}

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute top-2 left-4 lg:left-20 w-[1.5px] bg-gray-600 h-full"></div>
                    {data.map((data) => (
                        <div className="relative px-7 lg:px-28 my-5" key={data.id}>
                            {/* Dot */}
                            <div className="absolute left-[0.6rem] lg:left-[4.6rem] top-2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white"></div>
                            <div className=" p-1">
                                <h5 className="text-gray-300">{data.year}</h5>
                                <h6 className="text-lg font-semibold">{data.degree} - <span>{data.college}</span></h6>
                                <p>
                                    {/* <b>College:</b> {data.college} {data.school} */}
                                    {/* <br /> */}
                                    <b>Percentage:</b> {data.percentage}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section >
        </div >
    );
};

export default Experience;
