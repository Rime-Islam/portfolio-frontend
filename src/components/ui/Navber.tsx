'use client'
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleScroll = (id: any) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          setIsOpen(false); 
        }
      };

    return (
 <div >
           <div className="navbar bg-slate-800 text-white shadow-xl">
  <div className="navbar-start">
  <div className="btn btn-ghost mr-10">
    <span className="text-2xl  ">Rime |</span>
    <span className="text-yellow-600 font-semibold">Web Developer</span>
    </div>
    <div className="hidden lg:flex gap-8">
<div className="flex mt-1"><FaPhone className="mt-1 mr-2"/><span>+8801718177859</span></div>
<div className="flex  mt-1"><IoMail className="h-5 w-5 mr-2"/><span>rimeislam672@gmail.com</span> </div>
    </div>
  </div>
  
  <div className="navbar-end">
  <div className="dropdown dropdown-bottom dropdown-end">
  <div
        tabIndex={0}
        role="button"
        className="btn ml-10 btn-ghost btn-circle"
        onClick={toggleDropdown}>
        {isOpen ? (
          <IoMdClose className="w-8 h-8" />
        ) : (
          <IoMdMenu className="w-8 h-8" />
        )}
      </div>
      {isOpen && (
              <ul
                tabIndex={0}
                className="menu dropdown-content w-40 md:w-56 bg-gray-800 text-white mt-[20vh] rounded-box mr-[2vw] px-5 py-4 shadow"
              >
                <li className="text-lg lg:text-xl my-1">
                  <button onClick={() => handleScroll("banner")}>Home</button>
                </li>
                <li className="text-lg lg:text-xl my-1">
                  <button onClick={() => handleScroll("work")}>
                    Portfolio
                  </button>
                </li>
                <li className="text-lg lg:text-xl my-1">
                  <button onClick={() => handleScroll("skill")}>
                    Experience
                  </button>
                </li>
                <li className="text-lg lg:text-xl my-1">
                  <button onClick={() => handleScroll("project")}>About</button>
                </li>
                <li className="text-lg lg:text-xl my-1">
                  <button onClick={() => handleScroll("contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            )}
    </div>
  </div>
</div>
 </div>
    )
};

export default Navber;