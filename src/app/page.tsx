import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Do from "@/components/home/Do";
import Navber from "@/components/ui/Navber"
import Link from "next/link";
import { FaClipboardList, FaGraduationCap, FaUserAlt } from "react-icons/fa";
import { FaBlog } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
import { TbDeviceImacCode } from "react-icons/tb";
import Skill from "./(main)/skill/page";
import Project from "./(main)/project/page";
import Blog from "./(main)/blog/page";
import Experience from "./(main)/experience/page";


export default function Home() {
  return (
    <div>
    <div className="sticky top-0 z-50 ">
      <Navber />
    </div>

    
  
    {/* Slides */}
    <div className="relative bg-slate-800">
      <div id="banner" className=" py-[16vh] flex items-center justify-center">
       <Banner />
      </div>
      <div id="skill" className="py-[5vh] flex flex-col items-center justify-center text-white">
      <Skill />
      </div>
      <div id="project" className="py-[10vh] flex flex-col items-center justify-center text-white">
        <Project />
      </div>
      <div id="do" className="py-[5vh] flex flex-col items-center justify-center text-white">
        <Do />
      </div>
      <div id="experience" className="py-[5vh] flex flex-col items-center justify-center text-black">
      <Experience />
      </div>
      <div id="blog" className=" flex flex-col items-center justify-center text-black">
      <Blog />
      </div>
      <div id="contact" className=" flex flex-col items-center justify-center text-black">
      <Contact />
      </div>
    </div>

    <div className="fixed flex flex-col items-center  h-32 gap-5 top-[30vh] mx-auto w-14 right-12">
                <a href="#banner">
                  <FaUserAlt className="text-center w-6 text-white h-6 hover:scale-125"/>
                  </a>
                  <a href="#skill">
                  <GiSkills className="text-center w-6 text-white h-6 hover:scale-125"/>
                  </a>
                  <a href="#project">
                  <FaClipboardList className="text-center w-6 text-white h-6 hover:scale-125" />
                  </a>
                  <a href="#do">
                    <TbDeviceImacCode className="text-center w-6 text-white h-6 hover:scale-125"/>
                  </a>
                  <a href="#experience">
                    <FaGraduationCap className="text-center w-6 text-white h-6 hover:scale-125"/>
                  </a>
                  <a href="#blog">
                    <FaBlog className="text-center w-6 text-white h-6 hover:scale-125"/>
                  </a>
                  <a href="#contact">
                    <GrContact className="text-center w-6 text-white h-6 hover:scale-125"/>
                  </a>
                 
             </div>

             <div className="fixed left-12 bottom-5 md:bottom-20">
                 <a href="https://github.com/Rime-Islam">
                 <div>
                     <img className="w-8 hover:scale-125" src="https://i.ibb.co/QCnktg0/523673-removebg-preview.png" alt="github logo" />
                 </div>
                 </a>
                 <a href="https://www.linkedin.com/in/rime-islam-b8a2142a1">
                 <div className="my-5">
                     <img className="w-8 hover:scale-125" src="https://i.ibb.co/4Jjr9My/png-transparent-linkedin-logo-computer-icons-facebook-user-profile-facebook-blue-angle-text-removebg.png" alt="linkedin logo" />
                 </div>
                 </a>
                 <a href="https://www.facebook.com/rimi.islam.9081323">
                 <div>
                     <img className="w-16 -ml-3 hover:scale-125" src="https://i.ibb.co/3Yx5FmR/images-removebg-preview.png" alt="facebook logo" />
                 </div>
                 </a>
            
             </div>
  </div>
  
    );
}