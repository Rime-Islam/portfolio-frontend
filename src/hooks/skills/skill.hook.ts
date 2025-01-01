"use client"
import { getAllSkill } from "@/service/skills";
import { useQuery } from "@tanstack/react-query";


export const useGetAllSkill = () => {
  return useQuery({
    queryKey: ["getAllSkill"],
    queryFn: () => getAllSkill(),
  });
};