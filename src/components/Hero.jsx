import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilepicture.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl transition duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:brightness-150"
            >
              Ishan Shukla
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-2xl" src={profilePic} alt="Ishan Shukla" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
