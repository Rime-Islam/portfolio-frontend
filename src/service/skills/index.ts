import axiosInstance from "@/lib/axios/axios";


export const getAllSkill = async () => {
  try {
    const res = await axiosInstance.get(`/skills`);
    return res.data;
  } catch (error) {
    handleError(error);
  }
};

const handleError = (error: any) => {
  throw new Error(error?.response?.data?.message || error?.message || error);
};