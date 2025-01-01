"use client"
import animation from "@/app/animation.json";
import Lottie from "react-lottie";

const Do = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const lottieContainerStyle = {
        transform: 'rotate(0deg)', 
      };
    const services = [
        {
            id: '01',
            name: 'React.js / Next.js Developer',
            description: 'Creating engaging user interfaces and bringing data to life—my role as a React.js / Next.js Developer ensures seamless, high-performing, and innovative web experiences that truly make an impact.'
        },
        {
            id: '02',
            name: 'Backend / Node.js Developer',
            description: 'Building robust server-side applications and managing databases—my expertise as a Backend / Node.js Developer ensures seamless functionality, efficient data handling, and scalable solutions for modern web platforms.',
        },
        {
            id: '03',
            name: 'Full Stack Developer',
            description: 'Bringing both front-end interfaces and back-end systems to life—my role as a Full Stack Developer ensures seamless, high-performing, and innovative web experiences from start to finish.'
    }
    ]

    return (
        <div>
            <h1 className="text-5xl text-center font-bold ">What I Can Do For You</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="flex-1 ">
               
                    <div className="w-[350px] lg:w-[400px] h-[200px] lg:h-[800px] mt-8 lg-mt-0" style={lottieContainerStyle}>
                    <Lottie options={defaultOptions} />   
                        </div>                 
            </div>

            <div data-aos="zoom-in" data-aos-duration="2000" className="flex-1 pl-2 ">
                {/* services  */}
                {
                    services.map((item) => (
                        <div key={item.id} className="card px-3 py-5 mt-8 w-[360px] md:w-[600px] shadow-lg shadow-purple-400">
                           <h4 className="font-semibold text-2xl text-yellow-600 mb-3">{item.name}</h4>
                            <p>{item.description}</p>
                             </div>
                    ))
                }
            </div>
                </div>
        </div>
    )
};

export default Do;