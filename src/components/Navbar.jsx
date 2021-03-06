import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import {Link} from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1uAOLNG_t7aQA9aiYf_Bke_z-rFceD3lu/view?usp=sharing"
            >
            Resume
            </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={handleClick}    
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          {/* {" "} */}
          <Link
             onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-3xl">
          {/* {" "} */}
          <a
              target="_blank"
              onClick={handleClick}
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1uAOLNG_t7aQA9aiYf_Bke_z-rFceD3lu/view?usp=sharing"
            >
            Resume
            </a>
        </li>
         <li className="py-6 text-3xl">
          {/* {" "} */}
          <a
              target="_blank"
              onClick={handleClick}
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Karan16-prog"
            >
            Github
            </a>
        </li>
        <li className="py-6 text-3xl">
          {/* {" "} */}
          <a
              target="_blank"
              onClick={handleClick}
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:karan.s1606@gmail.com"
            >
            Email
            </a>
        </li>
        <li className="py-6 text-3xl">
          {/* {" "} */}
          <a  
              target="_blank"
              onClick={handleClick}
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/karan-singh-08a1a3126/"
            >
            LinkedIn
            </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Karan16-prog"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:karan.s1606@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1uAOLNG_t7aQA9aiYf_Bke_z-rFceD3lu/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/karan-singh-08a1a3126/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
