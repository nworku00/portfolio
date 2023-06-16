import React from "react";
import config from "../index.json";
import Image from "next/image";


const About = () => {
  const about = config.about;
  return (
    <div id="About" className="px-8 md:px-32 pb-32 content-center bg-gradient-to-l from-orange-400 to-red-500">
      <h1 className="pt-12 uppercase font-bold text-center text-orange-100 text-bold text-4xl">{about.title}</h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center">
          <Image           
            src={about.image} 
            alt="about" 
            className="shadow-lg rounded-md" 
            width={300} 
            height={300}
            />
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 text-orange-100 md:ml-4 text-center md:text-left">
          <div className="about__primary">
            <span>{about.primary}</span>
          </div>
          <div className="mt-6">
            <span>{about.secondary}</span>
          </div>
          <div className="mt-6 mx-auto md:mx-0 border-2 border-orange-100 py-1 px-2 w-36 text-center font-bold">
            <a href={'/NatinaelWorku,Resume.pdf'} className="about__resume text-orange-100 text-l">View Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;