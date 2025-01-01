"use client"
import { getAllBlog, getSigleBlog } from "@/service/blog";
import { useQuery } from "@tanstack/react-query";

export const useGetAllBlog = () => {
  return useQuery({
    queryKey: ["getAllBlog"],
    queryFn: () => getAllBlog(),
  });
};
export const useGetSingleBlog = (id: any) => {
  return useQuery({
    enabled: !!id,
    queryKey: ["getSingleBlog"],
    queryFn: () => getSigleBlog(id),
  });
};