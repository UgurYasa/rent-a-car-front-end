import axiosClient from "@/lib/axios";

export const getRentals = async () => {
  const { data } = await axiosClient.get("/Rentals/getall")
  return data;
};
