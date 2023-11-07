import axiosClient from "@/lib/axios";

export const getMenu = async () => {
  const { data } = await axiosClient.get("/menu/get/all");
  return data;
};
