import axiosClient from "@/lib/axios";

export const getBrand = async () => {
  const { data } = await axiosClient.get("/Brands/getall")
  return data;
};
