import { getAllExprience, getSingleExprience } from "@/service/exprience";
import { useQuery } from "@tanstack/react-query";

export const useGetAllExprience = () => {
  return useQuery({
    queryKey: ["getAllExprience"],
    queryFn: () => getAllExprience(),
  });
};
export const useGetSignleExprience = (id: any) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["getSingleExprience"],
    queryFn: () => getSingleExprience(id),
  });
};