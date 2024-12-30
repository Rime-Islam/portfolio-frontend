'use client'
import { FaArrowAltCircleDown, FaRegEye } from "react-icons/fa";
import jsPDF from "jspdf";


const PDF_URL = "https://drive.google.com/file/d/1UHqoaPW1UYA2ySbM6Ni28kQEb9aSaG4h/view?usp=sharing";
const Banner = () => {
    const downloadFile = () => {
        const link = document.createElement("a");
        link.href = PDF_URL;
        link.download = "document.pdf"; // The name of the file to save
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


return (
    <div id="banner" className="pb-0 ">
               <div className="sm:px-6  text-white max-w-7xl mx-auto flex flex-row items-start gap-5">
             <div className="lg:flex flex-row-reverse w-[98vw] justify-between items-center">
                 
                 <div data-aos="fade-left" data-aos-duration="2000" className="pb-8">
                 <img className=" md:w-72 rounded-full" src="https://i.ibb.co.com/4RMhxS3/Whats-App-Image-2024-09-27-at-9-04-07-PM-2-removebg-preview.png" alt="profile picture" />
                 </div>
                 <div data-aos="fade-right" data-aos-duration="2000" className="pr-2">
                     <h1 className=" font-bold text-3xl lg:text-5xl">RIME ISLAM RIMU</h1>
                     <h3 className="lg:text-xl font-semibold text-yellow-600">Full Stack Developer</h3>
                        <p className="lg:w-96 w-48 mt-2">Hi there! I'm a passionate web developer 
                            who loves combining creativity with technical skills. I specialize in creating seamless, 
                            user-focused web experiences that bring together design and functionality in perfect harmony</p>

                     <div className="mt-5">
                        <h1 className="text-2xl font-semibold md:text-3xl">My Resume</h1>
                        <button onClick={() => { downloadFile() }} className="btn mt-4 btn-success px-5 ">
                <FaArrowAltCircleDown className="h-5 w-6 hover:scale-125"/>
            </button>
                       <a href="https://drive.google.com/file/d/1UHqoaPW1UYA2ySbM6Ni28kQEb9aSaG4h/view?usp=sharing"> <button className="btn ml-4 btn-warning px-5"><FaRegEye className="h-5 w-6 hover:scale-125"/></button></a>
                     </div>
                 </div>
             </div>
          </div>


             

       </div>
)
};

export default Banner;