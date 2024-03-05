import axiosClient from "@/lib/axios";

export const getCarImages = async () => {
  const { data } = await axiosClient.get("/CarImages/GetAll")
  return data;
};
