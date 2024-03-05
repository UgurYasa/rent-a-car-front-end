import axiosClient from "@/lib/axios";

export const getColor = async () => {
  const { data } = await axiosClient.get("/Colors/getall")
  return data;
};
