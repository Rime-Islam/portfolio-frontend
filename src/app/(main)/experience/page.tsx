"use client"
import { useGetAllExprience } from "@/hooks/experience/experience.hook";
import Link from "next/link";

const Experience = () => {
     const {data, isLoading} = useGetAllExprience();
        const experiences = data?.data;

        const formatDate = (dateString: string) => {
            const date = new Date(dateString);
            return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
          };

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
     <div className="">
           <div className="flex">
            <div className="flex-1">
                <p className="text-gray-400">WORKING WITH</p>
                <h1 className="text-5xl font-bold text-white mt-2"><span className="border-b-4 border-yellow-500">Exp</span>eriences</h1>
            </div>
            
            <div className="flex-1">
                {
                    experiences?.map((data: any) => (
                        <div key={data._id} >
                             <p className="text-gray-400 font-semibold text-lg">
        {formatDate(data.start)} - {data.end ? formatDate(data.end) : "Ongoing"} 
      </p>

                        <Link href={`experience/${data?._id}`}><h3 className="text-3xl text-white my-3">{data.position} </h3> </Link>                       
                        <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: data.description }} />
                        
                      </div>
                    ))
                }
            </div>
        </div>
           <div className="flex mt-8">
            <div className="flex-1">
                <h1 className="text-5xl font-bold text-white mt-2"><span className="border-b-4 border-yellow-500">Edu</span>cation</h1>
            </div>
            
            <div className="flex-1">
                
                
                        <div>
                             <p className="text-gray-400 font-semibold text-lg">Nov 2021 - Ongoing</p>
                        <h3 className="text-3xl text-white my-3">Geography & Environment</h3>                     
                        <p className="text-gray-300">
                        I'm currently pursuing a bachelor's degree in Geography and Environment, where I’m learning how natural systems and human activities are deeply connected. 
                        </p>
                      </div>
                 
                
            </div>
        </div>
     </div>
    )
};
export default Experience;