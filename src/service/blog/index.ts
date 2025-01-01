"use server"
import axiosInstance from "@/lib/axios/axios";

export const getAllBlog = async () => {
  try {
    const res = await axiosInstance.get(`/blogs`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
export const getSigleBlog = async (id: any) => {
  try {
    const res = await axiosInstance.get(`/blogs/${id}`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: any) => {
  throw new Error(error?.response?.data?.message || error?.message || error);
};