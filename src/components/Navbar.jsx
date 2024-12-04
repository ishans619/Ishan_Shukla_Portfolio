import { useState } from "react";
import logo from "../assets/LOGO.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [rotate, setRotate] = useState(false);

  const handleLogoClick = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div
        className={`flex flex-shrink-0 items-center ${
          rotate ? "animate-spin" : ""
        }`}
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <img
          className="mx-2 w-10 transition duration-300 hover:brightness-150 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ishan-shukla-552032224/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:text-blue-600 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,0,255,0.8)]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ishans619"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:text-gray-800 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/home"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:text-blue-400 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,0,255,0.8)]"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
