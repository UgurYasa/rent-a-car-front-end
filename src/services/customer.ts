import axiosClient from "@/lib/axios";

export const getCustomer = async () => {
  const { data } = await axiosClient.get("Customers/getall")
  return data;
};
