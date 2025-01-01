"use client"
import { useGetSignleProject } from '@/hooks/projects/project.hook';
import React from 'react';


const ProjectDetails = ({ id }: { id: string }) => {
    const { data, isLoading, error } = useGetSignleProject(id);

    if (isLoading) return <p>Loading...</p>;
  
    const project = data?.data; 
  console.log(project)
    if (!project) return <p>No project found</p>;

    return (
        <div className="bg-gray-900 min-h-screen p-8 text-white flex justify-center items-center">
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <img
            src={project.photo[0]}
            alt={`${project.name} cover`}
            className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-indigo-400 mb-2">{project.name}</h2>
        
        <div className="text-gray-300 mb-6">
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
        <div className="mb-6">
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.features.map((feature: any, index: number) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
        <div className="mb-6">
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Technologies Used</h3>
            <p className="text-gray-300">{project.technologies.length > 0 ? project.technologies.join(', ') : 'N/A'}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg text-center hover:bg-indigo-600 transition"
            >
                Live Demo
            </a>
            <a
                href={project.client}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition"
            >
                Frontend Repo
            </a>
            <a
                href={project.server}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-4 rounded-lg text-center hover:bg-green-600 transition"
            >
                Backend Repo
            </a>
        </div>
    </div>
</div>

    )
};

export default ProjectDetails;