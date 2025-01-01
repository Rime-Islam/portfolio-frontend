'use client'
import { useGetAllSkill } from "@/hooks/skills/skill.hook";


const Skill = () => {
    const {data} = useGetAllSkill()

    return (
        <div>
            <h1 className="text-5xl text-center font-bold ">Creative Works</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 mt-8 lg:mt-12">
 {
    data?.data?.map((item: any) => (
        <div key={item?._id} className="flex items-center bg-white rounded-sm overflow-hidden shadow">
        <div className="border-r-2 ">
        <img className="h-20 w-20" src={item?.icon} alt="profile picture" />
        </div>
        <div className="px-4 text-gray-700">
          <h3 className="text-sm tracking-wider">{item?.skillName}</h3>
        </div>
      </div>
    ))
 }

</div>

        </div>
    )
};

export default Skill;