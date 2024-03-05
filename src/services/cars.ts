import axiosClient from "@/lib/axios";

export const getCars = async () => {
  const { data } = await axiosClient.get("/Cars/getall")
  return data;
};
