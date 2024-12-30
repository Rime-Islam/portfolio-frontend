import { getAllProject, getSingleProject } from "@/service/project";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProject = () => {
  return useQuery({
    queryKey: ["getAllProject"],
    queryFn: () => getAllProject(),
  });
};
export const useGetSignleProject = (id: any) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["getSingleProject"],
    queryFn: () => getSingleProject(id),
  });
};