import axiosClient from "@/lib/axios";
import { Login, Register } from "@/types/auth";

export const login = async ({ email, password }: Login) => {
    return axiosClient.post("/Auth/login", { email, password });
  };
  
  export const createUser = async ({email, password, firstName, lastName}: Register) => {
    return axiosClient.post('/Auth/register', {
      email,
      password,
      firstName,
      lastName,
    })
  }
  