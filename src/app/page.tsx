import Banner from "@/components/home/Banner";
import Navber from "@/components/ui/Navber"
import Link from "next/link";
import { FaClipboardList, FaGraduationCap, FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";


export default function Home() {
  return (
    <div>
    {/* Navbar */}
    <div className="sticky top-0 z-50 ">
      <Navber />
    </div>

    
  
    {/* Slides */}
    <div className="relative bg-slate-800">
      <div id="banner" className=" h-screen  flex items-center justify-center">
       <Banner />
      </div>
      <div id="work" className=" h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
      
      </div>
      <div id="skill" className=" h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        
      </div>
      <div id="project" className=" h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
      
      </div>
    </div>

    <div className="fixed flex flex-col items-center  h-32 gap-5 top-[30vh] mx-auto w-14 right-12">
                <a href="#banner">
                  <FaUserAlt className="text-center w-6 text-white h-6 hover:scale-125"/>
                  </a>
                  <a href="#work">
                    <FaClipboardList className="text-center w-6 text-white h-6 hover:scale-125" />
                  </a>
                  <a href="#skill">
                 <GiSkills className="text-center w-6 text-white h-6 hover:scale-125"/>
                  </a>
                  <a href="#project">
                    <FaGraduationCap className="text-center w-6 text-white h-6 hover:scale-125"/>
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