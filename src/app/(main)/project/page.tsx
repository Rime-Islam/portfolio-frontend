'use client'
import { useGetAllProject } from "@/hooks/projects/project.hook";
import Link from "next/link";
import { Key } from "react";
import { FaGithubSquare, FaReact } from "react-icons/fa";


const Project = () => {
    const {data, isLoading}=useGetAllProject()
    const projects = data?.data;

    if (isLoading) {
        return <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500" />
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full h-28 w-28"
        />
      </div>;
    }

    return (
        <div>
            <h1 className="text-5xl text-center font-bold mb-[5vh]">My Projects</h1>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {projects?.map((project: any) => (
                    <div
                        key={project._id}
                        className="w-full  sm:max-w-md p-4 bg-base-200 rounded-lg hover:-translate-y-1 duration-500"
                        data-aos="fade-up"
                    >
                        <div className="flex flex-col">
                            {/* Project Image */}
                            <div className="p-3 mx-auto w-full">
          <div className={` rounded-lg h-[250px] ease-in-out duration-[5000ms] bg-cover bg-top hover:bg-bottom`} style={{ backgroundImage: `url(${project?.photo[0]})` }}></div>
                </div>
        <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-gray-300">
                   <Link href={`/project/${project?._id}`}> {project.name}</Link>     
                                </h1>
            
                                {/* Links */}
                                <div className="flex mt-4 items-center gap-3 text-sm sm:text-base">
                                    <p className="flex items-center gap-1">
                                        <span className="text-2xl">
                                            <FaGithubSquare />
                                        </span>
                                        <a className="link-hover" href={project.client} target="_blank">
                                            Client
                                        </a>
                                    </p>
                                    <p className="flex items-center gap-1">
                                        <span className="text-2xl">
                                            <FaGithubSquare />
                                        </span>
                                        <a className="link-hover" href={project.server} target="_blank">
                                            Server
                                        </a>
                                    </p>
                                    <p className="flex items-center gap-1">
                                        <span className="text-2xl text-blue-600">
                                            <FaReact />
                                        </span>
                                        <a className="link-hover" href={project.live} target="_blank">
                                            Live Site
                                        </a>
                                    </p>
                                </div>
                                {/* Technologies */}
                                <div className="flex items-center flex-wrap gap-3 mt-5">
                                    {project?.technologies?.map((skill: { icon: string | undefined; }, index: Key | null | undefined) => (
                                        <img
                                            key={index}
                                            className="w-[24px] sm:w-[30px]"
                                            src={skill.icon}
                                            alt=""
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}  
        
            </div>
        </div>
    )
};

export default Project;