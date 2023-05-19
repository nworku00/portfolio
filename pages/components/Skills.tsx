import React from "react";
import config from "../index.json";
import Image from "next/image";
const Skills = () => {
    const skills = config.skills;
    return (
        <div
            id={skills.title}
            className="flex items-center justify-center px-8 md:px-16 md:px-32 pb-16 bg-gradient-to-r from-orange-300 to-red-400"
            style={{ minHeight: "100vh" }}>
            <div className="w-full max-w-3xl">
                <h1 className="pt-12 uppercase font-bold text-center text-orange-100 text-bold text-4xl">
                    {skills.title}
                </h1>
                <div className="skills__menu text-red-900">
                    <ul>
                        {skills.skills.map((item) => (
                            <li key={item.title} className="flex flex-col lg:flex-row mt-12">
                                <div className="lg:w-1/3">
                                    <h2 className="text-2xl">{item.title}</h2>
                                    <p className="mt-6">{item.description}</p>
                                    <div className="flex mt-4">
                                        <div className="text-md text-center font-semibold p-0.5 bg-gradient-to-l from-orange-400 to-red-500">
                                            <a href={item.url} target="_blank" rel="noreferrer">
                                                <div className="bg-orange-200">
                                                    <span className="block py-0.5 px-2 bg-white bg-gradient-to-l from-orange-400 to-red-500 bg-clip-text text-transparent">
                                                        Live Demo
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="text-md text-center font-semibold p-0.5 ml-2 bg-gradient-to-l from-orange-400 to-red-500">
                                            <a href={item.github} target="_blank" rel="noreferrer">
                                                <div className="bg-orange-200">
                                                    <span className="block py-0.5 px-2 bg-white bg-gradient-to-l from-orange-400 to-red-500 bg-clip-text text-transparent">
                                                        Source Code
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:ml-12">
                                    <Image
                                        src={item.image}
                                        alt="project image"
                                        className="mt-6 md:mt-12 lg:mt-0 w-full shadow-lg"
                                        width={700}
                                        height={350}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// const Skills = () => {
//     const skills = config.skills;
//     return (
//         <div
//             id={skills.title}
//             className="px-8 md:px-16 md:px-32 pb-16 bg-gradient-to-r from-orange-300 to-red-400 mx-auto">
//             <h1 className="pt-12 uppercase font-bold text-center text-orange-100 text-bold text-4xl">
//                 {skills.title}
//             </h1>
//             <div className="skills__menu text-red-900">
//                 <ul>
//                     {skills.skills.map((item) => (
//                         <li key={item.title} className="flex flex-col lg:flex-row mt-12">
//                             <div className="lg:w-1/3">
//                                 <h2 className="text-2xl">{item.title}</h2>
//                                 <p className="mt-6">{item.description}</p>
//                                 <div className="flex mt-4">
//                                     <div className="text-md text-center font-semibold p-0.5  bg-gradient-to-l from-orange-400 to-red-500">
//                                         <a href={item.url} target="_blank" rel="noreferrer">
//                                             <div className="bg-orange-200">
//                                                 <span className="block py-0.5 px-2 bg-white  bg-gradient-to-l from-orange-400 to-red-500 bg-clip-text text-transparent">
//                                                     Live Demo
//                                                 </span>
//                                             </div>
//                                         </a>
//                                     </div>
//                                     <div className="text-md text-center font-semibold p-0.5 ml-2 bg-gradient-to-l from-orange-400 to-red-500">
//                                         <a href={item.github} target="_blank" rel="noreferrer">
//                                             <div className="bg-orange-200">
//                                                 <span className="block py-0.5 px-2 bg-white  bg-gradient-to-l from-orange-400 to-red-500 bg-clip-text text-transparent">
//                                                     Source Code
//                                                 </span>
//                                             </div>
//                                         </a>
//                                     </div>
//                                     {/* <div className="bg-white ml-2 font-semibold">
//                                         <a href={item.github} target="_blank" rel="noreferrer">
//                                             <span className="block py-0.5 px-2 bg-white  bg-gradient-to-l from-orange-400 to-red-500 bg-clip-text text-transparent">
//                                                 Source Code
//                                             </span>
//                                         </a>
//                                     </div> */}
//                                 </div>
//                             </div>
//                             <div className="lg:ml-12">
//                                 <Image
//                                     src={item.image}
//                                     alt="project image"
//                                     className="mt-6 md:mt-12 lg:mt-0 w-full shadow-lg"
//                                     width={700}
//                                     height={350}
//                                 />
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }
export default Skills;
