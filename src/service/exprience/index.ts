"use server"
import axiosInstance from "@/lib/axios/axios";

export const getAllExprience = async () => {
  try {
    const res = await axiosInstance.get(`/experiences`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
export const getSingleExprience = async (id: any) => {
  try {
    const res = await axiosInstance.get(`/experiences/${id}`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
const handleError = (error: any) => {
  throw new Error(error?.response?.data?.message || error?.message || error);
};