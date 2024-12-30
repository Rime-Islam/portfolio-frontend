import axiosInstance from "@/lib/axios/axios";

export const getAllProject = async () => {
  try {
    const res = await axiosInstance.get(`/projects`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
export const getSingleProject = async (id: any) => {
  try {
    const res = await axiosInstance.get(`/projects/${id}`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
const handleError = (error: any) => {
  throw new Error(error?.response?.data?.message || error?.message || error);
};