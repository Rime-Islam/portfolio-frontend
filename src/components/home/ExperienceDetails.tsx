"use client"
import React from 'react';
import { useGetSignleExprience } from "@/hooks/experience/experience.hook";

const ExperienceDetails = ({ id }: { id: string }) => {
    const { data, isLoading, error } = useGetSignleExprience(id);

    if (isLoading) {
        return <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500" />
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full h-28 w-28"
        />
      </div>;
    }
  
    const experience = data?.data; 
  
    if (!experience) return <p>No experience found</p>;

    return (
        <div className="bg-slate-800 h-screen p-8 text-white flex justify-center items-center">
        <div className="bg-slate-700 rounded-lg shadow-lg p-6 max-w-3xl w-full">
            <h3 className="text-2xl font-bold mb-2">
                {experience.position} at <span className="text-indigo-400">{experience.companyName}</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
                <strong>Employment Type:</strong> {experience.employmentType?.join(', ')}
            </p>
            <p className="text-sm text-gray-400 mb-4">
                <strong>Job Type:</strong> {experience.jobType?.join(', ')}
            </p>
            <p className="text-sm text-gray-400 mb-4">
                <strong>Duration:</strong> {new Date(experience.start).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {experience.end ? new Date(experience.end).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Ongoing"}
            </p>
            <p className="text-sm text-gray-400 mb-2">
                <strong>Description:</strong>
            </p>
            <div className="text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: experience.description }} />
            <p className="text-sm text-gray-400 mb-4">
                <strong>Technologies:</strong> <span className="text-indigo-300">{experience.technologies?.join(', ')}</span>
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                <p>
                    <strong>Created At:</strong> <span className="text-gray-300">{new Date(experience.createdAt).toLocaleString()}</span>
                </p>
                <p>
                    <strong>Last Updated:</strong> <span className="text-gray-300">{new Date(experience.updatedAt).toLocaleString()}</span>
                </p>
            </div>
        </div>
    </div>
    );
};

export default ExperienceDetails;
