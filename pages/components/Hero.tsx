import React from "react";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="h-screen bg-red-950 overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-between">
        <h1 className="text-6xl mt-64 font-bold tracking-wide text-orange-200">
          Hi, my name is  
          <span className="ml-3 whitespace-nowrap bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
            {hero.name}
          </span>
        </h1>
        <h1 className="text-6xl font-bold tracking-wide mt-4 text-orange-200">{hero.subtitle}</h1>
        <a href="#About" className="text-2xl font-bold p-0.5 mt-6 w-44 bg-gradient-to-r from-orange-300 to-red-400">
          <div className="bg-red-950">
            <span className="block text-center py-0.5 px-2 font-semibold bg-white font-bold bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
              Know more
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;