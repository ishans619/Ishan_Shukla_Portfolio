import { RiReactjsLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaJava } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 animate-float-up">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 animate-float-down">
          <SiSpringboot className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 animate-float-up delay-100">
          <SiMysql className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 animate-float-down delay-100">
          <AiFillHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 animate-float-up delay-200">
          <DiCss3 className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 animate-float-down delay-200">
          <FaJava className="text-7xl text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
